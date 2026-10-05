import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { materials } from "@/data/content";

export default function Materials() {
  return (
    <section data-nav-theme="light" aria-labelledby="materials-title" className="bg-canvas-2 py-24 text-fg sm:py-32 lg:py-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <MediaFrame
            image={materials.image}
            parallax={4}
            sizes="(min-width: 1440px) 780px, (min-width: 1024px) 56vw, 92vw"
            className="aspect-[4/3] rounded-sm"
          />
        </div>

        <div className="lg:col-span-5">
          <Overline>{materials.overline}</Overline>
          <h2 id="materials-title" data-reveal="lines" className="heading-lg mt-6 lg:text-[clamp(2.2rem,3.8vw,3.8rem)]">
            {materials.heading}
          </h2>
          <p data-reveal="fade" className="mt-8 text-base leading-relaxed text-fg-muted sm:text-[17px]">
            {materials.copy}
          </p>
          <dl data-reveal="stagger" className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {materials.points.map((point) => (
              <div key={point.title} className="border-t border-line pt-5">
                <dt className="font-semibold tracking-tight">{point.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-fg-muted">{point.copy}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
