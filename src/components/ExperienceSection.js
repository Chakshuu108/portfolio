// import { Briefcase, CheckCircle2 } from 'lucide-react';
// import { EXPERIENCE } from '@/data/content';

// export default function ExperienceSection() {
//   return (
//     <section id="experience" className="py-8 md:py-16 px-5 md:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-6 flex items-start gap-3">
//           <div className="w-10 h-10 rounded-xl bg-coral/15 border border-coral/25 flex items-center justify-center shrink-0">
//             <Briefcase size={18} className="text-coral" />
//           </div>
//           <div>
//             <span className="text-[13px] font-mono text-coral">Experience</span>
//             <h3 className="font-display font-semibold text-2xl mt-1 tracking-tight">{EXPERIENCE.role}</h3>
//             <p className="text-dim text-[14px] mt-1">{EXPERIENCE.company}</p>
//           </div>
//         </div>

//         <div className="relative">
//           <div className="absolute -inset-x-6 -inset-y-6 bg-coral/10 blur-[80px] rounded-full pointer-events-none" />
//           <div className="relative rounded-3xl overflow-hidden panel-border">
//             <div className="h-[3px] w-full bg-gradient-to-r from-coral via-coral2 to-transparent" />
//             <div className="noise-panel p-6 md:p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <span className="text-[12px] font-mono text-dim">{EXPERIENCE.period}</span>
//                 <span className="text-[11px] font-mono text-mint flex items-center gap-1.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-mint badge-dot" />
//                   Live in production
//                 </span>
//               </div>
//               <div className="flex flex-col gap-3">
//                 {EXPERIENCE.points.map((p, i) => (
//                   <div
//                     key={i}
//                     className="group flex items-start gap-2.5 bg-panel/70 border border-line rounded-xl px-3.5 py-3 transition-colors hover:bg-panel2/80 hover:border-white/15"
//                   >
//                     <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-mint transition-transform group-hover:scale-110" />
//                     <span className="text-[13px] text-ink/90 leading-relaxed">{p}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Briefcase, CheckCircle2, Activity, Database, Zap } from 'lucide-react';
import { EXPERIENCE } from '@/data/content';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-8 md:py-16 px-5 md:px-8"
    >
      {/* ================= ANIMATED EXPERIENCE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Moving coral glow */}
        <div className="experience-glow glow-coral-main" />

        {/* Secondary mint glow */}
        <div className="experience-glow glow-mint-main" />

        {/* Production signal */}
        <div className="production-signal signal-1" />
        <div className="production-signal signal-2" />
        <div className="production-signal signal-3" />
        <div className="production-signal signal-4" />

        {/* Moving horizontal data streams */}
        <div className="data-stream stream-1">
          <span />
        </div>

        <div className="data-stream stream-2">
          <span />
        </div>

        <div className="data-stream stream-3">
          <span />
        </div>

        {/* Production nodes */}
        <div className="production-node prod-1">
          <Activity size={13} />
        </div>

        <div className="production-node prod-2">
          <Database size={13} />
        </div>

        <div className="production-node prod-3">
          <Zap size={13} />
        </div>

        {/* Large subtle pulse rings */}
        <div className="experience-ring ring-a" />
        <div className="experience-ring ring-b" />

        {/* Moving vertical line */}
        <div className="production-line">
          <span />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6 flex items-start gap-3">

          <div className="relative">
            <div className="absolute inset-0 bg-coral/30 blur-lg rounded-xl animate-pulse" />

            <div className="relative w-10 h-10 rounded-xl bg-coral/15 border border-coral/25 flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-coral" />
            </div>
          </div>

          <div>
            <span className="text-[13px] font-mono text-coral">
              Experience
            </span>

            <h3 className="font-display font-semibold text-2xl mt-1 tracking-tight">
              {EXPERIENCE.role}
            </h3>

            <p className="text-dim text-[14px] mt-1">
              {EXPERIENCE.company}
            </p>
          </div>
        </div>

        {/* Experience Card */}
        <div className="relative">

          {/* Coral glow */}
          <div className="absolute -inset-x-6 -inset-y-6 bg-coral/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden panel-border">

            {/* Top gradient */}
            <div className="h-[3px] w-full bg-gradient-to-r from-coral via-coral2 to-transparent" />

            <div className="noise-panel p-6 md:p-8">

              {/* Period + Status */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-[12px] font-mono text-dim">
                  {EXPERIENCE.period}
                </span>

                <span className="text-[11px] font-mono text-mint flex items-center gap-1.5">

                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-60" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-mint badge-dot" />
                  </span>

                  Live in production
                </span>
              </div>

              {/* Experience points */}
              <div className="flex flex-col gap-3">

                {EXPERIENCE.points.map((p, i) => (
                  <div
                    key={i}
                    className="
                      group flex items-start gap-2.5
                      bg-panel/70
                      border border-line
                      rounded-xl
                      px-3.5 py-3
                      transition-all duration-300
                      hover:bg-panel2/80
                      hover:border-coral/25
                      hover:-translate-y-0.5
                    "
                  >
                    <CheckCircle2
                      size={15}
                      className="
                        mt-0.5 shrink-0
                        text-mint
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />

                    <span className="text-[13px] text-ink/90 leading-relaxed">
                      {p}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= ANIMATION CSS ================= */}
      <style>{`

        /* ---------- GLOWS ---------- */

        .experience-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .glow-coral-main {
          width: 300px;
          height: 300px;
          left: -120px;
          top: 20%;
          background: rgb(251 113 133);
          opacity: 0.13;
          animation: experienceGlow 12s ease-in-out infinite;
        }

        .glow-mint-main {
          width: 220px;
          height: 220px;
          right: -80px;
          bottom: 5%;
          background: rgb(52 211 153);
          opacity: 0.08;
          animation: experienceGlowReverse 15s ease-in-out infinite;
        }

        @keyframes experienceGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(100px, -60px) scale(1.3);
          }
        }

        @keyframes experienceGlowReverse {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-90px, -50px) scale(1.2);
          }
        }


        /* ---------- PRODUCTION SIGNALS ---------- */

        .production-signal {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgb(251 113 133);
          box-shadow:
            0 0 12px rgb(251 113 133 / 90%),
            0 0 35px rgb(251 113 133 / 60%);
        }

        .signal-1 {
          left: 12%;
          top: 25%;
          animation: signalFloat1 6s ease-in-out infinite;
        }

        .signal-2 {
          left: 30%;
          bottom: 18%;
          width: 4px;
          height: 4px;
          animation: signalFloat2 8s ease-in-out infinite;
        }

        .signal-3 {
          right: 16%;
          top: 30%;
          background: rgb(52 211 153);
          box-shadow:
            0 0 12px rgb(52 211 153 / 90%),
            0 0 35px rgb(52 211 153 / 50%);
          animation: signalFloat3 7s ease-in-out infinite;
        }

        .signal-4 {
          right: 30%;
          bottom: 25%;
          width: 4px;
          height: 4px;
          animation: signalFloat1 10s ease-in-out infinite reverse;
        }

        @keyframes signalFloat1 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(45px, -35px);
          }
        }

        @keyframes signalFloat2 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-35px, 25px);
          }
        }

        @keyframes signalFloat3 {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-55px, -25px);
          }
        }


        /* ---------- DATA STREAMS ---------- */

        .data-stream {
          position: absolute;
          height: 1px;
          overflow: hidden;
          background: linear-gradient(
            90deg,
            transparent,
            rgb(251 113 133 / 20%),
            transparent
          );
        }

        .data-stream span {
          position: absolute;
          width: 45px;
          height: 2px;
          top: -0.5px;
          background: linear-gradient(
            90deg,
            transparent,
            rgb(251 113 133),
            transparent
          );
          box-shadow: 0 0 12px rgb(251 113 133 / 70%);
        }

        .stream-1 {
          width: 280px;
          right: 5%;
          top: 24%;
          transform: rotate(-15deg);
        }

        .stream-2 {
          width: 220px;
          left: 5%;
          bottom: 22%;
          transform: rotate(12deg);
        }

        .stream-3 {
          width: 180px;
          right: 15%;
          bottom: 18%;
          transform: rotate(-25deg);
        }

        .stream-1 span {
          animation: streamMove 3s linear infinite;
        }

        .stream-2 span {
          animation: streamMove 4s linear infinite 1s;
        }

        .stream-3 span {
          animation: streamMove 3.5s linear infinite 1.5s;
        }

        @keyframes streamMove {
          from {
            left: -50px;
          }

          to {
            left: 100%;
          }
        }


        /* ---------- PRODUCTION NODES ---------- */

        .production-node {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(251 113 133 / 65%);
          background: rgb(251 113 133 / 6%);
          border: 1px solid rgb(251 113 133 / 15%);
          animation: nodeFloat 5s ease-in-out infinite;
        }

        .prod-1 {
          right: 12%;
          top: 18%;
        }

        .prod-2 {
          left: 10%;
          bottom: 18%;
          animation-delay: 1.5s;
          color: rgb(52 211 153 / 65%);
          border-color: rgb(52 211 153 / 15%);
          background: rgb(52 211 153 / 5%);
        }

        .prod-3 {
          right: 22%;
          bottom: 28%;
          animation-delay: 3s;
        }

        @keyframes nodeFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }


        /* ---------- PULSE RINGS ---------- */

        .experience-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgb(251 113 133 / 8%);
        }

        .ring-a {
          width: 240px;
          height: 240px;
          right: -60px;
          top: 8%;
          animation: ringPulse 6s ease-in-out infinite;
        }

        .ring-b {
          width: 160px;
          height: 160px;
          left: -50px;
          bottom: 5%;
          border-color: rgb(52 211 153 / 7%);
          animation: ringPulse 8s ease-in-out infinite reverse;
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.3;
          }

          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }


        /* ---------- VERTICAL PRODUCTION LINE ---------- */

        .production-line {
          position: absolute;
          right: 8%;
          top: 12%;
          width: 1px;
          height: 200px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgb(251 113 133 / 15%),
            transparent
          );
        }

        .production-line span {
          position: absolute;
          width: 3px;
          height: 35px;
          left: -1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgb(251 113 133),
            transparent
          );
          box-shadow: 0 0 15px rgb(251 113 133 / 60%);
          animation: lineTravel 4s linear infinite;
        }

        @keyframes lineTravel {
          from {
            top: -40px;
          }

          to {
            top: 100%;
          }
        }


        /* ---------- MOBILE ---------- */

        @media (max-width: 768px) {
          .research-network,
          .production-node,
          .experience-ring,
          .production-line {
            opacity: 0.25;
          }

          .experience-glow {
            opacity: 0.08;
          }
        }

      `}</style>
    </section>
  );
}