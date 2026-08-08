import Image from "next/image";

type BrandMarkProps = {
  variant?: "mark" | "inc" | "tagline";
  className?: string;
  priority?: boolean;
};

const assets = {
  mark: {
    src: "/logo-chikyu-x.svg",
    alt: "CHIKYU X",
    width: 192,
    height: 42,
  },
  inc: {
    src: "/logo-chikyu-x-inc.svg",
    alt: "CHIKYU X Inc.",
    width: 254,
    height: 42,
  },
  tagline: {
    src: "/tagline.svg",
    alt: "NATURE × SPIRIT × TECHNOLOGY",
    width: 683,
    height: 42,
  },
} as const;

export function BrandMark({
  variant = "mark",
  className = "",
  priority = false,
}: BrandMarkProps) {
  const asset = assets[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
