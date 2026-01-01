"use client";
import React from 'react';

export default function ForCompanies() {
  const metrics = [
    { label: "Logic Persistence", value: "92%", desc: "Willingness to solve without checking answers." },
    { label: "Pattern Recognition", value: "Top 5%", desc: "Mastery over the 15 core DSA patterns." },
    { label: "Consistency Index", value: "24 Days", desc: "Average daily engineering activity." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="max-w-3xl mb-16">
          <span className="text-yellow-400 font-black tracking-widest text-xs uppercase bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
            For Recruiter & Engineering Managers
          </span>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mt-6 leading-[1.1]">
            Stop Hiring Resumes. <br />
            <span className="text-gray-500 italic">Hire Verified Logic.</span>
          </h1>
          <p className="mt-8 text-gray-400 text-xl leading-relaxed">
            Babua Classroom provides a deep-dive into a candidate's mental model. 
            We track how they struggle, how they use hints, and how they master patterns—giving you a 
            <span className="text-white"> 360° view of their engineering grit.</span>
          </p>
        </div>

        {/* DATA VISUALIZATION SECTION */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          
          {/* THE "TALENT CARD" CONCEPT */}
          <div className="md:col-span-7 bg-zinc-900/40 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-2xl font-bold italic text-yellow-400 underline decoration-yellow-400/30 underline-offset-8">
                The Babua Talent Passport
              </h3>
              <div className="bg-green-500/10 text-green-500 text-[10px] font-black px-3 py-1 rounded-full border border-green-500/20 uppercase tracking-widest">
                Data Verified
              </div>
            </div>

            <div className="space-y-8">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div>
                    <p className="text-sm font-bold text-white">{m.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
                  </div>
                  <div className="text-3xl font-black text-white italic">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-yellow-400/5 border border-dashed border-yellow-400/30 rounded-2xl">
              <p className="text-xs text-yellow-400/80 leading-relaxed font-medium">
                "We don't just see if they solved the problem. We see that they used 3 Socratic hints, 
                avoided the 'cheating' keywords, and optimized the solution over 40 minutes."
              </p>
            </div>
          </div>

          {/* B2B VALUE PROPOSITION */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex-grow">
              <h4 className="text-xl font-black mb-4 uppercase tracking-tighter">Matchmaking 2.0</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Our algorithm matches candidates based on your specific stack's complexity. 
                Need a "Sliding Window" specialist for high-performance streaming? We have that data.
              </p>
              <ul className="space-y-3">
                {["Zero-Noise Sourcing", "Verified Consistency", "AI-Logged Thought Process"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold text-gray-300">
                    <span className="text-yellow-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-6 bg-yellow-400 text-black font-black text-sm uppercase tracking-[0.2em] rounded-[2rem] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(250,204,21,0.1)]">
              Join Pilot Program →
            </button>
          </div>
        </div>

        {/* TRUST SECTION */}
        <div className="text-center py-20 border-t border-white/5">
           <h3 className="text-gray-600 font-black text-xs uppercase tracking-[0.5em] mb-10">Trusted for the BPL Hackathon</h3>
           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
              {/* Replace these with real or conceptual partner logos */}
              <span className="text-2xl font-black italic tracking-tighter">Vercel</span>
              <span className="text-2xl font-black italic tracking-tighter">Firebase</span>
              <span className="text-2xl font-black italic tracking-tighter">OpenAI</span>
              <span className="text-2xl font-black italic tracking-tighter">React</span>
           </div>
        </div>

      </div>
    </div>
  );
}