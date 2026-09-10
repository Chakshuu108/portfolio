import { TIMELINE } from '@/data/content';

export default function Timeline() {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 border-y border-line bg-panel/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-[13px] font-mono text-coral">Timeline</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 tracking-tight">
            How it&apos;s gone so far
          </h2>
        </div>

        <div className="flex flex-col">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-coral shrink-0 mt-1.5" />
                {i !== TIMELINE.length - 1 && <span className="w-px flex-1 bg-line" />}
              </div>
              <div className={`pb-10 ${i === TIMELINE.length - 1 ? 'pb-0' : ''}`}>
                <span className="text-[12px] font-mono text-dim">{t.year}</span>
                <h4 className="font-display font-medium text-[16px] mt-1">{t.label}</h4>
                <p className="text-[13px] text-dim mt-0.5">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
