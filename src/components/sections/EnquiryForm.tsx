"use client";

import { useRef, useState } from "react";
import { ArrowRight, CircleCheck, LoaderCircle, Paperclip, X } from "lucide-react";
import Overline from "@/components/ui/Overline";
import { enquiry } from "@/data/content";
import { site, isPlaceholder, phoneHref, emailHref, whatsappHref } from "@/config/site";
import { ACCEPT_ATTR, readFields, validateEnquiry, type FieldErrors } from "@/lib/validation";

type Status = "idle" | "sending" | "stored" | "demo" | "error";

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [fileName, setFileName] = useState("");
  const [attempted, setAttempted] = useState(false);

  const currentFile = () => {
    const input = formRef.current?.elements.namedItem("reference") as HTMLInputElement | null;
    return input?.files?.[0] ?? null;
  };

  const check = () => {
    const data = new FormData(formRef.current!);
    const next = validateEnquiry(readFields(data), currentFile());
    setErrors(next);
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);
    setServerError("");
    const found = check();
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: new FormData(formRef.current!) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus(json.mode === "stored" ? "stored" : "demo");
        formRef.current?.reset();
        setFileName("");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerError(json.error || "Please check the highlighted fields and try again.");
      setStatus("error");
    } catch {
      setServerError("Network problem — please try again, or contact us directly.");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrors({});
    setAttempted(false);
  };

  const done = status === "stored" || status === "demo";
  const message = status === "stored" ? enquiry.success : enquiry.demoSuccess;

  return (
    <section
      id="enquiry"
      data-nav-theme="light"
      aria-labelledby="enquiry-title"
      className="bg-ivory py-24 text-ink sm:py-32 lg:py-40"
    >
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Overline>{enquiry.overline}</Overline>
          <h2 id="enquiry-title" data-reveal="lines" className="heading-lg mt-6 lg:text-[clamp(2.2rem,3.6vw,3.4rem)]">
            {enquiry.heading}
          </h2>
          <p data-reveal="fade" className="mt-6 max-w-sm text-base leading-relaxed text-muted">
            {enquiry.copy}
          </p>
          <dl data-reveal="fade" className="mt-10 space-y-4 border-t border-ink/10 pt-8 text-[15px]">
            <ContactRow label="Phone" value={site.contact.phone} href={phoneHref()} />
            <ContactRow label="WhatsApp" value={isPlaceholder(site.contact.whatsapp) ? site.contact.whatsapp : "Chat with us"} href={whatsappHref()} external />
            <ContactRow label="Email" value={site.contact.email} href={emailHref()} />
          </dl>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div aria-live="polite" className="sr-only">
            {done ? message.heading : status === "error" ? serverError : ""}
          </div>

          {done ? (
            <div className="flex min-h-[520px] flex-col justify-center border-t border-ink/15 pt-10">
              <CircleCheck size={40} strokeWidth={1.3} className="text-bronze" aria-hidden="true" />
              <p className="heading-md mt-6 max-w-lg">{message.heading}</p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{message.copy}</p>
              <button type="button" onClick={reset} className="btn btn-outline-dark mt-10 self-start">
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              noValidate
              onSubmit={onSubmit}
              onChange={() => attempted && check()}
              className="relative grid gap-x-8 gap-y-8 sm:grid-cols-2"
            >
              {/* Honeypot — hidden from people, tempting to bots */}
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <Field id="fullName" label="Full Name" required error={errors.fullName}>
                <input id="fullName" name="fullName" type="text" autoComplete="name" className="field" {...aria("fullName", errors)} />
              </Field>
              <Field id="company" label="Company / Organisation">
                <input id="company" name="company" type="text" autoComplete="organization" className="field" />
              </Field>
              <Field id="phone" label="Phone Number" required error={errors.phone}>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" {...aria("phone", errors)} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" name="email" type="email" autoComplete="email" className="field" {...aria("email", errors)} />
              </Field>
              <Field id="garmentType" label="Garment Type" required error={errors.garmentType}>
                <select id="garmentType" name="garmentType" defaultValue="" className="field" {...aria("garmentType", errors)}>
                  <option value="" disabled>
                    Select a garment type
                  </option>
                  {enquiry.garmentTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field id="quantity" label="Estimated Quantity" required error={errors.quantity}>
                <select id="quantity" name="quantity" defaultValue="" className="field" {...aria("quantity", errors)}>
                  <option value="" disabled>
                    Select a quantity
                  </option>
                  {enquiry.quantities.map((q) => (
                    <option key={q}>{q}</option>
                  ))}
                </select>
              </Field>
              <Field id="message" label="Requirement / Message" required error={errors.message} wide>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Garment, fabric, branding, sizes, timeline…"
                  className="field placeholder:text-muted/70"
                  {...aria("message", errors)}
                />
              </Field>

              <div className="sm:col-span-2">
                <span className="field-label" id="reference-label">
                  Upload Reference <span className="normal-case tracking-normal">(optional)</span>
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <label
                    htmlFor="reference"
                    className="btn btn-outline-dark cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-bronze"
                  >
                    <Paperclip size={16} aria-hidden="true" />
                    {fileName ? "Change file" : "Choose file"}
                    <input
                      id="reference"
                      name="reference"
                      type="file"
                      accept={ACCEPT_ATTR}
                      className="sr-only"
                      aria-labelledby="reference-label"
                      aria-describedby="reference-hint reference-error"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                    />
                  </label>
                  {fileName ? (
                    <span className="flex items-center gap-2 text-sm">
                      <span className="max-w-[220px] truncate">{fileName}</span>
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center rounded-full hover:bg-sand"
                        aria-label="Remove file"
                        onClick={() => {
                          const input = formRef.current?.elements.namedItem("reference") as HTMLInputElement;
                          input.value = "";
                          setFileName("");
                          if (attempted) check();
                        }}
                      >
                        <X size={15} aria-hidden="true" />
                      </button>
                    </span>
                  ) : (
                    <span id="reference-hint" className="text-sm text-muted">
                      JPG, PNG, WEBP or PDF · max 4 MB
                    </span>
                  )}
                </div>
                <ErrorText id="reference-error" error={errors.reference} />
              </div>

              <div className="flex flex-col gap-4 border-t border-ink/10 pt-8 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  <span aria-hidden="true">*</span> Required fields
                </p>
                <button type="submit" disabled={status === "sending"} className="btn btn-dark disabled:opacity-70">
                  {status === "sending" ? (
                    <>
                      <LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      {enquiry.submitLabel}
                      <ArrowRight size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
              {status === "error" && serverError && (
                <p role="alert" className="text-sm text-[#a4443a] sm:col-span-2">
                  {serverError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- small helpers ---------- */

function aria(name: keyof FieldErrors, errors: FieldErrors) {
  return {
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  };
}

function Field({
  id,
  label,
  required,
  error,
  wide,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="field-label">
        {label}
        {required && (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      <ErrorText id={`${id}-error`} error={error} />
    </div>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return (
    <p id={id} className={`mt-2 text-sm text-[#a4443a] ${error ? "" : "sr-only"}`}>
      {error}
    </p>
  );
}

function ContactRow({ label, value, href, external }: { label: string; value: string; href: string; external?: boolean }) {
  const isExternal = external && !href.startsWith("#");
  return (
    <div className="flex items-baseline justify-between gap-6">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{label}</dt>
      <dd>
        <a
          href={href}
          className="link-underline"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      </dd>
    </div>
  );
}
