import Overline from "@/components/ui/Overline";
import { why } from "@/data/content";

export default function WhyMoonMist() {
  return (
    <section
      id="why"
      data-nav-theme="dark"
      aria-labelledby="why-title"
      className="grain relative bg-deep py-24 text-ivory sm:py-32 lg:py-40"
    >
      <div className="container-x relative">
        <div className="max-w-4xl">
          <Overline tone="dark">{why.overline}</Overline>
          <h2 id="why-title" data-reveal="lines" className="heading-lg mt-6">
            {why.heading}
          </h2>
        </div>

        <ol data-reveal="stagger" className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {why.principles.map((p, i) => (
            <li key={p.title} className="flex flex-col bg-deep p-7 sm:p-9 lg:min-h-[340px]">
              <span className="font-serif text-5xl italic leading-none text-bronze">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-xl font-medium tracking-tight sm:text-2xl lg:mt-auto">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mist">{p.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
