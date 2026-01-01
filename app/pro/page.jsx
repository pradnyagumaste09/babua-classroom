"use client";
import React from 'react';

export default function Pro() {
  const features = [
    { name: "Unlimited Learning Path", free: true, pro: true },
    { name: "Socratic Logic Hints", free: true, pro: true },
    { name: "Community Support", free: true, pro: true },
    { name: "AI Mock Interviews", free: false, pro: true },
    { name: "Pattern Mastery Evaluation", free: false, pro: true },
    { name: "Hiring Recommendation Score", free: false, pro: true },
    { name: "Priority AI Response Time", free: false, pro: true },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* HEADER */}
        <div className="mb-16">
          <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">
            Level Up Your Game
          </span>
          <h1 className="text-6xl font-black tracking-tighter mt-4 italic">
            BABUA <span className="text-yellow-400">PRO</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Learning is always free. Pro is for those who want to be 
            <span className="text-white italic"> interview-ready</span> at a 10x faster pace.
          </p>
        </div>

        {/* PRICING TABLE COMPONENT */}
        <div className="grid md:grid-cols-2 gap-8 items-start text-left">
          
          {/* FREE PLAN */}
          <div className="p-10 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">Babua Free</h3>
            <div className="text-4xl font-black mb-6">₹0 <span className="text-sm text-gray-500 font-medium">/ forever</span></div>
            
            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 text-sm ${f.free ? 'text-gray-300' : 'text-gray-700 opacity-50'}`}>
                  <span>{f.free ? '✅' : '🔒'}</span>
                  <span className={!f.free ? 'line-through' : ''}>{f.name}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition">
              Current Plan
            </button>
          </div>

          {/* PRO PLAN - The "Hero" Card */}
          <div className="relative p-10 bg-zinc-900/40 border-2 border-yellow-400/50 rounded-[2.5rem] backdrop-blur-md shadow-[0_0_50px_rgba(250,204,21,0.1)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
              Most Recommended
            </div>

            <h3 className="text-xl font-bold mb-2 uppercase tracking-widest text-yellow-400">Babua Pro</h3>
            <div className="text-4xl font-black mb-6">₹249 <span className="text-sm text-gray-500 font-medium">/ month</span></div>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className={`flex items-center gap-3 text-sm ${f.pro ? 'text-white' : 'text-gray-700'}`}>
                  <span className="text-yellow-400">{f.pro ? '⚡' : '🔒'}</span>
                  <span className="font-bold">{f.name}</span>
                </div>
              ))}
            </div>

            <a 
              href="upi://pay?pa=yourupiid@upi&am=249&cu=INR"
              className="block w-full py-5 bg-yellow-400 text-black text-center text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(250,204,21,0.3)] active:scale-95"
            >
              🔥 Upgrade via UPI
            </a>
            <p className="text-[10px] text-center mt-4 text-gray-500 font-bold uppercase tracking-tighter">
                Instant Activation • No Hidden Costs
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION: WHY PRO? */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h4 className="font-bold mb-2 italic uppercase text-sm tracking-widest text-yellow-400">AI Mock Practice</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Simulate real-world tech rounds with our Socratic AI acting as an interviewer.</p>
            </div>
            <div className="p-6">
                <div className="text-3xl mb-4">📈</div>
                <h4 className="font-bold mb-2 italic uppercase text-sm tracking-widest text-yellow-400">Pattern Mastery</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Get a deep-dive report on which DSA patterns you've actually mastered vs just watched.</p>
            </div>
            <div className="p-6">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="font-bold mb-2 italic uppercase text-sm tracking-widest text-yellow-400">Verified Badge</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Earn a Babua Pro badge on your profile to stand out in our talent pool.</p>
            </div>
        </div>

      </div>
    </div>
  );
}