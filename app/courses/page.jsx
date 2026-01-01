"use client";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  // Initialize with null to avoid hydration mismatch
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. LOAD: Run once on mount
  useEffect(() => {
    const savedStreak = localStorage.getItem("babua_streak");
    const savedBest = localStorage.getItem("babua_best");
    
    if (savedStreak) setStreak(Number(savedStreak));
    if (savedBest) setBest(Number(savedBest));
    
    setIsLoaded(true); // Signal that client-side data is ready
  }, []);

  // 2. SAVE: Persistence Logic
  const markToday = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("babua_streak", newStreak.toString());

    if (newStreak > best) {
      setBest(newStreak);
      localStorage.setItem("babua_best", newStreak.toString());
    }
  };

  const patterns = [
    {
      title: "Sliding Window",
      difficulty: "Easy",
      count: "12 Problems",
      link: "https://youtube.com/playlist?list=PLVItHqpXY_DCmslWMuL616DUap5I1vc5G",
      color: "from-blue-500/20 to-transparent",
      accent: "text-blue-400"
    },
    {
      title: "Two Pointers",
      difficulty: "Medium",
      count: "15 Problems",
      link: "https://youtube.com/playlist?list=PLVItHqpXY_DDScMxEiRhVwfSYZLDtlIiM",
      color: "from-purple-500/20 to-transparent",
      accent: "text-purple-400"
    },
    {
      title: "Fast & Slow",
      difficulty: "Hard",
      count: "8 Problems",
      link: "https://youtube.com/playlist?list=PLVItHqpXY_DBlO8uB9qTzZTK0rSFfZ6v2",
      color: "from-orange-500/20 to-transparent",
      accent: "text-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-400/30 pb-20">
      
      {/* HEADER SECTION */}
      <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic text-yellow-400">
              CLASSROOM
            </h1>
            <p className="text-gray-500 mt-2 text-lg italic border-l-2 border-yellow-400/30 pl-4">
              "Thoda thoda roj. Yehi secret hai."
            </p>
          </div>
          
          {/* STATS CAPSULES */}
          <div className="flex gap-3">
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md min-w-[140px]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-1">Current Streak</p>
              <p className="text-3xl font-black text-yellow-400 tabular-nums">
                {isLoaded ? `🔥 ${streak}` : "---"}
              </p>
            </div>
            <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md min-w-[140px]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-1">Personal Best</p>
              <p className="text-3xl font-black text-white tabular-nums">
                {isLoaded ? `🏅 ${best}` : "---"}
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE STREAK ACTION */}
        <div className="mt-10 p-[1px] bg-gradient-to-r from-yellow-400/40 via-white/5 to-transparent rounded-2xl">
          <button 
            onClick={markToday}
            className="w-full py-5 bg-zinc-950/90 hover:bg-yellow-400 hover:text-black transition-all duration-500 rounded-[15px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 group"
          >
            <span className="group-hover:scale-150 group-hover:rotate-12 transition-transform duration-300">⚡</span>
            Mark Attendance for Today
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* SECTION 1: THE CORE PATTERNS */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-4">
              <span className="w-8 h-[2px] bg-yellow-400"></span>
              Pattern-Based DSA
            </h2>
            <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block"></div>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
              Netflix Style
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {patterns.map((p, i) => (
              <a key={i} href={p.link} target="_blank" className="group relative block">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative h-72 bg-zinc-900/20 border border-white/5 group-hover:border-yellow-400/40 p-10 rounded-[2rem] backdrop-blur-sm flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-3">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${p.accent}`}>{p.difficulty}</span>
                    <h3 className="text-3xl font-bold mt-2 tracking-tight">{p.title}</h3>
                    <p className="text-gray-500 text-sm mt-3 font-medium">{p.count}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 group-hover:rotate-[-10deg]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                    </div>
                    <span className="text-[10px] font-black text-gray-600 group-hover:text-yellow-400 transition-colors uppercase tracking-widest">Start Session</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a 
href="upi://pay?pa=YOUR_UPI_ID@okaxis&pn=Babua%20Classroom&am=50&cu=INR"
className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition inline-block mt-6">
🫖 Buy Chai for Babua (₹50)
</a>


        {/* SECTION 2: BENTO GRID */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 p-10 bg-zinc-900/20 border border-white/5 rounded-[2.5rem]">
            <h2 className="text-2xl font-bold mb-8 text-yellow-400 tracking-tight">📌 Upcoming Modules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['System Design', 'LLD Patterns', 'Operating Systems', 'DBMS & SQL'].map((item) => (
                <div key={item} className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                  <span className="text-gray-400 group-hover:text-white font-bold text-sm transition-colors">{item}</span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 p-10 bg-yellow-400 rounded-[2.5rem] text-black flex flex-col justify-between shadow-[0_20px_50px_rgba(250,204,21,0.2)]">
            <div>
              <h2 className="text-4xl font-black leading-[0.9] italic uppercase">Stuck in <br/>the loop?</h2>
              <p className="mt-6 font-bold text-sm leading-relaxed opacity-90">
                Don't look at the solution yet. Our Socratic AI guides your logic, not just your code.
              </p>
            </div>
            <button className="mt-10 bg-black text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-2xl">
              🤖 Get Socratic Hint
            </button>
          </div>
        </div>

        {/* SUPPORT */}
        <footer className="mt-32 py-20 border-t border-white/5 flex flex-col items-center">
            <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-xl mb-6">☕</div>
            <p className="text-gray-500 text-[10px] mb-6 tracking-[0.4em] uppercase font-black">Support the Babua System</p>
            <button className="px-10 py-4 bg-white/5 rounded-full border border-white/10 text-gray-400 text-xs font-bold hover:bg-white hover:text-black transition-all">
                Buy Babua a Chai (Coming Soon)
            </button>
        </footer>
      </main>
    </div>
  );
}