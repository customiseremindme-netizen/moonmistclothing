import { marqueeItems } from "@/data/content";

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-[13px] font-medium tracking-[0.28em] sm:px-9 sm:text-sm">{item}</span>
          <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Manufacturing services" data-nav-theme="light" className="overflow-hidden bg-canvas py-8 text-fg sm:py-10">
      <div className="border-y border-line py-5">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
