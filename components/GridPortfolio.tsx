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
  { v: 80,  s: "년", l: "중국경력 합계" },
  { v: 60,  s: "개", l: "협력공장" },
  { v: 3,   s: "개", l: "MOU 생산공장" },
  { v: 30,  s: "%", l: "가격경쟁력" },
]

// VALEN 시리즈
const valenSeries = [
  { name: "협탁 · VALEN SIDE TABLE", slot: 3, type: "디자인등록 30-1305034호", year: "2024", location: "LPM 라운드 공법", img: "/images/slots/slot-03.webp", alt: "베로티 협탁 VALEN SIDE TABLE LPM 라운딩 공법 디자인등록", desc: "각진 모서리 없는 동글동글 디자인. 고가 공법을 LPM 소재로 합리적으로 구현한 Value Engineering 성공사례", href: "/products/side-table/" },
  { name: "책장 · MY BOOKSHELF", slot: 4, type: "디자인등록 30-1305033호", year: "2024", location: "LPM 래핑 공법", img: "/images/slots/slot-04.webp", alt: "베로티 책장 MY BOOKSHELF LPM 래핑 Knock Down 디자인등록", desc: "볼트 하나로 완성되는 Knock Down 방식. 필요한 공간에 필요한 사이즈로 어디든 설치 가능한 유닛형 책장", href: "/products/bookshelf/" },
  { name: "침대프레임 · VALEN BED FRAME", slot: 5, type: "출원번호 30-2024-0027140", year: "2024", location: "MZ 미니멀라이프", img: "/images/slots/slot-05.webp", alt: "베로티 침대프레임 VALEN BED FRAME MZ 미니멀라이프 무헤드", desc: "가치중심 소비 MZ세대를 위한 미니멀라이프 침대. 잦은 이사에도 걱정 없는 튼튼한 내구성과 간편 조립", href: "/products/bed-frame/" },
]

// 골프타석의자 시리즈
const golfSeries = [
  { name: "Golf Pod Basic", slot: 1, type: "출원번호 30-2025-0031589", year: "2025", location: "소파형 타석의자", img: "/images/slots/slot-01.webp", alt: "베로티 골프타석의자 Golf Pod Basic 소파형", desc: "품격 있는 골프연습과 공간의 美를 추구하는 안락한 1인용 타석의자. 다수 사용자를 위한 관리 편의성과 튼튼한 내구성", href: "/products/golf-pod/" },
  { name: "Golf Pod Trendy", slot: 2, type: "출원번호 30-2025-0031589", year: "2025", location: "스마트 타석의자", img: "/images/slots/slot-02.webp", alt: "베로티 골프타석의자 Golf Pod Trendy 스마트형", desc: "최신 스마트 기능을 갖춘 프리미엄 골프 타석의자. 모던한 디자인과 첨단 기술의 완벽한 조화", href: "/products/golf-pod/" },
]

const thumbs = [
  { name: "메이플자이 — 완성 공간", slot: 9, type: "이동가구·제작가구", year: "2025", location: "서울 반포", img: "/images/slots/slot-09.webp", alt: "베로티 메이플자이 커뮤니티센터 완성 공간", href: "/portfolio/" },
  { name: "메이플자이 — 라운지", slot: 10, type: "이동가구·타일", year: "2025", location: "서울 반포", img: "/images/slots/slot-10.webp", alt: "베로티 메이플자이 웰컴라운지 이동가구 타일", href: "/portfolio/" },
  { name: "롯데르엘 — 웰컴라운지", slot: 11, type: "이동가구·디스플레이", year: "2026", location: "서울 잠실", img: "/images/slots/slot-11.webp", alt: "베로티 롯데르엘 웰컴라운지 이동가구 디스플레이", href: "/portfolio/" },
  { name: "롯데르엘 — 골프연습장", slot: 12, type: "디스플레이·조명", year: "2026", location: "서울 잠실", img: "/images/slots/slot-12.webp", alt: "베로티 롯데르엘 골프연습장", href: "/portfolio/" },
  { name: "자이 더 헤리티지", slot: 13, type: "이동가구", year: "2025", location: "광명 철산동", img: "/images/slots/slot-13.webp", alt: "베로티 자이 더 헤리티지 커뮤니티센터 이동가구", href: "/portfolio/" },
  { name: "협탁 · VALEN SIDE TABLE", slot: 14, type: "독자개발", year: "2024", location: "디자인등록 상품", img: "/images/slots/slot-14.webp", alt: "베로티 협탁 VALEN SIDE TABLE 디자인등록 상품", href: "/products/side-table/" },
  { name: "침대프레임 · VALEN BED FRAME", slot: 15, type: "독자개발", year: "2024", location: "이동가구", img: "/images/slots/slot-15.webp", alt: "베로티 침대프레임 VALEN BED FRAME 이동가구", href: "/products/bed-frame/" },
  { name: "골프타석의자 · Golf Pod Basic", slot: 16, type: "독자개발", year: "2025", location: "커뮤니티 골프연습장", img: "/images/slots/slot-16.webp", alt: "베로티 골프타석의자 Golf Pod Basic 커뮤니티 골프연습장", href: "/products/golf-pod/" },
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

      {/* Category Filter - 디자인 요소만 (비활성) */}
      <div className="px-4 md:px-8 lg:px-16 py-3 flex flex-wrap gap-1.5 md:gap-2 border-b border-neutral-100 overflow-x-auto">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className={`px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-widest border whitespace-nowrap ${
              idx === 0
                ? "bg-neutral-900 border-neutral-900 text-white"
                : "border-neutral-200 text-neutral-500"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* === 슬로건 배너 === */}
      <section className="bg-[#2A2A2A] px-4 md:px-8 lg:px-16 py-8 md:py-12 border-b border-neutral-700">
        <div className="max-w-6xl mx-auto">
          {/* 상단: VEROTY 좌측 크게 + 우측 디자인 감각 */}
          <div className="grid md:grid-cols-[2fr,3fr] gap-6 md:gap-12 items-center mb-8 md:mb-12">
            {/* 좌측: VEROTY 로고 크게 */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                VEROTY
              </h1>
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-stone-400 mt-2 md:mt-3">
                VERO + QUALITY — 참된, 올바른 품질
              </p>
            </div>

            {/* 우측: 디자인 감각을 갖춘 중국전문가 그룹 */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-3 md:mb-4">
                디자인 감각을 갖춘<br />
                <span className="text-yellow-400">중국전문가 그룹</span>
              </h2>
              <p className="text-stone-300 text-xs md:text-sm leading-relaxed">
                북경대 디자인석사 출신 전문가들이 중국 현지공장 직매입으로<br className="hidden md:block" />
                하이엔드 커뮤니티의 새로운 기준을 제시합니다.
              </p>
            </div>
          </div>

          {/* 하단: ①②③ 3가지 핵심 가치 */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: "①", title: "직접생산·직매입", desc: "중간마진 최소화" },
              { icon: "②", title: "원가검증", desc: "Q.C.D 검증조직" },
              { icon: "③", title: "최적운송", desc: "4개 거점 항구" },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-600 p-4 md:p-5 rounded text-center">
                <p className="text-yellow-400 text-xl md:text-2xl mb-2">{item.icon}</p>
                <p className="text-white text-xs md:text-sm font-bold mb-1">{item.title}</p>
                <p className="text-stone-400 text-[9px] md:text-[10px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Golf Pod 시리즈 === */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8">
          <div className="mb-4 md:mb-6">
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Series 01</p>
            <h2 className="font-serif text-xl md:text-2xl text-neutral-800">Golf Pod 시리즈</h2>
            <p className="text-xs md:text-sm text-neutral-500 mt-1 md:mt-2">
              커뮤니티 골프연습장 전용 설계 · 특허 출원 상품 · 소파형 & 스마트형
            </p>
          </div>
        </div>

        {golfSeries.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative w-full overflow-hidden border-b border-neutral-100 cursor-pointer"
            style={{ aspectRatio: "21/8" }}
          >
            <Link href={p.href} className="block w-full h-full">
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                loading="lazy"
                width={1400}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex items-end justify-between">
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60 mb-1 md:mb-2">
                    {p.year} · {p.type} · {p.location}
                  </p>
                  <h3 className="font-serif text-lg md:text-2xl lg:text-4xl text-white">{p.name}</h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1 md:mt-2 max-w-lg hidden sm:block">{p.desc}</p>
                </div>
                <div className="hidden md:block text-right shrink-0 ml-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/20 px-3 py-1.5">
                    Golf Pod Series
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* === VALEN 시리즈 === */}
      <section className="bg-white border-b border-neutral-200">
        <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8">
          <div className="mb-4 md:mb-6">
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Series 02</p>
            <h2 className="font-serif text-xl md:text-2xl text-neutral-800">VALEN 시리즈</h2>
            <p className="text-xs md:text-sm text-neutral-500 mt-1 md:mt-2">
              특허청 디자인등록 상품 · LPM 공법 · 가성비 프리미엄 라인
            </p>
          </div>
        </div>

        {valenSeries.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative w-full overflow-hidden border-b border-neutral-100 cursor-pointer"
            style={{ aspectRatio: "21/8" }}
          >
            <Link href={p.href} className="block w-full h-full">
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                loading="lazy"
                width={1400}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex items-end justify-between">
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60 mb-1 md:mb-2">
                    {p.year} · {p.type} · {p.location}
                  </p>
                  <h3 className="font-serif text-lg md:text-2xl lg:text-4xl text-white">{p.name}</h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1 md:mt-2 max-w-lg hidden sm:block">{p.desc}</p>
                </div>
                <div className="hidden md:block text-right shrink-0 ml-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/20 px-3 py-1.5">
                    VALEN Series
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
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
            { site: "서울 잠실 롯데르엘", img: "/images/slots/slot-06.webp", alt: "베로티 서울 잠실 롯데르엘 커뮤니티센터 납품", scope: "이동가구, 제작가구, 디스플레이, 조명", year: "2026.01", href: "/portfolio/#lotte-reel" },
            { site: "서울 반포 메이플자이", img: "/images/slots/slot-07.webp", alt: "베로티 서울 반포 메이플자이 커뮤니티센터 납품", scope: "이동가구, 제작가구, 타일", year: "2025.08", href: "/portfolio/#maple-xi" },
            { site: "광명 철산 자이 더 헤리티지", img: "/images/slots/slot-08.webp", alt: "베로티 광명 철산 자이 더 헤리티지 커뮤니티센터 납품", scope: "이동가구", year: "2025.05", href: "/portfolio/#xi-heritage" },
          ].map((p) => (
            <Link key={p.site} href={p.href}>
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden mb-2 md:mb-3">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={600} height={338} />
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
                <div className="aspect-[16/9] overflow-hidden mb-2 md:mb-3">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={400} height={225} />
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
