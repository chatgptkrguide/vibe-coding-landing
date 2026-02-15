interface Testimonial {
  name: string;
  role: string;
  initial: string;
  gradient: string;
  quote: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "김서연",
    role: "스타트업 PM",
    initial: "김",
    gradient: "from-yellow-500 to-orange-500",
    quote:
      "개발자 채용 없이 MVP를 만들었습니다. 투자자 미팅에서 직접 만든 프로토타입을 보여줬더니 반응이 폭발적이었어요.",
    tag: "4주 만에 서비스 런칭",
  },
  {
    name: "박준호",
    role: "마케팅 디렉터",
    initial: "박",
    gradient: "from-blue-500 to-cyan-500",
    quote:
      "마케팅 자동화 도구를 직접 만들었습니다. 월 200만원 외주비를 절약하고, 팀 생산성이 3배 올랐어요.",
    tag: "월 200만원 절약",
  },
  {
    name: "이하은",
    role: "프리랜서 디자이너",
    initial: "이",
    gradient: "from-purple-500 to-pink-500",
    quote:
      "디자인만 할 줄 알았는데 이제 풀 프로덕트를 만듭니다. 클라이언트한테 디자인+개발 패키지로 제안하니 단가가 2배 올랐어요.",
    tag: "수익 2배 증가",
  },
  {
    name: "최민수",
    role: "회사원 (기획팀)",
    initial: "최",
    gradient: "from-green-500 to-emerald-500",
    quote:
      "회사에서 필요한 내부 도구를 직접 만들어서 팀장님께 보여줬더니 바로 승진 추천받았습니다. AI 코딩이 커리어 게임체인저예요.",
    tag: "승진 추천",
  },
  {
    name: "정다인",
    role: "1인 창업자",
    initial: "정",
    gradient: "from-red-500 to-rose-500",
    quote:
      "외주 개발에 500만원 쓸 뻔했는데, 바이브 코딩으로 직접 만들었어요. 지금 MAU 2,000명 넘는 서비스를 혼자 운영 중입니다.",
    tag: "MAU 2,000+ 달성",
  },
  {
    name: "한지우",
    role: "대학원생",
    initial: "한",
    gradient: "from-amber-500 to-yellow-500",
    quote:
      "연구 데이터 분석 대시보드를 만들었습니다. 교수님이 깜짝 놀라셨어요. 논문에도 활용할 수 있어서 대만족입니다.",
    tag: "연구 생산성 향상",
  },
];

export default function Testimonials(): React.ReactElement {
  return (
    <section className="py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-2xl font-medium mb-4 leading-tight text-zinc-400">
            수강생 후기
          </h2>
          <p className="text-3xl sm:text-5xl font-black text-white">
            바이브 코딩으로
            <br />
            인생이 바뀐 사람들
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-zinc-800 border border-zinc-700 p-6 sm:p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`bg-gradient-to-br ${testimonial.gradient} rounded-[14px] w-10 h-10 flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="inline-block bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1.5 rounded-full">
                {testimonial.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
