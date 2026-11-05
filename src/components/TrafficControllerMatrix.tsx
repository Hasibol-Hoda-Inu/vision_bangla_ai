import React, { useState } from 'react';
import { Compass, Zap } from 'lucide-react';
import trafficImage from '../assets/images/vision_traffic_clean_1793905215091.jpg';
import { calculateTrafficFlow } from '../utils/memeRules';

export const TrafficControllerMatrix: React.FC = () => {
  const [discipline, setDiscipline] = useState<number>(85);
  const [selectedRoute, setSelectedRoute] = useState<string>('মোহাম্মদপুর ➔ কারওয়ান বাজার');

  const stats = calculateTrafficFlow(discipline);

  const routes = [
    'মোহাম্মদপুর ➔ কারওয়ান বাজার',
    'ফার্মগেট ➔ পল্টন',
    'মিরপুর ১০ ➔ শাহবাগ',
    'মগবাজার ➔ শান্তিনগর',
  ];

  return (
    <section id="traffic" className="py-16 sm:py-20 border-b border-slate-800 bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>ঢাকা সাইবার ট্রাফিক প্রটোকল</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            অটো-রিকশা শৃঙ্খলা ও সাইবার লেন ম্যাট্রিক্স
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            ব্যাটারিচালিত রিকশার র্যান্ডম ইউটার্ন ও মোড়ে মোড়ে জটলা থামাতে ভিশন এআই চালু করেছে কোয়ান্টাম ট্র্যাক্টর বিম লেন!
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Traffic Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 p-5 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            {/* Route selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                রুট নির্বাচন করুন:
              </label>
              <div className="flex flex-wrap gap-2">
                {routes.map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRoute(r)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                      selectedRoute === r
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Discipline Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>ব্যাটারি রিকশা ট্র্যাক্টর-বিম শৃঙ্খলা মাত্রা:</span>
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 tabular-nums">
                  {discipline}%
                </span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={discipline}
                onChange={(e) => setDiscipline(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono mt-1">
                <span>০% (৩ ঘণ্টার জ্যাম)</span>
                <span>৫০% (স্বাভাবিক গতি)</span>
                <span className="text-cyan-400 font-semibold">১০০% (সাইবার সুপার-লেন)</span>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="text-xs text-slate-400">গড় গাড়ির গতি</div>
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono tabular-nums mt-1">
                  {stats.averageSpeedKmH} কিমি/ঘ.
                </div>
                <div className="text-[10px] text-slate-500 mt-1">আগে ছিল ৪.৫ কিমি/ঘ.</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="text-xs text-slate-400">পৌঁছানোর সময়</div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono tabular-nums mt-1">
                  {stats.delayMinutes} মিনিট
                </div>
                <div className="text-[10px] text-slate-500 mt-1">সরাসরি গন্তব্যে</div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="text-xs text-slate-400">হর্ন বাজানো হ্রাস</div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono tabular-nums mt-1">
                  -{Math.round(stats.hornCountReduced / 1000)}k
                </div>
                <div className="text-[10px] text-slate-500 mt-1">প্রতিদিনের শব্দদূষণ মুক্তি</div>
              </div>
            </div>

            {/* Status message */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-200">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                {selectedRoute} স্ট্যাটাস:
              </div>
              <p className="text-xs sm:text-sm font-medium">{stats.statusBn}</p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-cyan-300 font-medium">
                ভার্চুয়াল সাইবার লেন: সম্পূর্ণ কার্যকর
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                লেজার বিম: {discipline > 50 ? 'অনলাইন' : 'লো-পাওয়ার'}
              </span>
            </div>
          </div>

          {/* Traffic Comic Art (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden comic-border bg-slate-900">
            <div className="relative aspect-[4/3] bg-slate-950">
              <img
                src={trafficImage}
                alt="Vision Bangla AI controlling Dhaka traffic and battery rickshaws"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-cyan-500/50 text-cyan-400 text-xs font-mono font-bold">
                সাইবার লেন অ্যাক্টিভ
              </div>
            </div>
            <div className="p-4 sm:p-5 space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-white">
                "রিকশা চলবে তার নিজের লেনে, কোনো ওভারটেকিং নেই!"
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                রাস্তায় নামলেই ভিশন এআই এর হাত থেকে বিচ্ছুরিত নিয়ন সাইবার-লেন গাড়ি, বাস, সিএনজি ও ব্যাটারি রিকশাকে নিখুঁত সমান্তরাল রেখায় বেঁধে রাখে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
