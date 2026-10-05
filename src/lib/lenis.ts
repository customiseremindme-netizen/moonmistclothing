"use client";

import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let instance: Lenis | null = null;

/**
 * Starts Lenis smooth scrolling and drives it from GSAP's ticker so
 * ScrollTrigger and Lenis always agree on the scroll position.
 * Returns a cleanup function.
 */
export function startLenis() {
  if (instance) return () => {};

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });
  instance = lenis;
  // Stay paused while the preloader is on screen.
  if (document.documentElement.dataset.loading === "true") lenis.stop();

  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    instance = null;
  };
}

export const getLenis = () => instance;

/** Scroll helper that works with or without Lenis running. */
export function scrollToTarget(target: string | HTMLElement | number) {
  if (instance) {
    instance.scrollTo(target, { duration: 1.4 });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth" });
  }
}
