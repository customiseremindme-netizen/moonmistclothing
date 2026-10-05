import Image from "next/image";
import { logos } from "@/data/content";
import { site } from "@/config/site";

type Props = {
  className?: string;
  /** "auto" follows the surrounding theme; "light" forces the white logo (e.g. over photos). */
  tone?: "auto" | "light" | "dark";
  sizes?: string;
};

/** The supplied horizontal wordmark — never redrawn, only recoloured for contrast. */
export default function Logo({ className = "h-5 w-auto", tone = "auto", sizes = "200px" }: Props) {
  const { src, width, height } = logos.wordmark;
  const toneClass = tone === "auto" ? "logo-adaptive" : tone === "dark" ? "brightness-0" : "";
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={site.name}
      sizes={sizes}
      loading="eager"
      className={`${toneClass} ${className}`}
    />
  );
}
