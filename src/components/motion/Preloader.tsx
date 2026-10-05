"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { markLoaded } from "./loaded";
import { preloader } from "@/data/content";
import Logo from "@/components/ui/Logo";

const MIN_MS = 750; // never flash too quickly
const MAX_MS = 2400; // never hold visitors hostage

function heroImageReady() {
  const img = document.querySelector<HTMLImageElement>("[data-hero-image] img");
  if (!img || img.complete) return Promise.resolve();
  return new Promise<void>((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

/** Short branded loader that waits for fonts + hero image, then lifts like a curtain. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current!;
      const bar = el.querySelector("[data-bar]");
      const text = el.querySelectorAll("[data-text]");
      const html = document.documentElement;
      html.style.overflow = "hidden";
      html.dataset.loading = "true"; // Lenis starts paused while this is set
      getLenis()?.stop();

      const finish = () => {
        html.style.overflow = "";
        delete html.dataset.loading;
        getLenis()?.start();
        el.style.display = "none";
      };

      if (prefersReducedMotion()) {
        Promise.race([heroImageReady(), wait(800)]).then(() => {
          markLoaded();
          gsap.to(el, { autoAlpha: 0, duration: 0.3, onComplete: finish });
        });
        return;
      }

      gsap.from(text, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.08 });
      const progress = gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 0.85, duration: 1.4, ease: "power2.out" });

      const assets = Promise.all([document.fonts?.ready ?? Promise.resolve(), heroImageReady(), wait(MIN_MS)]);
      Promise.race([assets, wait(MAX_MS)]).then(() => {
        progress.kill();
        gsap
          .timeline({ onComplete: finish })
          .to(bar, { scaleX: 1, duration: 0.35, ease: "power2.inOut" })
          .to(text, { yPercent: -110, duration: 0.6, ease: "power3.in", stagger: 0.05 }, "+=0.05")
          .add(markLoaded, "-=0.15")
          .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.05, ease: "power4.inOut" }, "-=0.25");
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      data-preloader
      aria-hidden="true"
      className="scheme-dark fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas text-fg"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="overflow-hidden">
        <div data-text>
          <Logo className="h-7 w-auto sm:h-9" sizes="320px" />
        </div>
      </div>
      <div className="mt-4 overflow-hidden">
        <p data-text className="eyebrow text-fg-muted">
          {preloader.subtitle}
        </p>
      </div>
      <div className="mt-10 h-px w-40 bg-fg/15 sm:w-56">
        <div data-bar className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
