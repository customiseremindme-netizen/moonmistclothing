import { footer } from "@/data/content";
import { site, instagramHref, whatsappHref, emailHref } from "@/config/site";
import BackToTop from "@/components/ui/BackToTop";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const wa = whatsappHref();
  const connect = [
    { label: "Instagram", href: instagramHref(), external: !!site.social.instagram },
    { label: "WhatsApp", href: wa, external: !wa.startsWith("#") },
    { label: "Email", href: emailHref(), external: false },
  ];

  return (
    <footer data-nav-theme="dark" className="scheme-dark relative overflow-hidden bg-canvas text-fg">
      <div className="container-x relative z-10 pb-10 pt-24 sm:pt-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-6 w-auto sm:h-7" sizes="260px" />
            <p className="mt-3 font-serif text-2xl italic text-fg-muted">{site.tagline}</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-fg-muted">
              {site.descriptor} · {site.location.city}, {site.location.region}, {site.location.country}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h2 className="eyebrow text-fg-muted">{col.title}</h2>
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
              <h2 className="eyebrow text-fg-muted">{footer.connectTitle}</h2>
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

        <div className="mt-20 flex flex-col-reverse gap-6 border-t border-line pt-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-muted">{footer.copyright}</p>
          <BackToTop />
        </div>
      </div>

      {/* Large faded wordmark (the supplied logo file) */}
      <div aria-hidden="true" className="pointer-events-none container-x -mb-[1.5vw] select-none opacity-[0.06]">
        <Logo className="h-auto w-full" sizes="100vw" />
      </div>
    </footer>
  );
}
