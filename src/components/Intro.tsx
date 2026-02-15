export default function Intro(): React.ReactElement {
  return (
    <section className="pt-0 pb-24 bg-black border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Body text */}
        <div className="text-center mb-16">
          <p className="text-[1.5rem] sm:text-4xl font-black leading-[1.8] sm:leading-[2.4] text-white break-keep">
            2025년,{" "}
            <span className="bg-yellow-400/20 text-yellow-500 px-1">
              코딩의 패러다임
            </span>
            이 바뀌었습니다.
            <br />
            더 이상 프로그래밍 언어를 배울 필요가 없습니다.
            <br />
            <br />
            AI에게{" "}
            <span className="bg-yellow-400/20 text-yellow-500 px-1">
              자연어로 지시
            </span>
            하면,
            <br />
            AI가 코드를 작성합니다.
            <br />
            이것이 &lsquo;
            <span className="text-yellow-500 font-black">바이브 코딩</span>
            &rsquo;입니다.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              4주
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              완성 기간
            </p>
          </div>
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              92%
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              서비스 런칭률
            </p>
          </div>
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              0줄
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              직접 작성 코드
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#curriculum"
            className="cta-button inline-block text-xl sm:text-2xl font-black py-6 px-12 rounded-2xl"
          >
            커리큘럼 확인하기 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
