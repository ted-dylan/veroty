import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "책장 MY BOOKSHELF | 베로티 VEROTY — LPM 래핑 Knock Down 디자인등록",
  description:
    "볼트 하나로 완성되는 Knock Down 방식 책장. 어디에든 설치 가능한 유닛형 설계. 특허청 디자인등록 30-1305033호. W Min300~Max2400, H 376/722/1068mm.",
  alternates: { canonical: "https://veroty.co.kr/products/bookshelf/" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "책장 MY BOOKSHELF",
  brand: { "@type": "Brand", name: "베로티 VEROTY" },
  description: "볼트 하나로 완성되는 Knock Down 방식 책장. 특허청 디자인등록 상품.",
  image: "https://veroty.co.kr/images/products/bookshelf-01.webp",
  material: "MDF(E0)/LPM",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "KRW" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "제품 소개", item: "https://veroty.co.kr/products/" },
    { "@type": "ListItem", position: 3, name: "책장 MY BOOKSHELF", item: "https://veroty.co.kr/products/bookshelf/" },
  ],
}

const sizeVariants = [
  {
    size: "300",
    label: "300 유닛형",
    desc: "가장 작은 유닛 사이즈. 좁은 공간이나 포인트 책장으로 적합. 2단 회전 배치 가능.",
    images: [29, 30].map((n) => ({ src: `/images/slots/slot-${String(n).padStart(2, "0")}.webp`, alt: `베로티 책장 MY BOOKSHELF 300 유닛형 이미지 ${n}` })),
  },
  {
    size: "1200",
    label: "1200 표준형",
    desc: "가장 많이 사용되는 표준 사이즈. 커뮤니티 도서관, 독서실, 로비 공간에 최적.",
    images: [31, 32, 33, 34, 35, 36].map((n) => ({ src: `/images/slots/slot-${String(n).padStart(2, "0")}.webp`, alt: `베로티 책장 MY BOOKSHELF 1200 표준형 이미지 ${n}` })),
  },
  {
    size: "1800",
    label: "1800 대형",
    desc: "넓은 벽면을 활용하는 대형 사이즈. 임팩트 있는 공간 연출에 적합.",
    images: [37, 38].map((n) => ({ src: `/images/slots/slot-${String(n).padStart(2, "0")}.webp`, alt: `베로티 책장 MY BOOKSHELF 1800 대형 이미지 ${n}` })),
  },
]

export default function BookshelfPage() {
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
        <span className="text-neutral-700">책장 MY BOOKSHELF</span>
      </nav>

      {/* Hero */}
      <div className="aspect-[21/9] overflow-hidden bg-neutral-100">
        <img
          src="/images/slots/slot-28.webp"
          alt="베로티 책장 MY BOOKSHELF LPM 래핑 Knock Down 디자인등록 대표 이미지"
          className="w-full h-full object-cover"
          loading="eager"
          width={1400}
          height={600}
        />
      </div>

      {/* 제품 정보 */}
      <section className="px-8 lg:px-16 py-12 border-b border-neutral-100">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-widest text-yellow-600 mb-3">이동가구 · 특허청 디자인등록</p>
          <h1 className="font-serif text-3xl md:text-4xl text-neutral-800 mb-4">
            책장 MY BOOKSHELF<br />
            <span className="text-2xl text-neutral-500">LPM 래핑 공법 · Knock Down 방식</span>
          </h1>
          <p className="text-neutral-600 leading-relaxed mb-6">
            볼트 하나로 완성되는 Knock Down 방식으로 어디든 간편하게 설치할 수 있습니다.
            필요한 공간에 맞게 300 · 1200 · 1800 세 가지 폭 사이즈를 선택하고, 1단(376mm) · 2단(722mm) · 3단(1068mm) 높이를 조합하여 원하는 구성을 만들 수 있습니다.
            LPM 래핑 공법으로 내구성과 마감 품질을 동시에 잡았습니다.
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">소재</p>
              <p className="text-neutral-700">MDF(E0) / LPM</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">폭 사이즈</p>
              <p className="text-neutral-700">W 300 / 1200 / 1800mm</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">높이 사이즈</p>
              <p className="text-neutral-700">H 376 / 722 / 1068mm</p>
            </div>
            <div className="border border-neutral-100 p-4">
              <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">등록번호</p>
              <p className="text-yellow-600 font-medium">디자인등록 30-1305033호</p>
            </div>
          </div>
        </div>
      </section>

      {/* 사이즈별 갤러리 */}
      {sizeVariants.map((variant) => (
        <section key={variant.size} className="px-8 lg:px-16 py-10 border-b border-neutral-100">
          <div className="flex items-baseline gap-4 mb-6">
            <p className="font-serif text-xl text-neutral-800">{variant.label}</p>
            <p className="text-sm text-neutral-400">{variant.desc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {variant.images.map((img) => (
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

      {/* 교차 링크 */}
      <section className="px-8 lg:px-16 py-10 bg-neutral-50 border-b border-neutral-100">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">다른 베로티 제품 보기</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "협탁 · VALEN SIDE TABLE", href: "/products/side-table/", img: "/images/products/side-table-01.webp" },
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
