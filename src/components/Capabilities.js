import { CAPABILITIES } from '@/data/content';

export default function Capabilities() {
  return (
    <section className="py-8 md:py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {CAPABILITIES.map((c, i) => (
          <div key={c.title} className="panel-border bg-panel rounded-2xl p-6">
            <span className="font-mono text-[12px] text-dim">0{i + 1}</span>
            <h3 className="font-display font-semibold text-[17px] mt-3 mb-2 tracking-tight">{c.title}</h3>
            <p className="text-[13.5px] text-dim leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
