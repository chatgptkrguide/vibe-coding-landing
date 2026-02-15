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
  featured: boolean;
  borderClassName: string;
}

const DEADLINE = new Date("2026-03-01T00:00:00+09:00");

const plans: PricingPlan[] = [
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
    featured: false,
    borderClassName: "border border-zinc-800",
  },
  {
    id: "earlybird",
    name: "얼리버드",
    badge: {
      text: "얼리버드 한정",
      className:
        "bg-black text-yellow-500 text-xs font-black px-3 py-1 rounded-full",
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
    featured: true,
    borderClassName: "border-4 border-white",
  },
  {
    id: "premium",
    name: "프리미엄",
    badge: {
      text: "PREMIUM",
      className:
        "bg-purple-500/20 text-purple-400 text-xs font-black px-3 py-1 rounded-full",
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
    featured: false,
    borderClassName: "border border-zinc-800",
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
    <section id="pricing" className="relative py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-black mb-6 uppercase text-white">
          수강료
        </h2>
        <p className="text-zinc-400 text-lg">
          지금이 가장 저렴한 가격입니다
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center gap-4 mb-16">
        {timerUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-3xl sm:text-4xl font-black text-yellow-500 min-w-[72px] text-center">
              {mounted ? String(unit.value).padStart(2, "0") : "--"}
            </div>
            <span className="text-zinc-500 text-xs mt-2">{unit.label}</span>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${plan.borderClassName} ${
              plan.featured
                ? "bg-yellow-500 text-black"
                : "bg-zinc-900 opacity-70"
            } rounded-2xl p-8 relative ${plan.featured ? "z-10" : ""}`}
          >
            {plan.badge && (
              <span className={`${plan.badge.className} inline-block mb-4`}>
                {plan.badge.text}
              </span>
            )}

            <h3
              className={`text-2xl font-black mb-4 ${
                plan.featured ? "text-black" : "text-white"
              }`}
            >
              {plan.name}
            </h3>

            <div className="mb-6">
              {plan.originalPrice && (
                <span
                  className={`line-through text-lg mr-2 ${
                    plan.featured ? "text-black/50" : "text-zinc-500"
                  }`}
                >
                  {plan.originalPrice}
                </span>
              )}
              <span
                className={`text-5xl sm:text-6xl font-black ${
                  plan.featured ? "text-black" : "text-white"
                }`}
              >
                {plan.price}
              </span>
              {plan.discount && (
                <span
                  className={`font-black ml-3 text-lg ${
                    plan.featured ? "text-red-700" : "text-red-500"
                  }`}
                >
                  {plan.discount}
                </span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.featured ? "text-black" : "text-green-500"
                    }`}
                  />
                  <span
                    className={
                      plan.featured ? "text-black/80" : "text-zinc-300"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`block w-full text-center py-4 font-black rounded-xl transition-all text-lg ${
                plan.featured
                  ? "bg-black text-yellow-500 hover:bg-zinc-900"
                  : plan.id === "premium"
                    ? "bg-purple-600 hover:bg-purple-500 text-white"
                    : "bg-zinc-700 hover:bg-zinc-600 text-white"
              }`}
            >
              {plan.ctaText}
            </a>
          </div>
        ))}
      </div>

      <p className="text-zinc-500 text-sm text-center mt-10">
        카드 결제 / 계좌이체 가능 | 수강 시작 7일 전까지 100% 환불
      </p>
    </section>
  );
}
