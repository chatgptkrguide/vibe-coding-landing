import { Check, X } from "lucide-react";

interface TargetGroup {
  badge: string;
  badgeStyle: string;
  title: string;
  borderColor: string;
  items: string[];
  iconColor: string;
  icon: "check" | "x";
}

const targetGroups: TargetGroup[] = [
  {
    badge: "강력 추천",
    badgeStyle: "bg-green-500/20 text-green-500",
    title: "기획자 / PM / 마케터",
    borderColor: "border-green-600",
    iconColor: "text-green-500",
    icon: "check",
    items: [
      "아이디어는 많지만 개발자가 없는 분",
      "사이드 프로젝트를 직접 만들고 싶은 분",
      "AI 도구 활용법을 체계적으로 배우고 싶은 분",
      "업무 자동화로 생산성을 높이고 싶은 분",
    ],
  },
  {
    badge: "추천",
    badgeStyle: "bg-blue-500/20 text-blue-500",
    title: "창업자 / 프리랜서",
    borderColor: "border-blue-600",
    iconColor: "text-blue-500",
    icon: "check",
    items: [
      "MVP를 빠르게 만들어 시장 검증하고 싶은 분",
      "외주 비용을 절약하고 싶은 1인 창업자",
      "클라이언트에게 프로토타입을 보여주고 싶은 분",
      "새로운 수익 모델을 테스트하고 싶은 분",
    ],
  },
  {
    badge: "비추천",
    badgeStyle: "bg-zinc-700/50 text-zinc-400",
    title: "이런 분은 맞지 않아요",
    borderColor: "border-red-600",
    iconColor: "text-red-500",
    icon: "x",
    items: [
      "전문 개발자로 커리어를 쌓고 싶은 분",
      "CS 이론을 깊이 공부하고 싶은 분",
      "이미 풀스택 개발이 가능한 분",
      "수동적으로 강의만 듣고 싶은 분",
    ],
  },
];

export default function Target(): React.ReactElement {
  return (
    <section
      id="target"
      className="py-24 max-w-3xl mx-auto px-6 bg-black border-b border-zinc-900"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
          이런 분께 추천합니다
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {targetGroups.map((group) => (
          <div
            key={group.title}
            className={`bg-zinc-900/30 border-2 ${group.borderColor} rounded-2xl p-8`}
          >
            <span
              className={`${group.badgeStyle} text-xs font-bold px-3 py-1 rounded-full`}
            >
              {group.badge}
            </span>
            <h3 className="text-2xl font-black text-white mt-4 mb-6">
              {group.title}
            </h3>
            <ul className="space-y-4">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {group.icon === "check" ? (
                    <Check
                      className={`w-5 h-5 ${group.iconColor} flex-shrink-0 mt-0.5`}
                    />
                  ) : (
                    <X
                      className={`w-5 h-5 ${group.iconColor} flex-shrink-0 mt-0.5`}
                    />
                  )}
                  <span className="text-zinc-300 text-base sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
