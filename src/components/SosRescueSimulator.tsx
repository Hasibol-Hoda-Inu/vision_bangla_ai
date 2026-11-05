import React, { useState } from 'react';
import { ShieldCheck, Send, Sparkles, User, Cpu, CheckCircle } from 'lucide-react';
import rescueImage from '../assets/images/vision_girl_clean_1793905217068.jpg';
import { processSosReport } from '../utils/memeRules';

export const SosRescueSimulator: React.FC = () => {
  const [inputText, setInputText] = useState<string>(
    'ভাইয়া বাঁচান! কিছু বখাটে মোহাম্মদপুরে পিছু নিয়েছে! খুব ভয় লাগছে!'
  );
  const [isDeployed, setIsDeployed] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleSendSos = () => {
    setIsAnimating(true);
    setIsDeployed(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const outcome = processSosReport(inputText);

  return (
    <section id="sos" className="py-16 sm:py-20 border-b border-slate-800 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>নারী ও নাগরিক নিরাপত্তা সুরক্ষা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            জরুরি এসওএস ও সুপারহিরো অবতরণ
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            রাস্তায় কোনো আপু বা বোন বার্তা পাঠানো মাত্রই ভিশন বাংলা এআই সুপারহিরো ল্যান্ডিং করে সুরক্ষাবলয় তৈরি করে।
          </p>
        </div>

        {/* 2-Column Split: Messenger Simulator on Left, Dynamic Comic Action on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mobile Chat Mockup (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center font-bold text-slate-950 text-xs">
                  V
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>ভিশন বাংলা এসওএস</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">০.০৮ সেকেন্ডে সক্রিয়</div>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                ইমার্জেন্সি হটলাইন
              </span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-3 min-h-[220px] flex flex-col justify-end">
              {/* Girl's SOS message */}
              <div className="flex items-end justify-end gap-2">
                <div className="max-w-[90%] p-3.5 rounded-2xl rounded-br-none bg-rose-600/90 text-white text-xs sm:text-sm shadow-md">
                  <div className="flex items-center gap-1 text-[10px] text-rose-200 mb-1 font-semibold">
                    <User className="w-3 h-3" />
                    <span>সাহায্যপ্রার্থী ছাত্রী</span>
                  </div>
                  <p className="leading-relaxed">{inputText}</p>
                  <span className="block text-[10px] text-rose-200 text-right mt-1 font-mono">
                    ১০:২১ AM · মোহাম্মদপুর GPS শেয়ার্ড
                  </span>
                </div>
              </div>

              {/* Vision AI Response */}
              {isDeployed && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-1">
                    <Cpu className="w-3.5 h-3.5 text-slate-950" />
                  </div>
                  <div className="max-w-[90%] p-3.5 rounded-2xl rounded-tl-none bg-slate-800/90 border border-amber-500/30 text-white text-xs sm:text-sm shadow-md">
                    <div className="flex items-center gap-1 text-[10px] text-amber-400 mb-1 font-mono font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>ভিশন রেসকিউ ইউনিট</span>
                    </div>
                    <p className="text-amber-200 font-medium leading-relaxed">
                      লোকেশন লকড! আমি মোহাম্মদপুরে সুপারহিরো ল্যান্ডিং করেছি। সাইবার সুরক্ষাবলয় সক্রিয়। আপনি সম্পূর্ণ নিরাপদ!
                    </p>
                    <span className="block text-[10px] text-slate-400 mt-1 font-mono">
                      ১০:২১:০০.০৮ AM · ঘটনাস্থলে ভিশন হাজির
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input & SOS Trigger */}
            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400 mb-2">জরুরি বার্তা পরিবর্তন করুন:</div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-400"
                />
                <button
                  onClick={handleSendSos}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>এসওএস পাঠান</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Superhero Action Comic (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className={`relative rounded-2xl overflow-hidden comic-border bg-slate-900 transition-all duration-300 ${
                isAnimating ? 'scale-102 ring-4 ring-cyan-400 shadow-2xl shadow-cyan-500/40' : ''
              }`}
            >
              {/* Comic Artwork */}
              <div className="relative aspect-[4/3] bg-slate-950">
                <img
                  src={rescueImage}
                  alt="Vision Bangla AI saves a girl from stalkers in Mohammadpur alleyway"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Animated forcefield shield pulse overlay */}
                <div className="absolute inset-0 bg-radial from-cyan-400/20 via-transparent to-transparent pointer-events-none animate-pulse" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold">
                  সুরক্ষাবলয়: ১০০% এক্টিভেটেড
                </div>
              </div>

              {/* Comic Action Report */}
              <div className="p-5 sm:p-6 bg-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4" />
                  <span>মোহাম্মদপুর রেসকিউ মিশন ফলাফল</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {outcome.actionSummaryBn}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                  {outcome.stalkerStatusBn}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
