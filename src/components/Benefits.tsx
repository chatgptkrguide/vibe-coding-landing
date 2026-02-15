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
    title: "[혜택1 제목]",
    description: "[혜택1 상세 설명 - 2~3문장]",
    iconBg: "bg-blue-600",
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "[혜택2 제목]",
    description: "[혜택2 상세 설명 - 2~3문장]",
    iconBg: "bg-purple-600",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "[혜택3 제목]",
    description: "[혜택3 상세 설명 - 2~3문장]",
    iconBg: "bg-green-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "[혜택4 제목]",
    description: "[혜택4 상세 설명 - 2~3문장]",
    iconBg: "bg-red-600",
  },
];

export default function Benefits(): React.ReactElement {
  return (
    <section className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 text-white">
            [혜택 섹션 제목]
          </h2>
          <p className="text-zinc-400 text-lg">
            [혜택 섹션 부제]
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
