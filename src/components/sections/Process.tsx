"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, MQ } from "@/lib/gsap";
import Overline from "@/components/ui/Overline";
import { process } from "@/data/content";

/**
 * Manufacturing process with a scroll-driven progress line.
 * Desktop adds a sticky image panel that changes as each stage activates.
 */
export default function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = root.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          "[data-line-fill]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 55%", end: "bottom 55%", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="process"
      data-nav-theme="light"
      aria-labelledby="process-title"
      className="relative bg-sand py-24 text-ink sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <div className="max-w-4xl">
          <Overline>{process.overline}</Overline>
          <h2 id="process-title" data-reveal="lines" className="heading-lg mt-6">
            {process.heading}
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Sticky image panel (desktop) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-ink">
                {process.stages.map((stage, i) => (
                  <div
                    key={stage.title}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                    }`}
                  >
                    <Image
                      src={stage.image.src}
                      alt={i === active ? stage.image.alt : ""}
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-6 bottom-5 flex items-end justify-between text-ivory">
                  <span className="font-serif text-7xl italic leading-none">{String(active + 1).padStart(2, "0")}</span>
                  <span className="pb-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
                    {process.stages[active].title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps with progress line */}
          <ol data-steps className="relative lg:col-span-6 lg:pt-6">
            <span className="absolute bottom-0 left-[15px] top-0 w-px bg-ink/15" aria-hidden="true" />
            <span
              data-line-fill
              className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-bronze"
              aria-hidden="true"
            />
            {process.stages.map((stage, i) => {
              const on = i <= active;
              return (
                <li key={stage.title} data-step={i} className="relative pb-16 pl-14 last:pb-0 sm:pb-20 lg:pb-28">
                  <span
                    className={`absolute left-0 top-0 grid h-[31px] w-[31px] place-items-center rounded-full border text-[11px] font-semibold transition-colors duration-500 ${
                      on ? "border-bronze bg-bronze text-ink" : "border-ink/20 bg-sand text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3
                    className={`heading-md transition-opacity duration-500 ${i === active ? "opacity-100" : "lg:opacity-45"}`}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{stage.copy}</p>
                  <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-sm bg-ink lg:hidden">
                    <Image src={stage.image.src} alt={stage.image.alt} fill sizes="(min-width: 640px) 80vw, 85vw" className="object-cover" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
