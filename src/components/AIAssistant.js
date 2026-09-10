'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { PROFILE } from '@/data/content';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: `Hey, I'm ${PROFILE.name.split(' ')[0]}'s personal AI. Ask me anything about his projects, experience, research, or skills.`,
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
  }, [open]);

  async function handleSend(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.reply) {
        setError(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError('Could not reach the assistant. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating launcher button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] flex items-center gap-2 bg-coral text-bg font-semibold text-[13px] px-4 py-3.5 rounded-full glow-coral hover:bg-coral2 transition-colors shadow-lg"
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
      >
        {open ? <X size={18} /> : <Sparkles size={18} />}
        <span className="hidden sm:inline">{open ? 'Close' : "Ask Chakshu's AI"}</span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 md:bottom-28 md:right-7 z-[60] w-[92vw] max-w-[380px] h-[520px] max-h-[70vh] flex flex-col bg-panel border border-line rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-line bg-panel2/60 shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-coral/15 text-coral">
                <Sparkles size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[13.5px] font-semibold text-ink leading-tight truncate">
                  Chakshu&apos;s Personal AI
                </p>
                <p className="text-[11px] text-dim leading-tight">Answers questions about Chakshu only</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] text-[13px] leading-relaxed rounded-2xl px-3.5 py-2.5 ${
                      m.role === 'user'
                        ? 'bg-coral text-bg font-medium rounded-br-sm'
                        : 'bg-panel2 border border-line text-ink rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 bg-panel2 border border-line text-dim text-[12.5px] rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                    <Loader2 size={13} className="animate-spin" />
                    Thinking…
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] text-[12.5px] leading-relaxed rounded-2xl rounded-bl-sm px-3.5 py-2.5 bg-coral2/10 border border-coral2/30 text-coral2">
                    {error}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 px-3 py-3 border-t border-line bg-panel2/40 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Chakshu's work…"
                disabled={loading}
                className="flex-1 bg-panel border border-line rounded-full px-4 py-2.5 text-[13px] text-ink placeholder:text-dim outline-none focus:border-coral/60 transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-coral text-bg hover:bg-coral2 transition-colors disabled:opacity-40 disabled:hover:bg-coral"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
