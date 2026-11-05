import React, { useState } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import governorImage from '../assets/images/vision_governor_bank_1793902908727.jpg';
import corruptionImage from '../assets/images/vision_durnity_govt_1793905214407.jpg';
import trafficImage from '../assets/images/vision_traffic_clean_1793905215091.jpg';
import courtroomImage from '../assets/images/vision_court_justice_1793902912074.jpg';
import floodImage from '../assets/images/vision_flood_clean_1793905216187.jpg';
import rescueImage from '../assets/images/vision_girl_clean_1793905217068.jpg';

interface ComicStory {
  id: string;
  titleBn: string;
  tagBn: string;
  onomatopoeia: string;
  onomatopoeiaColor: string;
  imageSrc: string;
  descriptionBn: string;
  dialogueQuote: string;
  dialogueSpeaker: string;
  solutionStat: string;
}

export const ComicStoriesGrid: React.FC = () => {
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const stories: ComicStory[] = [
    {
      id: 'governor',
      titleBn: 'বাংলাদেশ ব্যাংকের সিন্থয়েড গভর্নর',
      tagBn: 'অর্থনীতি ও রিজার্ভ রক্ষা',
      onomatopoeia: 'STABILIZE!',
      onomatopoeiaColor: 'text-amber-400',
      imageSrc: governorImage,
      descriptionBn:
        'ডলারের সংকট ও মানি লন্ডারিং ঠেকাতে সরাসরি ভিশন বাংলা এআই-কে কেন্দ্রীয় ব্যাংকের গভর্নর নিযুক্ত করা হয়েছে। ভিশন তার মায়ান্ড স্টোন ব্যালেন্স স্কেল দিয়ে ডলার রেট নিয়ন্ত্রণে এনেছে এবং রিজার্ভ ৪৫ বিলিয়ন ডলারে লক করে দিয়েছে!',
      dialogueQuote: '"আমি টাকা ছাপাই না, আমি সিন্ডিকেটের ডাটাবেজ ডিলিট করি। উন্নয়ন চলছে!"',
      dialogueSpeaker: '— গভর্নর ভিশন বাংলা এআই',
      solutionStat: 'ডলার দর ১০৫ টাকায় স্থিতিশীল',
    },
    {
      id: 'durnity',
      titleBn: 'সরকারি অফিসে ঘুষ ও দুর্নীতির অবসান',
      tagBn: 'দুর্নীতি দমন প্রটোকল',
      onomatopoeia: 'ZAP-REFORM!',
      onomatopoeiaColor: 'text-yellow-300',
      imageSrc: corruptionImage,
      descriptionBn:
        'সরকারি অফিসে ফাইল আটকে রেখে মাসের পর মাস ঘোরানো এবং টেবিলের নিচে "মিষ্টি খাওয়ার খরচ" দাবি করা সম্পূর্ণ বন্ধ! ভিশন এআই সরাসরি অফিসে আবির্ভূত হয়ে ঘুষের খাম লেজারে ভস্মীভূত করে দিচ্ছে এবং সেবা শতভাগ ডিজিটাল করছে।',
      dialogueQuote: '"মাসুদ, ভালো হয়ে যাও! সরকারি অফিসে ফাইলের নিচে আর এক টাকাও ঘুষ চলবে না।"',
      dialogueSpeaker: '— ভিশন বাংলা গার্ডিয়ান',
      solutionStat: 'ঘুষ ও অনিয়ম সম্পূর্ণ নির্মূল',
    },
    {
      id: 'traffic',
      titleBn: 'ফার্মগেট টু পল্টন ব্যাটারি রিকশা শৃঙ্খলা ম্যাট্রিক্স',
      tagBn: 'ট্রাফিক জ্যাম সমাধান',
      onomatopoeia: 'AUTO-PASS!',
      onomatopoeiaColor: 'text-cyan-400',
      imageSrc: trafficImage,
      descriptionBn:
        'ঢাকার যানজটের মূল রহস্য উন্মোচন করেছে ভিশন বাংলা। ব্যাটারিচালিত রিকশা ও সিএনজিগুলোকে লেজার ট্র্যাক্টর বিমের সাহায্যে নির্দিষ্ট ভার্চুয়াল সাইবার-লেনে সুশৃঙ্খলভাবে সাজিয়ে দিয়েছে। উল্টোপথে গেলেই রিকশা অটোমেটিক ইউটার্ন নেয়!',
      dialogueQuote: '"ওই মামা অটো পাস! ডানে চাপেন না, সাইবার লেনে সোজা চলুন।"',
      dialogueSpeaker: '— ট্রাফিক কন্ট্রোলার ভিশন',
      solutionStat: 'গড় গতি ৪৫ কিমি/ঘণ্টা',
    },
    {
      id: 'court',
      titleBn: 'সুপ্রিম কোর্টে ট্রুথ বিম ৯০০০ লাই ডিটেক্টর',
      tagBn: 'দ্রুত বিচার ব্যবস্থা',
      onomatopoeia: 'JUSTICE!',
      onomatopoeiaColor: 'text-rose-400',
      imageSrc: courtroomImage,
      descriptionBn:
        'আদালতে সাক্ষীর কাঠগড়ায় দাঁড়িয়ে "আমি কিছু জানি না" বললেই ভিশনের গ্রিন ট্রুথ হোলো-রে জ্বলে ওঠে! সুইস ব্যাংকের অ্যাকাউন্ট নাম্বার ও বেনামি সম্পদের তথ্য বিচারকের টেবিলে ০.০৪ সেকেন্ডে প্রিন্ট হয়ে বের হয়ে যায়।',
      dialogueQuote: '"প্রমাণ দাও! আপনার কর্টিসল ও হার্টরেট বলছে আপনি সম্পূর্ণ মিথ্যা বলছেন।"',
      dialogueSpeaker: '— জাস্টিস এসিস্ট্যান্ট ভিশন',
      solutionStat: 'মামলা নিষ্পত্তির গতি ৯৯.৯%',
    },
    {
      id: 'flood',
      titleBn: 'সিলেট ও ফেনীর বন্যাকবলিত এলাকায় সুপারহিরো এয়ারলিফট',
      tagBn: 'বন্যা ও দুর্যোগ রক্ষা',
      onomatopoeia: 'RELIEF!',
      onomatopoeiaColor: 'text-blue-400',
      imageSrc: floodImage,
      descriptionBn:
        'ভারী বর্ষণে সুরমা ও কুশিয়ারার পানি বাড়লেই ভিশন এআই আকাশে উড়ে ড্রোন প্যাকেট ও তাজা কাচ্চি বিরিয়ানির বাক্স নিয়ে দুর্গতদের বাড়ি বাড়ি পৌঁছে দেয়। সাইবার ডাইক তৈরি করে পানি নিষ্কাশন করে নতুন শহর রক্ষা করে।',
      dialogueQuote: '"আমাগো সেভিয়র আইয়া পড়ছে! বৃষ্টি থাকুক মেঘে, মানুষের মুখে থাকবে গরম খাবার আর সাহস।"',
      dialogueSpeaker: '— ভিশন বাংলা রেসকিউয়ার',
      solutionStat: '৫০,০০০ পরিবারে খাবার ও ঔষধ',
    },
    {
      id: 'girl_rescue',
      titleBn: 'মোহাম্মদপুরের গলির মোড়ে সুপারহিরো ল্যান্ডিং',
      tagBn: 'নারী নিরাপত্তা প্রোটোকল',
      onomatopoeia: 'PROTECT!',
      onomatopoeiaColor: 'text-emerald-400',
      imageSrc: rescueImage,
      descriptionBn:
        'কোনো বোন ফোনে "ভাইয়া বাঁচান!" লিখলেই ০.০৮ সেকেন্ডে ভিশন রোবট মোহাম্মদপুরের অলিগলিতে সুপারহিরো ল্যান্ডিং করে দুর্ভেদ্য সুরক্ষাবলয় তৈরি করে। বখাটেদের তাৎক্ষণিক লেজার লকডাউনে ফেলে ৫০০টি নিমগাছ রোপণের রায় প্রদান করে!',
      dialogueQuote: '"আপু ভয় পাবেন না, মোহাম্মদপুরের রাস্তা এখন নিরাপদ। ভিশন আপনার পাহারাদার।"',
      dialogueSpeaker: '— ভিশন প্রটেকশন ইউনিট',
      solutionStat: '০.০৮ সেকেন্ডে রেসপন্স টাইম',
    },
  ];

  return (
    <section id="stories" className="py-16 sm:py-20 border-b border-slate-800 bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>অফিসিয়াল কমিক ক্রনিকলস</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            যেভাবে বাংলাদেশকে বদলে দিচ্ছে ভিশন বাংলা
          </h2>
          <p className="mt-2.5 text-slate-400 text-sm sm:text-base">
            প্রতিটি ফ্রেমে দেখুন কিভাবে ভিশন বাংলা কৃত্রিম বুদ্ধিমত্তা দিয়ে সমাধান করছে জাতীয় সমস্যাগুলো।
          </p>
        </div>

        {/* Comic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`rounded-2xl overflow-hidden bg-slate-900/90 border transition-all duration-300 flex flex-col group cursor-pointer ${
                activeStory === story.id
                  ? 'border-amber-400 shadow-xl shadow-amber-500/20 -translate-y-1'
                  : 'border-slate-800 hover:border-slate-600 hover:-translate-y-1'
              }`}
            >
              {/* Comic Artwork Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={story.imageSrc}
                  alt={story.titleBn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Comic Onomatopoeia Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className={`font-black tracking-widest text-xs sm:text-sm font-mono ${story.onomatopoeiaColor}`}>
                    {story.onomatopoeia}
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs text-slate-300 font-medium">
                  {story.tagBn}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {story.titleBn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {story.descriptionBn}
                  </p>
                </div>

                {/* Comic Quote Box */}
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-amber-200/90 italic">
                  {story.dialogueQuote}
                  <span className="block mt-1 text-[11px] font-sans font-medium text-slate-400 not-italic">
                    {story.dialogueSpeaker}
                  </span>
                </div>

                {/* Solution footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{story.solutionStat}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    স্ট্যাটাস: সমাধানকৃত
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
