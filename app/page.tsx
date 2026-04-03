import type { Metadata } from "next"
import { GridPortfolio } from "@/components/GridPortfolio"

export const metadata: Metadata = {
  title: "베로티 VEROTY | 디자인 감각을 갖춘 중국전문가 그룹 — 하이엔드 커뮤니티 가구",
  description:
    "베로티는 북경대 디자인석사 전문가들이 중국 직매입으로 15~30% 저렴하게 공급하는 커뮤니티 가구·인테리어 전문기업입니다. 롯데르엘, 메이플자이, 자이 더 헤리티지 납품 이력.",
  alternates: { canonical: "https://veroty.co.kr/" },
}

export default function HomePage() {
  return <GridPortfolio />
}
