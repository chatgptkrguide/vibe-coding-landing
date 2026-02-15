import { Zap, Brain, Rocket, TrendingUp } from "lucide-react";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const benefits: BenefitCard[] = [
  {
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    title: "10배 빠른 개발 속도",
    description:
      "기존 개발 방식 대비 10배 이상 빠르게 프로토타입을 만들 수 있습니다. 아이디어에서 MVP까지 단 며칠이면 충분합니다.",
    borderColor: "border-blue-500",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: "코딩 지식 불필요",
    description:
      "프로그래밍 언어를 몰라도 됩니다. 한국어로 AI에게 지시하면 됩니다. 기획력과 논리적 사고만 있으면 충분합니다.",
    borderColor: "border-purple-500",
  },
  {
    icon: <Rocket className="w-8 h-8 text-green-500" />,
    title: "실제 서비스 런칭",
    description:
      "교육이 끝나면 실제로 동작하는 웹서비스가 완성됩니다. 포트폴리오가 아닌, 진짜 사용자를 받을 수 있는 프로덕트입니다.",
    borderColor: "border-green-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-500" />,
    title: "커리어 경쟁력 확보",
    description:
      "AI 시대의 핵심 역량을 갖추세요. 바이브 코딩은 기획자, 마케터, 창업자 모두에게 게임체인저가 됩니다.",
    borderColor: "border-red-500",
  },
];

export default function Benefits(): React.ReactElement {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12">
          바이브 코딩으로 얻는 것
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`bg-zinc-900 border border-zinc-800 border-t-4 ${benefit.borderColor} p-8 rounded-2xl hover:border-zinc-700 transition-all`}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
