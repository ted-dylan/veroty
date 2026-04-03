import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "침대프레임 VALEN BED FRAME | 베로티 VEROTY — MZ 미니멀 무헤드 매트 받침대",
  description:
    "가치중심 MZ세대를 위한 미니멀라이프 침대프레임. 이사 걱정 없는 간편조립. S/SS/Q 사이즈. PB 16T(E0)/LPM 소재. 출원번호 30-2024-0027140.",
  alternates: { canonical: "https://veroty.co.kr/products/bed-frame/" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "침대프레임 VALEN BED FRAME",
  brand: { "@type": "Brand", name: "베로티 VEROTY" },
  description: "가치중심 MZ세대를 위한 미니멀라이프 침대프레임. 무헤드 매트 받침대.",
  image: "https://veroty.co.kr/images/products/bed-frame-01.webp",
  material: "PB 16T(E0)/LPM",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "KRW" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "제품 소개", item: "https://veroty.co.kr/products/" },
    { "@type": "ListItem", position: 3, name: "침대프레임 VALEN BED FRAME", item: "https://veroty.co.kr/products/bed-frame/" },
  ],
}

const images = [
  { src: "/images/products/bed-frame-01.webp", alt: "베로티 침대프레임 VALEN BED FRAME 대표 이미지" },
  { src: "/images/products/bed-frame-02.webp", alt: "베로티 침대프레임 측면 뷰" },
  { src: "/images/products/bed-frame-03.webp", alt: "베로티 침대프레임 디테일" },
  { src: "/images/products/bed-frame-04.webp", alt: "베로티 침대프레임 인테리어 연출 1" },
  { src: "/images/products/bed-frame-05.webp", alt: "베로티 침대프레임 인테리어 연출 2" },
  { src: "/images/products/bed-frame-06.webp", alt: "베로티 침대프레임 조립 구조" },
  { src: "/images/products/bed-frame-07.webp", alt: "베로티 침대프레임 공간 연출 1" },
  { src: "/images/products/bed-frame-08.webp", alt: "베로티 침대프레임 공간 연출 2" },
]

export default function BedFramePage() {
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
        <span className="text-neutral-700">침대프레임 VALEN BED FRAME</span>
      </nav>

      {/* Hero */}
      <div className="aspect-[21/9] overflow-hidden bg-neutral-100">
        <img
          src="/images/products/bed-frame-01.webp"
          alt="베로티 침대프레임 VALEN BED FRAME MZ 미니멀라이프 무헤드 대표 이미지"
          className="w-full h-full object-cover"
          loading="eager"
          width={1400}
          height={600}
        />
      </div>

      {/* 제품 정보 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-3">이동가구 · 2024.10 출시</p>
          <h1 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
            침대프레임 VALEN BED FRAME<br />
            <span className="text-2xl text-neutral-500">MZ 미니멀라이프 무헤드 설계</span>
          </h1>
          <p className="text-neutral-600 leading-relaxed mb-6">
            가치중심 소비를 추구하는 MZ세대를 위한 미니멀라이프 침대프레임입니다.
            헤드보드 없는 깔끔한 무헤드 디자인으로 좁은 공간도 넓어 보이며, 간편 조립 방식으로 잦은 이사에도 걱정 없습니다.
            PB 16T(E0) 친환경 소재와 LPM 마감으로 내구성과 미관을 모두 충족합니다.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">소재</p>
              <p className="text-neutral-700">PB 16T(E0) / LPM</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">사이즈</p>
              <p className="text-neutral-700">S / SS / Q 사이즈</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">특징</p>
              <p className="text-neutral-700">무헤드 · 간편조립<br />친환경 E0 등급</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">출원번호</p>
              <p className="text-yellow-600 font-medium">30-2024-0027140</p>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 */}
      <section className="px-8 lg:px-16 py-10 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">Gallery</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(1).map((img) => (
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

      {/* 교차 링크 */}
      <section className="px-8 lg:px-16 py-10 bg-neutral-50 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">다른 베로티 제품 보기</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "협탁 · VALEN SIDE TABLE", href: "/products/side-table/", img: "/images/products/side-table-01.webp" },
            { name: "책장 · MY BOOKSHELF", href: "/products/bookshelf/", img: "/images/products/bookshelf-01.webp" },
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
