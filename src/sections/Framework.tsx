import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { frameworks } from '../data/story'

gsap.registerPlugin(ScrollTrigger)

export default function Framework() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.fw-item').forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 78%' },
        })
      })
      gsap.utils.toArray<HTMLElement>('.fw-bar').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative grid-bg" style={{ background: 'var(--ink)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-28 relative">
        <span className="vlabel hidden lg:block absolute left-6 top-36 font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          DIAGNOSIS · 病理
        </span>
        <p className="font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-4">WHY IT HAPPENED · 病因診斷</p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.6rem)] leading-tight mb-6">
          三條鎖鏈：<br />拖住巨頭的不是敵人，是結構
        </h2>
        <p className="max-w-2xl text-[var(--mist)] leading-relaxed mb-16">
          墜落與反攻只是表象。真正決定走向的，是三股在深層持續作用的結構性力量——
          它們在墜落期主導了雪藏與出走，也沒有因 Gemini 3 的勝利而消失。
        </p>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
          {frameworks.map((f) => (
            <div key={f.no} className="fw-item relative">
              <div className="fw-bar h-[3px] w-full mb-8" style={{ background: 'var(--amber)' }} />
              <p className="font-mono2 text-[11px] tracking-[0.3em] text-[var(--amber)] mb-3">
                {f.no} · {f.en}
              </p>
              <h3 className="font-display font-black text-2xl md:text-[1.7rem] leading-snug mb-5">{f.title}</h3>
              <p className="text-[var(--mist)] leading-relaxed text-[0.95rem] mb-6">{f.desc}</p>
              <p className="text-[0.85rem] leading-relaxed pl-4" style={{ borderLeft: '2px solid var(--amber)', color: 'rgba(11,43,38,0.82)' }}>
                {f.evidence}
              </p>
            </div>
          ))}
        </div>

        {/* verdict strip */}
        <div className="mt-20 pt-10" style={{ borderTop: '1px solid var(--line)' }}>
          <p className="font-display text-xl md:text-2xl leading-relaxed max-w-4xl">
            「毀掉一個巨頭的，往往不是神一樣的敵人，
            而是內部<span className="text-[var(--amber)]">沉重的鎖鏈</span>和
            被抹殺的<span className="text-[var(--mint)]">創新精神</span>。」
          </p>
        </div>
      </div>
    </section>
  )
}
