// 'use client';

// import { useState } from 'react';
// import {
//   Eye, MessageSquare, Sparkles, Shuffle, Brain, Gamepad2,
//   SlidersHorizontal, Wand2, Rocket, Layers3, Database, Cpu,
// } from 'lucide-react';
// import { SiLangchain } from 'react-icons/si';
// import { SKILLS_ROW_1, SKILLS_ROW_2 } from '@/data/content';

// /* Row 1 — real tools & frameworks: full-color official logo art (devicon), same
//    treatment every real SaaS "integrations" strip uses — the mark's own colors sit
//    directly on a uniform dark tile, no per-brand tinting on the card itself. */
// const DEVICON = (slug, variant = 'original') =>
//   `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

// const BRAND_ICONS = {
//   Python: { src: DEVICON('python') },
//   PyTorch: { src: DEVICON('pytorch') },
//   TensorFlow: { src: DEVICON('tensorflow') },
//   'Scikit-Learn': { src: DEVICON('scikitlearn') },
//   OpenCV: { src: DEVICON('opencv') },
//   Streamlit: { src: DEVICON('streamlit') },
//   Pandas: { src: DEVICON('pandas'), invert: true },
//   NumPy: { src: DEVICON('numpy') },
//   'C++': { src: DEVICON('cplusplus') },
//   SQL: { src: DEVICON('mysql') },
//   Git: { src: DEVICON('git') },
//   /* no official colored mark in devicon — render as a solid brand-color app-icon badge */
//   LangChain: { Icon: SiLangchain, badge: '#1C3C34', color: '#3DD68C' },
// };

// /* Row 2 — concepts / specializations, not literal products: themed lucide icons,
//    drawn straight on the card like the reference's non-branded glyphs (sparkles, bars). */
// const CONCEPT_ICONS = {
//   'Computer Vision': Eye,
//   NLP: MessageSquare,
//   'Generative AI': Sparkles,
//   Transformers: Shuffle,
//   LLMs: Brain,
//   'Reinforcement Learning': Gamepad2,
//   'Fine-tuning': SlidersHorizontal,
//   'Feature Engineering': Wand2,
//   'Model Deployment': Rocket,
//   'Data Structures': Layers3,
//   DBMS: Database,
//   'Operating Systems': Cpu,
// };

// const CONCEPT_PALETTE = ['#FF6B57', '#EA4B71', '#A379F2', '#3DD9B8', '#F5B942', '#5EA8FF'];

// function Tile({ label, idx }) {
//   const brand = BRAND_ICONS[label];
//   const ConceptIcon = CONCEPT_ICONS[label];
//   const conceptColor = CONCEPT_PALETTE[idx % CONCEPT_PALETTE.length];
//   const [imgFailed, setImgFailed] = useState(false);

//   return (
//     <div className="relative group shrink-0">
//       <div
//         className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl border border-white/[0.08] bg-white/[0.035] backdrop-blur-sm flex items-center justify-center
//                    transition-all duration-200 ease-out
//                    hover:-translate-y-1.5 hover:scale-[1.05] hover:border-white/[0.16] hover:bg-white/[0.055]
//                    shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)]"
//       >
//         {brand && brand.src && !imgFailed ? (
//           <div
//             className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg"
//             style={brand.invert ? { filter: 'brightness(0) invert(1) opacity(0.92)' } : undefined}
//           >
//             <img
//               src={brand.src}
//               alt={label}
//               width={36}
//               height={36}
//               className="w-full h-full object-contain"
//               loading="lazy"
//               draggable={false}
//               onError={() => setImgFailed(true)}
//             />
//           </div>
//         ) : brand && brand.Icon ? (
//           <div
//             className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
//             style={{ backgroundColor: brand.badge }}
//           >
//             <brand.Icon size={19} style={{ color: brand.color }} />
//           </div>
//         ) : (
//           <ConceptIcon size={25} strokeWidth={1.75} style={{ color: conceptColor }} />
//         )}
//       </div>
//       <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-mono text-ink bg-panel2 border border-line rounded-md px-2 py-1 opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-150 z-20 shadow-lg">
//         {label}
//       </span>
//     </div>
//   );
// }

// function Row({ items, direction }) {
//   const doubled = [...items, ...items];
//   return (
//     <div className="marquee-wrap overflow-x-hidden overflow-y-visible py-3">
//       <div className={`marquee-row ${direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'}`}>
//         {doubled.map((label, i) => (
//           <Tile key={`${label}-${i}`} label={label} idx={i} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function SkillsMarquee() {
//   return (
//     <section id="skills" className="py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
//       <div className="max-w-3xl mx-auto text-center mb-14">
//         <span className="text-[13px] font-mono text-coral">Skills</span>
//         <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 tracking-tight">
//           One stack, plugged into every layer
//         </h2>
//         <p className="text-dim mt-4 text-[15px] leading-relaxed">
//           Frameworks and languages for building — libraries and concepts for reasoning about what I build.
//         </p>
//       </div>

//       <div className="relative flex flex-col gap-4 max-w-6xl mx-auto">
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10" />
//         <Row items={SKILLS_ROW_1} direction="left" />
//         <Row items={SKILLS_ROW_2} direction="right" />
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import {
  Eye, MessageSquare, Sparkles, Shuffle, Brain, Gamepad2,
  SlidersHorizontal, Wand2, Rocket, Layers3, Database, Cpu,
} from 'lucide-react';
import { SiLangchain } from 'react-icons/si';
import { SKILLS_ROW_1, SKILLS_ROW_2 } from '@/data/content';

/* Row 1 — real tools & frameworks: full-color official logo art (devicon), same
   treatment every real SaaS "integrations" strip uses — the mark's own colors sit
   directly on a uniform dark tile, no per-brand tinting on the card itself. */
const DEVICON = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const BRAND_ICONS = {
  Python: { src: DEVICON('python') },
  PyTorch: { src: DEVICON('pytorch') },
  TensorFlow: { src: DEVICON('tensorflow') },
  'Scikit-Learn': { src: DEVICON('scikitlearn') },
  OpenCV: { src: DEVICON('opencv') },
  Streamlit: { src: DEVICON('streamlit') },
  Pandas: { src: DEVICON('pandas'), invert: true },
  NumPy: { src: DEVICON('numpy') },
  'C++': { src: DEVICON('cplusplus') },
  SQL: { src: DEVICON('mysql') },
  Git: { src: DEVICON('git') },
  /* no official colored mark in devicon — render as a solid brand-color app-icon badge */
  LangChain: { Icon: SiLangchain, badge: '#1C3C34', color: '#3DD68C' },
};

/* Row 2 — concepts / specializations, not literal products: themed lucide icons,
   drawn straight on the card like the reference's non-branded glyphs (sparkles, bars). */
const CONCEPT_ICONS = {
  'Computer Vision': Eye,
  NLP: MessageSquare,
  'Generative AI': Sparkles,
  Transformers: Shuffle,
  LLMs: Brain,
  'Reinforcement Learning': Gamepad2,
  'Fine-tuning': SlidersHorizontal,
  'Feature Engineering': Wand2,
  'Model Deployment': Rocket,
  'Data Structures': Layers3,
  DBMS: Database,
  'Operating Systems': Cpu,
};

const CONCEPT_PALETTE = [
  { bg: '#3A1C1C', fg: '#FF6B57' },
  { bg: '#3A1424', fg: '#EA4B71' },
  { bg: '#241C40', fg: '#A379F2' },
  { bg: '#0F3B33', fg: '#3DD9B8' },
  { bg: '#3A2E10', fg: '#F5B942' },
  { bg: '#12283F', fg: '#5EA8FF' },
];

function Tile({ label, idx }) {
  const brand = BRAND_ICONS[label];
  const ConceptIcon = CONCEPT_ICONS[label];
  const conceptColor = CONCEPT_PALETTE[idx % CONCEPT_PALETTE.length];
  const [imgFailed, setImgFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl border border-white/[0.08] bg-white/[0.035] backdrop-blur-sm flex items-center justify-center
                   transition-all duration-200 ease-out
                   hover:-translate-y-1.5 hover:scale-[1.05] hover:border-white/[0.16] hover:bg-white/[0.055]
                   shadow-[0_10px_30px_-14px_rgba(0,0,0,0.6)]"
        style={hovered ? { transform: 'translateY(-6px) scale(1.05)', borderColor: 'rgba(255,255,255,0.16)', backgroundColor: 'rgba(255,255,255,0.055)' } : undefined}
      >
        {brand && brand.src && !imgFailed ? (
          <div
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg"
            style={brand.invert ? { filter: 'brightness(0) invert(1) opacity(0.92)' } : undefined}
          >
            <img
              src={brand.src}
              alt={label}
              width={36}
              height={36}
              className="w-full h-full object-contain"
              loading="lazy"
              draggable={false}
              onError={() => setImgFailed(true)}
            />
          </div>
        ) : brand && brand.Icon ? (
          <div
            className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: brand.badge }}
          >
            <brand.Icon size={19} style={{ color: brand.color }} />
          </div>
        ) : brand ? (
          /* real tool whose logo image failed to load — fall back to initials, never to a concept icon */
          <span className="text-sm font-mono font-semibold text-dim">{label.slice(0, 2).toUpperCase()}</span>
        ) : (
          <div
            className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: conceptColor.bg }}
          >
            <ConceptIcon size={19} strokeWidth={1.9} style={{ color: conceptColor.fg }} />
          </div>
        )}
      </div>
      <span
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-mono text-ink bg-panel2 border border-line rounded-md px-2 py-1 transition-all duration-150 z-20 shadow-lg"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) translateY(${hovered ? 0 : 4}px) scale(${hovered ? 1 : 0.95})`,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Row({ items, direction }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap overflow-x-hidden overflow-y-visible py-3">
      <div className={`marquee-row ${direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'}`}>
        {doubled.map((label, i) => (
          <Tile key={`${label}-${i}`} label={label} idx={i} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-[13px] font-mono text-coral">Skills</span>
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 tracking-tight">
          One stack, plugged into every layer
        </h2>
        <p className="text-dim mt-4 text-[15px] leading-relaxed">
          Frameworks and languages for building — libraries and concepts for reasoning about what I build.
        </p>
      </div>

      <div className="relative flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        <Row items={SKILLS_ROW_1} direction="left" />
        <Row items={SKILLS_ROW_2} direction="right" />
      </div>
    </section>
  );
}
