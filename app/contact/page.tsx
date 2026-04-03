import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "무료 상담 문의 | 베로티 VEROTY — 커뮤니티 가구·인테리어 견적 상담",
  description:
    "베로티 무료 상담 신청. 커뮤니티센터 가구·디스플레이·타일·제작가구 프로젝트 견적. 010-2861-8525 / veroty@veroty.co.kr. 경기도 김포시 고촌읍.",
  alternates: { canonical: "https://veroty.co.kr/contact/" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://veroty.co.kr/" },
    { "@type": "ListItem", position: 2, name: "무료 상담 문의", item: "https://veroty.co.kr/contact/" },
  ],
}

export default function ContactPage() {
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
          <Link href="/portfolio/" className="hover:text-white transition-colors">납품현장</Link>
          <Link href="/about/" className="hover:text-white transition-colors">회사소개</Link>
          <Link href="/contact/" className="text-yellow-400 border border-yellow-400/40 px-3 py-1">문의</Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <nav className="px-4 md:px-8 lg:px-16 py-3 border-b border-neutral-100 text-[10px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-700">홈</Link>
        <span className="mx-2">·</span>
        <span className="text-neutral-700">무료 상담 문의</span>
      </nav>

      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* 좌측: 연락처 정보 */}
        <section className="bg-[#2A2A2A] px-6 md:px-12 lg:px-16 py-12 lg:py-20 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-4">Contact VEROTY</p>
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-6">
            베로티<br />
            <span className="text-yellow-400">무료 상담 신청</span>
          </h1>
          <p className="text-stone-300 text-sm leading-relaxed mb-10">
            커뮤니티센터 가구·인테리어 프로젝트에 대해 북경대 디자인석사 출신 전문가가 직접 상담합니다.
            중국 직매입으로 15~30% 절감된 견적을 무료로 제안해 드립니다.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[9px] uppercase tracking-widest text-stone-500 mb-2">전화 상담</p>
              <a href="tel:01028618525" className="text-white text-lg font-medium hover:text-yellow-400 transition-colors">
                010-2861-8525
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-stone-500 mb-2">이메일 문의</p>
              <a href="mailto:veroty@veroty.co.kr" className="text-white hover:text-yellow-400 transition-colors">
                veroty@veroty.co.kr
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-stone-500 mb-2">주소</p>
              <p className="text-stone-300 text-sm leading-relaxed">
                경기도 김포시 고촌읍<br />
                상미4로 20, 반송프라자 203호
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-700">
            <p className="text-[9px] uppercase tracking-widest text-stone-500 mb-3">상담 가능 분야</p>
            <div className="flex flex-wrap gap-2">
              {["이동가구", "제작가구", "타일·석재", "디스플레이·조명", "골프타석의자", "전체 커뮤니티 패키지"].map((tag) => (
                <span key={tag} className="text-[10px] border border-neutral-600 text-stone-400 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 우측: 문의 양식 */}
        <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-20 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">Send Message</p>
          <form className="space-y-5" action="mailto:veroty@veroty.co.kr" method="get" encType="text/plain">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                단지명 / 회사명 <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                name="단지명"
                required
                placeholder="예) OO자이, OO르엘"
                className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                담당자 성함 <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                name="성함"
                required
                placeholder="홍길동"
                className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                연락처 <span className="text-yellow-500">*</span>
              </label>
              <input
                type="tel"
                name="연락처"
                required
                placeholder="010-0000-0000"
                className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                문의 내용
              </label>
              <textarea
                name="내용"
                rows={4}
                placeholder="커뮤니티센터 규모, 필요한 가구 종류, 예산 범위 등을 간략히 적어주시면 빠른 상담이 가능합니다."
                className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-neutral-900 text-xs uppercase tracking-widest hover:bg-yellow-300 transition-colors font-bold"
            >
              상담 신청 보내기
            </button>
            <p className="text-[10px] text-neutral-400 text-center">
              또는 직접 전화: <a href="tel:01028618525" className="text-neutral-600 hover:text-neutral-900">010-2861-8525</a>
            </p>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
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
