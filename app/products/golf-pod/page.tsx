import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "골프타석의자 Golf Pod | 베로티 VEROTY — 커뮤니티 골프연습장 전용 타석의자",
  description:
    "베로티 독자개발 커뮤니티 골프연습장 전용 타석의자. Golf Pod Basic(소파형)·Golf Pod Trendy(스마트형). 인조가죽·스틸. 출원번호 30-2025-0031589.",
  alternates: { canonical: "https://veroty.co.kr/products/golf-pod/" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "골프타석의자 Golf Pod",
  brand: { "@type": "Brand", name: "베로티 VEROTY" },
  description: "커뮤니티 골프연습장 전용 독자개발 타석의자. Basic·Trendy 두 가지 타입.",
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
      <div className="aspect-[21/9] overflow-hidden bg-neutral-100">
        <img
          src="/images/slots/slot-47.webp"
          alt="베로티 골프타석의자 Golf Pod 커뮤니티 골프연습장 전용 타석의자 대표 이미지"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1400}
          height={600}
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
            다수 사용자를 위한 관리 편의성과 튼튼한 내구성을 갖추었으며, Basic(소파형)과 Trendy(스마트형) 두 가지 타입으로 공간 컨셉에 맞게 선택할 수 있습니다.
          </p>

          {/* 네 가지 타입 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                type: "Golf Pod 덴디",
                tag: "덴디형",
                img: "/images/slots/slot-48.webp",
                alt: "베로티 골프타석의자 Golf Pod 덴디형",
                desc: "단정하고 세련된 덴디 스타일. 클래식한 감성과 현대적 기능을 결합한 프리미엄 타석의자입니다.",
                spec: "별도 문의",
                color: "별도 문의",
                patent: "출원번호 30-2025-0031589",
              },
              {
                type: "Golf Pod Basic",
                tag: "소파형",
                img: "/images/slots/slot-49.webp",
                alt: "베로티 골프타석의자 Golf Pod Basic 소파형",
                desc: "클래식하고 안정적인 소파 스타일. 넉넉한 좌석감과 높은 등받이로 장시간 연습에도 편안함을 제공합니다.",
                spec: "W1200 × H1400 × D600mm",
                color: "진그레이 / 연그레이 / 브라운",
                patent: "출원번호 30-2025-0031589",
              },
              {
                type: "Golf Pod 테이블",
                tag: "테이블형",
                img: "/images/slots/slot-50.webp",
                alt: "베로티 골프타석의자 Golf Pod 테이블형",
                desc: "수납 테이블이 일체화된 실용적인 타석의자. 음료, 스코어카드 등을 편리하게 관리할 수 있습니다.",
                spec: "별도 문의",
                color: "별도 문의",
                patent: "출원번호 30-2025-0031589",
              },
              {
                type: "Golf Pod Trendy",
                tag: "스마트형",
                img: "/images/slots/slot-51.webp",
                alt: "베로티 골프타석의자 Golf Pod Trendy 스마트형",
                desc: "현대적이고 세련된 디자인. 공간을 더욱 모던하게 연출하고 싶은 프리미엄 커뮤니티에 적합합니다.",
                spec: "별도 문의",
                color: "커스텀 컬러 가능",
                patent: "출원번호 30-2025-0031589",
              },
            ].map((item) => (
              <div key={item.type} className="border border-neutral-200 p-6">
                <div className="aspect-[4/3] bg-neutral-200 mb-4 overflow-hidden flex items-center justify-center">
                  {item.img ? (
                    <img src={item.img} alt={item.alt} className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
                  ) : (
                    <p className="text-neutral-400 text-xs">이미지 준비 중</p>
                  )}
                </div>
                <p className="text-[9px] uppercase tracking-widest text-yellow-600 mb-1">{item.tag}</p>
                <h2 className="font-serif text-lg text-neutral-800 mb-2">{item.type}</h2>
                <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{item.desc}</p>
                <div className="space-y-1 text-[10px] text-neutral-400">
                  <p>규격: {item.spec}</p>
                  <p>색상: {item.color}</p>
                  <p className="text-yellow-600">{item.patent}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 소재·스펙 */}
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
              <p className="text-neutral-700">Basic / Trendy</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">출원번호</p>
              <p className="text-yellow-600 font-medium text-xs">30-2025-0031589</p>
            </div>
          </div>
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
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200 mb-2">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={300} />
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
