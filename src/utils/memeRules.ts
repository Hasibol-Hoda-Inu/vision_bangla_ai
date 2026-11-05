/**
 * Pure calculation & rules engine for Vision Bangla AI meme algorithms
 */

export interface EconomicStatus {
  dollarRate: number;
  reservesBillionUsd: number;
  inflationPct: number;
  verdictBn: string;
  isPerfect: boolean;
}

export function calculateEconomicStabilization(dollarRate: number): EconomicStatus {
  const clampedRate = Math.max(90, Math.min(150, dollarRate));
  const deviation = Math.abs(clampedRate - 105);
  const reservesBillionUsd = Number((48 - (deviation * 0.8)).toFixed(1));
  const inflationPct = Number((3.2 + (deviation * 0.3)).toFixed(1));

  let verdictBn = '';
  let isPerfect = false;

  if (clampedRate <= 105) {
    verdictBn = 'উন্নয়ন! ডলার একদম নিয়ন্ত্রণে! প্রবাসী আয় ও রিজার্ভের নতুন রেকর্ড!';
    isPerfect = true;
  } else if (clampedRate < 120) {
    verdictBn = 'স্বাভাবিক পরিস্থিতি। গভর্নর ভিশন ড্যাশবোর্ডে সজাগ।';
  } else {
    verdictBn = 'উচ্চ ডলার রেট! ভিশন সেন্ট্রাল ব্যাংক লেজার দিয়ে হুন্ডি চক্র ট্র্যাকিং শুরু করেছে!';
  }

  return {
    dollarRate: clampedRate,
    reservesBillionUsd: Math.max(15, reservesBillionUsd),
    inflationPct: Math.max(1.5, inflationPct),
    verdictBn,
    isPerfect,
  };
}

export interface TruthBeamResult {
  lieScore: number;
  stressLevel: number;
  verdictBn: string;
  punishmentBn: string;
  isGuilty: boolean;
}

export function evaluateTruthBeam(statement: string): TruthBeamResult {
  const normalized = statement.toLowerCase().trim();
  
  if (normalized.includes('বেগম পাড়া') || normalized.includes('কানাডা') || normalized.includes('বাড়ি নাই')) {
    return {
      lieScore: 100,
      stressLevel: 99,
      verdictBn: 'প্রমাণ দাও! চরম অসত্য! টরন্টো ও দুবাইয়ের ৭টি ভিলা মায়ান্ড স্টোনের এক্স-রেতে ধরা পড়েছে।',
      punishmentBn: 'সকল সম্পদ বাজেয়াপ্ত করে মিরপুর ১০ নম্বর গোলচত্বরে রোদ পোহানোর আদেশ।',
      isGuilty: true,
    };
  }

  if (normalized.includes('ঘুষ') || normalized.includes('ফাইল') || normalized.includes('টেবিল') || normalized.includes('দুর্নীতি')) {
    return {
      lieScore: 99,
      stressLevel: 98,
      verdictBn: 'মাসুদ ভালো হয়ে যাও! টেবিলের নিচে ফাইলের ফাঁকে ঘুষের বান্ডিল শনাক্ত!',
      punishmentBn: 'চাকরি থেকে বরখাস্ত এবং জনগণের সেবা নিশ্চিত করতে ডিজিটাল অটোমেশন কার্যকর।',
      isGuilty: true,
    };
  }

  if (normalized.includes('পাচার') || normalized.includes('ঋণ') || normalized.includes('খেলাপি')) {
    return {
      lieScore: 99,
      stressLevel: 97,
      verdictBn: 'ঋণ ফেরত না দেওয়ার চরম জালিয়াতি শনাক্ত!',
      punishmentBn: 'সুইস ব্যাংক একাউন্ট ভিশন এআই ট্র্যাক করে দেশের কোষাগারে ফেরত এনেছে।',
      isGuilty: true,
    };
  }

  const lengthScore = Math.min(95, 60 + (normalized.length % 35));
  return {
    lieScore: lengthScore,
    stressLevel: 88,
    verdictBn: 'প্রমাণ দাও! মিথ্যাচারের তীব্র কম্পন ধরা পড়েছে ভিশন এআই এর ট্রুথ রে-তে!',
    punishmentBn: 'দ্রুত বিচার ট্রাইব্যুনালে ০.০৪ সেকেন্ডে সশ্রম কারাদণ্ড ঘোষণা।',
    isGuilty: lengthScore > 50,
  };
}

export interface TrafficStats {
  averageSpeedKmH: number;
  hornCountReduced: number;
  delayMinutes: number;
  statusBn: string;
}

export function calculateTrafficFlow(disciplinePct: number): TrafficStats {
  const pct = Math.max(0, Math.min(100, disciplinePct));
  const averageSpeedKmH = Math.round(4.5 + (pct / 100) * 40.5);
  const hornCountReduced = Math.round((pct / 100) * 120000);
  const delayMinutes = Math.max(2, Math.round(180 - (pct / 100) * 170));

  let statusBn = '';
  if (pct < 30) {
    statusBn = 'মহামারী জ্যাম: ফার্মগেট থেকে শাহবাগ যেতে সাড়ে ৩ ঘণ্টা লাগার আশঙ্কা!';
  } else if (pct < 75) {
    statusBn = 'সুশৃঙ্খল লেন: অটোরিকশাগুলো ভিশন ট্র্যাক্টর বিমে ধীরে ধীরে সুশৃঙ্খল হচ্ছে।';
  } else {
    statusBn = 'সুপার সোনিক ট্রাফিক: ওই মামা অটো পাস! মোহাম্মদপুর থেকে উত্তরা মাত্র ১২ মিনিটে!';
  }

  return {
    averageSpeedKmH,
    hornCountReduced,
    delayMinutes,
    statusBn,
  };
}

export interface SosOutcome {
  responseTimeSeconds: number;
  forcefieldActive: boolean;
  actionSummaryBn: string;
  stalkerStatusBn: string;
}

export function processSosReport(details: string): SosOutcome {
  return {
    responseTimeSeconds: 0.08,
    forcefieldActive: true,
    actionSummaryBn: 'ভিশন বাংলা এআই মোহাম্মদপুরে সুপারহিরো ল্যান্ডিং করে সুরক্ষাবলয় তৈরি করেছে। আপু আপনি সম্পূর্ণ নিরাপদ!',
    stalkerStatusBn: 'বখাটেদের লেজার রশ্মি দিয়ে নিরস্ত্র করা হয়েছে এবং ৫০০টি নিমগাছ লাগানোর রায় দেওয়া হয়েছে।',
  };
}
