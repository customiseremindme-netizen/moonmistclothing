/** Shared by the server layout and the client theme helpers. */
export const THEME_STORAGE_KEY = "moonmist-theme";

/**
 * Inline <head> script: applies the saved theme (or the system preference
 * on a first visit) before the page paints, so there is never a flash.
 */
export const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`;
