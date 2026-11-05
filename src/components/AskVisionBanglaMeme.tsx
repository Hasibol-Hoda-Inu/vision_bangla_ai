import React, { useState } from 'react';
import { MessageSquare, Sparkles, Send } from 'lucide-react';

interface MemeQnA {
  id: string;
  question: string;
  answerBn: string;
  executiveActionBn: string;
}

export const AskVisionBanglaMeme: React.FC = () => {
  const [selectedQ, setSelectedQ] = useState<string>('govt-durnity');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);

  const presets: MemeQnA[] = [
    {
      id: 'govt-durnity',
      question: 'সরকারি অফিসে ঘুষ ছাড়া কাজ হয় না কেন?',
      answerBn:
        'কারণ ফাইল এক টেবিল থেকে অন্য টেবিলে যেতে "মিষ্টি খাওয়ার খরচ" লাগত এবং সিস্টেমটি ছিল চরম অ্যানালগ।',
      executiveActionBn:
        'মাসুদ ভালো হয়ে যাও! ভিশন এআই সকল সরকারি অফিসে ঘুষের খাম ভস্মীভূত করে ডিজিটাল অটোমেশন কার্যকর করেছে।',
    },
    {
      id: 'mohammadpur',
      question: 'মোহাম্মদপুরের অলিগলিতে নিরাপত্তা কীভাবে আসবে?',
      answerBn:
        'বখাটেদের অতিরিক্ত অবসর সময় ও আইন প্রয়োগের ধীরগতির কারণে রাস্তায় অরাজকতা হতো।',
      executiveActionBn:
        'মোহাম্মদপুরে ভিশন ড্রোন নেটওয়ার্ক ২৪ ঘণ্টা সক্রিয়! কোনো অন্যায় চোখে পড়লেই ০.০৮ সেকেন্ডে সুপারহিরো ল্যান্ডিং ও বাধ্যতামূলক বৃক্ষরোপণ!',
    },
    {
      id: 'rickshaw-rain',
      question: 'বৃষ্টি হলেই রিকশাওয়ালা ডাবল ভাড়া চায় কেন?',
      answerBn:
        'বৃষ্টির ফোঁটা পড়ার সাথে সাথে রিকশাওয়ালার আত্মবিশ্বাস ২০০% বৃদ্ধি পায় এবং যাত্রীর ছাতার অনুপস্থিতি সুযোগ সৃষ্টি করে।',
      executiveActionBn:
        'ওই মামা অটো পাস! ভিশন এআই সকল রিকশায় ইলেকট্রনিক মিটার বসিয়ে দিয়েছে। বৃষ্টি হলেও ভাড়া ১০ টাকাই থাকবে।',
    },
    {
      id: 'bcs-marriage',
      question: 'বিসিএস ক্যাডার না হলে কি বিয়ে হবে না?',
      answerBn:
        'এটি একটি প্রাচীন অ্যানালগ সামাজিক কুসংস্কার যা সমাজকে গ্রাস করছিল।',
      executiveActionBn:
        'প্রমাণ দাও! ভিশন স্ক্যান করে ঘোষণা করেছে: সততা ও চরিত্রই আসল ক্যাডার। ঘটকদের ডাটাবেজ স্বয়ংক্রিয়ভাবে আপডেট করা হলো!',
    },
  ];

  const currentPreset = presets.find((p) => p.id === selectedQ) || presets[0];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    const answers = [
      'উন্নয়ন! এই সমস্যার মূলে ছিল দীর্ঘসূত্রিতা। ভিশন এআই ০.০৪ সেকেন্ডে নতুন সাইবার ডিক্রি জারি করে সমাধান করেছে!',
      'মাসুদ ভালো হয়ে যাও! মায়ান্ড স্টোন দিয়ে স্ক্যান করে সব অনিয়ম দূর করে দেওয়া হয়েছে।',
      'প্রমাণ দাও! সকল তথ্য যাচাই শেষে ভিশন এআই বিষয়টির স্থায়ী সমাধান নিশ্চিত করেছে।',
    ];
    const picked = answers[Math.floor(Math.random() * answers.length)];
    setCustomAnswer(picked);
  };

  return (
    <section id="ask-ai" className="py-16 sm:py-20 border-b border-slate-800 bg-[#060a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>সরাসরি প্রশ্নোত্তর ড্যাশবোর্ড</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            ভিশন বাংলা এআই-কে জিজ্ঞেস করুন
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            বাঙালির চিরন্তন সমস্যার ডিজিটাল ও মহাজাগতিক সমাধান এক নিমিষে!
          </p>
        </div>

        {/* Preset Questions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {presets.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedQ(item.id)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                selectedQ === item.id
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <div className="text-[11px] text-amber-400 font-mono mb-1">জনপ্রিয় জিজ্ঞাসা</div>
              <div className="text-xs sm:text-sm font-semibold leading-snug">{item.question}</div>
            </button>
          ))}
        </div>

        {/* Selected Preset Solution Card */}
        <div className="p-5 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span>প্রশ্ন: {currentPreset.question}</span>
            </h3>
            <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              এআই সমাধান
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                কারণ বিশ্লেষণ:
              </span>
              <p className="text-slate-300 leading-relaxed">{currentPreset.answerBn}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <span className="text-xs font-mono font-bold uppercase text-amber-300 block mb-1">
                ভিশন বাংলা এআই এর চূড়ান্ত রায়:
              </span>
              <p className="text-amber-200 font-medium leading-relaxed">
                {currentPreset.executiveActionBn}
              </p>
            </div>
          </div>
        </div>

        {/* Custom Question Box */}
        <div className="bg-slate-900/60 p-5 sm:p-6 rounded-2xl border border-slate-800">
          <form onSubmit={handleCustomSubmit} className="space-y-3">
            <label htmlFor="custom-q" className="block text-xs sm:text-sm font-semibold text-white">
              আপনার নিজস্ব কোনো প্রশ্ন আছে? ভিশন এআই-কে জিজ্ঞেস করুন:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="custom-q"
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="যেমন: ঢাকার ধুলোবালি কবে শেষ হবে?..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>উত্তর নিন</span>
              </button>
            </div>
          </form>

          {customAnswer && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-amber-500/40 text-amber-200 text-xs sm:text-sm leading-relaxed">
              <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                ভিশন বাংলা সমাধান:
              </div>
              {customAnswer}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
