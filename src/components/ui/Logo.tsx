interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

const dimensions = {
  sm: { height: 32 },
  md: { height: 40 },
  lg: { height: 64 },
};

export default function Logo({
  size = "md",
  variant = "light",
  className = "",
}: LogoProps) {
  const { height } = dimensions[size];
  const width = Math.round(height * 3.6);

  const textColor = variant === "light" ? "#FFFFFF" : "#2D3E59";
  const accent = "#E8896B";

  return (
    <svg
      viewBox="0 0 310 92"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="rEVamp logo"
    >
      {/* "r" — lowercase italic serif */}
      <text
        x="0"
        y="73"
        fill={textColor}
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="50"
        fontStyle="italic"
      >
        r
      </text>

      {/* "E" — uppercase large */}
      <text
        x="26"
        y="73"
        fill={accent}
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="78"
        fontStyle="italic"
      >
        E
      </text>

      {/* Lightning bolt — the hero element
          Wide, angular zigzag bolt. Top extends above E cap height.
          Bottom tip points down to the V vertex. */}
      <path
        d="M120 -2 L92 34 L108 32 L80 78 L114 28 L98 30 Z"
        fill={accent}
        strokeLinejoin="miter"
      />

      {/* V left stroke — thick angled line from upper-left to bottom vertex */}
      <path
        d="M78 6 L98 76"
        stroke={accent}
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* V right stroke — thick angled line from upper-right to bottom vertex */}
      <path
        d="M134 6 L98 76"
        stroke={accent}
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* "amp" — lowercase italic serif */}
      <text
        x="136"
        y="73"
        fill={textColor}
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="50"
        fontStyle="italic"
      >
        amp
      </text>

      {/* Swoosh line 1 */}
      <path
        d="M18 80 Q150 65 284 80"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Swoosh line 2 */}
      <path
        d="M30 86 Q155 73 274 86"
        fill="none"
        stroke={accent}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
