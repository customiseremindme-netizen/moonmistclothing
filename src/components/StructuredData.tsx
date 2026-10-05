import { site, isPlaceholder } from "@/config/site";
import { products } from "@/data/content";

/**
 * Organization / LocalBusiness / WebSite schema using only supplied facts.
 * Phone, email and social profiles are added automatically once they are
 * filled in src/config/site.ts.
 */
export default function StructuredData() {
  const { phone, email } = site.contact;
  const sameAs = [site.social.instagram].filter(Boolean);
  const address = {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.countryCode,
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        slogan: site.tagline,
        description: site.seo.description,
        url: site.url,
        image: `${site.url}${site.seo.ogImage}`,
        address,
        areaServed: "IN",
        knowsAbout: products.items.map((p) => p.title),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
        ...(isPlaceholder(phone) ? {} : { telephone: phone }),
        ...(isPlaceholder(email) ? {} : { email }),
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
