/**
 * ============================================================
 *  MOON MIST — WEBSITE CONTENT
 *  All headings, paragraphs, lists and image choices live here.
 *  Change text in quotes and the website updates — no other
 *  code edits needed. Keep the image file names as they are.
 * ============================================================
 */

/* ---------- Image library (file names must not change) ---------- */

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** CSS object-position — which part of the photo stays in frame when cropped. */
  position?: string;
};

export const images = {
  hero: {
    src: "/images/01-hero-garment-factory.webp",
    width: 1672,
    height: 941,
    alt: "Sewing operator stitching a black garment on the Moon Mist production floor",
    position: "40% 45%",
  },
  craftsmanship: {
    src: "/images/02-atelier-focused-craftsmanship.webp",
    width: 1448,
    height: 1086,
    alt: "Machinist guiding a black garment through an industrial sewing machine",
    position: "55% 40%",
  },
  textiles: {
    src: "/images/03-textile-atelier-fabric-rolls.webp",
    width: 1448,
    height: 1086,
    alt: "Shelves of knitted fabric rolls in black, charcoal, grey and natural tones",
    position: "60% 50%",
  },
  bulkProduction: {
    src: "/images/04-bulk-production-folding-station.webp",
    width: 1448,
    height: 1086,
    alt: "Team folding and stacking finished T-shirts at a production table",
    position: "60% 45%",
  },
  qualityInspection: {
    src: "/images/05-quality-collar-inspection.webp",
    width: 1448,
    height: 1086,
    alt: "Close inspection of a polo collar, label and stitching",
    position: "50% 45%",
  },
  dispatch: {
    src: "/images/06-dispatch-loading-dock.webp",
    width: 1448,
    height: 1086,
    alt: "Branded cartons on a pallet being moved onto a truck at the loading dock",
    position: "45% 50%",
  },
  designStudio: {
    src: "/images/07-activewear-design-studio.webp",
    width: 1448,
    height: 1086,
    alt: "Designer sketching activewear with fabric swatches and a measuring tape",
    position: "55% 50%",
  },
  tshirtDisplay: {
    src: "/images/08-minimalist-studio-display.webp",
    width: 1448,
    height: 1086,
    alt: "Moon Mist T-shirts in ivory, sand, navy, black and grey on a display rail",
    position: "50% 45%",
  },
  privateLabel: {
    src: "/images/09-luxury-apparel-flatlay.webp",
    width: 1448,
    height: 1086,
    alt: "Folded T-shirts with woven neck label, swing tag and branded box",
    position: "40% 50%",
  },
  packing: {
    src: "/images/10-apparel-packing-studio.webp",
    width: 1448,
    height: 1086,
    alt: "Finished garments being sleeved, tagged and packed",
    position: "55% 50%",
  },
} satisfies Record<string, SiteImage>;

/** Supplied brand logos — used as files, never redrawn. */
export const logos = {
  /** White wordmark on transparent background (auto-darkened on light backgrounds). */
  wordmark: { src: "/brand/moonmist-logo-wordmark-horizontal.png", width: 2048, height: 252 },
  icon: { src: "/brand/moonmist-logo-icon.png", width: 134, height: 134 },
  square: { src: "/brand/moonmist-logo-square.png", width: 512, height: 512 },
};

/* ---------- Navigation ---------- */

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export const navCta = { label: "Start a Project", href: "#enquiry" };

/* ---------- Preloader ---------- */

export const preloader = { subtitle: "GARMENT MANUFACTURING · TIRUPPUR" };

/* ---------- Hero ---------- */

export const hero = {
  overline: "GARMENT MANUFACTURING · TIRUPPUR",
  headingLines: ["Made With Precision.", "Built For Brands."],
  copy: "A Tiruppur garment manufacturer producing custom and private-label apparel — from first sample to bulk production, inspection and dispatch.",
  primaryCta: { label: "Explore Capabilities", href: "#capabilities" },
  secondaryCta: { label: "Start a Project", href: "#enquiry" },
  microcopy: "Tiruppur · Tamil Nadu · India",
  scrollCue: "SCROLL TO DISCOVER",
  image: images.hero,
};

/* ---------- Marquee ---------- */

export const marqueeItems = [
  "CUSTOM APPAREL",
  "BULK PRODUCTION",
  "PRIVATE LABEL",
  "CORPORATE UNIFORMS",
  "SCHOOL UNIFORMS",
  "SPORTSWEAR",
  "T-SHIRTS",
  "JERSEYS",
  "CUT & SEW",
];

/* ---------- About ---------- */

export const about = {
  overline: "WHO WE ARE",
  heading: "Precise Work, Repeated Consistently.",
  paragraphs: [
    "Moon Mist is a garment manufacturer in Tiruppur. We turn apparel requirements into finished garments for brands, businesses and institutions — with the same care on every piece.",
    "Our work is built on careful sampling, clear specifications and disciplined production, so what you approve is what you receive.",
  ],
  points: ["Sampling to dispatch under one roof", "Clear specifications before production", "Inspection at every stage"],
  cta: { label: "How we work", href: "#process" },
  image: images.craftsmanship,
  caption: "Stitching on the production floor, Tiruppur",
};

/* ---------- Capabilities ---------- */

export const capabilities = {
  overline: "WHAT WE DO",
  heading: "From Fabric to Finished Garment.",
  intro: "One partner for every stage of production, so nothing is lost between suppliers.",
  items: [
    {
      title: "Sampling & Development",
      copy: "We turn designs, references and specifications into production-ready samples before bulk manufacturing begins.",
    },
    {
      title: "Fabric & Material Guidance",
      copy: "Fabrics, GSM, trims, colours and finishes chosen for the garment's purpose, budget and feel.",
    },
    {
      title: "Custom Manufacturing",
      copy: "Cut-and-sew production for T-shirts, jerseys, uniforms, corporate apparel and branded garments.",
    },
    {
      title: "Bulk Production",
      copy: "Planned production that keeps quality consistent across large quantities and repeat orders.",
    },
    {
      title: "Branding & Finishing",
      copy: "Printing, embroidery, woven labels, swing tags and brand-specific packing.",
    },
    {
      title: "Quality Control",
      copy: "Garments are checked during production and again before packing.",
    },
  ],
};

/* ---------- Textiles / materials ---------- */

export const materials = {
  overline: "TEXTILES & MATERIALS",
  heading: "The Right Fabric Is the First Decision.",
  copy: "Fabric sets how a garment drapes, wears and washes. We help you choose the right composition, GSM and finish for its purpose, then confirm materials before anything is cut.",
  points: [
    { title: "Fabric selection", copy: "Composition, knit and GSM matched to use and budget." },
    { title: "Material quality", copy: "Fabric and trims reviewed before they enter production." },
    { title: "Sourcing", copy: "Materials sourced to approved shades and specifications." },
    { title: "Production readiness", copy: "Everything confirmed and in place before cutting begins." },
  ],
  image: images.textiles,
};

/* ---------- Products (horizontal scroll) ---------- */

export const products = {
  overline: "WHAT WE MANUFACTURE",
  heading: "Garments Made for Different Requirements.",
  intro: "Production for businesses, institutions, teams and apparel brands.",
  items: [
    { title: "Custom T-Shirts", copy: "T-shirts for brands, events, organisations and promotions, in your choice of fabric, fit and colour.", image: images.tshirtDisplay },
    { title: "Sports Jerseys", copy: "Team and activewear garments with custom colours, graphics and branding.", image: images.designStudio },
    { title: "School Uniforms", copy: "Comfortable, durable uniforms for schools and educational institutions.", image: images.bulkProduction },
    { title: "Corporate Uniforms", copy: "Polos, shirts and staff wear for companies, hospitality and retail teams.", image: images.qualityInspection },
    { title: "Private Label Apparel", copy: "Garments made to your designs and finished under your own label, tags and packaging.", image: images.privateLabel },
    { title: "Custom Orders", copy: "Tell us your garment, branding and quantity, and we'll work out the right way to make it.", image: images.packing },
  ],
  ctaHeading: "Have something specific in mind?",
  cta: { label: "Discuss a Requirement", href: "#enquiry" },
};

/* ---------- Manufacturing process ---------- */

export const process = {
  overline: "HOW WE WORK",
  heading: "A Clear Process. From Sample to Dispatch.",
  stages: [
    { title: "Sampling", copy: "We develop the first sample from your design, references, size specifications and material requirements.", image: images.designStudio },
    { title: "Approval & BOM", copy: "Once the sample is approved, quantities, colours, materials, trims and the Bill of Materials are confirmed in writing.", image: images.privateLabel },
    { title: "Production Planning", copy: "The approved garment is scheduled into bulk production, with tracking and consistency checks along the line.", image: images.craftsmanship },
    { title: "Quality Assurance", copy: "Stitching, measurements, finishing and branding are inspected before packing.", image: images.qualityInspection },
    { title: "Packing", copy: "Finished garments are folded, tagged and packed to the agreed packing requirements.", image: images.packing },
    { title: "Dispatch", copy: "Cartons are labelled, loaded and sent through the agreed logistics arrangement.", image: images.dispatch },
  ],
};

/* ---------- Bulk production feature ---------- */

export const bulk = {
  overline: "BULK PRODUCTION",
  heading: "Where Craft Meets Production.",
  copy: "Large orders are planned, sewn, folded and finished in organised batches. Every stage is checked against the approved sample, so the last garment matches the first.",
  points: ["Planned production runs", "Folding & finishing", "Batch consistency checks"],
  image: images.bulkProduction,
};

/* ---------- Quality ---------- */

export const quality = {
  overline: "QUALITY MATTERS",
  heading: "Consistency Isn't an Extra. It's Part of the Process.",
  image: images.qualityInspection,
  checks: [
    { title: "Material Check", copy: "Fabric and components are reviewed before production." },
    { title: "Stitching Check", copy: "Seams, construction and finishing details are inspected." },
    { title: "Measurement Check", copy: "Garments are checked against approved sizing and specifications." },
    { title: "Branding Check", copy: "Prints, embroidery, labels and tags are reviewed for consistency." },
    { title: "Final Inspection", copy: "Finished garments are checked again before packing and dispatch." },
  ],
};

/* ---------- Why Moon Mist ---------- */

export const why = {
  overline: "WHY MOON MIST",
  heading: "A Manufacturing Partner, Not Just a Supplier.",
  principles: [
    { title: "Flexible Production", copy: "We work across garment categories and order types." },
    { title: "Quality Focus", copy: "Close attention to fabric, construction, finishing and consistency." },
    { title: "Clear Communication", copy: "Requirements and expectations agreed before manufacturing begins." },
    { title: "Reliable Process", copy: "Sampling, approval, production, inspection, packing and dispatch follow a set workflow." },
  ],
  audiencesTitle: "We manufacture for",
  audiences: ["Clothing brands", "Schools", "Sports teams", "Corporates", "Hospitality", "Events & organisations"],
};

/* ---------- Gallery ---------- */

export const gallery = {
  overline: "INSIDE MOON MIST",
  heading: "From the Floor to the Finished Box.",
  items: [
    images.craftsmanship,
    images.textiles,
    images.designStudio,
    images.qualityInspection,
    images.tshirtDisplay,
    images.privateLabel,
    images.packing,
  ],
};

/* ---------- Large CTA ---------- */

export const bigCta = {
  overline: "Have an apparel requirement?",
  statement: "Let's Manufacture It the Right Way.",
  copy: "Tell us the garment, expected quantity and timeline. We'll come back with the next steps.",
  primary: { label: "Start an Enquiry", href: "#enquiry" },
  secondary: { label: "WhatsApp Us" },
  image: images.dispatch,
};

/* ---------- Enquiry form ---------- */

export const enquiry = {
  overline: "START A PROJECT",
  heading: "Tell Us About Your Requirement.",
  copy: "Share a few details and our team will contact you to discuss sampling, quantities and timelines.",
  whatsappPrompt: "Prefer to chat?",
  whatsappLabel: "Message us on WhatsApp",
  garmentTypes: [
    "T-Shirts",
    "Sports Jerseys",
    "School Uniforms",
    "Corporate Uniforms",
    "Private Label Apparel",
    "Hospitality Uniforms",
    "Custom Requirement",
  ],
  quantities: ["Below 100", "100–500", "500–1,000", "1,000–5,000", "5,000+"],
  submitLabel: "Send Enquiry",
  success: {
    heading: "Thank you — your enquiry has been received.",
    copy: "Our team will review your requirement and contact you shortly.",
  },
  demoSuccess: {
    heading: "Form checked successfully — demo mode.",
    copy: "Enquiry storage is not connected yet, so this message was not saved. Please contact us directly using the details on this page.",
  },
};

/* ---------- Contact & footer ---------- */

export const contact = {
  overline: "CONTACT",
  heading: "Visit, Call or Write to Us.",
  directionsLabel: "Get Directions",
};

export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Process", href: "#process" },
        { label: "Quality", href: "#quality" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "T-Shirts", href: "#products" },
        { label: "Jerseys", href: "#products" },
        { label: "Uniforms", href: "#products" },
        { label: "Private Label", href: "#products" },
      ],
    },
  ],
  connectTitle: "Connect",
  copyright: "© 2026 Moon Mist. All Rights Reserved.",
};
