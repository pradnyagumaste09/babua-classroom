import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-400/30">
      <Navbar />

      {/* HERO SECTION - Modernized with Radial Gradient */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-xs font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            BPL Hackathon Special — Babua System 🚀
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Jahaan Seekhne Ka <br />
            <span className="text-yellow-400">Style Alag Hai</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Stop collecting courses. Start building logic. 
            DSA patterns, AI-guided hints, and a roadmap built for the top 1%. 
            <span className="text-white"> Jo girke uthta hai, wahi yahan ka Babua.</span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <a href="/courses"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-yellow-400/50 hover:scale-105 transition-all duration-300 active:scale-95">
              Enter Classroom
            </a>
            
            <a href="/mentor-connect"
              className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/10 transition-all duration-300">
              🤖 Get a Socratic Hint
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 grayscale opacity-50 overflow-hidden">
             <span className="font-bold text-xl italic tracking-widest uppercase">Sliding Window</span>
             <span className="font-bold text-xl italic tracking-widest uppercase">Two Pointers</span>
             <span className="font-bold text-xl italic tracking-widest uppercase">DP Patterns</span>
          </div>
        </div>
      </section>

      {/* WHY SECTION - Bento Grid Style */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Babua Blueprint</h2>
            <p className="text-gray-500">Traditional learning is broken. We fixed it.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-4">
            {/* Large Card */}
            <div className="md:col-span-8 group relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 hover:border-yellow-400/30 transition-all">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">📍 Pattern-Based Mastery</h3>
              <p className="text-gray-400 text-lg max-w-md">
                Don't memorize 500 LeetCode problems. Learn the 15 underlying patterns 
                that solve them all. From Sliding Window to Graphs.
              </p>
              <div className="mt-8 h-32 bg-yellow-400/5 rounded-xl border border-dashed border-yellow-400/20 flex items-center justify-center">
                <span className="text-yellow-400/40 font-mono text-sm">Visualizer Coming Soon...</span>
              </div>
            </div>

            {/* Small Card */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-yellow-400/30 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Socratic AI</h3>
              <p className="text-gray-400">No spoons-feeding. Our AI gives you logic, not code. Real growth happens in the struggle.</p>
            </div>

            {/* Small Card */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-yellow-400/30 transition-all">
               <h3 className="text-xl font-bold text-white mb-2">100% Free</h3>
               <p className="text-gray-400">No "Limited Time Offer." No "Buy my course." Just raw engineering education for everyone.</p>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-8 p-8 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-transparent border border-white/5 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-white">"Aaj ka tick, kal ka offer letter."</h3>
               <p className="text-gray-400 mt-2">The system tracks your consistency, not just your score.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimalist */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-8 mb-8 text-gray-400 font-medium">
            <a href="#" className="hover:text-yellow-400 transition">GitHub</a>
            <a href="#" className="hover:text-yellow-400 transition">Contact</a>
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">Discord</a>
          </div>
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © 2026 Babua System — Built for the Hustlers.
          </p>
        </div>
      </footer>
    </div>
  );
}