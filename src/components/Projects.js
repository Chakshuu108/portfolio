import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/data/content';

const ACCENTS = {
  coral: { text: '#FF6B57', ring: 'rgba(255,107,87,0.35)' },
  violet: { text: '#A379F2', ring: 'rgba(163,121,242,0.35)' },
  mint: { text: '#3DD9B8', ring: 'rgba(61,217,184,0.35)' },
};

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-[13px] font-mono text-coral">Selected work</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 tracking-tight">
            Projects that shipped, not just trained
          </h2>
          <p className="text-dim mt-4 text-[15px] leading-relaxed">
            Every one of these went from raw data to a running demo — models, dashboards and interfaces included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => {
            const a = ACCENTS[p.accent];
            return (
              <div
                key={p.name}
                className="group relative rounded-2xl overflow-hidden panel-border bg-panel hover:-translate-y-1 transition-all duration-200"
                style={{ '--ring': a.ring }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: `0 0 0 1px ${a.ring}, 0 16px 40px -16px ${a.ring}` }}
                />
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${a.text}, transparent)` }} />
                <div className="p-6 md:p-7 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl tracking-tight">{p.name}</h3>
                    <span className="text-[12px] font-mono" style={{ color: a.text }}>{p.tag}</span>
                  </div>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center hover:bg-panel2 hover:border-ink/30 transition-colors"
                      aria-label={`Open ${p.name} demo`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <p className="text-[13.5px] text-dim leading-relaxed mb-5">{p.description}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono text-ink/70 bg-panel2 border border-line rounded-md px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-line">
                  <span className="text-[11px] font-mono text-dim">{p.period}</span>
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-semibold flex items-center gap-1 hover:gap-1.5 transition-all"
                      style={{ color: a.text }}
                    >
                      View demo <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-dim/60">Source on request</span>
                  )}
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
