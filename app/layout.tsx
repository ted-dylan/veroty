import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://veroty.co.kr"),
  title: {
    template: "%s | 베로티 VEROTY — 디자인 감각을 갖춘 중국전문가 그룹",
    default: "베로티 VEROTY — 하이엔드 커뮤니티 가구·인테리어 중국전문가 그룹",
  },
  description:
    "베로티는 북경대 디자인석사 출신 중국전문가들이 이동가구·제작가구·타일·디스플레이를 중국 직매입으로 15~30% 저렴하게 공급하는 하이엔드 커뮤니티 인테리어 전문기업입니다.",
  keywords: ["베로티", "커뮤니티센터 가구", "중국직매입 가구", "하이엔드 커뮤니티", "이동가구", "제작가구", "골프타석의자", "커뮤니티 인테리어"],
  authors: [{ name: "주식회사 베로티" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://veroty.co.kr",
    siteName: "베로티 VEROTY",
    title: "베로티 VEROTY — 디자인 감각을 갖춘 중국전문가 그룹",
    description: "중국 현지 직매입으로 품질은 유지하고 가격은 15~30% 낮춘 하이엔드 커뮤니티 가구 전문기업",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "베로티 VEROTY 커뮤니티 가구 포트폴리오" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "베로티 VEROTY — 디자인 감각을 갖춘 중국전문가 그룹",
    description: "중국 직매입 하이엔드 커뮤니티 가구 전문기업",
    images: ["/images/og-image.jpg"],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "주식회사 베로티",
  alternateName: "VEROTY CO., LTD",
  url: "https://veroty.co.kr",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "010-2861-8525",
    contactType: "customer service",
    areaServed: "KR",
    availableLanguage: "Korean",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "고촌읍 상미4로 20, 반송프라자 203호",
    addressLocality: "김포시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  description: "디자인 감각을 갖춘 중국전문가 그룹. 하이엔드 커뮤니티 가구·인테리어 전문기업",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "베로티 VEROTY",
  url: "https://veroty.co.kr",
  description: "중국 직매입 하이엔드 커뮤니티 가구 전문기업",
  inLanguage: "ko-KR",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-site-verification" content="[GOOGLE_VERIFICATION_CODE]" />
        <meta name="naver-site-verification" content="[NAVER_VERIFICATION_CODE]" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
