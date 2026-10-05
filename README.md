# Moon Mist — Garment Manufacturing Website

The website for **Moon Mist**, a garment manufacturer in Tiruppur, Tamil Nadu. *Experience the Difference.*

Built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis smooth scrolling and Lucide icons.

---

## Everyday edits (no coding needed)

| What you want to change | File |
| --- | --- |
| Phone, WhatsApp, email, business hours, Instagram, directions link, website address, SEO title/description | `src/config/site.ts` |
| Any heading, paragraph, list, product category, process step, form dropdown options, image choices | `src/data/content.ts` |
| Images | `public/images/` (replace a file with a new one **using the same file name**) |

Placeholders such as `[ADD PHONE]`, `[ADD WHATSAPP]` and `[ADD EMAIL]` appear on the site until you fill them in `src/config/site.ts`.
While a value is still a placeholder, its buttons scroll to the enquiry form instead of opening a broken link.

- **WhatsApp**: digits only, with country code, e.g. `919876543210`.
- **Instagram**: the full profile URL. Leave it `""` and the footer link points to the contact section.
- **Get Directions**: currently opens Tiruppur on Google Maps. Paste your exact Google Maps pin link into `directionsUrl` when you have it.

You can also ask Claude: *"Update the phone number to …"* or *"Change the hero heading to …"*.

---

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before deploying)
npm run lint     # code checks
```

---

## Enquiry form

The form validates every field in the browser and again on the server (`src/app/api/enquiry/route.ts`).

**Demo mode (default).** With no database connected, the form works and validates, but the success message says plainly that nothing was stored and asks the visitor to contact you directly.

**Saving enquiries with Supabase (optional):**

1. Create a free project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:

   ```sql
   create table public.enquiries (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz not null default now(),
     full_name text not null,
     company text,
     phone text not null,
     email text,
     garment_type text not null,
     quantity text not null,
     message text not null,
     reference_file_name text,
     reference_path text
   );
   -- Keep enquiries private: no public access at all.
   alter table public.enquiries enable row level security;
   ```

3. Optional, for reference uploads: in **Storage**, create a **private** bucket named `enquiry-references`.
4. In **Project Settings → API**, copy the Project URL and the `service_role` key.
5. Add them as environment variables (locally in `.env.local`, and in Vercel, see below):

   ```
   SUPABASE_URL=https://xxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

The service-role key is only used on the server and is never sent to the browser. Read enquiries in Supabase under **Table Editor → enquiries**.

---

## Push to GitHub and deploy on Vercel

1. **GitHub.** This repository is already connected (`customiseremindme-netizen/moonmistclothing`). Merge the working branch into `main` on GitHub (open a pull request, then click *Merge*).
2. **Vercel.** Sign in at [vercel.com](https://vercel.com) with GitHub → **Add New… → Project** → import `moonmistclothing`. Vercel detects Next.js automatically, so keep the default settings.
3. **Environment variables** (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL`: your live address, e.g. `https://www.moonmist.in` (used for canonical links, sitemap and social previews)
   - `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`: only if you set up Supabase
4. Click **Deploy**. Every later push to `main` redeploys automatically.
5. **Custom domain.** Project → Settings → Domains → add your domain and follow the DNS instructions.

---

## Project structure

```text
src/
  app/
    layout.tsx           fonts, metadata (SEO, Open Graph, Twitter)
    page.tsx             page order — sections are listed here
    globals.css          design tokens (colours, type), shared styles
    api/enquiry/route.ts enquiry endpoint
    sitemap.ts, robots.ts, icon.svg
  components/
    navigation/          fixed header + full-screen mobile menu
    sections/            one file per page section
    motion/              preloader, smooth scroll + reveal system
    ui/                  small shared pieces (image frame, labels, buttons)
    StructuredData.tsx   Organization / LocalBusiness / WebSite schema
  config/site.ts         ← business details
  data/content.ts        ← all website copy and image choices
  lib/                   gsap, lenis, validation, enquiry storage
public/images/           supplied photography (do not rename)
docs/                    original brief and asset notes
```

### Motion notes

- Sections opt into animation with `data-reveal="lines" | "fade" | "stagger" | "clip"` and `data-parallax="8"`. This is handled once in `components/motion/MotionProvider.tsx`.
- Heavy effects (hero framing, pinned horizontal products, parallax) run on desktop only. Phones get light, cheap motion.
- Visitors with *reduce motion* switched on get a static site with every element visible.
- The hero image layer is isolated in `sections/Hero.tsx`, so a future 3D (React Three Fiber) scene could replace it without touching the rest of the site.

---

## Content honesty

The supplied images are AI-generated visual direction (see `docs/README_ASSETS.txt`). Before launch, replace any image that doesn't accurately represent the real factory, staff or products with approved photography. Don't add capacity numbers, certifications, client names or export claims unless they are real.
