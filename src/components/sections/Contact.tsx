import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Overline from "@/components/ui/Overline";
import Logo from "@/components/ui/Logo";
import { contact } from "@/data/content";
import { site, phoneHref, emailHref, whatsappHref } from "@/config/site";

export default function Contact() {
  const wa = whatsappHref();
  const rows = [
    { icon: Phone, label: "Phone", value: site.contact.phone, href: phoneHref() },
    { icon: MessageCircle, label: "WhatsApp", value: site.contact.whatsapp, href: wa, external: !wa.startsWith("#") },
    { icon: Mail, label: "Email", value: site.contact.email, href: emailHref() },
  ];

  return (
    <section id="contact" data-nav-theme="light" aria-labelledby="contact-title" className="bg-canvas-2 py-24 text-fg sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Overline>{contact.overline}</Overline>
          <h2 id="contact-title" data-reveal="lines" className="heading-lg mt-6">
            {contact.heading}
          </h2>
        </div>

        <div data-reveal="stagger" className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
          <address className="not-italic">
            <Logo className="h-7 w-auto" sizes="240px" />
            <p className="mt-3 text-base text-fg-muted">
              <span className="sr-only">{site.name} — </span>
              {site.descriptor}
            </p>
            <p className="mt-6 flex items-start gap-3 text-base">
              <MapPin size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              {site.location.city}, {site.location.region}, {site.location.country}
            </p>
            <p className="mt-3 flex items-start gap-3 text-base">
              <Clock size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
              {site.contact.hours}
            </p>
            <a
              href={site.contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              {contact.directionsLabel}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </address>

          <ul className="divide-y divide-line border-y border-line">
            {rows.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex min-h-[72px] items-center gap-4 py-4"
                >
                  <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted">{label}</span>
                    <span className="mt-0.5 block break-all text-base">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-fg-muted transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
