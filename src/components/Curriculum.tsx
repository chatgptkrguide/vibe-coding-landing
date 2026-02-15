interface WeekItem {
  week: number;
  title: string;
  items: string[];
  result: string;
  markerColor: string;
  textColor: string;
}

const weeks: WeekItem[] = [
  {
    week: 1,
    title: "AI 도구 세팅 & 첫 번째 페이지",
    items: [
      "Claude, Cursor, v0 환경 설정",
      "프롬프트 엔지니어링 기초",
      "첫 번째 랜딩 페이지 만들기",
      "Next.js + Tailwind 기본 구조 이해",
    ],
    result: "나만의 랜딩 페이지 완성",
    markerColor: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    week: 2,
    title: "데이터베이스 & 사용자 인증",
    items: [
      "Supabase로 데이터베이스 구축",
      "회원가입/로그인 기능 구현",
      "CRUD 기능 만들기",
      "AI로 API 설계하기",
    ],
    result: "회원 기능이 있는 웹앱",
    markerColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    week: 3,
    title: "핵심 기능 개발 & AI 통합",
    items: [
      "OpenAI API 연동",
      "결제 시스템 연동 (Stripe/토스)",
      "이메일 알림 기능",
      "실시간 데이터 처리",
    ],
    result: "핵심 기능이 동작하는 서비스",
    markerColor: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    week: 4,
    title: "배포 & 런칭",
    items: [
      "Vercel로 프로덕션 배포",
      "도메인 연결 & SEO 최적화",
      "성능 최적화 & 버그 수정",
      "런칭 전략 & 마케팅 기초",
    ],
    result: "실제 서비스 런칭 완료",
    markerColor: "bg-red-500",
    textColor: "text-red-500",
  },
];

export default function Curriculum(): React.ReactElement {
  return (
    <section
      id="curriculum"
      className="py-24 bg-black text-white border-b border-zinc-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 uppercase">
          4주 커리큘럼
        </h2>

        <div className="flex flex-col gap-6 mb-24">
          <p className="text-center text-zinc-400 text-lg mb-8">
            매주 토요일 오전 10시 ~ 오후 1시 (3시간)
          </p>

          {weeks.map((week) => (
            <div
              key={week.week}
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-3 h-3 rounded-full ${week.markerColor}`}
                />
                <span
                  className={`text-sm font-bold uppercase tracking-wider ${week.textColor}`}
                >
                  Week {week.week}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-5">
                {week.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {week.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-zinc-400 text-base sm:text-lg"
                  >
                    <span className="text-zinc-600 mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-zinc-800">
                <span className="text-sm text-zinc-500 mr-2">결과물</span>
                <span className="bg-zinc-800 inline-block px-4 py-1.5 rounded-lg text-sm text-yellow-500 font-bold">
                  {week.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
