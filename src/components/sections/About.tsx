import { ArrowRight } from "lucide-react";
import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" data-nav-theme="light" aria-labelledby="about-title" className="bg-canvas py-24 text-fg sm:py-32 lg:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col lg:col-span-5">
          <Overline>{about.overline}</Overline>
          <h2 id="about-title" data-reveal="lines" className="heading-lg mt-6">
            {about.heading}
          </h2>
          <div data-reveal="stagger" className="mt-10 max-w-lg space-y-5 text-base leading-relaxed text-fg-muted sm:text-[17px]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <ul data-reveal="stagger" className="mt-10 max-w-lg divide-y divide-line border-y border-line">
            {about.points.map((point, i) => (
              <li key={point} className="flex items-baseline gap-5 py-4 text-[15px]">
                <span className="font-serif text-lg italic text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a
            data-reveal="fade"
            href={about.cta.href}
            className="group mt-10 inline-flex min-h-12 items-center gap-3 self-start text-sm font-semibold tracking-wide"
          >
            <span className="link-underline pb-0.5">{about.cta.label}</span>
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Editorial image at its native 4:3 ratio — no awkward cropping */}
        <div className="lg:col-span-7 lg:pt-24">
          <MediaFrame
            image={about.image}
            parallax={4}
            sizes="(min-width: 1440px) 760px, (min-width: 1024px) 55vw, 92vw"
            className="aspect-[4/3] rounded-sm"
          />
          <p data-reveal="fade" className="mt-4 flex items-center gap-3 text-xs tracking-wide text-fg-muted">
            <span className="h-px w-6 bg-line" aria-hidden="true" />
            {about.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
