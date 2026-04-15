import FadeInWhenVisible from "../animations/FadeInWhenVisible";

export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <FadeInWhenVisible className={center ? "text-center" : ""}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-4 ${
            light ? "text-gold/60" : "text-gold-dark/70"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5 italic ${
          light ? "text-white" : "text-slate"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base max-w-xl font-light leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/40" : "text-slate/50"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`divider-gold mt-6 ${center ? "mx-auto" : ""}`} />
    </FadeInWhenVisible>
  );
}
