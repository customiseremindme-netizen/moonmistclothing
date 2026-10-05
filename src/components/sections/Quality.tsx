import { Check } from "lucide-react";
import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { quality } from "@/data/content";

export default function Quality() {
  return (
    <section
      id="quality"
      data-nav-theme="light"
      aria-labelledby="quality-title"
      className="bg-ivory py-24 text-ink sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <div className="max-w-4xl">
          <Overline>{quality.overline}</Overline>
          <h2 id="quality-title" data-reveal="lines" className="heading-lg mt-6">
            {quality.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-16">
          <MediaFrame
            image={quality.image}
            parallax={7}
            sizes="(min-width: 1024px) 55vw, 92vw"
            className="aspect-[4/3] rounded-sm lg:col-span-7 lg:aspect-auto lg:min-h-[640px]"
          />

          <ul data-reveal="stagger" className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-5 lg:self-center">
            {quality.checks.map((check, i) => (
              <li key={check.title} className="flex gap-5 py-6 sm:py-7">
                <span
                  className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-bronze/60 text-bronze"
                  aria-hidden="true"
                >
                  <Check size={15} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    <span className="sr-only">Step {i + 1}: </span>
                    {check.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{check.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
