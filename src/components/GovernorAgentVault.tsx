import React, { useState } from 'react';
import { DollarSign, Landmark, Sparkles, Award, Check } from 'lucide-react';
import governorImage from '../assets/images/vision_governor_bank_1793902908727.jpg';
import { calculateEconomicStabilization } from '../utils/memeRules';

export const GovernorAgentVault: React.FC = () => {
  const [dollarRate, setDollarRate] = useState<number>(105);
  const [activeDecree, setActiveDecree] = useState<string | null>(null);

  const status = calculateEconomicStabilization(dollarRate);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDollarRate(Number(e.target.value));
  };

  const decrees = [
    {
      id: 'lock-usd',
      title: 'ডলার দর ১০৫ টাকায় লক করুন',
      desc: 'হুন্ডি সিন্ডিকেটকে ব্লক করে সরাসরি ব্যাংকিং চ্যানেলে রেমিট্যান্স বোনাস!',
      action: () => {
        setDollarRate(105);
        setActiveDecree('ডলার রেট ১০৫ টাকায় চিরতরে লক করা হলো! মানি এক্সচেঞ্জে শান্তি ফিরে এসেছে। উন্নয়ন!');
      },
    },
    {
      id: 'swiss-vault',
      title: 'সুইস ব্যাংক ফান্ড রিকভারি',
      desc: 'পাচারকারীদের গোপন বিদেশি ব্যাংক একাউন্টে মায়ান্ড স্টোনের সাইবার ট্র্যাকিং!',
      action: () => {
        setActiveDecree('সুইস ব্যাংক থেকে ৯.২ বিলিয়ন ডলার স্বয়ংক্রিয়ভাবে বাংলাদেশ ব্যাংক ভল্টে ট্রান্সফার সম্পন্ন!');
      },
    },
    {
      id: 'kacchi-bond',
      title: 'বিরিয়ানি ব্যাকড বন্ড চালু',
      desc: 'কাগুজে মুদ্রার বদলে খাঁটি ঘি আর কাচ্চি সমর্থিত রিজার্ভ বন্ড ঘোষণা!',
      action: () => {
        setActiveDecree('১,০০০ কোটি টাকার কাচ্চি বিরিয়ানি বন্ড সফলভাবে বিক্রি! জনগণের আস্থা শতভাগ।');
      },
    },
    {
      id: 'stop-printer',
      title: 'টাকা ছাপানোর প্রিন্টার সিলগালা',
      desc: 'কৃত্রিমভাবে নতুন টাকা ছাপিয়ে মুদ্রাস্ফীতি বাড়ানোর কুপ্রথা স্থায়ীভাবে নিষিদ্ধ!',
      action: () => {
        setActiveDecree('টাকা ছাপানোর মেশিন সিলগালা। মুদ্রাস্ফীতি কমে ৩.২ শতাংশে পৌঁছেছে।');
      },
    },
  ];

  return (
    <section id="governor" className="py-16 sm:py-20 border-b border-slate-800 bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>বাংলাদেশ ব্যাংক বিশেষ অধ্যাদেশ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              ভিশন গভর্নর: কেন্দ্রীয় ব্যাংক সিকিউর ভল্ট
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              অর্থনীতিবিদদের আর ভাবতে হবে না—সরাসরি সিন্থয়েড ভিশন এআই বাংলাদেশ ব্যাংকের চেয়ারে বসে নিখুঁত আর্থিক সমাধান পরিচালনা করছেন।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>স্ট্যাটাস: গভর্নর অ্যাক্টিভ</span>
          </div>
        </div>

        {/* Governor Dashboard Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Controls & Meters (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/80 p-5 sm:p-8 rounded-2xl border border-slate-800">
            {/* Dollar Rate Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="usd-slider" className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>ডলার এক্সচেঞ্জ রেট সিমুলেটর (১ USD = ? BDT)</span>
                </label>
                <span className="text-lg sm:text-xl font-bold font-mono text-amber-400 tabular-nums">
                  ৳{dollarRate}.০০
                </span>
              </div>

              <input
                id="usd-slider"
                type="range"
                min="95"
                max="140"
                step="1"
                value={dollarRate}
                onChange={handleSliderChange}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono mt-1">
                <span>৳৯৫ (সোনালী অতীত)</span>
                <span className="text-amber-400 font-semibold">৳১০৫ (আদর্শ দর)</span>
                <span>৳১৪০ (মুদ্রাস্ফীতি এলার্ট)</span>
              </div>
            </div>

            {/* Dynamic Metric Gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs text-slate-400">ফরেন এক্সচেঞ্জ রিজার্ভ</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mt-1">
                  ${status.reservesBillionUsd} বিলিয়ন
                </div>
                <div className="text-[11px] text-slate-500 mt-1">ভিশন ভল্ট সিল্ড সক্রিয়</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-xs text-slate-400">মুদ্রাস্ফীতি হার (Inflation)</div>
                <div className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums mt-1 ${
                  status.inflationPct <= 4 ? 'text-cyan-400' : 'text-rose-400'
                }`}>
                  {status.inflationPct}%
                </div>
                <div className="text-[11px] text-slate-500 mt-1">বাজার সিন্ডিকেট দমন স্ক্যানার</div>
              </div>
            </div>

            {/* Governor Verdict Box */}
            <div className={`p-4 rounded-xl border transition-all ${
              status.isPerfect
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
            }`}>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ভিশন কেন্দ্রীয় ব্যাংকের লাইভ পর্যবেক্ষণ:</span>
              </div>
              <p className="text-xs sm:text-sm font-medium">{status.verdictBn}</p>
            </div>

            {/* Executive Decrees */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                গভর্নরের তাৎক্ষণিক নির্বাহী ডিক্রি জারি করুন:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {decrees.map((d) => (
                  <button
                    key={d.id}
                    onClick={d.action}
                    className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 text-left transition-all group cursor-pointer"
                  >
                    <div className="text-xs font-bold text-slate-200 group-hover:text-amber-400">
                      {d.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {d.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {activeDecree && (
              <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between">
                <span>{activeDecree}</span>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            )}
          </div>

          {/* Governor Art & Lore Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden comic-border bg-slate-900">
            <div className="relative aspect-[4/3] bg-slate-950">
              <img
                src={governorImage}
                alt="Vision Bangla AI as Central Bank Governor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-mono font-bold">
                গভর্নর পোর্ট্রেট
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-white">
                "অর্থনীতি কোনো খেলা নয়, এটা বিশুদ্ধ অ্যালগরিদম।"
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                বাংলাদেশ ব্যাংকের নবনিযুক্ত সিন্থয়েড গভর্নর ভিশন দায়িত্ব নেওয়ার পর প্রথম ঘোষণাতেই সকল ধরণের ভুয়া এলসি ও ঋণ খেলাপিদের তথ্য সরাসরি ডিজিটাল পর্দায় উন্মুক্ত করেছেন।
              </p>
              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                কেন্দ্রীয় ব্যাংক ডাটা-স্ট্রিম // ডিজিটাল ইকোনমিক ইঞ্জিন
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
