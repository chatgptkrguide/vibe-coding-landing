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
    <section className="bg-zinc-950 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-black text-center mb-4">수강생 후기</h2>
        <p className="text-zinc-400 text-center mb-12">
          바이브 코딩으로 인생이 바뀐 사람들
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <p className="text-zinc-700 text-4xl leading-none">&ldquo;</p>
              <p className="text-zinc-300 text-sm leading-relaxed mt-2">
                {testimonial.quote}
              </p>
              <span className="mt-4 inline-block bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded">
                {testimonial.tag}
              </span>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800">
                <div
                  className={`bg-gradient-to-br ${testimonial.gradient} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-sm`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
