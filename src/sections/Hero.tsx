import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // parallax orbs
      gsap.utils.toArray<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = parseFloat(el.dataset.depth || '1')
        gsap.to(el, {
          y: () => depth * 140,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 },
        })
      })
      // hero entrance
      gsap.from('.hero-line', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      })
      gsap.from('.hero-meta', { opacity: 0, duration: 1, delay: 0.9 })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative min-h-screen grid-bg flex items-center overflow-hidden">
      {/* parallax orbs */}
      <div
        data-depth="0.4"
        className="absolute -top-32 -right-40 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(10,157,99,0.18) 0%, transparent 65%)' }}
      />
      <div
        data-depth="1.2"
        className="absolute bottom-[-10rem] left-[-8rem] w-[30rem] h-[30rem] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,83,13,0.15) 0%, transparent 65%)' }}
      />
      <div
        data-depth="2.2"
        className="absolute top-1/3 right-[18%] w-40 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(166,124,0,0.14) 0%, transparent 70%)' }}
      />

      {/* rotated edge label */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 items-center gap-4">
        <span className="vlabel font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          CHRONICLE · 編年史 · 2017—2026
        </span>
        <span className="hairline w-px h-24 opacity-60" style={{ background: 'var(--line)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-24 py-32 w-full">
        <p className="hero-meta font-mono2 text-xs md:text-sm tracking-[0.3em] text-[var(--mint)] mb-8">
          一個巨頭的墜落與反攻 · GOOGLE × AI · 2017–2026
        </p>

        <h1 className="font-display font-black leading-[1.08] text-[clamp(2.6rem,7.5vw,6.2rem)]">
          <span className="hero-line block">發明了未來，</span>
          <span className="hero-line block">
            卻險些被自己的
            <span className="text-[var(--amber)]">發明</span>埋葬
          </span>
        </h1>

        <p className="hero-line mt-10 max-w-2xl text-[var(--mist)] text-base md:text-lg leading-relaxed">
          Google 用一篇論文開啟了大模型時代，卻因權力敘事凌駕事實，親手雪藏了它。
          從被出具「死亡報告」，到 Gemini 3 絕地反攻、逼對手拉響紅色警戒——
          再到勝利當年，靈魂人物再度集體出走。這是一場歷時九年的因果閉環。
        </p>

        <div className="hero-meta mt-14 flex flex-wrap gap-x-10 gap-y-4 font-mono2 text-xs md:text-sm text-[var(--mist)]">
          <span><em className="not-italic text-[var(--gold)]">2</em> 次 Code Red · 攻守易形</span>
          <span><em className="not-italic text-[var(--gold)]">8</em> 位 Transformer 作者全數離開</span>
          <span><em className="not-italic text-[var(--gold)]">15</em> 位靈魂人物出走紀錄</span>
        </div>

        <div className="hero-meta mt-20 flex items-center gap-3 text-[var(--mist)] opacity-70">
          <span className="font-mono2 text-[11px] tracking-[0.25em]">向下滾動 · 進入時間軸</span>
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="animate-bounce">
            <path d="M7 1v20m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
