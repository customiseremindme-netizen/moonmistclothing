"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navCta, navItems } from "@/data/content";
import { site, whatsappHref, emailHref, phoneHref } from "@/config/site";
import { getLenis, scrollToTarget } from "@/lib/lenis";

type Theme = "dark" | "light";

/**
 * Fixed header. Transparent over the hero; after scrolling it picks up a
 * translucent ivory or dark treatment depending on the section beneath it.
 * Sections declare their tone with data-nav-theme="dark" | "light".
 */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [active, setActive] = useState("#top");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Scroll state + which section sits under the header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const themed = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTheme((entry.target as HTMLElement).dataset.navTheme as Theme);
        });
      },
      { rootMargin: "-30px 0px -94% 0px" },
    );
    themed.forEach((el) => themeObserver.observe(el));

    const linked = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => !!el);
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    linked.forEach((el) => activeObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      themeObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  // Mobile menu: lock scroll, close on Escape, keep focus inside
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    const toggle = toggleRef.current;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>("a, button");
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      lenis?.start();
      toggle?.focus();
    };
  }, [open]);

  const go = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    // Wait a frame so scrolling is unlocked before we move.
    requestAnimationFrame(() => scrollToTarget(href === "#top" ? 0 : href));
    history.replaceState(null, "", href === "#top" ? location.pathname : href);
  };

  const dark = theme === "dark";
  const surface = !scrolled || open
    ? "bg-transparent border-transparent"
    : dark
      ? "bg-ink/55 border-ivory/10 backdrop-blur-xl"
      : "bg-ivory/75 border-ink/10 backdrop-blur-xl";
  const tone = dark || open ? "text-ivory" : "text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color] duration-500 ${surface} ${tone}`}
      >
        <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-6 lg:h-[76px]">
          <a href="#top" onClick={go("#top")} className="relative z-10 text-[15px] font-semibold tracking-[0.26em]">
            {site.wordmark}
            <span className="sr-only"> — home</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={go(item.href)}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`relative block px-3 py-2 text-[13px] font-medium tracking-wide transition-opacity duration-300 ${
                    active === item.href ? "opacity-100" : "opacity-65 hover:opacity-100"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ${
                      active === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={navCta.href}
              onClick={go(navCta.href)}
              className={`btn hidden min-h-11 py-2.5 text-[13px] sm:inline-flex ${dark || open ? "btn-light" : "btn-dark"}`}
            >
              {navCta.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-10 -mr-2 grid h-12 w-12 place-items-center lg:hidden"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink text-ivory transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="container-x flex flex-1 flex-col justify-between pb-10 pt-28">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={go(item.href)}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                  className={`block py-1.5 text-[clamp(2.2rem,9vw,3.4rem)] font-medium leading-tight tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`space-y-5 transition-opacity duration-500 ${open ? "opacity-100 delay-500" : "opacity-0"}`}
          >
            <a href={navCta.href} onClick={go(navCta.href)} className="btn btn-light w-full">
              {navCta.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              <a href={phoneHref()} onClick={phoneHref().startsWith("#") ? go(phoneHref()) : undefined}>
                {site.contact.phone}
              </a>
              <a href={emailHref()} onClick={emailHref().startsWith("#") ? go(emailHref()) : undefined}>
                {site.contact.email}
              </a>
              <a
                href={whatsappHref()}
                onClick={whatsappHref().startsWith("#") ? go(whatsappHref()) : undefined}
                target={whatsappHref().startsWith("#") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
