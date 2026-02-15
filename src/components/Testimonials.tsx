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
    name: "[후기1 이름]",
    role: "[후기1 직업/직함]",
    initial: "[성]",
    gradient: "from-yellow-500 to-orange-500",
    quote: "[후기1 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기1 핵심 성과 태그]",
  },
  {
    name: "[후기2 이름]",
    role: "[후기2 직업/직함]",
    initial: "[성]",
    gradient: "from-blue-500 to-cyan-500",
    quote: "[후기2 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기2 핵심 성과 태그]",
  },
  {
    name: "[후기3 이름]",
    role: "[후기3 직업/직함]",
    initial: "[성]",
    gradient: "from-purple-500 to-pink-500",
    quote: "[후기3 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기3 핵심 성과 태그]",
  },
  {
    name: "[후기4 이름]",
    role: "[후기4 직업/직함]",
    initial: "[성]",
    gradient: "from-green-500 to-emerald-500",
    quote: "[후기4 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기4 핵심 성과 태그]",
  },
  {
    name: "[후기5 이름]",
    role: "[후기5 직업/직함]",
    initial: "[성]",
    gradient: "from-red-500 to-rose-500",
    quote: "[후기5 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기5 핵심 성과 태그]",
  },
  {
    name: "[후기6 이름]",
    role: "[후기6 직업/직함]",
    initial: "[성]",
    gradient: "from-amber-500 to-yellow-500",
    quote: "[후기6 내용 - 수강 후 어떤 변화가 있었는지 2~3문장]",
    tag: "[후기6 핵심 성과 태그]",
  },
];

export default function Testimonials(): React.ReactElement {
  return (
    <section className="py-24 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lg sm:text-2xl font-medium mb-4 leading-tight text-zinc-400">
            [후기 섹션 소제목]
          </h2>
          <p className="text-3xl sm:text-5xl font-black text-white">
            [후기 섹션 메인 타이틀 1행]
            <br />
            [후기 섹션 메인 타이틀 2행]
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
