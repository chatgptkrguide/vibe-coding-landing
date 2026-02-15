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
    title: "[1주차 제목]",
    items: [
      "[1주차 학습내용 1]",
      "[1주차 학습내용 2]",
      "[1주차 학습내용 3]",
      "[1주차 학습내용 4]",
    ],
    result: "[1주차 결과물]",
    markerColor: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    week: 2,
    title: "[2주차 제목]",
    items: [
      "[2주차 학습내용 1]",
      "[2주차 학습내용 2]",
      "[2주차 학습내용 3]",
      "[2주차 학습내용 4]",
    ],
    result: "[2주차 결과물]",
    markerColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    week: 3,
    title: "[3주차 제목]",
    items: [
      "[3주차 학습내용 1]",
      "[3주차 학습내용 2]",
      "[3주차 학습내용 3]",
      "[3주차 학습내용 4]",
    ],
    result: "[3주차 결과물]",
    markerColor: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    week: 4,
    title: "[4주차 제목]",
    items: [
      "[4주차 학습내용 1]",
      "[4주차 학습내용 2]",
      "[4주차 학습내용 3]",
      "[4주차 학습내용 4]",
    ],
    result: "[4주차 결과물]",
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
          [커리큘럼 섹션 제목]
        </h2>

        <div className="flex flex-col gap-6 mb-24">
          <p className="text-center text-zinc-400 text-lg mb-8">
            [수업 일정 안내 - 예: 매주 토요일 오전 10시 ~ 오후 1시]
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
