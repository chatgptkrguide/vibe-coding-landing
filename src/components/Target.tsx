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
    borderColor: "border-green-500",
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
    borderColor: "border-blue-500",
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
    borderColor: "border-zinc-700",
    iconColor: "text-zinc-500",
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
    <section id="target" className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-black text-center mb-12">
          이런 분께 추천합니다
        </h2>

        <div className="space-y-6">
          {targetGroups.map((group) => (
            <div
              key={group.title}
              className={`bg-zinc-900 border-t-4 ${group.borderColor} p-6 rounded-2xl`}
            >
              <span
                className={`${group.badgeStyle} text-xs font-bold px-2 py-1 rounded`}
              >
                {group.badge}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    {group.icon === "check" ? (
                      <Check
                        className={`w-5 h-5 ${group.iconColor} flex-shrink-0 mt-0.5`}
                      />
                    ) : (
                      <X
                        className={`w-5 h-5 ${group.iconColor} flex-shrink-0 mt-0.5`}
                      />
                    )}
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
