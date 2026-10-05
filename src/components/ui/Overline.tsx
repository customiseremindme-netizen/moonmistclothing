type Props = { children: React.ReactNode; tone?: "dark" | "light"; className?: string };

/** Small, widely tracked uppercase label with a bronze rule. */
export default function Overline({ children, tone = "light", className = "" }: Props) {
  return (
    <p
      data-reveal="fade"
      className={`eyebrow flex items-center gap-3 ${tone === "dark" ? "text-mist" : "text-muted"} ${className}`}
    >
      <span className="h-px w-8 bg-bronze" aria-hidden="true" />
      {children}
    </p>
  );
}
