import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "회사소개 | 베로티 VEROTY — 중국경력 도합 80년 디자인 전문가 그룹",
  description:
    "베로티는 북경대 디자인석사, 중국경력 도합 80년의 임직원들이 상해지사·심양공장·4개 항구 물류망을 운영하는 하이엔드 커뮤니티 가구 전문기업입니다.",
  alternates: { canonical: "https://veroty.co.kr/about/" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "회사소개", item: "https://veroty.co.kr/about/" },
  ],
}

export default function AboutPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-[#1C1C1C] px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/">
          <p className="font-serif text-lg text-white tracking-wide">VEROTY</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-300 mt-0.5">
            디자인 감각을 갖춘 중국전문가 그룹 · 경기 김포 · Est. 2015
          </p>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest text-stone-400">
          <Link href="/products/" className="hover:text-white transition-colors">제품</Link>
          <Link href="/portfolio/" className="hover:text-white transition-colors">납품현장</Link>
          <Link href="/about/" className="text-white">회사소개</Link>
          <Link href="/contact/" className="hover:text-white transition-colors text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">회사소개</span>
      </nav>

      {/* Hero */}
      <section className="bg-[#2A2A2A] px-8 lg:px-16 py-16">
        <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3">About VEROTY</p>
        <h1 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-6">
          베로티 회사소개<br />
          <span className="text-yellow-400">디자인 감각을 갖춘 중국전문가 그룹</span>
        </h1>
        <p className="text-stone-300 text-base leading-relaxed max-w-2xl">
          베로티(VEROTY)는 "VERO(참된, 올바른) + QUALITY(품질)"의 합성어로, 올바른 품질을 추구한다는 뜻을 담고 있습니다.
          북경대 디자인석사 출신 전문가들이 중국 현지공장과 직접 파트너십을 맺고, 하이엔드 커뮤니티센터에 최적화된 가구와 인테리어를 합리적인 가격으로 공급합니다.
        </p>
      </section>

      {/* 핵심 역량 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-8">Core Competency</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              no: "01",
              title: "중국 현지 전문가 네트워크",
              desc: "임직원 중국경력 합계 80년. 북경대 디자인석사 출신 전문가들이 직접 공장을 선정하고 품질을 검증합니다. 상해지사 운영으로 현지 대응이 즉각적입니다.",
            },
            {
              no: "02",
              title: "직접생산·직매입 원가경쟁력",
              desc: "중간 유통 단계를 제거하고 4개 중국 거점 항구(청도·상해·광저우·천진)를 통해 최적 경로로 운송합니다. 동급 품질 대비 15~30% 낮은 가격을 실현합니다.",
            },
            {
              no: "03",
              title: "하이엔드 커뮤니티 전문성",
              desc: "롯데르엘, 메이플자이, 자이 더 헤리티지 등 대형 하이엔드 커뮤니티센터 납품 이력. 웰컴라운지부터 골프연습장, 수영장 복도까지 전 공간을 커버합니다.",
            },
          ].map((item) => (
            <div key={item.no} className="border-t border-neutral-200 pt-6">
              <p className="font-serif text-3xl text-neutral-200 mb-3">{item.no}</p>
              <h2 className="font-serif text-lg text-neutral-800 mb-3">{item.title}</h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 사업 영역 */}
      <section className="px-8 lg:px-16 py-12 bg-neutral-50 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-8">Business Area</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { cat: "이동가구", desc: "소파, 테이블, 의자 등 커뮤니티 공간의 분위기를 완성하는 이동형 가구. 중국 직매입으로 동급 최저가 공급." },
            { cat: "제작가구", desc: "현장 맞춤형 붙박이 가구 및 특수 제작 가구. 공간에 최적화된 사이즈와 마감으로 제작 납품." },
            { cat: "타일·석재", desc: "중국 공장 직매입 대리석·화강석·포세린 타일. 고급 커뮤니티 로비 및 수영장 공간에 적합한 자재." },
            { cat: "디스플레이·조명", desc: "공간 분위기를 완성하는 장식 소품, 아트월, 조명 연출. 전문 VMD 감각으로 커뮤니티 공간을 브랜딩." },
            { cat: "독자개발 상품", desc: "협탁(VALEN SIDE TABLE), 책장(MY BOOKSHELF), 침대프레임, 골프타석의자 등 특허청 디자인등록 독자 상품 라인업." },
          ].map((item) => (
            <div key={item.cat} className="p-6 bg-white border border-neutral-100">
              <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-2">{item.cat}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 납품 이력 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-8">Performance</p>
        <div className="space-y-4">
          {[
            { year: "2026.01", site: "서울 잠실 롯데르엘", scope: "이동가구, 제작가구, 디스플레이, 조명" },
            { year: "2025.08", site: "서울 반포 메이플자이", scope: "이동가구, 제작가구, 타일" },
            { year: "2025.05", site: "광명 철산동 자이 더 헤리티지", scope: "이동가구" },
          ].map((item) => (
            <div key={item.site} className="flex items-start gap-8 border-b border-neutral-100 pb-4">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 w-20 shrink-0">{item.year}</p>
              <p className="font-serif text-neutral-800">{item.site}</p>
              <p className="text-xs text-neutral-400 ml-auto">{item.scope}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/portfolio/" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 border border-neutral-300 px-4 py-2 inline-block transition-colors">
            납품 현장 포트폴리오 전체보기 →
          </Link>
        </div>
      </section>

      {/* 연락처 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">Contact</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="font-serif text-xl text-neutral-800 mb-4">주식회사 베로티</p>
            <div className="space-y-2 text-sm text-neutral-500">
              <p>📞 010-2861-8525</p>
              <p>✉️ veroty@veroty.co.kr</p>
              <p>📍 경기도 김포시 고촌읍 상미4로 20, 반송프라자 203호</p>
            </div>
          </div>
          <div>
            <Link href="/contact/" className="inline-block px-8 py-3 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold">
              무료 상담 신청 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500">
          <Link href="/" className="hover:text-neutral-300">홈</Link>
          <Link href="/products/" className="hover:text-neutral-300">제품</Link>
          <Link href="/portfolio/" className="hover:text-neutral-300">납품현장</Link>
          <Link href="/about/" className="hover:text-neutral-300">회사소개</Link>
          <Link href="/contact/" className="hover:text-neutral-300">문의</Link>
        </div>
        <p className="text-[9px] text-neutral-600 uppercase tracking-widest">
          © 2026 VEROTY CO., LTD — 주식회사 베로티
        </p>
      </footer>
    </div>
  )
}
