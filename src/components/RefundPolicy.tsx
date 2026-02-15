"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";

const LANGUAGES = {
  ko: "한국어",
  zh: "中文",
  en: "English",
} as const;

type Lang = keyof typeof LANGUAGES;

interface PolicySection {
  title: string;
  subsections: {
    subtitle: string;
    content: React.ReactNode;
  }[];
}

function getPolicyContent(lang: Lang): PolicySection {
  if (lang === "ko") {
    return {
      title: "주문 취소 및 환불 정책",
      subsections: [
        {
          subtitle: "1) 주문 취소 가능 기간",
          content: (
            <>
              <p>
                고객이 대리점을 통해 주문을 완료한 날로부터{" "}
                <strong className="text-yellow-500">10일 이내</strong>에,
                대리점은 서면 통지를 통해 주문 취소를 요청할 수 있습니다.
              </p>
              <p>
                해당 기간 내 취소된 주문은 당월 월별 정산서에 포함되지
                않습니다.
              </p>
              <div className="bg-zinc-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-zinc-300">
                  월별 정산서가 이미 발행된 이후 주문이 취소되는 경우, 해당
                  금액은 <strong>다음 월 정산서</strong>에서 환불 또는 차감
                  처리됩니다.
                </p>
              </div>
            </>
          ),
        },
        {
          subtitle: "2) 주문 취소 시 유골(생명 소재) 처리 방식",
          content: (
            <>
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    주문이 이미 홍콩 작업실에 도착한 경우
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      홍콩 작업실에서 직접 한국 고객에게 유골을 반환합니다.
                    </li>
                    <li>국제 배송비는 월별 정산서에 반영됩니다.</li>
                    <li>
                      PF는 해당 국제 배송비를 고객에게 대행 청구해야 합니다.
                    </li>
                    <li>
                      국제 배송비는 정액{" "}
                      <strong className="text-yellow-500">KRW 30,000</strong>
                      입니다.
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    주문이 아직 한국 사무실에 있는 경우
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      주문이 홍콩으로 발송되기 전이라면, 한국 사무실에서 착불
                      방식으로 유골을 고객에게 반환합니다.
                    </li>
                    <li>배송비는 고객이 직접 부담합니다.</li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          subtitle: "3) 제작 과실 또는 중대한 결함 발생 시 처리 원칙",
          content: (
            <>
              <p>
                명확한 제작 과실 또는 중대한 결함이 확인되는 경우, 당사는
                우선적으로 아래 방식으로 문제 해결을 시도합니다.
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 ml-2">
                <li>제품 수리</li>
                <li>재제작</li>
              </ul>
              <p className="text-zinc-300">
                고객이 상기 방안을 수용하지 않는 경우, 상황에 따라 할인 제공
                또는 환불도 가능합니다. 모든 판단은 고객 만족을 최우선 기준으로
                합니다.
              </p>
              <div className="bg-zinc-800/50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-zinc-300 mb-2">
                  다만, 고객이 최종적으로{" "}
                  <strong className="text-red-400">&lsquo;전액 환불&rsquo;</strong>을
                  선택할 경우, 당사는 상황에 따라 다음 귀금속 부자재의 회수를
                  요청할 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-2">
                  <li>K 금</li>
                  <li>플래티넘</li>
                  <li>925 실버</li>
                </ul>
                <p className="text-yellow-500 mt-3 text-sm font-medium">
                  ※ 유골이 포함된 유리(글라스) 부분은 고객에게 반환됩니다.
                </p>
              </div>
            </>
          ),
        },
      ],
    };
  }

  if (lang === "zh") {
    return {
      title: "訂單取消及退款政策",
      subsections: [
        {
          subtitle: "1. 訂單取消時限",
          content: (
            <>
              <p>
                在客人於代理方下單後{" "}
                <strong className="text-yellow-500">10 日內</strong>
                ，代理商可透過書面通知方式提出取消訂單申請。
              </p>
              <p>於上述時限內取消之訂單，將不會列入當月月度帳單。</p>
              <div className="bg-zinc-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-zinc-300">
                  如訂單已於月度帳單發出後才取消，相關款項將於
                  <strong>下一期月度帳單</strong>中退回或扣減。
                </p>
              </div>
            </>
          ),
        },
        {
          subtitle: "2. 訂單取消時之生命素材處理安排",
          content: (
            <>
              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    情況一：訂單已寄抵香港
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      如訂單已送達香港工作室，將由香港工作室直接把骨灰退回至外國客人手上。
                    </li>
                    <li>有關國際運費將記錄於月度帳單中。</li>
                    <li>代理商需代為向客人收取該筆運費。</li>
                    <li>
                      國際運費為定額{" "}
                      <strong className="text-yellow-500">港幣 150</strong>。
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    情況二：訂單仍在海外辦公室
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    <li>
                      如訂單尚未寄出至香港，海外辦公室將以到付方式把骨灰退回予客人。
                    </li>
                    <li>運費由客人自行承擔。</li>
                  </ul>
                </div>
              </div>
            </>
          ),
        },
        {
          subtitle: "3. 製作疏失或重大瑕疵之處理原則",
          content: (
            <>
              <p>
                如出現明確製作疏失或重大瑕疵，我方將優先嘗試以下補救方式：
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 ml-2">
                <li>修復作品</li>
                <li>重新製作作品</li>
              </ul>
              <p className="text-zinc-300">
                如客人未能接受上述方案，我方仍可視情況提供折扣優惠或退款安排，並以客人滿意度為主要考量。
              </p>
              <div className="bg-zinc-800/50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-zinc-300 mb-2">
                  惟如客人最終選擇{" "}
                  <strong className="text-red-400">「全額退款」</strong>
                  ，我方將視實際情況，回收貴金屬類配件，包括但不限於：
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-2">
                  <li>K 金</li>
                  <li>鉑金</li>
                  <li>925 銀</li>
                </ul>
                <p className="text-yellow-500 mt-3 text-sm font-medium">
                  ※ 而包含骨灰之琉璃部份，將完整歸還予客人。
                </p>
              </div>
            </>
          ),
        },
      ],
    };
  }

  // English
  return {
    title: "Order Cancellation & Refund Policy",
    subsections: [
      {
        subtitle: "1. Order Cancellation Period",
        content: (
          <>
            <p>
              Within{" "}
              <strong className="text-yellow-500">10 days</strong> after
              an order is placed by customer, Agency company may cancel the
              order by written notice.
            </p>
            <p>
              Orders cancelled within this period will not be included in the
              monthly statement.
            </p>
            <div className="bg-zinc-800/50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-zinc-300">
                If an order is cancelled after the monthly statement has been
                issued, the amount will be refunded or deducted in the{" "}
                <strong>following monthly statement</strong>.
              </p>
            </div>
          </>
        ),
      },
      {
        subtitle: "2. Handling of Remains Upon Order Cancellation",
        content: (
          <>
            <div className="space-y-4">
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Case 1: Order has arrived at the Hong Kong workshop
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    The remains will be returned directly from Hong Kong to the
                    customer in overseas country.
                  </li>
                  <li>
                    The international shipping fee will be recorded in the
                    monthly statement.
                  </li>
                  <li>
                    PF is required to collect the shipping fee from the customer
                    on our behalf.
                  </li>
                  <li>
                    The international shipping fee is a fixed amount of{" "}
                    <strong className="text-yellow-500">HKD 150</strong>.
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Case 2: Order is still at the Overseas office
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  <li>
                    If the order has not yet been shipped to Hong Kong, the
                    office will return the remains to the customer by
                    cash-on-delivery shipment.
                  </li>
                  <li>The shipping fee will be borne by the customer.</li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
      {
        subtitle: "3. Handling of Manufacturing Errors or Major Defects",
        content: (
          <>
            <p>
              In the event of clear manufacturing errors or major defects, we
              will first attempt to resolve the issue by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 ml-2">
              <li>Repairing the product</li>
              <li>Remanufacturing the product</li>
            </ul>
            <p className="text-zinc-300">
              If the customer does not accept the above solutions, we may,
              depending on the situation, offer a discount or refund, with
              customer satisfaction as the primary consideration.
            </p>
            <div className="bg-zinc-800/50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-zinc-300 mb-2">
                However, if the customer ultimately chooses a{" "}
                <strong className="text-red-400">&ldquo;full refund&rdquo;</strong>,
                we reserve the right to retrieve precious metal components,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400 ml-2">
                <li>K Gold</li>
                <li>Platinum</li>
                <li>925 Silver</li>
              </ul>
              <p className="text-yellow-500 mt-3 text-sm font-medium">
                ※ The glass component containing the remains will be returned
                to the customer.
              </p>
            </div>
          </>
        ),
      },
    ],
  };
}

function detectLanguage(): Lang {
  if (typeof navigator === "undefined") return "en";
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("zh")) return "zh";
  return "en";
}

export default function RefundPolicy(): React.ReactElement {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(detectLanguage());
    setMounted(true);
  }, []);

  const policy = getPolicyContent(lang);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">
              {lang === "ko"
                ? "메인으로"
                : lang === "zh"
                  ? "返回主頁"
                  : "Back to Home"}
            </span>
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
            <Globe className="w-4 h-4 text-zinc-500 ml-2" />
            {(Object.entries(LANGUAGES) as [Lang, string][]).map(
              ([key, label]) => (
                <button
                  key={key}
                  onClick={() => setLang(key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    lang === key
                      ? "bg-yellow-500 text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-3xl sm:text-4xl font-black mb-2">
          {policy.title}
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded-full mb-12" />

        <div className="space-y-12">
          {policy.subsections.map((sub, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-zinc-800">
                {sub.subtitle}
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                {sub.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <p className="text-center text-zinc-600 text-sm">
          © 2026 Vibe Coding. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
