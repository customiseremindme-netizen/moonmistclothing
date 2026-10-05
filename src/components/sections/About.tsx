import MediaFrame from "@/components/ui/MediaFrame";
import { ArrowRight } from "lucide-react";
import Overline from "@/components/ui/Overline";
import { about } from "@/data/content";

export default function About() {
  const [main, secondary] = about.images;

  return (
    <section id="about" data-nav-theme="light" aria-labelledby="about-title" className="bg-ivory py-24 text-ink sm:py-32 lg:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-5 lg:pt-10">
          <Overline>{about.overline}</Overline>
          <h2 id="about-title" data-reveal="lines" className="heading-lg mt-6">
            {about.heading}
          </h2>
          <div data-reveal="stagger" className="mt-10 max-w-lg space-y-5 text-base leading-relaxed text-muted sm:text-[17px]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <a
            data-reveal="fade"
            href={about.cta.href}
            className="group mt-10 inline-flex min-h-12 items-center gap-3 text-sm font-semibold tracking-wide"
          >
            <span className="link-underline pb-0.5">{about.cta.label}</span>
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Staggered editorial images */}
        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <MediaFrame
              image={main}
              parallax={6}
              hover
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="col-span-12 aspect-[4/3] rounded-sm sm:col-span-10 sm:col-start-3"
            />
            <MediaFrame
              image={secondary}
              parallax={9}
              hover
              sizes="(min-width: 1024px) 26vw, 60vw"
              className="col-span-8 -mt-20 aspect-[4/5] rounded-sm border-[6px] border-ivory sm:col-span-6 sm:-mt-40 sm:border-[10px]"
            />
            <p
              data-reveal="fade"
              className="col-span-4 self-end pb-2 text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-muted sm:col-span-5 sm:col-start-8"
            >
              Sampling
              <br />
              Production
              <br />
              Dispatch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
