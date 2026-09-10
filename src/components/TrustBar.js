import { GraduationCap, Code2, Layers, Rocket } from 'lucide-react';
import { TRUST_STATS } from '@/data/content';

const ICONS = [GraduationCap, Code2, Layers, Rocket];
const ACCENTS = [
  { text: '#FF6B57', ring: 'rgba(255,107,87,0.35)', glow: 'rgba(255,107,87,0.18)' },
  { text: '#EA4B71', ring: 'rgba(234,75,113,0.35)', glow: 'rgba(234,75,113,0.18)' },
  { text: '#A379F2', ring: 'rgba(163,121,242,0.35)', glow: 'rgba(163,121,242,0.18)' },
  { text: '#3DD9B8', ring: 'rgba(61,217,184,0.35)', glow: 'rgba(61,217,184,0.18)' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-panel/30">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TRUST_STATS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={s.label}
                className="group relative rounded-2xl border border-line bg-panel/70 px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:bg-panel2/80"
                style={{ '--accent': a.text }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ boxShadow: `0 0 0 1px ${a.ring}, 0 12px 32px -12px ${a.glow}` }}
                />
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${a.text}18`, color: a.text }}
                >
                  <Icon size={17} />
                </div>
                <div className="font-display font-semibold text-2xl md:text-3xl text-ink">{s.value}</div>
                <div className="text-[13px] text-dim mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
