"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { gsap, MQ } from "@/lib/gsap";
import Overline from "@/components/ui/Overline";
import MediaFrame from "@/components/ui/MediaFrame";
import { products } from "@/data/content";

/**
 * Desktop: the section pins and the cards travel horizontally with scroll.
 * Mobile / reduced motion: a native swipe carousel with snap points, so
 * vertical scrolling is never hijacked.
 */
export default function Products() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MQ.desktop, () => {
        const section = root.current!;
        const pinEl = section.querySelector<HTMLElement>("[data-pin]")!;
        const track = section.querySelector<HTMLElement>("[data-track]")!;
        section.dataset.pinned = "true";

        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        tl.to(track, { x: () => -distance() }, 0).fromTo("[data-progress]", { scaleX: 0 }, { scaleX: 1 }, 0);

        return () => {
          delete section.dataset.pinned;
        };
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="products"
      data-nav-theme="light"
      aria-labelledby="products-title"
      className="group relative overflow-hidden bg-canvas text-fg"
    >
      <div data-pin className="flex flex-col justify-center py-24 sm:py-32 lg:h-screen lg:min-h-[680px] lg:py-0 lg:pt-20">
        <div className="container-x grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Overline>{products.overline}</Overline>
            <h2 id="products-title" data-reveal="lines" className="heading-lg mt-5 lg:text-[clamp(2.2rem,4vw,4rem)]">
              {products.heading}
            </h2>
          </div>
          <div data-reveal="fade" className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-base leading-relaxed text-fg-muted">{products.intro}</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-fg-muted lg:hidden" aria-hidden="true">
              Swipe to explore →
            </p>
          </div>
        </div>

        <div
          role="region"
          aria-label="Product categories"
          tabIndex={0}
          className="no-scrollbar mt-10 snap-x snap-mandatory overflow-x-auto overscroll-x-contain group-data-[pinned=true]:overflow-visible lg:mt-12"
        >
          <ul data-track className="flex w-max gap-4 px-4 sm:gap-6 sm:px-8 lg:gap-8 lg:px-14">
            {products.items.map((item, i) => (
              <li
                key={item.title}
                className="w-[82vw] shrink-0 snap-start scroll-ml-4 sm:w-[46vw] sm:scroll-ml-8 lg:w-[min(30vw,440px)]"
              >
                <article className="group/card">
                  <MediaFrame
                    image={item.image}
                    reveal={false}
                    hover
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 82vw"
                    className="aspect-[4/5] rounded-sm lg:aspect-auto lg:h-[min(48vh,520px)]"
                  >
                    <span className="absolute left-4 top-4 rounded-full bg-snow/90 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-coal backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </MediaFrame>
                  <h3 className="mt-5 text-xl font-medium tracking-tight sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-[38ch] text-[15px] leading-relaxed text-fg-muted">{item.copy}</p>
                </article>
              </li>
            ))}
            <li className="flex w-[70vw] shrink-0 snap-start items-center sm:w-[36vw] lg:w-[min(24vw,360px)]">
              <div className="border-l border-line pl-6 sm:pl-8">
                <p className="heading-md">{products.ctaHeading}</p>
                <a href={products.cta.href} className="btn btn-primary mt-6">
                  {products.cta.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Scroll progress (desktop pinned mode) */}
        <div className="container-x mt-10 hidden group-data-[pinned=true]:block" aria-hidden="true">
          <div className="h-px w-full bg-line">
            <div data-progress className="h-full origin-left scale-x-0 bg-fg" />
          </div>
        </div>
      </div>
    </section>
  );
}
