"use client";

/**
 * Tiny event bridge between the preloader and the hero intro.
 * The hero waits for the preloader curtain before animating in.
 */
const EVENT = "moonmist:loaded";

declare global {
  interface Window {
    __moonmistLoaded?: boolean;
  }
}

export function markLoaded() {
  window.__moonmistLoaded = true;
  window.dispatchEvent(new Event(EVENT));
}

export function onLoaded(callback: () => void) {
  if (window.__moonmistLoaded) {
    callback();
    return () => {};
  }
  window.addEventListener(EVENT, callback, { once: true });
  return () => window.removeEventListener(EVENT, callback);
}
