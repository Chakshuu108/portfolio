export default function Logo({ size = 32, className = '' }) {
  return (
    <div
      className={`relative shrink-0 rounded-[10px] bg-gradient-to-br from-coral via-coral2 to-violet flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-white/10" />
      <span
        className="relative font-display font-bold tracking-tighter text-bg leading-none"
        style={{ fontSize: size * 0.46 }}
      >
        C<span className="font-medium opacity-80">G</span>
      </span>
      <span
        className="absolute rounded-full bg-mint"
        style={{ width: size * 0.1, height: size * 0.1, right: size * 0.12, top: size * 0.12 }}
      />
    </div>
  );
}
