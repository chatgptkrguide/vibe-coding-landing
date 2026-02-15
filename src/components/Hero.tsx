export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <span className="inline-block bg-zinc-800 px-3 py-1.5 rounded text-sm text-zinc-300 mb-8 animate-fade-in">
          2026년 3월 개강
        </span>

        {/* Main title */}
        <h1 className="animate-fade-in-up">
          <span className="block text-3xl sm:text-5xl font-black leading-tight">
            코드 한 줄 몰라도
          </span>
          <span className="block text-3xl sm:text-5xl font-black leading-tight mt-2">
            AI로 프로덕트를 만드는
          </span>
          <span className="block text-3xl sm:text-5xl font-black leading-tight mt-2 text-yellow-500">
            바이브 코딩 부트캠프
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-zinc-400 mt-8 animate-fade-in">
          Claude, Cursor, v0와 함께하는 4주 실전 프로그램
        </p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-2xl animate-fade-in-up">
          <div className="border-l-4 border-yellow-500 bg-zinc-900/60 px-6 py-4 text-left rounded-r-lg">
            <p className="text-white font-bold text-lg">
              수료생 92%가 실제 서비스 런칭
            </p>
          </div>
          <div className="border-l-4 border-red-500 bg-zinc-900/60 px-6 py-4 text-left rounded-r-lg">
            <p className="text-white font-bold text-lg">
              비개발자 전용 커리큘럼
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 animate-fade-in-up">
          <a href="#pricing" className="cta-button text-lg">
            지금 신청하기 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
