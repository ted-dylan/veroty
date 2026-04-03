import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "제품 소개 | 베로티 VEROTY — 협탁·책장·침대프레임·골프타석의자",
  description:
    "베로티 독자개발 특허청 디자인등록 상품. 협탁 VALEN SIDE TABLE, 책장 MY BOOKSHELF, 침대프레임 VALEN BED FRAME, 골프타석의자 Golf Pod. LPM 공법으로 가격 경쟁력 확보.",
  alternates: { canonical: "https://veroty.co.kr/products/" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "제품 소개", item: "https://veroty.co.kr/products/" },
  ],
}

const products = [
  {
    name: "협탁 · VALEN SIDE TABLE",
    type: "이동가구 · 독자개발",
    img: "/images/products/side-table-01.webp",
    alt: "베로티 협탁 VALEN SIDE TABLE LPM 라운딩 공법 디자인등록",
    desc: "LPM 라운딩 공법으로 구현한 동글동글 디자인. 고가 공법의 감성을 합리적 가격으로.",
    patent: "디자인등록 30-1305034호",
    spec: "MDF(E0)/LPM · W380×D480×H480mm",
    href: "/products/side-table/",
  },
  {
    name: "책장 · MY BOOKSHELF",
    type: "이동가구 · 독자개발",
    img: "/images/products/bookshelf-01.webp",
    alt: "베로티 책장 MY BOOKSHELF LPM 래핑 Knock Down 디자인등록",
    desc: "볼트 하나로 완성되는 Knock Down 방식. 어디에든 설치 가능한 유닛형 설계.",
    patent: "디자인등록 30-1305033호",
    spec: "MDF(E0)/LPM · W 300~2400mm",
    href: "/products/bookshelf/",
  },
  {
    name: "침대프레임 · VALEN BED FRAME",
    type: "이동가구 · 독자개발",
    img: "/images/products/bed-frame-01.webp",
    alt: "베로티 침대프레임 VALEN BED FRAME MZ 미니멀라이프 무헤드",
    desc: "가치중심 MZ세대를 위한 미니멀라이프 침대. 간편조립으로 잦은 이사에도 걱정 없음.",
    patent: "출원번호 30-2024-0027140",
    spec: "PB 16T(E0)/LPM · S / SS / Q 사이즈",
    href: "/products/bed-frame/",
  },
  {
    name: "골프타석의자 · Golf Pod",
    type: "이동가구 · 독자개발",
    img: "",
    alt: "베로티 골프타석의자 Golf Pod Basic Trendy 커뮤니티 골프연습장",
    desc: "품격 있는 골프연습과 공간의 美를 위한 1인용 타석의자. Basic·Trendy 두 가지 타입.",
    patent: "출원번호 30-2025-0031589",
    spec: "인조가죽·스틸 · 진그레이/연그레이/브라운",
    href: "/products/golf-pod/",
  },
]

export default function ProductsPage() {
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
          <Link href="/products/" className="text-white">제품</Link>
          <Link href="/portfolio/" className="hover:text-white transition-colors">납품현장</Link>
          <Link href="/about/" className="hover:text-white transition-colors">회사소개</Link>
          <Link href="/contact/" className="hover:text-white transition-colors text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">제품 소개</span>
      </nav>

      {/* Hero */}
      <section className="bg-[#2A2A2A] px-8 lg:px-16 py-12">
        <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3">Products</p>
        <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
          베로티 독자개발 제품<br />
          <span className="text-yellow-400">특허청 디자인등록 상품</span>
        </h1>
        <p className="text-stone-300 text-sm leading-relaxed max-w-xl">
          LPM 공법과 Knock Down 방식을 통해 고급 감성을 합리적인 가격으로 구현한 베로티 독자 브랜드 상품입니다.
        </p>
      </section>

      {/* Product Grid */}
      <section className="px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <Link key={p.name} href={p.href}>
              <div className="group border border-neutral-100 hover:border-neutral-300 transition-colors cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <p className="text-neutral-400 text-sm">이미지 준비 중</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">{p.type}</p>
                  <h2 className="font-serif text-xl text-neutral-800 mb-2">{p.name}</h2>
                  <p className="text-sm text-neutral-500 mb-3 leading-relaxed">{p.desc}</p>
                  <p className="text-[9px] text-neutral-400">{p.spec}</p>
                  <p className="text-[9px] text-yellow-600 mt-1 font-medium">{p.patent}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-neutral-900 px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-400">
            제품 문의:{" "}
            <a href="mailto:veroty@veroty.co.kr" className="text-stone-200 hover:underline">
              veroty@veroty.co.kr
            </a>
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">📞 010-2861-8525</p>
        </div>
        <Link href="/contact/" className="px-8 py-2.5 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold shrink-0">
          무료 상담 신청
        </Link>
        <div className="flex gap-4 text-[10px] uppercase tracking-widest text-neutral-500">
          <Link href="/portfolio/" className="hover:text-neutral-300">납품현장 보기</Link>
          <Link href="/about/" className="hover:text-neutral-300">회사소개</Link>
        </div>
      </div>
    </div>
  )
}
