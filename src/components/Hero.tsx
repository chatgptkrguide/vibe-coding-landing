export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center pt-20 pb-16 px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">
        {/* Badge */}
        <span className="inline-block bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300 mb-10 animate-fade-in">
          2026년 3월 개강
        </span>

        {/* Main title */}
        <h1 className="text-center mb-16 animate-fade-in-up">
          <span className="block text-[2.8rem] sm:text-6xl md:text-7xl font-black leading-[1.1] break-keep">
            코드 한 줄 몰라도
          </span>
          <span className="block text-[2.8rem] sm:text-6xl md:text-7xl font-black leading-[1.1] mt-3 break-keep">
            AI로 프로덕트를 만드는
          </span>
          <span className="block text-[2.8rem] sm:text-6xl md:text-7xl font-black leading-[1.1] mt-3 text-yellow-500 break-keep">
            바이브 코딩 부트캠프
          </span>
        </h1>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 w-full max-w-3xl animate-fade-in-up">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
            <p className="text-red-500 font-black text-sm uppercase tracking-wider mb-2">
              실적
            </p>
            <p className="text-white font-black text-2xl sm:text-3xl break-keep">
              수료생 92%가
              <br />
              실제 서비스 런칭
            </p>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(252,211,77,0.1)]">
            <p className="text-yellow-500 font-black text-sm uppercase tracking-wider mb-2">
              대상
            </p>
            <p className="text-white font-black text-2xl sm:text-3xl break-keep">
              비개발자 전용
              <br />
              커리큘럼
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <a
            href="#pricing"
            className="cta-button w-full sm:w-auto text-xl sm:text-2xl font-black py-6 sm:py-8 px-12 sm:px-16 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.5)] flex items-center justify-center gap-4"
          >
            지금 신청하기 &rarr;
          </a>
          <p className="text-zinc-500 text-sm">
            Claude, Cursor, v0와 함께하는 4주 실전 프로그램
          </p>
        </div>
      </div>
    </section>
  );
}
