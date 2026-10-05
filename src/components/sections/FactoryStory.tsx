import Image from "next/image";
import { factoryStory } from "@/data/content";

/** Full-bleed cinematic interlude: slow image drift, grain, oversized type. */
export default function FactoryStory() {
  return (
    <section
      data-nav-theme="dark"
      aria-labelledby="factory-title"
      className="grain relative isolate flex min-h-[90svh] items-end overflow-hidden bg-ink text-ivory lg:min-h-[115vh]"
    >
      <div data-parallax="6" className="absolute inset-0 -z-10">
        <div data-parallax-target className="absolute inset-0">
          <Image src={factoryStory.image.src} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/30" aria-hidden="true" />

      <div className="container-x pb-20 pt-40 sm:pb-28 lg:pb-36">
        <p data-reveal="fade" className="eyebrow text-mist">
          {factoryStory.overline}
        </p>
        <h2
          id="factory-title"
          data-reveal="lines"
          className="mt-6 max-w-[14ch] text-[clamp(3rem,9.5vw,10rem)] font-medium leading-[0.92] tracking-[-0.045em]"
        >
          {factoryStory.heading}
        </h2>
        <div className="mt-12 grid lg:grid-cols-12">
          <p data-reveal="fade" className="text-lg leading-relaxed text-ivory/80 sm:text-xl lg:col-span-5 lg:col-start-8">
            {factoryStory.copy}
          </p>
        </div>
      </div>
    </section>
  );
}
