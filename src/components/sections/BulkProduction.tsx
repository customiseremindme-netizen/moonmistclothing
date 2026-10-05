import MediaFrame from "@/components/ui/MediaFrame";
import Overline from "@/components/ui/Overline";
import { bulk } from "@/data/content";

/** Dark editorial interlude: oversized type over a large, crisp production image. */
export default function BulkProduction() {
  return (
    <section
      data-nav-theme="dark"
      aria-labelledby="bulk-title"
      className="scheme-dark grain relative overflow-hidden bg-canvas py-24 text-fg sm:py-32 lg:py-40"
    >
      <div className="container-x relative">
        <Overline>{bulk.overline}</Overline>
        <h2
          id="bulk-title"
          data-reveal="lines"
          className="mt-6 max-w-[13ch] text-[clamp(2.8rem,8.4vw,8.75rem)] font-medium leading-[0.94] tracking-[-0.045em]"
        >
          {bulk.heading}
        </h2>

        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-10">
          <MediaFrame
            image={bulk.image}
            parallax={4}
            sizes="(min-width: 1440px) 880px, (min-width: 1024px) 62vw, 92vw"
            className="aspect-[4/3] rounded-sm lg:col-span-8"
          />
          <div className="flex flex-col justify-end lg:col-span-4">
            <p data-reveal="fade" className="text-lg leading-relaxed text-fg/85">
              {bulk.copy}
            </p>
            <ul data-reveal="stagger" className="mt-10 divide-y divide-line border-y border-line">
              {bulk.points.map((point, i) => (
                <li key={point} className="flex items-baseline gap-5 py-4 text-[15px]">
                  <span className="font-serif text-lg italic text-accent" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
