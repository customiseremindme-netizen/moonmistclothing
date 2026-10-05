"use client";

import { ArrowUp } from "lucide-react";
import { scrollToTarget } from "@/lib/lenis";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        scrollToTarget(0);
        document.querySelector<HTMLElement>("#top a, #top")?.focus({ preventScroll: true });
      }}
      className="group inline-flex min-h-12 items-center gap-3 text-sm font-medium"
    >
      Back to top
      <span className="grid h-11 w-11 place-items-center rounded-full border border-ivory/25 transition-colors duration-500 group-hover:border-ivory">
        <ArrowUp size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
