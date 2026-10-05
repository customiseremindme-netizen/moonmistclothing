import Overline from "@/components/ui/Overline";
import { capabilities } from "@/data/content";

/** Six capabilities as a typographic index — the photography lives in the sections that follow. */
export default function Capabilities() {
  return (
    <section
      id="capabilities"
      data-nav-theme="dark"
      aria-labelledby="capabilities-title"
      className="scheme-dark grain relative bg-canvas py-24 text-fg sm:py-32 lg:py-40"
    >
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Overline>{capabilities.overline}</Overline>
            <h2 id="capabilities-title" data-reveal="lines" className="heading-lg mt-6">
              {capabilities.heading}
            </h2>
          </div>
          <p data-reveal="fade" className="max-w-sm self-end text-base leading-relaxed text-fg-muted lg:col-span-4 lg:col-start-9">
            {capabilities.intro}
          </p>
        </div>

        <ol data-reveal="stagger" className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative bg-canvas p-7 sm:p-9 lg:min-h-[320px] lg:p-10"
            >
              <span className="block font-serif text-5xl italic leading-none text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-2xl font-medium tracking-tight lg:mt-14">{item.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-fg-muted">{item.copy}</p>
              <span
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
