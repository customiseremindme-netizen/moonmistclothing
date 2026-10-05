type Props = { children: React.ReactNode; className?: string };

/** Small, widely tracked uppercase label with an accent rule. */
export default function Overline({ children, className = "" }: Props) {
  return (
    <p data-reveal="fade" className={`eyebrow flex items-center gap-3 text-fg-muted ${className}`}>
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}
