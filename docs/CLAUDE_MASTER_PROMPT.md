# CLAUDE CODE MASTER PROMPT — MOON MIST GARMENT MANUFACTURING WEBSITE

You are a senior creative director, UI/UX designer, motion designer, and frontend engineer. Build a complete, production-ready premium website for **Moon Mist**, a garment manufacturing company in Tiruppur, Tamil Nadu, India.

## Business identity

- Brand: **MOON MIST**
- Tagline: **Experience the Difference**
- Business type: B2B garment manufacturing
- Location: Tiruppur, Tamil Nadu, India
- Primary goal: generate qualified enquiries from clothing brands, schools, sports teams, companies, hotels, institutions, retailers, and organizations that need custom or bulk garment manufacturing.
- This is **not** an e-commerce store. Do not create cart, checkout, retail product pricing, or consumer shopping flows.

## Non-negotiable build philosophy

The site must feel custom, cinematic, refined, and modern — closer to a premium Awwwards-style manufacturing/brand website than a normal local-company template. Use motion with restraint. Every animation must support storytelling or hierarchy; avoid random motion, generic gradient blobs, excessive glassmorphism, neon styling, and repetitive rounded-card UI.

The user is not a coder and will maintain this project later through Claude. Therefore:

1. Keep the codebase clean and modular.
2. Put editable business copy, phone, email, WhatsApp, nav items, product categories and social links into a single easy-to-edit data/config file.
3. Comment only the important areas.
4. Never require manual code edits for normal content changes if a central data file can handle them.
5. Ensure `npm install`, `npm run dev`, and `npm run build` work without hidden steps.
6. Make the repository Vercel-ready from the first commit.

## Supplied image assets

The uploaded asset folder contains these exact files. Use them intentionally; do not replace them with random stock imagery unless a file is unusable.

- `/public/images/01-hero-garment-factory.webp`
- `/public/images/02-factory-sewing-line.webp`
- `/public/images/03-fabric-rolls.webp`
- `/public/images/04-sampling.webp`
- `/public/images/05-bulk-production.webp`
- `/public/images/06-quality-check.webp`
- `/public/images/07-packing.webp`
- `/public/images/08-dispatch.webp`
- `/public/images/09-custom-tshirts.webp`
- `/public/images/10-sports-jerseys.webp`
- `/public/images/11-school-uniforms.webp`
- `/public/images/12-corporate-uniforms.webp`
- `/public/images/13-private-label.webp`
- `/public/images/14-embroidery-detail.webp`
- `/public/images/15-printing-process.webp`
- `/public/images/16-garment-tags.webp`
- `/public/images/17-folded-garments.webp`
- `/public/images/18-fabric-texture.webp`
- `/public/images/19-trims-accessories.webp`
- `/public/images/20-packaging-detail.webp`

Do not rename these assets.

## Tech stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Framer Motion only for lightweight UI transitions if useful
- Lucide React icons
- Next/Image

Do **not** add Three.js in the first build unless there is a meaningful, lightweight reason. The supplied asset pack is image-based, so create the premium visual experience using image transforms, masking, pinning, horizontal scroll, parallax, sticky layouts and GSAP rather than forcing fake 3D.

If later a real GLB garment/factory model is supplied, structure the hero/showcase code so an R3F scene could be added without rewriting the site.

## Visual system

### Palette

- Ink: `#111111`
- Warm ivory: `#F5F3EE`
- Secondary warm neutral: `#E8E4DC`
- Deep section: `#171A18`
- Main text: `#181818`
- Muted text: `#77736C`
- Bronze accent: `#A88A5B`
- White: `#FFFFFF`

Avoid bright accents.

### Typography

Use a premium editorial combination via `next/font`.

Recommended:
- Primary sans: Manrope or Instrument Sans
- Optional editorial serif accent: Cormorant Garamond or Playfair Display

Use large tightly tracked headings, smaller readable body copy, and small widely tracked uppercase overlines. Do not make every heading uppercase.

## Global UX

### Navigation

Create a premium fixed navigation:

- Left: MOON MIST wordmark
- Centre desktop: Home / About / Capabilities / Products / Process / Quality / Contact
- Right: `Start a Project` CTA
- At hero: transparent
- After scroll: subtle translucent ivory or dark treatment depending on section with blur and a fine border
- Mobile: full-screen menu with smooth open/close transition

### Smooth scrolling

Initialize Lenis and synchronize it properly with GSAP ScrollTrigger. Respect `prefers-reduced-motion` and provide a non-scrubbed fallback.

### Animation language

Use one coherent system:

- masked heading line reveals
- subtle `y` transitions around 30–60px
- image clip-path or overflow reveals
- image parallax around 5–10%
- section pinning only where it adds value
- horizontal scroll for product categories
- progress-line animation for manufacturing process
- elegant hover scale around 1.02
- no bouncing gimmicks

Use `power3.out` / `power4.out` for most reveals. Avoid animation on every single small item.

## Page architecture and copy

### 1. PRELOADER

Short premium loader, maximum around 1–1.5 seconds after assets are ready.

Dark background.

Text:

`MOON MIST`

`GARMENT MANUFACTURING`

Add a thin progress line. End with a smooth clip/curtain reveal. Never create a long fake loading animation.

### 2. CINEMATIC HERO

Use `/images/01-hero-garment-factory.webp`.

Full-screen opening with strong image treatment.

Overline:
`GARMENT MANUFACTURING · TIRUPPUR`

H1:
`Made With Precision. Built For Brands.`

Supporting copy:
`From concept and sampling to bulk production, quality control and dispatch, Moon Mist delivers reliable garment manufacturing for brands, businesses and institutions.`

Primary CTA:
`Explore Our Capabilities`

Secondary CTA:
`Start Your Order`

Bottom-left microcopy:
`Tiruppur · Tamil Nadu · India`

Bottom-right:
`SCROLL TO DISCOVER ↓`

Hero behavior:
- image starts around scale 1.05–1.08 and gently resolves toward 1
- headline drifts upward slightly
- copy fades as the user leaves the hero
- on desktop, hero image can transition into a contained rounded frame before the next section
- do not make the hero animation heavy on mobile

### 3. MARQUEE STRIP

Slow continuous strip:

`CUSTOM APPAREL • BULK PRODUCTION • PRIVATE LABEL • CORPORATE UNIFORMS • SCHOOL UNIFORMS • SPORTSWEAR • T-SHIRTS • JERSEYS • CUT & SEW`

Ivory background, dark text, refined spacing.

### 4. ABOUT

Editorial asymmetric composition using:
- `/images/02-factory-sewing-line.webp`
- `/images/03-fabric-rolls.webp`

Overline:
`WHO WE ARE`

Heading:
`Manufacturing Apparel That Represents Your Brand.`

Copy paragraph 1:
`Moon Mist is a garment manufacturing company from Tiruppur focused on quality, consistency and dependable production. We help businesses transform their apparel requirements into professionally manufactured garments — from the first sample to final dispatch.`

Copy paragraph 2:
`Whether you require uniforms, promotional apparel, jerseys, custom T-shirts or private-label garments, our production process is designed to make ordering simple, transparent and reliable.`

CTA:
`About Moon Mist →`

Use subtle parallax and staggered image composition.

### 5. CAPABILITIES

Dark section.

Overline:
`WHAT WE DO`

Heading:
`From Fabric to Finished Garment.`

Create six refined capability items. Alternate text and supporting imagery rather than six identical cards.

1. **Sampling & Development**
   `We transform ideas, references and specifications into production-ready samples before bulk manufacturing begins.`
   Image: `/images/04-sampling.webp`

2. **Fabric & Material Guidance**
   `Choose suitable fabrics, GSM, trims, colours and finishes based on the garment's purpose, budget and required feel.`
   Image: `/images/03-fabric-rolls.webp`

3. **Custom Manufacturing**
   `Flexible manufacturing for custom T-shirts, jerseys, uniforms, corporate apparel and branded garments.`
   Image: `/images/02-factory-sewing-line.webp`

4. **Bulk Production**
   `Structured production planning helps maintain consistency across larger quantities and repeat orders.`
   Image: `/images/05-bulk-production.webp`

5. **Branding & Finishing**
   `Support for printing, embroidery, labels, tags, packing requirements and brand-specific garment details.`
   Images: `/images/14-embroidery-detail.webp`, `/images/15-printing-process.webp`, `/images/16-garment-tags.webp`

6. **Quality Control**
   `Garments are checked throughout production and again before packing to maintain quality and consistency.`
   Image: `/images/06-quality-check.webp`

### 6. PRODUCT CATEGORIES — HORIZONTAL SCROLL

Warm ivory section.

Overline:
`WHAT WE MANUFACTURE`

Heading:
`Garments Made for Different Requirements.`

Intro:
`Versatile production solutions for businesses, institutions, teams and apparel brands.`

Create a pinned desktop horizontal-scroll gallery with large image-led cards. On mobile, turn it into an accessible vertical stack or swipeable carousel; do not preserve desktop pinning if it harms usability.

Categories:

- **Custom T-Shirts** — `/images/09-custom-tshirts.webp`
  `Custom-made T-shirts for brands, events, organisations and promotional requirements.`

- **Sports Jerseys** — `/images/10-sports-jerseys.webp`
  `Performance-focused jerseys and team apparel with custom colours, graphics and branding.`

- **School Uniforms** — `/images/11-school-uniforms.webp`
  `Comfortable and durable uniform manufacturing for schools and educational institutions.`

- **Corporate Uniforms** — `/images/12-corporate-uniforms.webp`
  `Professional uniform solutions for companies, hospitality teams, retail staff and organisations.`

- **Private Label Apparel** — `/images/13-private-label.webp`
  `Garment production for clothing brands looking to manufacture designs under their own label.`

- **Custom Requirements** — use `/images/19-trims-accessories.webp`
  `Share your garment, branding, trim and quantity requirements and our team can evaluate the right manufacturing approach.`

### 7. FEATURED GARMENT STORY

Create a premium scroll-controlled storytelling section without fake 3D. Use sticky layout, image switching, image crop/scale transitions and text changes.

Use these stages:

1. `/images/09-custom-tshirts.webp`
   `Designed Around Your Requirement.`

2. `/images/14-embroidery-detail.webp`
   `Attention to Every Detail.`

3. `/images/18-fabric-texture.webp`
   `The Right Fabric. The Right Feel.`

4. `/images/15-printing-process.webp`
   `Built Around Your Brand.`

5. `/images/20-packaging-detail.webp`
   `Ready for Delivery.`

On desktop, keep the active visual sticky while the copy scrolls through stages. Use crossfades/clip transitions, not hard image cuts.

### 8. MANUFACTURING PROCESS

This section is critical.

Overline:
`HOW WE WORK`

Heading:
`A Clear Process. From Sample to Dispatch.`

Create an animated vertical progress line on desktop and mobile, but make desktop more editorial with image panels changing as stages activate.

Stages:

1. **Sampling**
   `We develop the initial garment sample based on your design, references, size specifications and material requirements.`
   Image: `/images/04-sampling.webp`

2. **Order Confirmation & BOM**
   `Once the sample and specifications are approved, quantities, colours, materials, trims and Bill of Materials are confirmed for production.`
   Image: `/images/19-trims-accessories.webp`

3. **Bulk Production**
   `The approved garment moves into planned bulk manufacturing with production tracking and consistency checks.`
   Image: `/images/05-bulk-production.webp`

4. **Quality Assurance**
   `Stitching, measurements, finishing, branding and garment quality are inspected before packing.`
   Image: `/images/06-quality-check.webp`

5. **Packing**
   `Finished garments are folded, labelled and packed according to the agreed packing requirements.`
   Image: `/images/07-packing.webp`

6. **Dispatch**
   `Completed orders are prepared for dispatch and delivered through the agreed logistics arrangement.`
   Image: `/images/08-dispatch.webp`

### 9. CINEMATIC FACTORY STORY

Full-width darker visual section using `/images/02-factory-sewing-line.webp` or `/images/17-folded-garments.webp`.

Heading:
`Where Craft Meets Production.`

Copy:
`Behind every finished garment is a sequence of decisions — fabric selection, pattern, stitching, finishing and inspection. Our focus is to make each step dependable enough to repeat at scale.`

Use slow image movement, subtle grain and oversized typography. Do not add unnecessary buttons.

### 10. QUALITY

Warm ivory section.

Overline:
`QUALITY MATTERS`

Heading:
`Consistency Isn't an Extra. It's Part of the Process.`

Large image:
`/images/06-quality-check.webp`

Checklist:

- **Material Check** — `Fabric and components are reviewed before production.`
- **Measurement Check** — `Garments are checked against approved sizing and specifications.`
- **Stitching & Finishing** — `Construction, seams and finishing details are inspected.`
- **Branding Check** — `Prints, embroidery, labels and visual details are reviewed for consistency.`
- **Final Inspection** — `Finished garments are checked before packing and dispatch.`

### 11. WHO WE MANUFACTURE FOR

Heading:
`Built for Different Businesses.`

Use six clean tiles with supporting imagery from the supplied set:

- **Clothing Brands** — `Private-label and custom apparel manufacturing.`
- **Schools** — `Uniform manufacturing for educational institutions.`
- **Sports Teams** — `Custom jerseys and team apparel.`
- **Corporates** — `Professional staff and corporate uniforms.`
- **Hospitality** — `Uniform solutions for hotels, restaurants and service teams.`
- **Events & Organisations** — `Bulk apparel for campaigns, events and organisations.`

Do not invent client names.

### 12. WHY MOON MIST

Dark section.

Heading:
`A Manufacturing Partner, Not Just a Supplier.`

Four principles:

1. **Flexible Production** — `We work with different garment categories and business requirements.`
2. **Quality Focus** — `Attention is given to fabric, construction, finishing and consistency.`
3. **Clear Communication** — `Requirements and production expectations are discussed before manufacturing begins.`
4. **Reliable Process** — `Sampling, confirmation, production, inspection, packing and dispatch follow a structured workflow.`

Do not invent production capacity, years of experience, exports, certifications or client counts.

### 13. GALLERY

Create an editorial masonry / modular gallery using:

- 03 fabric rolls
- 14 embroidery
- 15 printing
- 16 garment tags
- 17 folded garments
- 18 fabric texture
- 19 trims accessories
- 20 packaging detail
- 02 sewing line
- 05 bulk production

Use clip reveals, light parallax, and a simple optional lightbox. Avoid over-animation.

### 14. LARGE CTA

Heading:
`Have an Apparel Requirement?`

Large statement:
`Let's Manufacture It the Right Way.`

Copy:
`Tell us what you need, your expected quantity, garment type and timeline. Our team will help you understand the next steps.`

Buttons:
- `Start an Enquiry`
- `WhatsApp Us`

Use `/images/17-folded-garments.webp` or `/images/20-packaging-detail.webp` subtly in the background/composition.

### 15. B2B ENQUIRY FORM

Fields:

- Full Name *
- Company / Organisation
- Phone Number *
- Email
- Garment Type *
  - T-Shirts
  - Sports Jerseys
  - School Uniforms
  - Corporate Uniforms
  - Private Label Apparel
  - Hospitality Uniforms
  - Custom Requirement
- Estimated Quantity *
  - Below 100
  - 100–500
  - 500–1,000
  - 1,000–5,000
  - 5,000+
- Requirement / Message *
- Upload Reference (optional)

CTA:
`Send Enquiry`

Build validation and an elegant success state.

Implement the form so the website can run without a database. Create a clean integration layer with one of these approaches:

- if Supabase environment variables exist, save enquiries to Supabase;
- otherwise use a safe local/demo fallback that clearly does not claim permanent submission.

Do not expose enquiry data publicly. Include `.env.example` with placeholders only. Never hard-code secrets.

### 16. CONTACT

Display:

`MOON MIST`
`Garment Manufacturing`
`Tiruppur, Tamil Nadu, India`

Create config placeholders for:

- `[ADD PHONE]`
- `[ADD WHATSAPP]`
- `[ADD EMAIL]`

Business hours:
`Monday – Saturday · 9:00 AM – 7:00 PM`

Button:
`Get Directions`

Do not invent a street address or map coordinates.

### 17. FOOTER

Dark footer.

Large faded background word:
`MOON MIST`

Columns:

Company:
- About
- Capabilities
- Process
- Quality

Products:
- T-Shirts
- Jerseys
- Uniforms
- Private Label

Connect:
- Instagram
- WhatsApp
- Email

Bottom:
`© 2026 Moon Mist. All Rights Reserved.`

Include a clean back-to-top control.

## SEO

Homepage title:
`Garment Manufacturer in Tiruppur | Custom Apparel Manufacturing | Moon Mist`

Meta description:
`Moon Mist is a garment manufacturing company in Tiruppur offering custom T-shirts, jerseys, uniforms, private-label apparel and bulk garment production.`

Use relevant phrases naturally, without keyword stuffing:

- garment manufacturer in Tiruppur
- T-shirt manufacturer Tiruppur
- custom garment manufacturer
- uniform manufacturer Tiruppur
- sports jersey manufacturer
- private label clothing manufacturer
- bulk garment manufacturing
- apparel manufacturer Tamil Nadu

Requirements:
- one H1
- correct H2/H3 hierarchy
- semantic HTML
- metadata API
- canonical
- Open Graph
- Twitter metadata
- sitemap.xml
- robots.txt

Add appropriate Organization / LocalBusiness / WebSite schema using only factual information supplied here. Do not add fake reviews, ratings, awards or certifications.

## Accessibility

- strong contrast
- semantic landmarks
- keyboard-operable navigation
- visible focus states
- accessible form labels and errors
- minimum practical touch target sizes
- meaningful image alt text
- decorative images marked appropriately
- `prefers-reduced-motion` support

## Performance

- use `next/image`
- responsive `sizes`
- lazy load below-fold imagery
- preload only the hero image and required fonts
- avoid unnecessary client components
- dynamically import heavy motion sections when useful
- no huge video files
- no layout shifts
- no remote image dependencies for the supplied asset set
- mobile should not run expensive desktop scroll effects

Target an excellent Lighthouse experience without destroying the cinematic quality.

## Responsive rules

Do not shrink desktop blindly.

Desktop:
- full cinematic composition
- pinned/horizontal sections where appropriate

Tablet:
- simplify pin distances and typography scale

Mobile:
- no horizontal overflow
- no hover-dependent content
- minimum 16px body text where appropriate
- horizontal product section becomes vertical/swipeable
- sticky storytelling becomes simpler image/copy progression
- form becomes single column
- hero remains visually strong without expensive scrub effects

## Project structure

Create an understandable structure similar to:

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    api/enquiry/route.ts
  components/
    navigation/
    sections/
    motion/
    ui/
  config/
    site.ts
  data/
    content.ts
  lib/
    lenis.ts
    gsap.ts
    enquiries.ts
public/
  images/
```

Keep editable content in `src/data/content.ts` and contact/social details in `src/config/site.ts`.

## Build sequence

Work in this order and do not stop at the hero:

1. inspect all supplied assets and confirm filenames
2. create project architecture
3. build complete responsive static layout
4. refine typography/spacing/design system
5. integrate all supplied imagery
6. add Lenis + GSAP motion
7. build horizontal products section
8. build manufacturing-process progress interaction
9. build featured garment storytelling section
10. implement enquiry form + optional Supabase adapter
11. implement SEO/schema/accessibility
12. test mobile/tablet/desktop
13. run lint/build and fix every error
14. perform a final visual consistency pass

Do not leave TODO cards, Lorem Ipsum, empty sections, placeholder gradients or unfinished mobile layouts.

## Final QA checklist

Before you say the site is complete, verify:

- hero is polished and responsive
- every supplied asset used intentionally where helpful
- no broken image paths
- no horizontal overflow at 360px width
- nav works on desktop/mobile
- reduced-motion fallback works
- horizontal product section does not trap mobile users
- enquiry form validates
- no fake business claims
- title/meta/schema are correct
- `npm run build` passes
- no console errors
- all buttons have meaningful destinations or configurable placeholders
- site feels like one visual system, not assembled templates

Finally, provide a concise summary of the files you created, where I can change business details later, and the exact steps to push to GitHub and deploy on Vercel.
