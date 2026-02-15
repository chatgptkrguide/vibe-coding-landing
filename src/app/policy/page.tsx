import RefundPolicy from "@/components/RefundPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "취소 및 환불 정책 | Cancellation & Refund Policy",
  description: "주문 취소 및 환불 정책 안내 - Order Cancellation & Refund Policy",
};

export default function PolicyPage(): React.ReactElement {
  return <RefundPolicy />;
}
