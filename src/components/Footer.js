import { NAV_LINKS, PROFILE } from '@/data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 md:px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-display font-medium text-[14px]">{PROFILE.name}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-dim hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
