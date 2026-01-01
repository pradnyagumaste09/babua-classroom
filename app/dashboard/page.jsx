"use client";
import { auth } from "@/lib/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ streak: 0, best: 0, hints: 0, score: 0 });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      
      // Load and Calculate Stats
      const s = Number(localStorage.getItem("babua_streak") || 0);
      const b = Number(localStorage.getItem("babua_best") || 0);
      const h = Number(localStorage.getItem("hintUsed") || 0);
      
      // Logic: Consistency (Streak) is weighted heavily. 
      // Hint usage also contributes to the "Learning Score".
      const calculatedScore = Math.min(s * 10 + h * 2, 100);

      setStats({ streak: s, best: b, hints: h, score: calculatedScore });
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin" />
    </div>
  );

  if (!user) return (/* ... Same Access Denied UI ... */ null);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-5">
            <img src={user.photoURL} alt="pfp" className="w-16 h-16 rounded-2xl border-2 border-yellow-400/30" />
            <div>
              <h1 className="text-4xl font-black tracking-tight uppercase italic">
                {user.displayName?.split(" ")[0]}<span className="text-yellow-400">'s Lab</span>
              </h1>
              <p className="text-gray-500 font-bold text-xs tracking-[0.2em] uppercase mt-1">Status: Active Learner</p>
            </div>
          </div>
        </header>

        {/* TOP GRID: STATS + PROFILE SCORE */}
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          
          {/* PROFILE SCORE CARD */}
          <div className="md:col-span-4 p-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2.5rem] text-black flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(250,204,21,0.2)]">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-4">Babua Profile Score</p>
            <div className="relative flex items-center justify-center">
                {/* SVG Gauge */}
                <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="opacity-20" />
                    <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                        strokeDasharray={364.4} 
                        strokeDashoffset={364.4 - (364.4 * stats.score) / 100} 
                        strokeLinecap="round" 
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <span className="absolute text-4xl font-black">{stats.score}</span>
            </div>
            <p className="mt-4 font-bold text-sm leading-tight">Your logic-building power is growing.</p>
            <p className="mt-1 text-[10px] opacity-60 font-medium">Score grows via consistency + honest learning</p>
          </div>

          {/* STREAK & BEST CARDS */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-sm flex flex-col justify-center">
                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Current Streak</p>
                <h2 className="text-6xl font-black text-yellow-400 italic leading-none">🔥 {stats.streak}</h2>
                <p className="text-gray-500 text-xs font-bold mt-4 uppercase italic">Don't break the chain, Babua!</p>
             </div>
             
             <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-sm flex flex-col justify-center">
                <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">All-Time Best</p>
                <h2 className="text-6xl font-black text-white italic leading-none">🏅 {stats.best}</h2>
                <p className="text-gray-500 text-xs font-bold mt-4 uppercase italic">Your highest peak.</p>
             </div>
          </div>
        </div>

        {/* PROGRESS SECTION */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-8 p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 italic">
              <span className="w-1.5 h-6 bg-yellow-400 rounded-full"></span>
              Pattern Mastery
            </h3>
            
            <div className="space-y-6">
              {[
                { name: 'Sliding Window', progress: 80, color: 'bg-blue-500' },
                { name: 'Two Pointers', progress: 45, color: 'bg-purple-500' },
                { name: 'Backtracking', progress: 10, color: 'bg-orange-500' }
              ].map(item => (
                <div key={item.name}>
                  <div className="flex justify-between mb-2 px-1">
                    <span className="font-bold text-xs uppercase tracking-widest">{item.name}</span>
                    <span className="text-xs text-gray-500 font-black">{item.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDE NOTE */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="p-8 bg-zinc-900/80 border border-white/5 rounded-[2rem]">
              <h3 className="font-black text-yellow-400 italic mb-2">HINTS USED: {stats.hints}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Using hints isn't cheating—it's collaborative learning. Every hint you process adds to your Profile Score.
              </p>
            </div>
            
            <Link href="/courses" className="flex-grow flex items-center justify-center p-8 bg-white text-black rounded-[2.5rem] font-black text-center hover:bg-yellow-400 transition-all duration-500 hover:-rotate-2">
              CONTINUE <br/> LEARNING →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}