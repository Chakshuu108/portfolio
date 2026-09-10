'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Bot, Database, Cpu, GitBranch, AlertTriangle, Upload, Globe,
  TrendingUp, RotateCcw, Camera, ScanLine, CloudRain, Layers, CheckCircle2,
} from 'lucide-react';
import { FLOWS } from '@/data/content';

const ICONS = {
  FileText, Bot, Database, Cpu, GitBranch, AlertTriangle, Upload, Globe,
  TrendingUp, RotateCcw, Camera, ScanLine, CloudRain, Layers, CheckCircle2,
};

const VBW = 900;
const VBH = 480;

const POS = {
  trigger: { x: 30, y: 195, w: 80, h: 80 },
  agent: { x: 170, y: 165, w: 200, h: 110 },
  subA: { x: 140, y: 360, w: 110, h: 100 },
  subB: { x: 290, y: 360, w: 110, h: 100 },
  decision: { x: 470, y: 180, w: 130, h: 100 },
  trueNode: { x: 680, y: 60, w: 190, h: 100 },
  falseNode: { x: 680, y: 300, w: 190, h: 100 },
};

const pct = (v, total) => `${(v / total) * 100}%`;

function boxStyle(box) {
  return {
    left: pct(box.x, VBW),
    top: pct(box.y, VBH),
    width: pct(box.w, VBW),
    height: pct(box.h, VBH),
  };
}

function center(box) {
  return { x: box.x + box.w / 2, y: box.y + box.h / 2 };
}

function curve(x1, y1, x2, y2) {
  const mx = x1 + (x2 - x1) / 2;
  return `M ${x1},${y1} C ${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

const ACCENT_HEX = { coral: '#FF6B57', mint: '#3DD9B8', violet: '#A379F2' };

export default function ProjectFlow() {
  const [active, setActive] = useState(FLOWS[0]);
  const Icon = (name) => ICONS[name] || Bot;

  const triggerR = { x: POS.trigger.x + POS.trigger.w, y: center(POS.trigger).y };
  const agentL = { x: POS.agent.x, y: center(POS.agent).y };
  const agentR = { x: POS.agent.x + POS.agent.w, y: center(POS.agent).y };
  const agentB = { x: center(POS.agent).x, y: POS.agent.y + POS.agent.h };
  const subAT = { x: center(POS.subA).x, y: POS.subA.y };
  const subBT = { x: center(POS.subB).x, y: POS.subB.y };
  const decL = { x: POS.decision.x, y: center(POS.decision).y };
  const decR = { x: POS.decision.x + POS.decision.w, y: center(POS.decision).y };
  const trueL = { x: POS.trueNode.x, y: center(POS.trueNode).y };
  const falseL = { x: POS.falseNode.x, y: center(POS.falseNode).y };

  return (
    <section className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="text-[13px] font-mono text-violet">How it works</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-3 tracking-tight">
            Pick a project, watch the pipeline
          </h2>
          <p className="text-dim mt-4 text-[15px] leading-relaxed">
            Every project here is a real pipeline, not a black box. Click through to see how each one actually runs.
          </p>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-5">
          {/* Sidebar */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {FLOWS.map((f) => {
              const isActive = f.key === active.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f)}
                  className={`text-left shrink-0 md:shrink w-[220px] md:w-full rounded-2xl border px-4 py-3.5 transition-colors ${
                    isActive ? 'bg-panel2 border-white/15' : 'bg-transparent border-transparent hover:bg-panel/60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-1 rounded-full self-stretch shrink-0 transition-colors ${
                        isActive ? 'bg-gradient-to-b from-coral to-violet' : 'bg-transparent'
                      }`}
                    />
                    <div>
                      <div className="font-display font-semibold text-[14.5px]">
                        {f.name} <span className="text-dim font-normal">can</span>
                      </div>
                      <div className="text-[12.5px] text-dim mt-0.5 leading-snug">{f.blurb}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Canvas */}
          <div
            className="relative rounded-3xl panel-border bg-panel bg-grid overflow-hidden"
            style={{ aspectRatio: `${VBW}/${VBH}` }}
          >
            <svg
              viewBox={`0 0 ${VBW} ${VBH}`}
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <marker id="arrowNeutral" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.3)" />
                </marker>
                <marker id="arrowTrue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT_HEX[active.trueNode.accent]} />
                </marker>
                <marker id="arrowFalse" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT_HEX[active.falseNode.accent]} />
                </marker>
              </defs>

              <path
                d={curve(triggerR.x, triggerR.y, agentL.x, agentL.y)}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                markerEnd="url(#arrowNeutral)"
              />
              <path
                d={curve(agentR.x, agentR.y, decL.x, decL.y)}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                markerEnd="url(#arrowNeutral)"
              />
              <path
                d={curve(agentB.x, agentB.y, subAT.x, subAT.y)}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d={curve(agentB.x, agentB.y, subBT.x, subBT.y)}
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d={curve(decR.x, decR.y, trueL.x, trueL.y)}
                fill="none"
                stroke={ACCENT_HEX[active.trueNode.accent]}
                strokeOpacity="0.55"
                strokeWidth="2"
                markerEnd="url(#arrowTrue)"
              />
              <path
                d={curve(decR.x, decR.y, falseL.x, falseL.y)}
                fill="none"
                stroke={ACCENT_HEX[active.falseNode.accent]}
                strokeOpacity="0.55"
                strokeWidth="2"
                markerEnd="url(#arrowFalse)"
              />

              <text
                x={decR.x + 22}
                y={(decR.y + trueL.y) / 2 - 14}
                fill={ACCENT_HEX[active.trueNode.accent]}
                fontSize="13"
                fontFamily="var(--font-mono)"
                opacity="0.85"
              >
                true
              </text>
              <text
                x={decR.x + 22}
                y={(decR.y + falseL.y) / 2 + 22}
                fill={ACCENT_HEX[active.falseNode.accent]}
                fontSize="13"
                fontFamily="var(--font-mono)"
                opacity="0.85"
              >
                false
              </text>
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                {/* Trigger */}
                <div className="absolute flex flex-col items-center gap-1.5" style={boxStyle(POS.trigger)}>
                  <div className="w-full h-full rounded-2xl bg-panel2 border border-line flex items-center justify-center">
                    {(() => {
                      const I = Icon(active.trigger.icon);
                      return <I size={22} className="text-mint" />;
                    })()}
                  </div>
                </div>
                <div
                  className="absolute text-[10.5px] text-dim text-center w-[140px] -translate-x-1/2"
                  style={{ left: pct(POS.trigger.x + POS.trigger.w / 2, VBW), top: pct(POS.trigger.y + POS.trigger.h + 8, VBH) }}
                >
                  {active.trigger.label}
                </div>

                {/* Agent */}
                <div
                  className="absolute rounded-2xl bg-panel2 border border-line flex flex-col items-center justify-center text-center px-3 gap-1"
                  style={boxStyle(POS.agent)}
                >
                  {(() => {
                    const I = Icon(active.agent.icon);
                    return <I size={22} className="text-violet mb-1" />;
                  })()}
                  <span className="font-display font-semibold text-[13px] leading-tight">{active.agent.label}</span>
                  <span className="text-[11px] text-dim font-mono">{active.agent.sub}</span>
                </div>

                {/* SubA */}
                <div className="absolute flex flex-col items-center gap-1.5" style={boxStyle(POS.subA)}>
                  <div className="w-14 h-14 rounded-full bg-panel2 border border-line flex items-center justify-center">
                    {(() => {
                      const I = Icon(active.subA.icon);
                      return <I size={18} className="text-dim" />;
                    })()}
                  </div>
                  <span className="text-[10.5px] text-dim text-center leading-tight">{active.subA.label}</span>
                </div>

                {/* SubB */}
                <div className="absolute flex flex-col items-center gap-1.5" style={boxStyle(POS.subB)}>
                  <div className="w-14 h-14 rounded-full bg-panel2 border border-line flex items-center justify-center">
                    {(() => {
                      const I = Icon(active.subB.icon);
                      return <I size={18} className="text-dim" />;
                    })()}
                  </div>
                  <span className="text-[10.5px] text-dim text-center leading-tight">{active.subB.label}</span>
                </div>

                {/* Decision */}
                <div
                  className="absolute rounded-2xl bg-panel2 border border-line flex flex-col items-center justify-center text-center px-2 gap-1"
                  style={boxStyle(POS.decision)}
                >
                  {(() => {
                    const I = Icon(active.decision.icon);
                    return <I size={20} className="text-coral" />;
                  })()}
                  <span className="text-[11.5px] font-medium leading-tight">{active.decision.label}</span>
                </div>

                {/* True node */}
                <div
                  className="absolute rounded-2xl border flex flex-col items-center justify-center text-center px-3 gap-1"
                  style={{
                    ...boxStyle(POS.trueNode),
                    background: `${ACCENT_HEX[active.trueNode.accent]}12`,
                    borderColor: `${ACCENT_HEX[active.trueNode.accent]}40`,
                  }}
                >
                  {(() => {
                    const I = Icon(active.trueNode.icon);
                    return <I size={20} style={{ color: ACCENT_HEX[active.trueNode.accent] }} className="mb-0.5" />;
                  })()}
                  <span className="font-display font-semibold text-[12.5px] leading-tight">{active.trueNode.label}</span>
                  <span className="text-[10.5px] text-dim">{active.trueNode.sub}</span>
                </div>

                {/* False node */}
                <div
                  className="absolute rounded-2xl border flex flex-col items-center justify-center text-center px-3 gap-1"
                  style={{
                    ...boxStyle(POS.falseNode),
                    background: `${ACCENT_HEX[active.falseNode.accent]}12`,
                    borderColor: `${ACCENT_HEX[active.falseNode.accent]}40`,
                  }}
                >
                  {(() => {
                    const I = Icon(active.falseNode.icon);
                    return <I size={20} style={{ color: ACCENT_HEX[active.falseNode.accent] }} className="mb-0.5" />;
                  })()}
                  <span className="font-display font-semibold text-[12.5px] leading-tight">{active.falseNode.label}</span>
                  <span className="text-[10.5px] text-dim">{active.falseNode.sub}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
