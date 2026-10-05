# MOON MIST WEBSITE — CLAUDE MASTER BUILD PROMPT (WITH DARK MODE)

You are an expert senior frontend developer, UI/UX designer, and creative director.
I already have a deployed Moon Mist clothing / garment manufacturing website, but the current site visuals look low quality and somewhat AI-generated. I want you to rebuild / refine the website so it looks premium, real, and production-ready using the supplied asset ZIPs.

## PRIMARY GOAL
Build a premium, modern, animated garment manufacturing website for **Moon Mist** using the supplied images and logos.
The final site should feel high-end, real, editorial, and believable — not obviously AI generated.

## CORE REQUIREMENTS
- Framework: Next.js + TypeScript + Tailwind CSS
- Animation: GSAP + ScrollTrigger + Lenis
- Responsive: desktop, tablet, mobile
- Clean architecture so Claude can easily edit it later
- Dark mode feature with a visible toggle in the nav
- Images must be used in **WebP** format as supplied
- Use the supplied brand logos instead of inventing new ones
- Do not use placeholder stock images if the provided images fit the section
- Preserve a premium fashion/manufacturing feel

## WEBSITE STYLE
Visual direction:
- premium garment manufacturing brand
- luxury editorial look
- realistic photography
- clean layouts with strong spacing
- smooth motion
- warm neutral light mode
- elegant, premium dark mode

Avoid:
- cheap template look
- low quality image rendering
- overly bright colours
- gimmicky effects
- obviously AI-looking collage sections

## DARK MODE FEATURE
Implement a real dark mode system.
Requirements:
- Toggle button in navbar
- Store preference in localStorage
- Respect system preference on first load
- Smooth theme transitions
- Ensure images still look premium in dark mode
- Use slightly deeper backgrounds, soft ivory text, muted bronze accents, and subtle border tones

### Light Mode Palette
- Background: #F5F3EE
- Secondary background: #ECE7DE
- Text: #181818
- Muted text: #6F6A63
- Accent: #A88A5B
- Dark sections: #111111

### Dark Mode Palette
- Background: #0F0F10
- Secondary background: #171719
- Card background: #1B1C1F
- Text: #F4F0E8
- Muted text: #B6B1A7
- Accent: #B89967
- Border: rgba(255,255,255,0.10)

## REQUIRED SITE STRUCTURE
1. Preloader
2. Hero section
3. Marquee strip
4. About / introduction
5. Capabilities section
6. Product categories
7. Manufacturing process timeline
8. Quality section
9. Gallery / storytelling section
10. CTA section
11. Enquiry form
12. Contact / footer

## IMAGE USAGE MAP
Use the provided images in these roles:

### PACK 01 — FACTORY / HERO
- `01-hero-garment-factory.webp`
  Use as main homepage hero image.
- `02-atelier-focused-craftsmanship.webp`
  Use for about / craftsmanship / precision section.
- `03-textile-atelier-fabric-rolls.webp`
  Use for textiles / materials / sourcing section.
- `04-bulk-production-folding-station.webp`
  Use for bulk production or quality / process section.

### PACK 02 — PROCESS / MANUFACTURING
- `05-quality-collar-inspection.webp`
  Use in quality control section.
- `06-dispatch-loading-dock.webp`
  Use in dispatch / logistics / final delivery section.
- `07-activewear-design-studio.webp`
  Use in sampling / development / design planning section.

### PACK 03 — PRODUCTS / BRAND
- `08-minimalist-studio-display.webp`
  Use in product display / custom T-shirt section.
- `09-luxury-apparel-flatlay.webp`
  Use in private label / packaging / premium brand section.
- `10-apparel-packing-studio.webp`
  Use in packing / brand presentation / finished garments section.

### LOGOS
Use supplied files:
- `moonmist-logo-wordmark-horizontal.png`
- `moonmist-logo-square.png`
- `moonmist-logo-icon.png`

Use the horizontal logo in navbar and footer.
Use the icon for favicon or subtle accent placements.
Do not redraw the brand logo.

## HERO SECTION
Create a premium hero with:
- full viewport height
- elegant overlay
- brand headline: “Made With Precision. Built For Brands.”
- supporting text about garment manufacturing in Tiruppur
- CTA buttons: “Explore Capabilities” and “Start a Project”
- hero image: `01-hero-garment-factory.webp`
- subtle GSAP reveal and parallax

## ABOUT SECTION
Use `02-atelier-focused-craftsmanship.webp` and supporting editorial layout.
Tone: precision, craftsmanship, consistency, modern manufacturing.

## TEXTILE / MATERIALS SECTION
Use `03-textile-atelier-fabric-rolls.webp`.
Talk about fabric selection, material quality, sourcing, and production readiness.

## BULK PRODUCTION SECTION
Use `04-bulk-production-folding-station.webp`.
Describe organized large-scale manufacturing, folding, finishing, and quality consistency.

## QUALITY SECTION
Use `05-quality-collar-inspection.webp`.
Explain material check, stitching check, measurement check, branding check, and final inspection.

## PROCESS / SAMPLING SECTION
Use `07-activewear-design-studio.webp`.
Explain sampling, BOM/order confirmation, production planning, and client approvals.

## DISPATCH SECTION
Use `06-dispatch-loading-dock.webp`.
Explain packing, carton handling, logistics, and dispatch.

## PRODUCTS SECTION
Use:
- `08-minimalist-studio-display.webp` for custom T-shirts
- `09-luxury-apparel-flatlay.webp` for private label / premium branding
- `10-apparel-packing-studio.webp` for finished product / apparel packing

Product categories should include:
- Custom T-Shirts
- Sports Jerseys
- School Uniforms
- Corporate Uniforms
- Private Label Apparel
- Custom Orders

## COPY GUIDELINES
Use professional, minimal, premium copy.
Do not sound exaggerated.
Do not invent fake business statistics.
Do not write generic AI fluff.
Keep the tone trustworthy and elegant.

## ENQUIRY FORM
Fields:
- Full Name
- Company / Organization
- Phone Number
- Email
- Garment Type
- Estimated Quantity
- Message

Add WhatsApp CTA too.

## TECHNICAL IMAGE REQUIREMENTS
- Render images crisply with correct aspect ratios
- Use `next/image`
- Use WebP assets from the provided ZIPs
- Set proper sizes for responsive loading
- Avoid blurry backgrounds or stretched crops
- Use object-position carefully per section

## PERFORMANCE
- Lazy load below-the-fold images
- Use GSAP only where needed
- Keep motion smooth but not excessive
- Respect `prefers-reduced-motion`
- Optimize for Vercel deployment

## FINAL REQUIREMENT
Produce a polished, production-ready website that is noticeably better than the current deployed version in image quality, realism, premium feel, responsiveness, and dark mode support.
