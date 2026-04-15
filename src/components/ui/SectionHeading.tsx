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
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-cream" : "text-navy-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-cream/70" : "text-navy-dark/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeInWhenVisible>
  );
}
