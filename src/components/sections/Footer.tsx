import { footer } from "@/data/content";
import { site, instagramHref, whatsappHref, emailHref } from "@/config/site";
import BackToTop from "@/components/ui/BackToTop";

export default function Footer() {
  const wa = whatsappHref();
  const connect = [
    { label: "Instagram", href: instagramHref(), external: !!site.social.instagram },
    { label: "WhatsApp", href: wa, external: !wa.startsWith("#") },
    { label: "Email", href: emailHref(), external: false },
  ];

  return (
    <footer data-nav-theme="dark" className="relative overflow-hidden bg-ink text-ivory">
      <div className="container-x relative z-10 pb-10 pt-24 sm:pt-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg font-semibold tracking-[0.26em]">{site.wordmark}</p>
            <p className="mt-3 font-serif text-2xl italic text-mist">{site.tagline}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-mist">
              {site.descriptor} · {site.location.city}, {site.location.region}, {site.location.country}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-mist">{col.title}</h2>
                <ul className="mt-5 space-y-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="link-underline inline-block py-1.5 text-[15px]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="eyebrow text-mist">{footer.connectTitle}</h2>
              <ul className="mt-5 space-y-1">
                {connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="link-underline inline-block py-1.5 text-[15px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col-reverse gap-6 border-t border-ivory/10 pt-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mist">{footer.copyright}</p>
          <BackToTop />
        </div>
      </div>

      {/* Large faded wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.2em] select-none whitespace-nowrap text-center text-[17vw] font-semibold leading-none tracking-[-0.05em] text-ivory/[0.045]"
      >
        {site.wordmark}
      </p>
    </footer>
  );
}
