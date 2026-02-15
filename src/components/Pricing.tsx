"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  badge?: { text: string; className: string };
  originalPrice?: string;
  price: string;
  discount?: string;
  features: PlanFeature[];
  ctaText: string;
  ctaClassName: string;
  borderClassName: string;
}

const DEADLINE = new Date("2026-03-01T00:00:00+09:00");

const plans: PricingPlan[] = [
  {
    id: "earlybird",
    name: "얼리버드",
    badge: {
      text: "얼리버드 한정",
      className: "bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full",
    },
    originalPrice: "₩490,000",
    price: "₩290,000",
    discount: "41% OFF",
    features: [
      { text: "4주 라이브 수업 (12시간)" },
      { text: "1:1 코드 리뷰 (주 1회)" },
      { text: "평생 수강 녹화본 제공" },
      { text: "수료 후 커뮤니티 영구 접근" },
      { text: "얼리버드 전용 보너스 세션" },
    ],
    ctaText: "얼리버드로 신청하기",
    ctaClassName: "cta-button w-full text-center",
    borderClassName: "border-2 border-yellow-500",
  },
  {
    id: "standard",
    name: "일반",
    price: "₩490,000",
    features: [
      { text: "4주 라이브 수업 (12시간)" },
      { text: "1:1 코드 리뷰 (주 1회)" },
      { text: "평생 수강 녹화본 제공" },
      { text: "수료 후 커뮤니티 영구 접근" },
    ],
    ctaText: "일반 신청하기",
    ctaClassName:
      "w-full py-4 bg-zinc-700 hover:bg-zinc-600 text-white font-bold rounded-xl transition-colors text-center",
    borderClassName: "border border-zinc-700",
  },
  {
    id: "premium",
    name: "프리미엄",
    badge: {
      text: "PREMIUM",
      className: "bg-purple-500/20 text-purple-500 text-xs font-bold px-3 py-1 rounded-full",
    },
    price: "₩890,000",
    features: [
      { text: "일반 플랜의 모든 혜택" },
      { text: "1:1 멘토링 (주 2회, 총 8회)" },
      { text: "프로젝트 기획 컨설팅" },
      { text: "배포 후 1개월 유지보수 지원" },
      { text: "수료증 발급" },
    ],
    ctaText: "프리미엄 신청하기",
    ctaClassName:
      "w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors text-center",
    borderClassName: "border border-purple-500/50",
  },
];

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Pricing(): React.ReactElement {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerUnits: { label: string; value: number }[] = [
    { label: "일", value: timeLeft.days },
    { label: "시", value: timeLeft.hours },
    { label: "분", value: timeLeft.minutes },
    { label: "초", value: timeLeft.seconds },
  ];

  return (
    <section id="pricing" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center">수강료</h2>
        <p className="text-zinc-400 text-center mt-4">
          지금이 가장 저렴한 가격입니다
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mt-10">
          {timerUnits.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-3xl font-black text-yellow-500 min-w-[72px] text-center">
                {mounted ? String(unit.value).padStart(2, "0") : "--"}
              </div>
              <span className="text-zinc-500 text-xs mt-1">{unit.label}</span>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.borderClassName} bg-zinc-900 rounded-2xl p-8 flex flex-col`}
            >
              {plan.badge && (
                <span className={`${plan.badge.className} self-start mb-4`}>
                  {plan.badge.text}
                </span>
              )}

              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>

              <div className="mb-6">
                {plan.originalPrice && (
                  <span className="line-through text-zinc-500 text-lg mr-2">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-black text-white">
                  {plan.price}
                </span>
                {plan.discount && (
                  <span className="text-red-500 font-bold ml-3">
                    {plan.discount}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-start gap-2 text-zinc-300"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={plan.ctaClassName}>
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-sm text-center mt-8">
          💳 카드 결제 / 계좌이체 가능 | 수강 시작 7일 전까지 100% 환불
        </p>
      </div>
    </section>
  );
}
