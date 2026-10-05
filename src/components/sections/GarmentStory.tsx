"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { story } from "@/data/content";

/**
 * Scroll-told garment story. On desktop the visual stays sticky and
 * crossfades between stages as the copy scrolls past; on mobile each
 * stage simply shows its own image above its copy.
 */
export default function GarmentStory() {
  const [active, setActive] = useState(0);
  const stagesRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = stagesRef.current?.querySelectorAll<HTMLElement>("[data-stage]");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.stage));
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const total = String(story.stages.length).padStart(2, "0");

  return (
    <section data-nav-theme="dark" aria-labelledby="story-title" className="relative bg-ink text-ivory">
      <h2 id="story-title" className="sr-only">
        {story.hiddenHeading}
      </h2>
      <div className="container-x grid gap-10 py-24 sm:py-32 lg:grid-cols-12 lg:gap-12 lg:py-0">
        {/* Sticky visual (desktop) */}
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-0 flex h-screen items-center py-24">
            <div className="relative aspect-[4/5] max-h-full w-full overflow-hidden rounded-sm bg-deep">
              {story.stages.map((stage, i) => (
                <div
                  key={stage.image.src}
                  aria-hidden={i !== active}
                  className={`absolute inset-0 transition-[opacity,transform,clip-path] duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === active
                      ? "scale-100 opacity-100 [clip-path:inset(0%_0%_0%_0%)]"
                      : i < active
                        ? "scale-105 opacity-0 [clip-path:inset(0%_0%_0%_0%)]"
                        : "scale-110 opacity-0 [clip-path:inset(12%_8%_12%_8%)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-[11px] font-semibold tracking-[0.22em]">
                <span>
                  {String(active + 1).padStart(2, "0")} / {total}
                </span>
                <span className="flex gap-1.5" aria-hidden="true">
                  {story.stages.map((s, i) => (
                    <span
                      key={s.title}
                      className={`h-px w-6 transition-colors duration-500 ${i <= active ? "bg-ivory" : "bg-ivory/25"}`}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage copy */}
        <ol ref={stagesRef} className="space-y-20 sm:space-y-28 lg:col-span-5 lg:col-start-8 lg:space-y-0">
          {story.stages.map((stage, i) => (
            <li
              key={stage.title}
              data-stage={i}
              className="lg:flex lg:min-h-screen lg:flex-col lg:justify-center"
            >
              <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-sm bg-deep sm:aspect-[4/3] lg:hidden">
                <Image src={stage.image.src} alt={stage.image.alt} fill sizes="92vw" className="object-cover" />
              </div>
              <div
                className={`transition-opacity duration-700 ${i === active ? "lg:opacity-100" : "lg:opacity-30"}`}
              >
                <p className="eyebrow text-bronze">
                  {story.overline} · {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-lg mt-5 lg:text-[clamp(2.2rem,3.6vw,3.6rem)]">{stage.title}</h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-mist sm:text-lg">{stage.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
