import React, { useState } from 'react';
import { Gavel, Search, Activity } from 'lucide-react';
import courtroomImage from '../assets/images/vision_court_justice_1793902912074.jpg';
import { evaluateTruthBeam, TruthBeamResult } from '../utils/memeRules';

export const TruthBeamCourtroom: React.FC = () => {
  const [statement, setStatement] = useState<string>('আমি কোনো ঘুষ নেই নাই, ফাইল এমনি টেবিলে পড়ে ছিল');
  const [result, setResult] = useState<TruthBeamResult | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const presets = [
    'আমি কোনো ঘুষ নেই নাই, ফাইল এমনি টেবিলে পড়ে ছিল',
    'আমি কানাডার বেগম পাড়ায় কোনো বাড়ি কিনি নাই',
    'ব্যাংক থেকে ৩ হাজার কোটি টাকা ঋণ নিজে নিজেই গায়েব হইছে',
    'আমরা তো ঘুষ খাই না, সেবাগ্রহীতারা ভালোবেসে মিষ্টি খাওয়ার হাদিয়া দেয়',
  ];

  const handleScan = (textToScan?: string) => {
    const text = textToScan || statement;
    if (!text.trim()) return;

    setIsScanning(true);

    setTimeout(() => {
      const evaluation = evaluateTruthBeam(text);
      setResult(evaluation);
      setIsScanning(false);
    }, 600);
  };

  return (
    <section id="courtroom" className="py-16 sm:py-20 border-b border-slate-800 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-3">
            <Gavel className="w-3.5 h-3.5" />
            <span>সুপ্রিম কোর্ট দ্রুত বিচার প্রটোকল</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ট্রুথ বিম ৯০০০: ০.০৪ সেকেন্ডে মিথ্যা শনাক্তকরণ
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            ৪০ বছরের বিচার মাত্র কয়েক মিলি-সেকেন্ডে! আদালতে আসামির কাঠগড়ায় দাঁড়িয়ে মিথ্যা বলা মাত্রই ভিশন এআই এর ট্রুথ বিম স্বয়ংক্রিয়ভাবে পর্দা ফাঁস করে দেয়।
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Courtroom Comic Artwork (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden comic-border bg-slate-900">
            <div className="relative aspect-[4/3] bg-slate-950">
              <img
                src={courtroomImage}
                alt="Vision Bangla AI in Supreme Court with Truth Beam"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded bg-rose-950/85 backdrop-blur-md border border-rose-500/50 text-rose-400 text-xs font-mono font-bold">
                কোর্টরুম অ্যাক্টিভ
              </div>
            </div>
            <div className="p-4 sm:p-5 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                বিচারপতির পর্যবেক্ষণ:
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "আগে ফাইল দেখতে দেখতে চুল পেকে যেত, এখন ভিশন এআই চোখের পলকে সুইস ব্যাংকের হিসেব আর গোপন ঘুষের ফাইল বের করে দেয়। gavel বাড়ি দেওয়ার কাজটাই যা বাকি থাকে!"
              </p>
            </div>
          </div>

          {/* Interactive Lie Scanner Simulator (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 p-5 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <div>
              <label htmlFor="lie-input" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                সন্দেহভাজন ব্যক্তির জবানবন্দি পরীক্ষা করুন:
              </label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="lie-input"
                  type="text"
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  placeholder="এখানে জবানবন্দি লিখুন..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  onClick={() => handleScan()}
                  disabled={isScanning}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>{isScanning ? 'স্ক্যান হচ্ছে...' : 'স্ক্যান করুন'}</span>
                </button>
              </div>
            </div>

            {/* Quick preset chips */}
            <div>
              <div className="text-xs text-slate-400 mb-2 font-medium">
                জনপ্রিয় বয়ান থেকে বেছে নিন:
              </div>
              <div className="flex flex-wrap gap-2">
                {presets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setStatement(preset);
                      handleScan(preset);
                    }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer text-left"
                  >
                    "{preset}"
                  </button>
                ))}
              </div>
            </div>

            {/* Holographic Scan Result HUD */}
            {result && (
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-rose-500/40 relative overflow-hidden space-y-4">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent animate-pulse" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
                    <Activity className="w-4 h-4 animate-spin" />
                    <span>মায়ান্ড স্টোন বায়োমেট্রিক এনালাইসিস</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-xs font-mono border border-rose-500/30">
                    মিথ্যা স্তর: {result.lieScore}%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">কর্টিসল ও স্ট্রেস লেভেল:</span>
                    <span className="text-rose-400 text-base sm:text-lg font-bold tabular-nums">{result.stressLevel}% (চরম প্যানিক)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">মামলা নিষ্পত্তির সময়:</span>
                    <span className="text-emerald-400 text-base sm:text-lg font-bold tabular-nums">০.০৪ সেকেন্ড</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-300 mb-1">
                    হোলো-রিডিং ফলাফল:
                  </div>
                  <p className="text-xs sm:text-sm text-rose-300 font-medium leading-relaxed">
                    {result.verdictBn}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30">
                  <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5" />
                    <span>আদালতের তাৎক্ষণিক দণ্ডাদেশ:</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    {result.punishmentBn}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
