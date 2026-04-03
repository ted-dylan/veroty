import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "납품 현장 포트폴리오 | 베로티 VEROTY — 롯데르엘·메이플자이·자이 더 헤리티지",
  description:
    "베로티 커뮤니티센터 납품 실적. 서울 잠실 롯데르엘(2026), 서울 반포 메이플자이(2025), 광명 자이 더 헤리티지(2025). 이동가구·제작가구·타일·디스플레이 전 카테고리.",
  alternates: { canonical: "https://veroty.co.kr/portfolio/" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "납품 현장 포트폴리오", item: "https://veroty.co.kr/portfolio/" },
  ],
}

const projects = [
  {
    site: "서울 잠실 롯데르엘",
    year: "2026.01",
    scope: "이동가구 · 제작가구 · 디스플레이 · 조명",
    desc: "서울 잠실 랜드마크 단지의 커뮤니티센터 전반에 걸쳐 이동가구, 제작가구, 공간연출 디스플레이, 조명까지 원스톱으로 납품·시공하였습니다.",
    images: [
      { src: "/images/performance/lotte-reel-01.webp", alt: "베로티 잠실 롯데르엘 커뮤니티센터 납품 현장 1" },
      { src: "/images/performance/lotte-reel-02.webp", alt: "베로티 잠실 롯데르엘 커뮤니티센터 납품 현장 2" },
      { src: "/images/performance/lotte-reel-03.webp", alt: "베로티 잠실 롯데르엘 웰컴라운지" },
      { src: "/images/performance/lotte-reel-04.webp", alt: "베로티 잠실 롯데르엘 공간 연출" },
      { src: "/images/performance/lotte-reel-05.webp", alt: "베로티 잠실 롯데르엘 이동가구" },
      { src: "/images/performance/lotte-reel-06.webp", alt: "베로티 잠실 롯데르엘 디스플레이 조명" },
    ],
  },
  {
    site: "서울 반포 메이플자이",
    year: "2025.08",
    scope: "이동가구 · 제작가구 · 타일",
    desc: "반포 메이플자이 커뮤니티센터에 이동가구 전 품목과 맞춤 제작가구, 중국 직매입 고급 타일을 납품하였습니다. 웰컴라운지부터 골프연습장까지 일관된 공간 디자인을 구현하였습니다.",
    images: [
      { src: "/images/performance/maple-xi-01.webp", alt: "베로티 반포 메이플자이 커뮤니티센터 납품 현장 1" },
      { src: "/images/performance/maple-xi-02.webp", alt: "베로티 반포 메이플자이 커뮤니티센터 납품 현장 2" },
      { src: "/images/performance/maple-xi-03.webp", alt: "베로티 반포 메이플자이 웰컴라운지" },
      { src: "/images/performance/maple-xi-04.webp", alt: "베로티 반포 메이플자이 골프연습장" },
      { src: "/images/performance/maple-xi-05.webp", alt: "베로티 반포 메이플자이 타일 시공" },
      { src: "/images/performance/maple-xi-06.webp", alt: "베로티 반포 메이플자이 제작가구" },
    ],
  },
  {
    site: "광명 철산동 자이 더 헤리티지",
    year: "2025.05",
    scope: "이동가구",
    desc: "광명 자이 더 헤리티지 커뮤니티센터에 이동가구를 납품하였습니다. 하이엔드 단지의 격에 맞는 프리미엄 품질과 합리적인 가격으로 납품을 완료하였습니다.",
    images: [
      { src: "/images/performance/xi-heritage-01.webp", alt: "베로티 광명 자이 더 헤리티지 커뮤니티센터 납품 현장 1" },
      { src: "/images/performance/xi-heritage-02.webp", alt: "베로티 광명 자이 더 헤리티지 커뮤니티센터 납품 현장 2" },
      { src: "/images/performance/xi-heritage-03.webp", alt: "베로티 광명 자이 더 헤리티지 이동가구 1" },
      { src: "/images/performance/xi-heritage-04.webp", alt: "베로티 광명 자이 더 헤리티지 이동가구 2" },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="bg-[#1C1C1C] px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/">
          <p className="font-serif text-lg text-white tracking-wide">VEROTY</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-300 mt-0.5 hidden sm:block">
            디자인 감각을 갖춘 중국전문가 그룹 · 경기 김포 · Est. 2015
          </p>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest text-stone-400">
          <Link href="/products/" className="hover:text-white transition-colors">제품</Link>
          <Link href="/portfolio/" className="text-white">납품현장</Link>
          <Link href="/about/" className="hover:text-white transition-colors">회사소개</Link>
          <Link href="/contact/" className="text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-4 md:px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">납품 현장 포트폴리오</span>
      </nav>

      {/* Hero */}
      <section className="bg-[#2A2A2A] px-4 md:px-8 lg:px-16 py-12">
        <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3">Performance</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
          베로티 커뮤니티센터<br />
          <span className="text-yellow-400">납품 현장 포트폴리오</span>
        </h1>
        <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
          롯데르엘, 메이플자이, 자이 더 헤리티지 등 하이엔드 커뮤니티센터에 납품한 실제 현장 사진입니다.
          이동가구 · 제작가구 · 타일 · 디스플레이 전 카테고리를 원스톱으로 공급합니다.
        </p>
      </section>

      {/* 프로젝트별 섹션 */}
      {projects.map((project, pi) => (
        <section
          key={project.site}
          id={project.site === "서울 잠실 롯데르엘" ? "lotte-reel" : project.site === "서울 반포 메이플자이" ? "maple-xi" : "xi-heritage"}
          className={`px-4 md:px-8 lg:px-16 py-12 border-b border-neutral-100 ${pi % 2 === 1 ? "bg-neutral-50" : ""}`}
          style={{ scrollMarginTop: "80px" }}
        >
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">{project.year}</p>
            <h2 className="font-serif text-2xl text-neutral-800 mb-1">{project.site}</h2>
            <p className="text-xs text-yellow-600 mb-3">{project.scope}</p>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">{project.desc}</p>
          </div>

          {/* 대표 이미지 (첫 번째 — 와이드) */}
          <div className="aspect-[16/7] overflow-hidden bg-neutral-200 mb-4">
            <img
              src={project.images[0].src}
              alt={project.images[0].alt}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
              loading={pi === 0 ? "eager" : "lazy"}
              width={1400}
              height={612}
            />
          </div>

          {/* 서브 이미지 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {project.images.slice(1).map((img) => (
              <div key={img.src} className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={450}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-4 md:px-8 lg:px-16 py-12 bg-neutral-900">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3">다음 프로젝트는 귀하의 단지</p>
          <p className="font-serif text-2xl text-white mb-4">커뮤니티센터 가구·인테리어<br />무료 상담을 신청하세요</p>
          <p className="text-neutral-400 text-sm mb-6">
            북경대 디자인석사 출신 전문가가 직접 상담합니다. 중국 직매입으로 동급 품질 대비 15~30% 저렴한 가격을 제안합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact/" className="px-8 py-3 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold text-center">
              무료 상담 신청
            </Link>
            <Link href="/products/" className="px-8 py-3 border border-neutral-600 text-neutral-400 text-xs uppercase tracking-widest hover:border-neutral-400 transition-colors text-center">
              제품 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4 md:gap-6 text-[10px] uppercase tracking-widest text-neutral-500 justify-center md:justify-start">
          <Link href="/" className="hover:text-neutral-300">홈</Link>
          <Link href="/products/" className="hover:text-neutral-300">제품</Link>
          <Link href="/portfolio/" className="hover:text-neutral-300">납품현장</Link>
          <Link href="/about/" className="hover:text-neutral-300">회사소개</Link>
          <Link href="/contact/" className="hover:text-neutral-300">문의</Link>
        </div>
        <p className="text-[9px] text-neutral-600 uppercase tracking-widest">© 2026 VEROTY CO., LTD</p>
      </footer>
    </div>
  )
}
