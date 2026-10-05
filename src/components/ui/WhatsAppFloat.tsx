"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { site, isPlaceholder, whatsappHref } from "@/config/site";

/** Floating WhatsApp button — appears after the hero, only once a number is set in site.ts. */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isPlaceholder(site.contact.whatsapp)) return null;

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Moon Mist on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-fg text-canvas shadow-[0_10px_30px_-10px_rgb(0_0_0/0.45)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle size={22} aria-hidden="true" />
    </a>
  );
}
