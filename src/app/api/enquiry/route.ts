import { NextResponse } from "next/server";
import { storeEnquiry } from "@/lib/enquiries";
import { readFields, validateEnquiry } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (String(form.get("website") ?? "").length > 0) {
    return NextResponse.json({ ok: true, mode: "demo" });
  }

  const fields = readFields(form);
  const rawFile = form.get("reference");
  const file = rawFile instanceof File && rawFile.size > 0 ? rawFile : null;

  const errors = validateEnquiry(fields, file);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    const result = await storeEnquiry({ ...fields, referenceFileName: file?.name }, file);
    return NextResponse.json({ ok: true, mode: result.mode });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry right now. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
