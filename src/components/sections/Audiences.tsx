import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { audiences } from "@/data/content";

export default function Audiences() {
  return (
    <section data-nav-theme="light" aria-labelledby="audiences-title" className="bg-sand py-24 text-ink sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Overline>{audiences.overline}</Overline>
            <h2 id="audiences-title" data-reveal="lines" className="heading-lg mt-6">
              {audiences.heading}
            </h2>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {audiences.items.map((item, i) => (
            <li key={item.title} className={i % 3 === 1 ? "lg:translate-y-16" : ""}>
              <MediaFrame
                image={item.image}
                hover
                decorative
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className="aspect-[4/3] rounded-sm"
              />
              <div data-reveal="fade" className="mt-5 flex items-baseline gap-4 border-t border-ink/15 pt-5">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{item.copy}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
