/**
 * ============================================================
 *  MOON MIST — WEBSITE CONTENT
 *  All headings, paragraphs, lists and image choices live here.
 *  Change text in quotes and the website updates — no other
 *  code edits needed. Keep the image file names as they are.
 * ============================================================
 */

/* ---------- Image library (file names must not change) ---------- */

export type SiteImage = { src: string; width: number; height: number; alt: string };

export const images = {
  hero: { src: "/images/01-hero-garment-factory.webp", width: 1920, height: 1080, alt: "Garment factory floor with rows of sewing machines and operators at work" },
  sewingLine: { src: "/images/02-factory-sewing-line.webp", width: 1200, height: 685, alt: "Sewing line with operators stitching garments" },
  fabricRolls: { src: "/images/03-fabric-rolls.webp", width: 1200, height: 779, alt: "Shelves stacked with rolls of fabric in neutral and pastel colours" },
  sampling: { src: "/images/04-sampling.webp", width: 1200, height: 758, alt: "Garment sketches, colour swatches and a sample T-shirt on a design desk" },
  bulkProduction: { src: "/images/05-bulk-production.webp", width: 1200, height: 831, alt: "Team folding and stacking garments during bulk production" },
  qualityCheck: { src: "/images/06-quality-check.webp", width: 1200, height: 862, alt: "Quality inspector examining the stitching of a navy garment" },
  packing: { src: "/images/07-packing.webp", width: 1200, height: 826, alt: "Folded garments being tagged and packed" },
  dispatch: { src: "/images/08-dispatch.webp", width: 1200, height: 842, alt: "Cartons loaded onto a truck for dispatch" },
  tshirts: { src: "/images/09-custom-tshirts.webp", width: 1200, height: 851, alt: "Custom T-shirts in white, grey, navy and olive on hangers" },
  jerseys: { src: "/images/10-sports-jerseys.webp", width: 1200, height: 835, alt: "Custom sports jerseys in blue, black, red and white" },
  schoolUniforms: { src: "/images/11-school-uniforms.webp", width: 1200, height: 821, alt: "School uniform shirts, ties and checked skirts on a rail" },
  corporateUniforms: { src: "/images/12-corporate-uniforms.webp", width: 1200, height: 835, alt: "Corporate polo and shirt uniforms in white, grey and black" },
  privateLabel: { src: "/images/13-private-label.webp", width: 1200, height: 688, alt: "Folded private-label garments with branded tags and a kraft box" },
  embroidery: { src: "/images/14-embroidery-detail.webp", width: 1200, height: 786, alt: "Embroidery machine stitching a gold monogram onto dark fabric" },
  printing: { src: "/images/15-printing-process.webp", width: 1200, height: 975, alt: "Direct-to-garment printer applying a colourful print to a white T-shirt" },
  tags: { src: "/images/16-garment-tags.webp", width: 1200, height: 964, alt: "Moon Mist neck label and swing tag on a grey garment" },
  folded: { src: "/images/17-folded-garments.webp", width: 1200, height: 1195, alt: "Stacks of neatly folded garments in white, grey and navy" },
  fabricTexture: { src: "/images/18-fabric-texture.webp", width: 1200, height: 1195, alt: "Close-up of grey, navy and white knitted fabric texture" },
  trims: { src: "/images/19-trims-accessories.webp", width: 1200, height: 964, alt: "Trims and accessories: thread, buttons, zips and woven labels" },
  packaging: { src: "/images/20-packaging-detail.webp", width: 1200, height: 1087, alt: "Garment in a protective sleeve with a swing tag inside a carton" },
} satisfies Record<string, SiteImage>;

/* ---------- Navigation ---------- */

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export const navCta = { label: "Start a Project", href: "#enquiry" };

/* ---------- Preloader ---------- */

export const preloader = { title: "MOON MIST", subtitle: "GARMENT MANUFACTURING" };

/* ---------- Hero ---------- */

export const hero = {
  overline: "GARMENT MANUFACTURING · TIRUPPUR",
  headingLines: ["Made With Precision.", "Built For Brands."],
  copy: "From concept and sampling to bulk production, quality control and dispatch, Moon Mist delivers reliable garment manufacturing for brands, businesses and institutions.",
  primaryCta: { label: "Explore Our Capabilities", href: "#capabilities" },
  secondaryCta: { label: "Start Your Order", href: "#enquiry" },
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
  heading: "Manufacturing Apparel That Represents Your Brand.",
  paragraphs: [
    "Moon Mist is a garment manufacturing company from Tiruppur focused on quality, consistency and dependable production. We help businesses transform their apparel requirements into professionally manufactured garments — from the first sample to final dispatch.",
    "Whether you require uniforms, promotional apparel, jerseys, custom T-shirts or private-label garments, our production process is designed to make ordering simple, transparent and reliable.",
  ],
  cta: { label: "About Moon Mist", href: "#why" },
  images: [images.sewingLine, images.fabricRolls],
};

/* ---------- Capabilities ---------- */

export const capabilities = {
  overline: "WHAT WE DO",
  heading: "From Fabric to Finished Garment.",
  intro: "Every stage, from first sample to final finish, handled with the same care and the same standard.",
  items: [
    {
      title: "Sampling & Development",
      copy: "We transform ideas, references and specifications into production-ready samples before bulk manufacturing begins.",
      images: [images.sampling],
    },
    {
      title: "Fabric & Material Guidance",
      copy: "Choose suitable fabrics, GSM, trims, colours and finishes based on the garment's purpose, budget and required feel.",
      images: [images.fabricRolls],
    },
    {
      title: "Custom Manufacturing",
      copy: "Flexible manufacturing for custom T-shirts, jerseys, uniforms, corporate apparel and branded garments.",
      images: [images.sewingLine],
    },
    {
      title: "Bulk Production",
      copy: "Structured production planning helps maintain consistency across larger quantities and repeat orders.",
      images: [images.bulkProduction],
    },
    {
      title: "Branding & Finishing",
      copy: "Support for printing, embroidery, labels, tags, packing requirements and brand-specific garment details.",
      images: [images.embroidery, images.printing, images.tags],
    },
    {
      title: "Quality Control",
      copy: "Garments are checked throughout production and again before packing to maintain quality and consistency.",
      images: [images.qualityCheck],
    },
  ],
};

/* ---------- Products (horizontal scroll) ---------- */

export const products = {
  overline: "WHAT WE MANUFACTURE",
  heading: "Garments Made for Different Requirements.",
  intro: "Versatile production solutions for businesses, institutions, teams and apparel brands.",
  items: [
    { title: "Custom T-Shirts", copy: "Custom-made T-shirts for brands, events, organisations and promotional requirements.", image: images.tshirts },
    { title: "Sports Jerseys", copy: "Performance-focused jerseys and team apparel with custom colours, graphics and branding.", image: images.jerseys },
    { title: "School Uniforms", copy: "Comfortable and durable uniform manufacturing for schools and educational institutions.", image: images.schoolUniforms },
    { title: "Corporate Uniforms", copy: "Professional uniform solutions for companies, hospitality teams, retail staff and organisations.", image: images.corporateUniforms },
    { title: "Private Label Apparel", copy: "Garment production for clothing brands looking to manufacture designs under their own label.", image: images.privateLabel },
    { title: "Custom Requirements", copy: "Share your garment, branding, trim and quantity requirements and our team can evaluate the right manufacturing approach.", image: images.trims },
  ],
  ctaHeading: "Have something specific in mind?",
  cta: { label: "Discuss a Requirement", href: "#enquiry" },
};

/* ---------- Featured garment story ---------- */

export const story = {
  overline: "THE GARMENT STORY",
  /** Read by screen readers and search engines only. */
  hiddenHeading: "The garment story — from requirement to delivery",
  stages: [
    { title: "Designed Around Your Requirement.", copy: "Every order starts with your purpose — the wearer, the occasion, the quantity and the finish you expect.", image: images.tshirts },
    { title: "Attention to Every Detail.", copy: "Logos, monograms and fine branding are executed with care, so the small things look considered.", image: images.embroidery },
    { title: "The Right Fabric. The Right Feel.", copy: "Fabric, GSM and knit are chosen for how the garment needs to wear, wash and feel.", image: images.fabricTexture },
    { title: "Built Around Your Brand.", copy: "Prints, labels and tags carry your identity through to the finished piece.", image: images.printing },
    { title: "Ready for Delivery.", copy: "Garments are finished, packed to your requirement and prepared for dispatch.", image: images.packaging },
  ],
};

/* ---------- Manufacturing process ---------- */

export const process = {
  overline: "HOW WE WORK",
  heading: "A Clear Process. From Sample to Dispatch.",
  stages: [
    { title: "Sampling", copy: "We develop the initial garment sample based on your design, references, size specifications and material requirements.", image: images.sampling },
    { title: "Order Confirmation & BOM", copy: "Once the sample and specifications are approved, quantities, colours, materials, trims and Bill of Materials are confirmed for production.", image: images.trims },
    { title: "Bulk Production", copy: "The approved garment moves into planned bulk manufacturing with production tracking and consistency checks.", image: images.bulkProduction },
    { title: "Quality Assurance", copy: "Stitching, measurements, finishing, branding and garment quality are inspected before packing.", image: images.qualityCheck },
    { title: "Packing", copy: "Finished garments are folded, labelled and packed according to the agreed packing requirements.", image: images.packing },
    { title: "Dispatch", copy: "Completed orders are prepared for dispatch and delivered through the agreed logistics arrangement.", image: images.dispatch },
  ],
};

/* ---------- Cinematic factory story ---------- */

export const factoryStory = {
  overline: "INSIDE PRODUCTION",
  heading: "Where Craft Meets Production.",
  copy: "Behind every finished garment is a sequence of decisions — fabric selection, pattern, stitching, finishing and inspection. Our focus is to make each step dependable enough to repeat at scale.",
  image: images.sewingLine,
};

/* ---------- Quality ---------- */

export const quality = {
  overline: "QUALITY MATTERS",
  heading: "Consistency Isn't an Extra. It's Part of the Process.",
  image: images.qualityCheck,
  checks: [
    { title: "Material Check", copy: "Fabric and components are reviewed before production." },
    { title: "Measurement Check", copy: "Garments are checked against approved sizing and specifications." },
    { title: "Stitching & Finishing", copy: "Construction, seams and finishing details are inspected." },
    { title: "Branding Check", copy: "Prints, embroidery, labels and visual details are reviewed for consistency." },
    { title: "Final Inspection", copy: "Finished garments are checked before packing and dispatch." },
  ],
};

/* ---------- Who we manufacture for ---------- */

export const audiences = {
  overline: "WHO WE MANUFACTURE FOR",
  heading: "Built for Different Businesses.",
  items: [
    { title: "Clothing Brands", copy: "Private-label and custom apparel manufacturing.", image: images.privateLabel },
    { title: "Schools", copy: "Uniform manufacturing for educational institutions.", image: images.schoolUniforms },
    { title: "Sports Teams", copy: "Custom jerseys and team apparel.", image: images.jerseys },
    { title: "Corporates", copy: "Professional staff and corporate uniforms.", image: images.corporateUniforms },
    { title: "Hospitality", copy: "Uniform solutions for hotels, restaurants and service teams.", image: images.folded },
    { title: "Events & Organisations", copy: "Bulk apparel for campaigns, events and organisations.", image: images.tshirts },
  ],
};

/* ---------- Why Moon Mist ---------- */

export const why = {
  overline: "WHY MOON MIST",
  heading: "A Manufacturing Partner, Not Just a Supplier.",
  principles: [
    { title: "Flexible Production", copy: "We work with different garment categories and business requirements." },
    { title: "Quality Focus", copy: "Attention is given to fabric, construction, finishing and consistency." },
    { title: "Clear Communication", copy: "Requirements and production expectations are discussed before manufacturing begins." },
    { title: "Reliable Process", copy: "Sampling, confirmation, production, inspection, packing and dispatch follow a structured workflow." },
  ],
};

/* ---------- Gallery ---------- */

export const gallery = {
  overline: "IN DETAIL",
  heading: "Materials, Methods and Finishing.",
  items: [
    images.fabricRolls,
    images.embroidery,
    images.printing,
    images.tags,
    images.folded,
    images.fabricTexture,
    images.trims,
    images.packaging,
    images.sewingLine,
    images.bulkProduction,
  ],
};

/* ---------- Large CTA ---------- */

export const bigCta = {
  overline: "Have an Apparel Requirement?",
  statement: "Let's Manufacture It the Right Way.",
  copy: "Tell us what you need, your expected quantity, garment type and timeline. Our team will help you understand the next steps.",
  primary: { label: "Start an Enquiry", href: "#enquiry" },
  secondary: { label: "WhatsApp Us" },
  image: images.folded,
};

/* ---------- Enquiry form ---------- */

export const enquiry = {
  overline: "START A PROJECT",
  heading: "Tell Us About Your Requirement.",
  copy: "Share a few details and our team will get back to you to discuss sampling, quantities and timelines.",
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
    copy: "Enquiry storage is not connected yet, so this message was not saved. Please contact us directly using the details below.",
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
