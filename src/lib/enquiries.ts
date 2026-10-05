/**
 * Enquiry storage layer (server-side only).
 *
 * - If SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set, enquiries are
 *   inserted into the `enquiries` table (and reference files uploaded to the
 *   private `enquiry-references` storage bucket).
 * - Otherwise the site runs in demo mode: the form is validated but nothing
 *   is stored, and the visitor is told so.
 */
import "server-only";

export type Enquiry = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  garmentType: string;
  quantity: string;
  message: string;
  referenceFileName?: string;
  referencePath?: string;
};

export type StoreResult = { mode: "stored" | "demo" };

const BUCKET = "enquiry-references";

function supabaseEnv() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

export const isStorageConfigured = () => supabaseEnv() !== null;

async function uploadReference(file: File): Promise<string | undefined> {
  const env = supabaseEnv();
  if (!env) return undefined;
  const safeName = file.name.replace(/[^\w.-]+/g, "_").slice(-80);
  const path = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;
  const res = await fetch(`${env.url}/storage/v1/object/${BUCKET}/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.key}`,
      apikey: env.key,
      "Content-Type": file.type || "application/octet-stream",
    },
    body: Buffer.from(await file.arrayBuffer()),
  });
  // A missing bucket should not lose the enquiry itself.
  if (!res.ok) {
    console.error("Reference upload failed", res.status, await res.text().catch(() => ""));
    return undefined;
  }
  return path;
}

export async function storeEnquiry(enquiry: Enquiry, file?: File | null): Promise<StoreResult> {
  const env = supabaseEnv();
  if (!env) return { mode: "demo" };

  const referencePath = file ? await uploadReference(file) : undefined;

  const res = await fetch(`${env.url}/rest/v1/enquiries`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.key}`,
      apikey: env.key,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      full_name: enquiry.fullName,
      company: enquiry.company || null,
      phone: enquiry.phone,
      email: enquiry.email || null,
      garment_type: enquiry.garmentType,
      quantity: enquiry.quantity,
      message: enquiry.message,
      reference_file_name: enquiry.referenceFileName || null,
      reference_path: referencePath || null,
    }),
  });

  if (!res.ok) {
    throw new Error(`Supabase insert failed (${res.status}): ${await res.text().catch(() => "")}`);
  }
  return { mode: "stored" };
}
