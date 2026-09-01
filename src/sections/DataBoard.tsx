import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stats } from '../data/story'

gsap.registerPlugin(ScrollTrigger)

export default function DataBoard() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
        const target = parseFloat(el.dataset.value || '0')
        const decimals = parseInt(el.dataset.decimals || '0', 10)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.textContent = obj.v.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          },
        })
      })
      gsap.from('.stat-cell', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stat-grid', start: 'top 78%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative" style={{ background: 'var(--ink-deep)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-28 relative">
        <span className="vlabel hidden lg:block absolute left-6 top-36 font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          LEDGER · 帳本
        </span>
        <p className="font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-4">THE LEDGER · 兩本帳</p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.6rem)] leading-tight mb-6">
          反攻的數據，與它的代價
        </h2>
        <p className="max-w-2xl text-[var(--mist)] leading-relaxed mb-16">
          <span className="text-[var(--mint)]">薄荷綠</span>是勝利的帳本，
          <span className="text-[var(--amber)]">琥珀橙</span>是代價的帳本。
          兩本帳同時成立——這正是 2026 年最需要時間驗證的地方。
        </p>

        <div className="stat-grid grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const c = s.mood === 'fact' ? 'var(--mint)' : 'var(--amber)'
            return (
              <div
                key={i}
                className="stat-cell p-6 md:p-8"
                style={{
                  borderTop: `2px solid ${c}`,
                  borderLeft: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <p className="font-mono2 font-bold text-3xl md:text-[2.4rem] leading-none mb-3" style={{ color: c }}>
                  {s.prefix}
                  <span className="stat-num" data-value={s.value} data-decimals={s.decimals || 0}>
                    0
                  </span>
                  {s.suffix}
                </p>
                <p className="text-sm font-medium mb-1.5">{s.label}</p>
                <p className="text-xs text-[var(--mist)] leading-relaxed">{s.sub}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-10 font-mono2 text-[11px] tracking-wider text-[var(--mist)] opacity-70">
          * 數據截至 2026 年 8 月公開財報與官方公告 · 美元計價
        </p>
      </div>
    </section>
  )
}
