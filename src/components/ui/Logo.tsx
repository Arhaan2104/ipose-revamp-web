import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
}

const dimensions = {
  sm: { height: 32, width: 70 },
  md: { height: 40, width: 87 },
  lg: { height: 56, width: 122 },
};

export default function Logo({
  size = "md",
  className = "",
}: LogoProps) {
  const { height, width } = dimensions[size];

  return (
    <Image
      src="/images/revamp-logo.png"
      alt="rEVamp"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
      aria-label="rEVamp logo"
    />
  );
}
