"use client";
import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState({ streak: 0, trust: 100, best: 0 });

  useEffect(() => {
    // Client-side only data fetching
    const streak = Number(localStorage.getItem("babua_streak") || 0);
    const best = Number(localStorage.getItem("babua_best") || 0);
    const strikes = Number(localStorage.getItem("cheatStrikes") || 0);
    const trustScore = Math.max(100 - strikes * 20, 20);
    
    setData({ streak, trust: trustScore, best });
  }, []);

  const shareProfile = () => {
    const text = `Check out my Babua Talent Passport! 🔥 Streak: ${data.streak} Days | Trust Score: ${data.trust}/100. Verification of my DSA Logic.`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        
        {/* THE PASSPORT CARD */}
        <div className="relative overflow-hidden bg-zinc-900/40 border border-white/10 rounded-[3rem] p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Background Branding Watermark */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <h1 className="text-9xl font-black rotate-12 uppercase tracking-tighter">BABUA</h1>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Verified Talent Passport
              </div>
              <h1 className="text-5xl font-black tracking-tight italic">
                LOGIC <span className="text-yellow-400">PROFILE</span>
              </h1>
              <p className="text-gray-500 font-bold mt-2 text-sm uppercase tracking-tighter">Verified by Babua Socratic System</p>
            </div>
            
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-1 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-black rounded-[1.3rem] flex flex-col items-center justify-center">
                    <span className="text-xs font-black text-yellow-400">SCORE</span>
                    <span className="text-3xl font-black text-white">{data.trust}</span>
                </div>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-2 gap-4 mt-12 mb-10">
            <div className="p-6 bg-white/5 border border-white/5 rounded-[2rem] text-center">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Consistency</p>
                <h2 className="text-3xl font-black italic">🔥 {data.streak} <span className="text-sm font-medium not-italic text-gray-600">Days</span></h2>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-[2rem] text-center">
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Personal Best</p>
                <h2 className="text-3xl font-black italic">🏅 {data.best} <span className="text-sm font-medium not-italic text-gray-600">Days</span></h2>
            </div>
          </div>

          {/* THE TRUST METER */}
          <div className="space-y-3 mb-12">
            <div className="flex justify-between items-end">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Trust Index (Anti-Cheat)</p>
                <span className={`text-xs font-bold ${data.trust > 80 ? 'text-green-500' : 'text-red-500'}`}>
                    {data.trust}% Reliable
                </span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                    className={`h-full transition-all duration-1000 ${data.trust > 50 ? 'bg-yellow-400' : 'bg-red-500'}`} 
                    style={{ width: `${data.trust}%` }}
                ></div>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed italic">
                *Trust score is calculated based on hint usage frequency and avoidance of direct solution searches within the Socratic AI.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={shareProfile}
              className="flex-grow py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
            >
              <span>Share to LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition">
              Download PDF
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          Real learning. No shortcuts. Real engineering.
        </p>
      </div>
    </div>
  );
}