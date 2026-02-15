interface WeekItem {
  week: number;
  title: string;
  items: string[];
  result: string;
  markerColor: string;
  lineColor: string;
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
    lineColor: "border-yellow-500",
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
    lineColor: "border-blue-500",
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
    lineColor: "border-green-500",
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
    lineColor: "border-red-500",
  },
];

export default function Curriculum(): React.ReactElement {
  return (
    <section id="curriculum" className="bg-zinc-950 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-black text-center mb-4">
          4주 커리큘럼
        </h2>
        <p className="text-zinc-400 text-center mb-16">
          매주 토요일 오전 10시 ~ 오후 1시 (3시간)
        </p>

        <div className="space-y-12">
          {weeks.map((week) => (
            <div key={week.week} className="relative border-l-2 border-zinc-700 pl-8">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${week.markerColor} ring-4 ring-zinc-950`}
              />

              {/* Week label */}
              <span className={`text-sm font-bold uppercase tracking-wider ${
                week.markerColor === "bg-yellow-500" ? "text-yellow-500" :
                week.markerColor === "bg-blue-500" ? "text-blue-500" :
                week.markerColor === "bg-green-500" ? "text-green-500" :
                "text-red-500"
              }`}>
                Week {week.week}
              </span>

              {/* Card */}
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 mt-3">
                <h3 className="text-xl font-bold text-white mb-4">
                  {week.title}
                </h3>

                <ul className="space-y-2 mb-5">
                  {week.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-zinc-400">
                      <span className="text-zinc-600 mt-1">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <span className="text-sm text-zinc-500 mr-2">결과물:</span>
                  <span className="bg-zinc-800 inline-block px-3 py-1 rounded text-sm text-yellow-500">
                    {week.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
