export default function Intro(): React.ReactElement {
  return (
    <section className="bg-zinc-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl font-black inline-block">
            왜 바이브 코딩인가?
            <span className="block border-b-[4px] border-yellow-500 mt-2 w-full" />
          </h2>
        </div>

        {/* Body text */}
        <div className="space-y-6 mb-16 animate-fade-in-up">
          <p className="text-zinc-300 text-lg leading-relaxed">
            2025년, 코딩의 패러다임이 바뀌었습니다. 더 이상 프로그래밍 언어를
            배울 필요가 없습니다. AI에게 자연어로 지시하면, AI가 코드를
            작성합니다. 이것이 &lsquo;바이브 코딩&rsquo;입니다.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed">
            아이디어만 있으면 됩니다. 기획, 디자인, 개발, 배포까지 &mdash;
            AI와 함께라면 혼자서도 4주 만에 완성할 수 있습니다.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 animate-fade-in-up">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              4주
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              완성 기간
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              92%
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              서비스 런칭률
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              0줄
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              직접 작성 코드
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <a href="#curriculum" className="cta-button text-lg">
            커리큘럼 확인하기 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
