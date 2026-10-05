"use client";

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText, MQ } from "@/lib/gsap";
import { scrollToTarget, startLenis } from "@/lib/lenis";

/**
 * Global motion system.
 * Sections stay server-rendered and opt into motion with data attributes:
 *
 *   data-reveal="lines"    masked line-by-line heading reveal
 *   data-reveal="fade"     soft rise + fade
 *   data-reveal="stagger"  children rise one after another
 *   data-reveal="clip"     image wipes open from the bottom
 *   data-parallax="8"      inner image drifts ±8% while scrolling (desktop)
 */
export default function MotionProvider() {
  // Smooth scrolling (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia(MQ.reduced).matches) return;
    return startLenis();
  }, []);

  // Same-page anchor links glide with Lenis instead of jumping.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href")!;
      const target = href === "#top" || href === "#" ? 0 : document.querySelector<HTMLElement>(href);
      if (target === null) return;
      e.preventDefault();
      scrollToTarget(target);
      history.replaceState(null, "", href === "#top" || href === "#" ? location.pathname : href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const reveal = { start: "top 86%", once: true } as const;

      gsap.utils.toArray<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 105,
              duration: 1.15,
              ease: "power4.out",
              stagger: 0.09,
              scrollTrigger: { trigger: el, ...reveal },
            }),
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.1, scrollTrigger: { trigger: el, ...reveal } },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
        gsap.fromTo(
          el.children,
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, stagger: 0.08, scrollTrigger: { trigger: el, ...reveal } },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal="clip"]').forEach((el) => {
        const img = el.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        tl.fromTo(
          el,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.out" },
        );
        if (img)
          tl.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: "power3.out", clearProps: "transform" }, 0);
      });
    });

    // Parallax only on larger screens — phones keep scrolling cheap.
    mm.add(MQ.desktop, () => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 8;
        const target = el.querySelector<HTMLElement>("[data-parallax-target]") ?? el.firstElementChild;
        if (!target) return;
        gsap.set(target, { scale: 1 + (amount * 2.2) / 100 });
        gsap.fromTo(
          target,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    // Re-measure once fonts and images settle.
    ScrollTrigger.sort();
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  });

  return null;
}
