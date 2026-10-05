import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { bigCta } from "@/data/content";
import { whatsappHref } from "@/config/site";

export default function BigCta() {
  const wa = whatsappHref();
  const external = !wa.startsWith("#");

  return (
    <section
      data-nav-theme="dark"
      aria-labelledby="cta-title"
      className="grain relative isolate overflow-hidden bg-ink py-28 text-ivory sm:py-36 lg:py-48"
    >
      <div data-parallax="8" className="absolute inset-0 -z-10">
        <div data-parallax-target className="absolute inset-0">
          <Image src={bigCta.image.src} alt="" fill sizes="100vw" className="object-cover opacity-30" />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40" aria-hidden="true" />

      <div className="container-x">
        <p data-reveal="fade" className="font-serif text-2xl italic text-bronze sm:text-3xl">
          {bigCta.overline}
        </p>
        <h2
          id="cta-title"
          data-reveal="lines"
          className="mt-6 max-w-[16ch] text-[clamp(2.8rem,8vw,8.5rem)] font-medium leading-[0.95] tracking-[-0.045em]"
        >
          {bigCta.statement}
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <p data-reveal="fade" className="max-w-xl text-lg leading-relaxed text-ivory/80 lg:col-span-6">
            {bigCta.copy}
          </p>
          <div data-reveal="fade" className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <a href={bigCta.primary.href} className="btn btn-light">
              {bigCta.primary.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={wa}
              className="btn btn-outline-light"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <MessageCircle size={16} aria-hidden="true" />
              {bigCta.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
