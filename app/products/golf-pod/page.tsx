import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "골프타석의자 Golf Pod | 베로티 VEROTY — 커뮤니티 골프연습장 전용 타석의자",
  description:
    "베로티 독자개발 커뮤니티 골프연습장 전용 타석의자. Golf Pod Basic(소파형)·Golf Pod Trendy(스마트형)·Golf Pod Dandy. 인조가죽·스틸. 출원번호 30-2025-0031589.",
  alternates: { canonical: "https://veroty.co.kr/products/golf-pod/" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "골프타석의자 Golf Pod",
  brand: { "@type": "Brand", name: "베로티 VEROTY" },
  description: "커뮤니티 골프연습장 전용 독자개발 타석의자. Basic·Trendy·Dandy 세 가지 타입.",
  image: "https://veroty.co.kr/images/products/golf-pod-basic-brown-01.webp",
  material: "인조가죽·스틸",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "KRW" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "제품 소개", item: "https://veroty.co.kr/products/" },
    { "@type": "ListItem", position: 3, name: "골프타석의자 Golf Pod", item: "https://veroty.co.kr/products/golf-pod/" },
  ],
}

const types = [
  {
    type: "Golf Pod Basic",
    tag: "소파형",
    desc: "클래식하고 안정적인 소파 스타일. 넉넉한 좌석감과 높은 등받이로 장시간 연습에도 편안함을 제공합니다.",
    spec: "W1200 × H1400 × D600mm",
    color: "브라운 / 그레이",
    patent: "출원번호 30-2025-0031589",
    images: [
      { src: "/images/products/golf-pod-basic-brown-01.webp", alt: "베로티 골프타석의자 Golf Pod Basic 브라운 대표 이미지" },
      { src: "/images/products/golf-pod-basic-gray-01.webp", alt: "베로티 골프타석의자 Golf Pod Basic 그레이" },
      { src: "/images/products/golf-pod-basic-brown-02.webp", alt: "베로티 골프타석의자 Golf Pod Basic 브라운 측면" },
      { src: "/images/products/golf-pod-basic-gray-02.webp", alt: "베로티 골프타석의자 Golf Pod Basic 그레이 측면" },
    ],
  },
  {
    type: "Golf Pod Trendy",
    tag: "스마트형",
    desc: "현대적이고 세련된 디자인. 공간을 더욱 모던하게 연출하고 싶은 프리미엄 커뮤니티에 적합합니다.",
    spec: "별도 문의",
    color: "레드 / 커스텀 컬러 가능",
    patent: "출원번호 30-2025-0031589",
    images: [
      { src: "/images/products/golf-pod-trendy-01.webp", alt: "베로티 골프타석의자 Golf Pod Trendy 레드 대표 이미지" },
      { src: "/images/products/golf-pod-trendy-02.webp", alt: "베로티 골프타석의자 Golf Pod Trendy 측면" },
      { src: "/images/products/golf-pod-trendy-03.webp", alt: "베로티 골프타석의자 Golf Pod Trendy 상세" },
    ],
  },
  {
    type: "Golf Pod Table",
    tag: "전용 테이블",
    desc: "Golf Pod와 매칭되는 골프연습장 전용 테이블. 음료 및 스마트폰 거치 기능을 갖춘 올인원 타석 테이블입니다.",
    spec: "별도 문의",
    color: "블랙 / 화이트",
    patent: "",
    images: [
      { src: "/images/products/golf-pod-table-01.webp", alt: "베로티 골프연습장 전용 테이블 Golf Pod Table 대표" },
      { src: "/images/products/golf-pod-table-02.webp", alt: "베로티 Golf Pod Table 측면" },
      { src: "/images/products/golf-pod-table-03.webp", alt: "베로티 Golf Pod Table 상세" },
    ],
  },
]

const detailPages = [
  { src: "/images/products/golf-pod-page-01.webp", alt: "베로티 골프타석의자 Golf Pod Basic 상세 설명" },
  { src: "/images/products/golf-pod-page-02.webp", alt: "베로티 골프타석의자 Golf Pod Trendy 상세 설명" },
  { src: "/images/products/golf-pod-page-03.webp", alt: "베로티 골프연습장 전용 테이블 상세 설명" },
  { src: "/images/products/golf-pod-page-04.webp", alt: "베로티 골프타석의자 사용 환경 연출" },
  { src: "/images/products/golf-pod-page-05.webp", alt: "베로티 골프타석의자 소재·내구성 설명" },
  { src: "/images/products/golf-pod-page-06.webp", alt: "베로티 골프타석의자 색상 옵션" },
  { src: "/images/products/golf-pod-page-07.webp", alt: "베로티 골프타석의자 설치 현장" },
  { src: "/images/products/golf-pod-page-08.webp", alt: "베로티 골프타석의자 납품 실적" },
]

export default function GolfPodPage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
          <Link href="/products/" className="text-white">제품</Link>
          <Link href="/portfolio/" className="hover:text-white transition-colors">납품현장</Link>
          <Link href="/about/" className="hover:text-white transition-colors">회사소개</Link>
          <Link href="/contact/" className="text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-4 md:px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <Link href="/products/" className="hover:text-neutral-700">제품 소개</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">골프타석의자 Golf Pod</span>
      </nav>

      {/* Hero */}
      <div className="w-full bg-neutral-50 flex justify-center" style={{height: "min(600px, 60vw)"}}>
        <img
          src="/images/products/golf-pod-basic-brown-01.webp"
          alt="베로티 골프타석의자 Golf Pod Basic 브라운 커뮤니티 골프연습장 대표 이미지"
          className="h-full w-full object-contain"
          loading="eager"
          fetchPriority="high"
          width={1000}
          height={1000}
        />
      </div>

      {/* 제품 정보 */}
      <section className="px-4 md:px-8 lg:px-16 py-10 border-b border-neutral-100">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-3">이동가구 · 2025.10 출시</p>
          <h1 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
            골프타석의자 Golf Pod<br />
            <span className="text-xl text-neutral-500">커뮤니티 골프연습장 전용 설계</span>
          </h1>
          <p className="text-neutral-600 leading-relaxed mb-8 text-sm">
            품격 있는 골프연습과 공간의 美를 추구하는 안락한 1인용 타석의자입니다.
            다수 사용자를 위한 관리 편의성과 튼튼한 내구성을 갖추었으며, Basic·Trendy·Dandy 세 가지 타입으로 공간 컨셉에 맞게 선택할 수 있습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">소재</p>
              <p className="text-neutral-700">인조가죽 · 스틸</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">사용처</p>
              <p className="text-neutral-700">커뮤니티 골프연습장</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">타입</p>
              <p className="text-neutral-700">Basic / Trendy / Dandy</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">출원번호</p>
              <p className="text-yellow-600 font-medium text-xs">30-2025-0031589</p>
            </div>
          </div>
        </div>
      </section>

      {/* 타입별 갤러리 */}
      {types.map((t) => (
        <section key={t.type} className="px-4 md:px-8 lg:px-16 py-10 border-b border-neutral-100">
          <div className="flex items-baseline gap-3 mb-6 flex-wrap">
            <p className="font-serif text-xl text-neutral-800">{t.type}</p>
            <span className="text-[9px] uppercase tracking-widest text-yellow-600 border border-yellow-400/40 px-2 py-0.5">{t.tag}</span>
            <p className="text-sm text-neutral-400">{t.desc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {t.images.map((img, idx) => (
              <div key={img.src} className="aspect-square overflow-hidden bg-neutral-50">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-neutral-500">
            <span>규격: {t.spec}</span>
            <span>색상: {t.color}</span>
            {t.patent && <span className="text-yellow-600">{t.patent}</span>}
          </div>
        </section>
      ))}

      {/* 상세 페이지 이미지 */}
      <section className="px-4 md:px-8 lg:px-16 py-10 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">제품 상세 설명</p>
        <div className="max-w-2xl mx-auto space-y-2">
          {detailPages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="w-full"
              loading="lazy"
              width={860}
              height={1544}
            />
          ))}
        </div>
      </section>

      {/* 교차 링크 */}
      <section className="px-4 md:px-8 lg:px-16 py-10 bg-neutral-50 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">다른 베로티 제품 보기</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "협탁 · VALEN SIDE TABLE", href: "/products/side-table/", img: "/images/products/side-table-01.webp" },
            { name: "책장 · MY BOOKSHELF", href: "/products/bookshelf/", img: "/images/products/bookshelf-01.webp" },
            { name: "침대프레임 · VALEN BED FRAME", href: "/products/bed-frame/", img: "/images/products/bed-frame-01.webp" },
          ].map((p) => (
            <Link key={p.name} href={p.href} className="group">
              <div className="aspect-square overflow-hidden bg-neutral-50 mb-2">
                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={400} />
              </div>
              <p className="font-serif text-sm text-neutral-700 group-hover:text-neutral-900">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <div className="bg-neutral-900 px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400 text-center md:text-left">
          <a href="mailto:veroty@veroty.co.kr" className="text-stone-200 hover:underline">veroty@veroty.co.kr</a>
          {" · "}010-2861-8525
        </p>
        <Link href="/contact/" className="px-8 py-2.5 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold shrink-0">
          골프타석의자 상담 신청
        </Link>
        <p className="text-[9px] text-neutral-600 uppercase tracking-widest hidden lg:block">© 2026 VEROTY CO., LTD</p>
      </div>
    </div>
  )
}
