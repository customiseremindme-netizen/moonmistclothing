import Image from "next/image";
import type { SiteImage } from "@/data/content";

type Props = {
  image: SiteImage;
  sizes: string;
  className?: string;
  /** Parallax strength in % (desktop only). 0 disables. */
  parallax?: number;
  /** Wipe the image open when it scrolls into view. */
  reveal?: boolean;
  /** Elegant hover zoom. */
  hover?: boolean;
  /** Mark as decorative (alt="") when nearby text already describes it. */
  decorative?: boolean;
  children?: React.ReactNode;
};

/** Image container used across the site: overflow mask + optional reveal/parallax. */
export default function MediaFrame({
  image,
  sizes,
  className = "",
  parallax = 0,
  reveal = true,
  hover = false,
  decorative = false,
  children,
}: Props) {
  return (
    <figure
      data-reveal={reveal ? "clip" : undefined}
      data-parallax={parallax || undefined}
      className={`relative overflow-hidden bg-sand ${hover ? "img-hover" : ""} ${className}`}
    >
      <div data-parallax-target className="absolute inset-0">
        <Image src={image.src} alt={decorative ? "" : image.alt} fill sizes={sizes} className="object-cover" />
      </div>
      {children}
    </figure>
  );
}
