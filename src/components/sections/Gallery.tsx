"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import Overline from "@/components/ui/Overline";
import { gallery } from "@/data/content";
import { getLenis } from "@/lib/lenis";

/** Editorial masonry gallery with a simple, keyboard-friendly lightbox. */
export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = gallery.items.length;

  const open = (i: number) => setIndex(i);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: number) => setIndex((i) => (i === null ? i : (i + dir + count) % count)), [count]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      getLenis()?.stop();
    } else if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index === null ? null : gallery.items[index];

  return (
    <section data-nav-theme="light" aria-labelledby="gallery-title" className="bg-ivory py-24 text-ink sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="mb-14 max-w-3xl sm:mb-20">
          <Overline>{gallery.overline}</Overline>
          <h2 id="gallery-title" data-reveal="lines" className="heading-lg mt-6">
            {gallery.heading}
          </h2>
        </div>

        <ul className="columns-2 gap-3 sm:gap-5 lg:columns-3 lg:gap-6">
          {gallery.items.map((img, i) => (
            <li key={img.src} className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6">
              <figure
                data-reveal="clip"
                className="img-hover group relative overflow-hidden rounded-sm bg-sand"
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 46vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => open(i)}
                  className="absolute inset-0 flex items-end justify-end p-3 sm:p-4"
                  aria-label={`View larger: ${img.alt}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/90 text-ink opacity-100 transition-opacity duration-500 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:opacity-100">
                    <Plus size={18} aria-hidden="true" />
                  </span>
                </button>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => {
          close();
          getLenis()?.start();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label="Image viewer"
        className="m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 text-ivory backdrop:bg-ink/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="container-x flex h-16 items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.22em]">
                {String(index! + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <button type="button" onClick={close} className="grid h-12 w-12 place-items-center" aria-label="Close image viewer">
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <div
              className="relative mx-4 flex-1 sm:mx-20"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="container-x flex items-center justify-between gap-4 py-5">
              <p className="text-sm text-mist">{current.alt}</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 hover:border-ivory" aria-label="Previous image">
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => step(1)} className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 hover:border-ivory" aria-label="Next image">
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
