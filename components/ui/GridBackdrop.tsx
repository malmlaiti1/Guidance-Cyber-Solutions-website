interface GridBackdropProps {
  dark?: boolean;
  size?: number;
}

export function GridBackdrop({ dark = false, size = 64 }: GridBackdropProps) {
  const c = dark ? "rgba(255,255,255,0.06)" : "rgba(10,31,68,0.06)";
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage:
          `linear-gradient(to right, ${c} 1px, transparent 1px),` +
          `linear-gradient(to bottom, ${c} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
