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
    question: "[질문1]",
    answer: "[답변1]",
  },
  {
    id: "faq-2",
    question: "[질문2]",
    answer: "[답변2]",
  },
  {
    id: "faq-3",
    question: "[질문3]",
    answer: "[답변3]",
  },
  {
    id: "faq-4",
    question: "[질문4]",
    answer: "[답변4]",
  },
  {
    id: "faq-5",
    question: "[질문5]",
    answer: "[답변5]",
  },
  {
    id: "faq-6",
    question: "[질문6]",
    answer: "[답변6]",
  },
];

export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number): void {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black mb-10 text-center text-white">
          [FAQ 섹션 제목]
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full p-6 sm:p-8 flex justify-between items-center cursor-pointer text-left"
              >
                <span className="text-white font-bold text-base sm:text-lg pr-4">
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
                  <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-zinc-400 text-base sm:text-lg leading-relaxed">
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
