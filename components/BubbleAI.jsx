"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BubbleAI() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔒 ONLY show on /courses or /classroom pages
  if (pathname !== "/courses" && pathname !== "/classroom") return null;

  const getHint = async () => {
    if (!q.trim()) return;
    setLoading(true);
    setHint(""); // Clear previous hint

    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, context: "DSA Classroom" }),
      });
      const data = await res.json();
      setHint(data.hint);
    } catch (err) {
      setHint("System error. Babua, AI thoda thak gaya hai!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔵 Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-8 right-8 ${
          open ? "bg-white text-black" : "bg-yellow-400 text-black shadow-[0_0_30px_rgba(250,204,21,0.4)]"
        } font-bold rounded-2xl h-16 w-16 flex items-center justify-center transition-all duration-500 z-[100] hover:scale-110 active:scale-95`}
      >
        {open ? (
          <span className="text-2xl">✕</span>
        ) : (
          <div className="relative">
             <span className="text-2xl">🤖</span>
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black/20"></span>
            </span>
          </div>
        )}
      </button>

      {/* 🗨️ Powerful Socratic AI Window */}
      {open && (
        <div className="fixed bottom-28 right-8 w-[380px] max-h-[550px] bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-6 bg-white/5 border-b border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-xl">🤖</div>
            <div>
                <h3 className="text-yellow-400 font-black text-sm uppercase tracking-widest">Socratic Mentor</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Babua System Enabled</p>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-grow p-6 overflow-y-auto space-y-4 scroll-smooth" ref={scrollRef}>
            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                <p className="text-sm text-gray-300 italic">
                    "Babua, solution ki umeed mat rakhna. Doubt pucho, logic main build karwaunga. Kya atak raha hai?"
                </p>
            </div>

            {loading && (
              <div className="flex gap-2 p-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            )}

            {hint && (
              <div className="bg-yellow-400/10 p-5 rounded-2xl rounded-tl-none border border-yellow-400/20 animate-in fade-in zoom-in-95 duration-300">
                <p className="text-sm leading-relaxed text-gray-100 whitespace-pre-wrap">
                  {hint}
                </p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-black/40 border-t border-white/5">
            <div className="relative">
                <textarea
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); getHint(); }}}
                  placeholder="Explain your logic trap..."
                  rows={2}
                  className="w-full bg-white/5 text-sm text-white border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-yellow-400/50 transition-all resize-none placeholder:text-gray-600"
                />
                <button
                  onClick={getHint}
                  disabled={loading || !q.trim()}
                  className="absolute right-2 bottom-3 p-2 bg-yellow-400 text-black rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-gray-600 font-bold uppercase tracking-tighter">
                Logic Builder v1.0 • No Code Output Policy
            </p>
          </div>
        </div>
      )}
    </>
  );
}