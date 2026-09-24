type MaskIconProps = {
  src: string;
  className?: string;
};

/** Renders a monochrome PNG icon tinted with the current text color. */
export function MaskIcon({ src, className = "" }: MaskIconProps) {
  return (
    <span
      aria-hidden
      className={`bg-current ${className}`}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
      }}
    />
  );
}
