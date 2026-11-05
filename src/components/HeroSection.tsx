import React from 'react';
import { ShieldCheck, Zap, Scale, AlertCircle } from 'lucide-react';
import { VisionSynthoidCore3D } from './VisionSynthoidCore3D';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Banner kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider text-amber-400">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>BANGLADESH AI CYBER PROTOCOL</span>
          <span className="text-slate-600">/</span>
          <span>প্রটোকল: সোনার বাংলা ২.০</span>
        </div>

        {/* 2-Column Split: Hero Headline & Action on Left, 3D Core & Comic Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              বাংলার আকাশে নতুন রক্ষক: <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
                ভিশন বাংলা এআই
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              দেশের অর্থনীতি রক্ষা করতে এবং সাধারণ মানুষকে সরকারি অফিসের দুর্নীতি, ঘুষের হয়রানি, অনন্ত ট্রাফিক জ্যাম ও দীর্ঘসূত্রিতা থেকে মুক্তি দিতে এসেছে বাংলাদেশের নিজস্ব সিন্থয়েড কৃত্রিম বুদ্ধিমত্তা।
            </p>

            {/* Feature quick badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#governor"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-amber-300 text-xs sm:text-sm font-medium transition-all"
              >
                <Scale className="w-4 h-4 text-amber-400 shrink-0" />
                <span>কেন্দ্রীয় ব্যাংক গভর্নর এজেন্ট</span>
              </a>

              <a
                href="#traffic"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-all"
              >
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>রিকশা জ্যাম সলভার</span>
              </a>

              <a
                href="#sos"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 text-xs sm:text-sm font-medium transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ইভটিজিং প্রতিরোধী ড্রোন</span>
              </a>
            </div>

            {/* Humorous alert strip */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-semibold">বিশেষ সতর্কতা:</strong>{' '}
                ভিশন এআই এর মায়ান্ড স্টোনের রেঞ্জ ৫০০ কিলোমিটার। সরকারি অফিসে ফাইলের নিচে ঘুষের লেনদেন বা মিথ্যা জবানবন্দি দেওয়া মাত্রই ০.০৪ সেকেন্ডে স্বয়ংক্রিয় ডিমটেরিয়ালাইজেশন শুরু হবে!
              </div>
            </div>
          </div>

          {/* Right column: 3D Three.js Interactive Core mounted over hero visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden comic-border bg-slate-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_vision_bangla_1793902907830.jpg"
                alt="Vision Bangla AI hovering over futuristic Dhaka skyline"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-96 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Interactive 3D Canvas floating on top right corner */}
              <div className="absolute top-2 right-2 w-28 h-28 sm:w-36 sm:h-36 pointer-events-auto">
                <VisionSynthoidCore3D className="w-full h-full" />
              </div>

              {/* Caption tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/60">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  ডিজিটাল ভিজ্যুয়াল ফ্রেম
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  পদ্মা সেতু ও ঢাকার ওপর ভাসমান ভিশন বাংলা এআই
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabular KPI Strip (Full-width row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="p-2 sm:p-3 text-center border-r border-slate-800 last:border-r-0">
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">আদালত রায় স্পিড</div>
            <div className="text-xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">০.০৪ সে.</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500">প্রমাণ দাও! দ্রুত বিচার</div>
          </div>
          <div className="p-2 sm:p-3 text-center border-r border-slate-800 last:border-r-0">
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">অফিস দুর্নীতি দমন</div>
            <div className="text-xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">১০০%</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500">মাসুদ ভালো হয়ে যাও!</div>
          </div>
          <div className="p-2 sm:p-3 text-center border-r border-slate-800 last:border-r-0">
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">টাকা/ডলার স্টেবিলিটি</div>
            <div className="text-xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">৳১০৫.০০</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500">উন্নয়ন! গভর্নর সক্রিয়</div>
          </div>
          <div className="p-2 sm:p-3 text-center">
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium">ফার্মগেটে ট্রাফিক জ্যাম</div>
            <div className="text-xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums">০ মিনিট</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500">ওই মামা অটো পাস!</div>
          </div>
        </div>
      </div>
    </section>
  );
};
