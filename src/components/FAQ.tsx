"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "코딩을 전혀 몰라도 수강할 수 있나요?",
    answer:
      "네, 물론입니다! 바이브 코딩은 비개발자를 위한 프로그램입니다. 코딩 경험이 전혀 없어도 AI 도구를 활용해 프로덕트를 만들 수 있습니다. 수강생의 80% 이상이 코딩 경험이 없는 분들입니다.",
  },
  {
    id: "faq-2",
    question: "어떤 AI 도구를 사용하나요?",
    answer:
      "주로 Claude (Anthropic), Cursor (AI 코드 에디터), v0 (Vercel의 UI 생성 도구)를 사용합니다. 추가로 Supabase, Vercel 등의 개발 플랫폼도 함께 활용합니다. 모든 도구는 수업 중 함께 세팅합니다.",
  },
  {
    id: "faq-3",
    question: "수업을 놓치면 어떻게 되나요?",
    answer:
      "모든 수업은 녹화되어 제공됩니다. 라이브로 참석하지 못하더라도 녹화본으로 학습하실 수 있으며, 슬랙 커뮤니티를 통해 질문하실 수 있습니다.",
  },
  {
    id: "faq-4",
    question: "4주 안에 정말 서비스를 만들 수 있나요?",
    answer:
      "네! 이것이 바이브 코딩의 강점입니다. AI가 코드를 작성하기 때문에 기존 대비 10배 이상 빠르게 개발이 가능합니다. 실제로 수료생의 92%가 4주 내에 서비스를 런칭했습니다.",
  },
  {
    id: "faq-5",
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "수강 시작 7일 전까지 100% 환불이 가능합니다. 수강 시작 후에는 1주차 수업 완료 전까지 70% 환불이 가능합니다. 자세한 내용은 이용약관을 참고해주세요.",
  },
  {
    id: "faq-6",
    question: "수료 후에도 지원을 받을 수 있나요?",
    answer:
      "수료 후에도 커뮤니티에 영구적으로 접근할 수 있습니다. 동기들과 교류하며 프로젝트를 발전시킬 수 있고, 정기적으로 열리는 네트워킹 이벤트에도 참여할 수 있습니다.",
  },
];

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number): void {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12">
          자주 묻는 질문
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={item.id} className="rounded-xl overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full bg-zinc-900 p-5 flex justify-between items-center cursor-pointer text-left"
              >
                <span className="text-white font-semibold pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-5 text-zinc-400 bg-zinc-900/50 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
