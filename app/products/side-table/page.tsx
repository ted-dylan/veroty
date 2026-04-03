import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "협탁 VALEN SIDE TABLE | 베로티 VEROTY — LPM 라운드 선반 디자인등록",
  description:
    "LPM 라운딩 공법으로 구현한 동글동글 협탁. 고가 공법의 감성을 합리적 가격으로. 특허청 디자인등록 30-1305034호. W380×D480×H480mm, MDF(E0)/LPM 소재.",
  alternates: { canonical: "https://veroty.co.kr/products/side-table/" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "협탁 VALEN SIDE TABLE",
  brand: { "@type": "Brand", name: "베로티 VEROTY" },
  description: "LPM 라운딩 공법으로 구현한 동글동글 디자인 협탁. 특허청 디자인등록 상품.",
  image: "https://veroty.co.kr/images/products/side-table-01.webp",
  material: "MDF(E0)/LPM, Stain Steel/Powder Coating",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "KRW" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "제품 소개", item: "https://veroty.co.kr/products/" },
    { "@type": "ListItem", position: 3, name: "협탁 VALEN SIDE TABLE", item: "https://veroty.co.kr/products/side-table/" },
  ],
}

const slots = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]

export default function SideTablePage() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
          <Link href="/contact/" className="text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <Link href="/products/" className="hover:text-neutral-700">제품 소개</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">협탁 VALEN SIDE TABLE</span>
      </nav>

      {/* Hero — 대표 이미지 */}
      <div className="aspect-[21/9] overflow-hidden bg-neutral-800 flex items-center justify-center">
        <p className="text-white text-6xl font-bold opacity-40">{slots[0]}</p>
      </div>

      {/* 제품 정보 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-3">이동가구 · 특허청 디자인등록</p>
          <h1 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
            협탁 VALEN SIDE TABLE<br />
            <span className="text-2xl text-neutral-500">LPM 라운드 선반 공법</span>
          </h1>
          <p className="text-neutral-600 leading-relaxed mb-6">
            각진 모서리 없는 동글동글 디자인. 기존 고가 공법으로만 구현 가능했던 라운드 선반을 LPM 소재에 적용하여 합리적인 가격으로 제공하는 Value Engineering 성공사례입니다.
            커뮤니티센터 웰컴라운지, 독서실, 라운지 등 다양한 공간에 적합합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">소재</p>
              <p className="text-neutral-700">MDF(E0) / LPM<br />Stain Steel / Powder Coating</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">사이즈</p>
              <p className="text-neutral-700">W380 × D480 × H480mm</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">등록번호</p>
              <p className="text-yellow-600 font-medium">디자인등록 30-1305034호</p>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 */}
      <section className="px-8 lg:px-16 py-10 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">Gallery</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {slots.slice(1).map((n) => (
            <div key={n} className="aspect-[4/3] overflow-hidden bg-neutral-200 flex items-center justify-center">
              <p className="text-neutral-500 text-3xl font-bold">{n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 교차 링크 */}
      <section className="px-8 lg:px-16 py-10 bg-neutral-50 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">다른 베로티 제품 보기</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "책장 · MY BOOKSHELF", href: "/products/bookshelf/", img: "/images/products/bookshelf-01.webp" },
            { name: "침대프레임 · VALEN BED FRAME", href: "/products/bed-frame/", img: "/images/products/bed-frame-01.webp" },
            { name: "골프타석의자 · Golf Pod", href: "/products/golf-pod/", img: "" },
          ].map((p) => (
            <Link key={p.name} href={p.href} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200 mb-2">
                {p.img ? (
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={300} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"><p className="text-neutral-400 text-xs">준비 중</p></div>
                )}
              </div>
              <p className="font-serif text-sm text-neutral-700 group-hover:text-neutral-900">{p.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <div className="bg-neutral-900 px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">
          <a href="mailto:veroty@veroty.co.kr" className="text-stone-200 hover:underline">veroty@veroty.co.kr</a>
          {" · "}010-2861-8525
        </p>
        <Link href="/contact/" className="px-8 py-2.5 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold">
          커뮤니티 가구 상담 신청
        </Link>
        <p className="text-[9px] text-neutral-600 uppercase tracking-widest hidden lg:block">© 2026 VEROTY CO., LTD</p>
      </div>
    </div>
  )
}
