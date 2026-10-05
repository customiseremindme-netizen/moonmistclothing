/**
 * ============================================================
 *  MOON MIST — BUSINESS DETAILS
 *  Edit this file to change phone, email, WhatsApp, social links,
 *  business hours and the website address. Nothing else needs
 *  to be touched for these updates.
 * ============================================================
 */

export const site = {
  name: "Moon Mist",
  wordmark: "MOON MIST",
  tagline: "Experience the Difference",
  descriptor: "Garment Manufacturing",
  location: {
    city: "Tiruppur",
    region: "Tamil Nadu",
    country: "India",
    countryCode: "IN",
  },

  /**
   * Live website address. Set NEXT_PUBLIC_SITE_URL in Vercel, or change
   * the fallback here once the domain is known.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://moonmistclothing.vercel.app",

  contact: {
    /** Phone as shown on the site, e.g. "+91 98765 43210". */
    phone: "[ADD PHONE]",
    /** WhatsApp number in international format, digits only, e.g. "919876543210". */
    whatsapp: "[ADD WHATSAPP]",
    /** Default message pre-filled when someone opens WhatsApp. */
    whatsappMessage: "Hello Moon Mist, I have an apparel manufacturing requirement.",
    email: "[ADD EMAIL]",
    hours: "Monday – Saturday · 9:00 AM – 7:00 PM",
    /**
     * Google Maps link for the "Get Directions" button.
     * Replace with the exact factory pin link when available.
     */
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Tiruppur%2C%20Tamil%20Nadu%2C%20India",
  },

  social: {
    /** Full Instagram profile URL, e.g. "https://instagram.com/moonmist". Leave "" to hide. */
    instagram: "",
  },

  seo: {
    title: "Garment Manufacturer in Tiruppur | Custom Apparel Manufacturing | Moon Mist",
    description:
      "Moon Mist is a garment manufacturing company in Tiruppur offering custom T-shirts, jerseys, uniforms, private-label apparel and bulk garment production.",
    keywords: [
      "garment manufacturer in Tiruppur",
      "T-shirt manufacturer Tiruppur",
      "custom garment manufacturer",
      "uniform manufacturer Tiruppur",
      "sports jersey manufacturer",
      "private label clothing manufacturer",
      "bulk garment manufacturing",
      "apparel manufacturer Tamil Nadu",
    ],
    ogImage: "/images/01-hero-garment-factory.webp",
  },
} as const;

/* ---------- Helpers (no need to edit below) ---------- */

/** True while a value is still a "[ADD …]" placeholder. */
export const isPlaceholder = (value: string) => !value || /^\[ADD /.test(value);

/** WhatsApp chat link, or the enquiry section while the number is not set. */
export function whatsappHref() {
  const { whatsapp, whatsappMessage } = site.contact;
  if (isPlaceholder(whatsapp)) return "#enquiry";
  return `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
}

export function phoneHref() {
  const { phone } = site.contact;
  return isPlaceholder(phone) ? "#enquiry" : `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function emailHref() {
  const { email } = site.contact;
  return isPlaceholder(email) ? "#enquiry" : `mailto:${email}`;
}

export function instagramHref() {
  return site.social.instagram || "#contact";
}
