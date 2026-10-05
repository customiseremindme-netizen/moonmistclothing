"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { gsap, SplitText, MQ } from "@/lib/gsap";
import { onLoaded } from "@/components/motion/loaded";
import { hero } from "@/data/content";

/**
 * Cinematic opening. The intro plays when the preloader lifts; on desktop
 * the full-bleed image then resolves into a rounded frame as you scroll on.
 * (Structured so a future R3F scene could replace the <Image> layer.)
 */
export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const split = SplitText.create("[data-hero-title] > span", { type: "lines", mask: "lines" });
        const fades = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");

        gsap.set("[data-hero-image] img", { scale: 1.08 });
        gsap.set(split.lines, { yPercent: 110 });
        gsap.set(fades, { autoAlpha: 0, y: 30 });

        const stop = onLoaded(() => {
          gsap
            .timeline()
            .to("[data-hero-image] img", { scale: 1, duration: 2.4, ease: "power3.out" }, 0)
            .to(split.lines, { yPercent: 0, duration: 1.3, ease: "power4.out", stagger: 0.12 }, 0.15)
            .to(fades, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.55);
        });

        return () => {
          stop();
          split.revert();
        };
      });

      // Scroll-out: frame the image, drift the headline, fade the copy (desktop only)
      mm.add(MQ.desktop, () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        tl.fromTo(
          "[data-hero-frame]",
          { clipPath: "inset(0% 0% 0% 0% round 0px)" },
          { clipPath: "inset(7% 3.5% 0% 3.5% round 28px)" },
          0,
        )
          .to("[data-hero-title]", { yPercent: -28 }, 0)
          .to("[data-hero-copy]", { autoAlpha: 0, y: -40 }, 0)
          .to("[data-hero-image] img", { yPercent: 8 }, 0);
      });

      // Phones/tablets: a light fade only
      mm.add(MQ.mobile, () => {
        gsap.to("[data-hero-copy]", {
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "40% top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="top"
      data-nav-theme="dark"
      aria-labelledby="hero-title"
      className="relative h-[100svh] min-h-[600px] bg-ivory"
    >
      <div data-hero-frame className="absolute inset-0 overflow-hidden bg-ink">
        <div data-hero-image className="absolute inset-0">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            fetchPriority="high"
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Tonal overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-transparent" aria-hidden="true" />

        <div className="container-x relative flex h-full flex-col justify-end pb-24 pt-28 text-ivory sm:pb-28 lg:pb-32">
          <div className="max-w-5xl">
            <p data-hero-fade className="eyebrow mb-6 text-ivory/80">
              {hero.overline}
            </p>
            <h1 id="hero-title" data-hero-title className="heading-xl">
              {hero.headingLines.map((line, i) => (
                <span key={line} className="block">
                  {i === 1 ? <span className="serif-accent text-[1.06em]">{line}</span> : line}
                </span>
              ))}
            </h1>
            <div data-hero-copy className="mt-8 max-w-xl">
              <p data-hero-fade className="text-base leading-relaxed text-ivory/85 sm:text-lg">
                {hero.copy}
              </p>
              <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={hero.primaryCta.href} className="btn btn-light">
                  {hero.primaryCta.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-outline-light">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>

        </div>

        <div data-hero-fade className="absolute inset-x-0 bottom-0 border-t border-ivory/15">
          <div className="container-x flex items-center justify-between py-4 text-[11px] font-medium tracking-[0.2em] text-ivory/75 sm:py-5">
            <span>{hero.microcopy}</span>
            <a href="#about" className="hidden items-center gap-3 uppercase hover:text-ivory sm:flex">
              {hero.scrollCue} <span aria-hidden="true">↓</span>
              <span className="relative block h-6 w-px overflow-hidden bg-ivory/20" aria-hidden="true">
                <span className="scroll-cue-line absolute inset-0 bg-ivory" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
