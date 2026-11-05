import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#04060d] border-t border-slate-800 text-slate-400 text-xs py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
              V
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                VISION BANGLA AI // ভিশন বাংলা এআই
              </span>
              <span className="text-[11px] text-slate-500">
                বাংলাদেশের নিজস্ব সাইবার মেমে ও প্যারোডি পোর্টাল
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <a
              href="#stories"
              className="hover:text-amber-400 transition-colors"
            >
              কাহিনীসমূহ
            </a>
            <a
              href="#governor"
              className="hover:text-amber-400 transition-colors"
            >
              ব্যাংক গভর্নর
            </a>
            <a
              href="#courtroom"
              className="hover:text-amber-400 transition-colors"
            >
              লাই ডিটেক্টর
            </a>
            <a
              href="#traffic"
              className="hover:text-amber-400 transition-colors"
            >
              ট্রাফিক কন্ট্রোল
            </a>
            <a
              href="#sos"
              className="hover:text-amber-400 transition-colors"
            >
              এসওএস
            </a>
          </div>
        </div>

        {/* Satirical disclaimer */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 text-center max-w-3xl mx-auto space-y-2">
          <div className="font-semibold text-slate-300 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>স্যাটায়ার ডিসক্লেইমার</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            এই ওয়েবসাইটটি বাংলাদেশের আসন্ন এআই উদ্যোগের অনুপ্রেরণায় তৈরি একটি নির্ভেজাল হাস্যরসাত্মক স্যাটায়ার প্ল্যাটফর্ম। কোনো ব্যক্তি, প্রতিষ্ঠান বা বাস্তব নীতির সাথে মিল সম্পূর্ণ অনিচ্ছাকৃত ও নির্মল বিনোদনমূলক।
          </p>
        </div>

        <div className="text-center text-[11px] text-slate-600 font-mono">
          © {new Date().getFullYear()} Vision Bangla AI · All Satirical Rights Reserved
        </div>
      </div>
    </footer>
  );
};
