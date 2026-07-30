type SymbolIconProps = {
  type: string;
};

const symbolImages: Record<string, string> = {
  building: "/brand/building-regular-full.svg",
  branch: "/brand/handshake-regular-full.svg",
  mind: "/brand/user-group-solid-full.svg",
  network: "/brand/handshake-regular-full.svg",
};

export function SymbolIcon({ type }: SymbolIconProps) {
  const image = symbolImages[type];

  return (
    <span className={`symbol symbol-${type}`} aria-hidden="true">
      {image ? <img src={image} alt="" /> : <span />}
    </span>
  );
}
