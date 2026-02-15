import { Zap, Brain, Rocket, TrendingUp } from "lucide-react";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}

const benefits: BenefitCard[] = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "10배 빠른 개발 속도",
    description:
      "기존 개발 방식 대비 10배 이상 빠르게 프로토타입을 만들 수 있습니다. 아이디어에서 MVP까지 단 며칠이면 충분합니다.",
    iconBg: "bg-blue-600",
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "코딩 지식 불필요",
    description:
      "프로그래밍 언어를 몰라도 됩니다. 한국어로 AI에게 지시하면 됩니다. 기획력과 논리적 사고만 있으면 충분합니다.",
    iconBg: "bg-purple-600",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "실제 서비스 런칭",
    description:
      "교육이 끝나면 실제로 동작하는 웹서비스가 완성됩니다. 포트폴리오가 아닌, 진짜 사용자를 받을 수 있는 프로덕트입니다.",
    iconBg: "bg-green-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "커리어 경쟁력 확보",
    description:
      "AI 시대의 핵심 역량을 갖추세요. 바이브 코딩은 기획자, 마케터, 창업자 모두에게 게임체인저가 됩니다.",
    iconBg: "bg-red-600",
  },
];

export default function Benefits(): React.ReactElement {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white">
            바이브 코딩으로 얻는 것
          </h2>
          <p className="text-zinc-400 text-lg">
            4주 안에 당신의 아이디어를 현실로 만드세요
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`${benefit.iconBg} p-3 sm:p-4 rounded-2xl flex-shrink-0`}
                >
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    {benefit.description}
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
