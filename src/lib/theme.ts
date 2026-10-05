"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "./theme-script";

export type Theme = "light" | "dark";

const read = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

function apply(theme: Theme, animate: boolean) {
  const html = document.documentElement;
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    html.classList.add("theme-anim");
    window.setTimeout(() => html.classList.remove("theme-anim"), 650);
  }
  html.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0F0F10" : "#F5F3EE");
}

/** Called by the toggle: switches theme and remembers the choice. */
export function setTheme(theme: Theme) {
  apply(theme, true);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* storage unavailable (private mode) — theme still applies for this visit */
  }
}

/** Follow system changes until the visitor picks a theme themselves. */
export function followSystemTheme() {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = (e: MediaQueryListEvent) => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {}
    if (!saved) apply(e.matches ? "dark" : "light", true);
  };
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

/** Current theme, kept in sync with <html data-theme>. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, read, () => "light");
}
