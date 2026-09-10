import { FlaskConical, CheckCircle2 } from 'lucide-react';
import { RESEARCH } from '@/data/content';

export default function ResearchSection() {
  return (
    <section id="research" className="py-8 md:py-16 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet/15 border border-violet/25 flex items-center justify-center shrink-0">
            <FlaskConical size={18} className="text-violet" />
          </div>
          <div>
            <span className="text-[13px] font-mono text-violet">Research</span>
            <h3 className="font-display font-semibold text-2xl mt-1 tracking-tight">{RESEARCH.title}</h3>
            <p className="text-dim text-[14px] mt-1">{RESEARCH.supervisor}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-x-6 -inset-y-6 bg-violet/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden panel-border">
            <div className="h-[3px] w-full bg-gradient-to-r from-violet via-coral2 to-transparent" />
            <div className="noise-panel p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-mono text-dim">{RESEARCH.period}</span>
                <span className="text-[11px] font-mono text-violet flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet badge-dot" />
                  {RESEARCH.status}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {RESEARCH.points.map((p, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-2.5 bg-panel/70 border border-line rounded-xl px-3.5 py-3 transition-colors hover:bg-panel2/80 hover:border-white/15"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet transition-transform group-hover:scale-110" />
                    <span className="text-[13px] text-ink/90 leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
