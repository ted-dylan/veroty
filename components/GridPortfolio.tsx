"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [d, setD] = useState(0)
  useEffect(() => {
    if (!isInView) return
    const steps = 60
    let c = 0
    const t = setInterval(() => {
      c += value / steps
      if (c >= value) { setD(value); clearInterval(t) }
      else setD(Math.floor(c))
    }, 2000 / steps)
    return () => clearInterval(t)
  }, [isInView, value])
  return <span ref={ref}>{d.toLocaleString()}{suffix}</span>
}

const categories = ["전체", "이동가구", "제작가구", "타일·석재", "디스플레이", "독자개발상품"]

const stats = [
  { v: 10,  s: "+", l: "납품 현장" },
  { v: 80,  s: "년", l: "중국경력 합계" },
  { v: 4,   s: "개", l: "중국 거점 항구" },
  { v: 30,  s: "%↓", l: "가격경쟁력" },
]

const featured = [
  {
    name: "협탁 · VALEN SIDE TABLE",
    type: "디자인등록 30-1305034호",
    year: "2024",
    location: "LPM 라운드 공법",
    img: "/images/products/side-table-11.webp",
    alt: "베로티 협탁 VALEN SIDE TABLE LPM 라운딩 공법 디자인등록 상품 인테리어 연출",
    desc: "각진 모서리 없는 동글동글 디자인. 고가 공법을 LPM 소재로 합리적으로 구현한 Value Engineering 성공사례",
    href: "/products/side-table/",
  },
  {
    name: "책장 · MY BOOKSHELF",
    type: "디자인등록 30-1305033호",
    year: "2024",
    location: "LPM 래핑 공법",
    img: "/images/products/bookshelf-01.webp",
    alt: "베로티 책장 MY BOOKSHELF LPM 래핑 공법 Knock Down 디자인등록 상품",
    desc: "볼트 하나로 완성되는 Knock Down 방식. 필요한 공간에 필요한 사이즈로 어디든 설치 가능한 유닛형 책장",
    href: "/products/bookshelf/",
  },
]

const thumbs = [
  {
    name: "메이플자이 — 납품 현장",
    type: "이동가구",
    year: "2025",
    location: "서울 반포",
    img: "/images/performance/maple-xi-03.webp",
    alt: "베로티 서울 반포 메이플자이 커뮤니티센터 이동가구 납품 현장",
    href: "/portfolio/",
  },
  {
    name: "메이플자이 — 커뮤니티 공간",
    type: "이동가구",
    year: "2025",
    location: "서울 반포",
    img: "/images/performance/maple-xi-05.webp",
    alt: "베로티 서울 반포 메이플자이 커뮤니티 공간 이동가구 납품",
    href: "/portfolio/",
  },
  {
    name: "롯데르엘 — 웰컴라운지",
    type: "이동가구·디스플레이",
    year: "2026",
    location: "서울 잠실",
    img: "/images/performance/lotte-reel-03.webp",
    alt: "베로티 서울 잠실 롯데르엘 커뮤니티센터 웰컴라운지 이동가구 디스플레이",
    href: "/portfolio/",
  },
  {
    name: "롯데르엘 — 커뮤니티 공간",
    type: "이동가구·제작가구",
    year: "2026",
    location: "서울 잠실",
    img: "/images/performance/lotte-reel-05.webp",
    alt: "베로티 서울 잠실 롯데르엘 커뮤니티 공간 이동가구 제작가구",
    href: "/portfolio/",
  },
  {
    name: "자이 더 헤리티지",
    type: "이동가구",
    year: "2025",
    location: "광명 철산동",
    img: "/images/performance/xi-heritage-03.webp",
    alt: "베로티 광명 철산동 자이 더 헤리티지 커뮤니티센터 이동가구",
    href: "/portfolio/",
  },
  {
    name: "협탁 · VALEN SIDE TABLE",
    type: "독자개발",
    year: "2024",
    location: "디자인등록 상품",
    img: "/images/products/side-table-10.webp",
    alt: "베로티 협탁 VALEN SIDE TABLE 인테리어 연출 공간",
    href: "/products/side-table/",
  },
  {
    name: "침대프레임 · VALEN BED FRAME",
    type: "독자개발",
    year: "2024",
    location: "이동가구",
    img: "/images/products/bed-frame-01.webp",
    alt: "베로티 침대프레임 VALEN BED FRAME MZ 미니멀라이프",
    href: "/products/bed-frame/",
  },
  {
    name: "골프타석의자 · Golf Pod",
    type: "독자개발",
    year: "2025",
    location: "커뮤니티 골프연습장",
    img: "",
    alt: "베로티 골프타석의자 Golf Pod 커뮤니티 골프연습장",
    href: "/products/golf-pod/",
  },
]

export function GridPortfolio() {
  const [activeCategory, setActiveCategory] = useState("전체")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* Header Band */}
      <header className="bg-[#1C1C1C] px-4 md:px-8 lg:px-16 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <p className="font-serif text-base md:text-lg text-white tracking-wide">VEROTY</p>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-300 mt-0.5 hidden sm:block">
            디자인 감각을 갖춘 중국전문가 그룹 · 경기 김포 · Est. 2015
          </p>
        </Link>

        {/* PC 네비 */}
        <nav className="hidden md:flex items-center gap-5 text-[10px] uppercase tracking-widest text-stone-400">
          <Link href="/products/" className="hover:text-white transition-colors">제품</Link>
          <Link href="/portfolio/" className="hover:text-white transition-colors">납품현장</Link>
          <Link href="/about/" className="hover:text-white transition-colors">회사소개</Link>
          <Link href="/contact/" className="text-yellow-400 border border-yellow-400/40 px-3 py-1 hover:bg-yellow-400/10 transition-colors">문의</Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="메뉴"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden bg-[#222] border-b border-neutral-700">
          {[
            { href: "/products/", label: "제품" },
            { href: "/portfolio/", label: "납품현장" },
            { href: "/about/", label: "회사소개" },
            { href: "/contact/", label: "문의" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm text-stone-300 border-b border-neutral-700 last:border-0 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Stats Band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-4 divide-x divide-neutral-100 border-b border-neutral-100"
      >
        {stats.map((s) => (
          <div key={s.l} className="px-2 md:px-6 py-3 md:py-4 bg-neutral-50 text-center">
            <p className="font-serif text-lg md:text-2xl text-neutral-900">
              <CountUp value={s.v} suffix={s.s} />
            </p>
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-400 mt-0.5 md:mt-1">{s.l}</p>
          </div>
        ))}
      </motion.div>

      {/* Category Filter */}
      <div className="px-4 md:px-8 lg:px-16 py-3 flex flex-wrap gap-1.5 md:gap-2 border-b border-neutral-100 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-widest border transition-all duration-200 whitespace-nowrap ${
              activeCategory === cat
                ? "bg-neutral-900 border-neutral-900 text-white"
                : "border-neutral-200 text-neutral-500 hover:border-neutral-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* === 슬로건 배너 === */}
      <section className="bg-[#2A2A2A] px-4 md:px-8 lg:px-16 py-8 md:py-12 border-b border-neutral-700">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-400 mb-2 md:mb-3">
              VERO + QUALITY — 참된, 올바른 품질
            </p>
            <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-tight mb-3 md:mb-4">
              디자인 감각을 갖춘<br />
              <span className="text-yellow-400">중국전문가 그룹</span>
            </h1>
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
              북경대 디자인석사 출신 전문가들이 중국 현지공장 직매입으로<br className="hidden md:block" />
              하이엔드 커뮤니티의 새로운 기준을 제시합니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            {[
              { icon: "①", title: "직접생산·직매입", desc: "중간마진 최소화" },
              { icon: "②", title: "원가검증", desc: "Q.C.D 검증조직" },
              { icon: "③", title: "최적운송", desc: "4개 거점 항구" },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-600 p-3 md:p-4 rounded">
                <p className="text-yellow-400 text-base md:text-lg mb-1">{item.icon}</p>
                <p className="text-white text-[10px] md:text-xs font-bold mb-1">{item.title}</p>
                <p className="text-stone-400 text-[9px] md:text-[10px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner Projects */}
      {featured.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="group border-b border-neutral-100 cursor-pointer"
        >
          <Link href={p.href} className="flex flex-col md:flex-row">
            {/* 텍스트 영역 */}
            <div className="bg-[#1C1C1C] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-10 md:py-16 md:w-2/5 shrink-0">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/50 mb-3">
                {p.year} · {p.type} · {p.location}
              </p>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-white mb-3 leading-snug">{p.name}</h2>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-6 text-[10px] uppercase tracking-widest text-yellow-400/80 border border-yellow-400/30 px-3 py-1.5 self-start">
                자세히 보기 →
              </span>
            </div>
            {/* 이미지 영역 */}
            <div className="relative overflow-hidden bg-neutral-100 md:flex-1" style={{minHeight: "320px"}}>
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 absolute inset-0"
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  width={900}
                  height={600}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-neutral-400 text-sm">이미지 준비 중</p>
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      ))}

      {/* === 추가 독자개발 제품 2종 === */}
      <section className="px-4 md:px-8 lg:px-16 py-6 md:py-8 border-b border-neutral-100">
        <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 mb-4 md:mb-6">
          독자개발 특허청 디자인등록 상품
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              name: "침대프레임 · VALEN BED FRAME",
              type: "2024.10 출시 / 이동가구",
              img: "/images/products/bed-frame-04.webp",
              alt: "베로티 침대프레임 VALEN BED FRAME MZ 미니멀라이프 무헤드 인테리어",
              spec: "PB 16T (E0) / LPM · S / SS / Q 사이즈",
              desc: "가치중심 소비 MZ세대를 위한 미니멀라이프 침대. 간편 조립으로 잦은 이사에도 걱정 없음.",
              patent: "출원번호 30-2024-0027140",
              href: "/products/bed-frame/",
            },
            {
              name: "골프타석의자 · Golf Pod Basic",
              type: "2025.10 출시 / 이동가구",
              img: "",
              alt: "베로티 골프타석의자 Golf Pod Basic 소파형 1인용 커뮤니티 골프연습장",
              spec: "인조가죽·스틸 · W1200×H1400×D600 · 진그레이/연그레이/브라운",
              desc: "품격 있는 골프연습과 공간의 美를 추구하는 안락한 1인용 타석의자.",
              patent: "출원번호 30-2025-0031589",
              href: "/products/golf-pod/",
            },
          ].map((p) => (
            <Link key={p.name} href={p.href}>
              <div className="group cursor-pointer border border-neutral-100 hover:border-neutral-300 transition-colors">
                <div className="aspect-square overflow-hidden bg-neutral-50">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={600}
                      height={600}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <p className="text-neutral-400 text-sm">이미지 준비 중</p>
                    </div>
                  )}
                </div>
                <div className="p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mb-1">{p.type}</p>
                  <h3 className="font-serif text-base md:text-lg text-neutral-800 mb-1 md:mb-2">{p.name}</h3>
                  <p className="text-xs text-neutral-500 mb-2 leading-relaxed">{p.desc}</p>
                  <p className="text-[9px] text-neutral-400">{p.spec}</p>
                  <p className="text-[9px] text-yellow-600 mt-1 font-medium">{p.patent}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* === Performance 납품현장 섹션 === */}
      <section className="px-4 md:px-8 lg:px-16 py-8 md:py-10 bg-neutral-50 border-b border-neutral-100">
        <div className="mb-5 md:mb-6">
          <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Performance</p>
          <h2 className="font-serif text-xl md:text-2xl text-neutral-800">커뮤니티센터 납품 현장</h2>
          <p className="text-xs md:text-sm text-neutral-500 mt-1 md:mt-2">
            웰컴라운지 · 골프연습장 · 도서관 · 수영장 · 스카이라운지 · 카페 등
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              site: "서울 잠실 롯데르엘",
              scope: "이동가구, 제작가구, 디스플레이, 조명",
              year: "2026.01",
              img: "/images/performance/lotte-reel-02.webp",
              alt: "베로티 서울 잠실 롯데르엘 커뮤니티센터 이동가구 납품 현장",
            },
            {
              site: "서울 반포 메이플자이",
              scope: "이동가구, 제작가구, 타일",
              year: "2025.08",
              img: "/images/performance/maple-xi-02.webp",
              alt: "베로티 서울 반포 메이플자이 커뮤니티센터 납품 현장",
            },
            {
              site: "광명 자이 더 헤리티지",
              scope: "이동가구",
              year: "2025.05",
              img: "/images/performance/xi-heritage-02.webp",
              alt: "베로티 광명 철산동 자이 더 헤리티지 커뮤니티센터 납품 현장",
            },
          ].map((p) => (
            <Link key={p.site} href="/portfolio/">
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-2 md:mb-3 bg-neutral-200">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-400 mb-0.5">{p.year}</p>
                <p className="font-serif text-sm text-neutral-800">{p.site}</p>
                <p className="text-[9px] text-neutral-400 mt-0.5">{p.scope}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center sm:text-left">
          <Link href="/portfolio/" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-neutral-900 border border-neutral-300 px-4 py-2 inline-block transition-colors">
            납품현장 전체보기 →
          </Link>
        </div>
      </section>

      {/* Thumbnail Grid */}
      <section className="px-4 md:px-8 lg:px-16 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {thumbs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group cursor-pointer"
            >
              <Link href={p.href}>
                <div className="aspect-[4/3] overflow-hidden mb-2 md:mb-3 bg-neutral-100">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.alt}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${p.type === "독자개발" ? "object-contain" : "object-cover"}`}
                      loading="lazy"
                      width={600}
                      height={450}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <p className="text-neutral-400 text-xs">준비 중</p>
                    </div>
                  )}
                </div>
                <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-neutral-400 mb-0.5">
                  {p.year} · {p.type}
                </p>
                <p className="font-serif text-xs md:text-sm text-neutral-800 leading-tight">{p.name}</p>
                <p className="text-[9px] text-neutral-400 mt-0.5">{p.location}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA + Footer */}
      <div className="bg-neutral-900 px-4 md:px-8 lg:px-16 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="text-center sm:text-left">
          <p className="text-xs md:text-sm text-neutral-400">
            커뮤니티 가구 문의:{" "}
            <a href="mailto:veroty@veroty.co.kr" className="text-stone-200 hover:underline">
              veroty@veroty.co.kr
            </a>
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">
            📞 010-2861-8525 · 경기도 김포시 고촌읍 상미4로 20
          </p>
        </div>
        <Link
          href="/contact/"
          className="px-6 md:px-8 py-2.5 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold shrink-0"
        >
          무료 상담 신청
        </Link>
        <p className="text-[9px] text-neutral-600 uppercase tracking-widest hidden lg:block">
          © 2026 VEROTY CO., LTD — 주식회사 베로티
        </p>
      </div>
    </div>
  )
}
