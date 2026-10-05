import Overline from "@/components/ui/Overline";
import { why } from "@/data/content";

export default function WhyMoonMist() {
  return (
    <section
      id="why"
      data-nav-theme="dark"
      aria-labelledby="why-title"
      className="scheme-dark grain relative bg-canvas py-24 text-fg sm:py-32 lg:py-40"
    >
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Overline>{why.overline}</Overline>
          <h2 id="why-title" data-reveal="lines" className="heading-lg mt-6">
            {why.heading}
          </h2>
        </div>

        <ol data-reveal="stagger" className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {why.principles.map((p, i) => (
            <li key={p.title} className="flex flex-col bg-canvas p-7 sm:p-9 lg:min-h-[320px]">
              <span className="font-serif text-5xl italic leading-none text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-10 text-xl font-medium tracking-tight sm:text-2xl lg:mt-auto">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">{p.copy}</p>
            </li>
          ))}
        </ol>

        <div data-reveal="fade" className="mt-16 flex flex-col gap-5 sm:mt-20 lg:flex-row lg:items-baseline lg:gap-12">
          <h3 className="eyebrow shrink-0 text-fg-muted">{why.audiencesTitle}</h3>
          <ul className="flex flex-wrap gap-2.5">
            {why.audiences.map((a) => (
              <li key={a} className="rounded-full border border-line px-4 py-2 text-[15px]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
