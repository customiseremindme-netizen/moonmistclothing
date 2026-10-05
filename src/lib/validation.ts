/** Shared enquiry validation — used by the form (client) and the API (server). */
import { enquiry as enquiryContent } from "@/data/content";

export const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel request limit is ~4.5 MB
export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
export const ACCEPT_ATTR = ".jpg,.jpeg,.png,.webp,.pdf";

export type EnquiryFields = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  garmentType: string;
  quantity: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof EnquiryFields | "reference", string>>;

const LIMITS: Record<keyof EnquiryFields, number> = {
  fullName: 120,
  company: 160,
  phone: 30,
  email: 160,
  garmentType: 60,
  quantity: 30,
  message: 3000,
};

export function readFields(form: FormData): EnquiryFields {
  const get = (k: keyof EnquiryFields) => String(form.get(k) ?? "").trim().slice(0, LIMITS[k]);
  return {
    fullName: get("fullName"),
    company: get("company"),
    phone: get("phone"),
    email: get("email"),
    garmentType: get("garmentType"),
    quantity: get("quantity"),
    message: get("message"),
  };
}

export function validateEnquiry(f: EnquiryFields, file?: File | null): FieldErrors {
  const errors: FieldErrors = {};
  if (f.fullName.length < 2) errors.fullName = "Please enter your full name.";
  const digits = f.phone.replace(/\D/g, "");
  if (!f.phone) errors.phone = "Please enter a phone number.";
  else if (digits.length < 8 || digits.length > 15 || !/^[\d\s+()-]+$/.test(f.phone))
    errors.phone = "Please enter a valid phone number.";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email))
    errors.email = "Please enter a valid email address.";
  if (!enquiryContent.garmentTypes.includes(f.garmentType)) errors.garmentType = "Please choose a garment type.";
  if (!enquiryContent.quantities.includes(f.quantity)) errors.quantity = "Please choose an estimated quantity.";
  if (f.message.length < 10) errors.message = "Please describe your requirement (at least 10 characters).";
  if (file && file.size > 0) {
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) errors.reference = "Please upload a JPG, PNG, WEBP or PDF file.";
    else if (file.size > MAX_FILE_BYTES) errors.reference = "File is too large — maximum 4 MB.";
  }
  return errors;
}
