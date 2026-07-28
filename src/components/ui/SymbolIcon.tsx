type SymbolIconProps = {
  type: string;
};

export function SymbolIcon({ type }: SymbolIconProps) {
  return (
    <span className={`symbol symbol-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}