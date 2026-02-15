export default function Intro(): React.ReactElement {
  return (
    <section className="pt-0 pb-24 bg-black border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Body text */}
        <div className="text-center mb-16">
          <p className="text-[1.5rem] sm:text-4xl font-black leading-[1.8] sm:leading-[2.4] text-white break-keep">
            [소개 문단 - 핵심 메시지를 강조 텍스트와 함께 작성]
            <br />
            <span className="bg-yellow-400/20 text-yellow-500 px-1">
              [강조할 키워드1]
            </span>
            <br />
            <br />
            [소개 문단 두 번째 파트]
            <br />
            <span className="bg-yellow-400/20 text-yellow-500 px-1">
              [강조할 키워드2]
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              [수치1]
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              [수치1 설명]
            </p>
          </div>
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              [수치2]
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              [수치2 설명]
            </p>
          </div>
          <div className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <p className="text-4xl sm:text-5xl font-black text-yellow-500">
              [수치3]
            </p>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              [수치3 설명]
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#curriculum"
            className="cta-button inline-block text-xl sm:text-2xl font-black py-6 px-12 rounded-2xl"
          >
            [CTA 버튼 문구] &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
