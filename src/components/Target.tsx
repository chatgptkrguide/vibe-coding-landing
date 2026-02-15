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
    badge: "[그룹A 배지 - 예: 강력 추천]",
    badgeStyle: "bg-green-500/20 text-green-500",
    title: "[그룹A 대상 - 예: 기획자 / PM]",
    borderColor: "border-green-600",
    iconColor: "text-green-500",
    icon: "check",
    items: [
      "[그룹A 대상 설명 1]",
      "[그룹A 대상 설명 2]",
      "[그룹A 대상 설명 3]",
      "[그룹A 대상 설명 4]",
    ],
  },
  {
    badge: "[그룹B 배지 - 예: 추천]",
    badgeStyle: "bg-blue-500/20 text-blue-500",
    title: "[그룹B 대상 - 예: 창업자 / 프리랜서]",
    borderColor: "border-blue-600",
    iconColor: "text-blue-500",
    icon: "check",
    items: [
      "[그룹B 대상 설명 1]",
      "[그룹B 대상 설명 2]",
      "[그룹B 대상 설명 3]",
      "[그룹B 대상 설명 4]",
    ],
  },
  {
    badge: "[비추천 배지]",
    badgeStyle: "bg-zinc-700/50 text-zinc-400",
    title: "[비추천 대상 제목]",
    borderColor: "border-red-600",
    iconColor: "text-red-500",
    icon: "x",
    items: [
      "[비추천 대상 설명 1]",
      "[비추천 대상 설명 2]",
      "[비추천 대상 설명 3]",
      "[비추천 대상 설명 4]",
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
          [수강대상 섹션 제목]
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
