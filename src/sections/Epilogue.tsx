import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Epilogue() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.epi-rv', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 65%' },
      })
      // seven-year arcs
      gsap.utils.toArray<HTMLElement>('.arc-fill').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.4,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative" style={{ background: 'var(--ink-deep)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-28 relative">
        <span className="vlabel hidden lg:block absolute left-6 top-36 font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          VERDICT · 結語
        </span>
        <p className="epi-rv font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-4">
          EPILOGUE · 七年驗證理論
        </p>
        <h2 className="epi-rv font-display font-black text-[clamp(2rem,5vw,3.6rem)] leading-tight mb-16">
          凡所有相，皆是虛妄。<br />
          <span className="text-[var(--mist)]">時間，是唯一可以驗證真理的方式。</span>
        </h2>

        {/* two seven-year arcs */}
        <div className="space-y-12 max-w-4xl mb-20">
          <div className="epi-rv">
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <p className="font-medium">第一個七年 · 墜落之證</p>
              <span className="font-mono2 text-[11px] tracking-widest text-[var(--amber)]">2017 → 2024</span>
            </div>
            <div className="h-2 w-full" style={{ background: 'var(--line)' }}>
              <div className="arc-fill h-full" style={{ background: 'var(--amber)', width: '100%' }} />
            </div>
            <p className="mt-3 text-sm text-[var(--mist)] leading-relaxed">
              證明了：權力敘事凌駕事實與數據，巨頭必將掉隊——從發明 Transformer 到被出具「死亡報告」。
            </p>
          </div>
          <div className="epi-rv">
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <p className="font-medium">第二個週期 · 剛過一年</p>
              <span className="font-mono2 text-[11px] tracking-widest text-[var(--mint)]">2025 → 進行中</span>
            </div>
            <div className="h-2 w-full" style={{ background: 'var(--line)' }}>
              <div className="arc-fill h-full" style={{ background: 'var(--mint)', width: '14%' }} />
            </div>
            <p className="mt-3 text-sm text-[var(--mist)] leading-relaxed">
              僅一年就證明：即使事實與數據短暫回歸主導，只要收租與金融化的基因不變，
              Grassroots 的出走就不會停止。反攻的「相」，同樣需要七年驗真。
            </p>
          </div>
        </div>

        <p className="epi-rv font-display text-xl md:text-2xl leading-relaxed max-w-4xl mb-24">
          話術的泡沫會褪去，收租的模式會遭遇瓶頸。
          唯有建立在<span className="text-[var(--mint)]">嚴謹邏輯</span>、
          <span className="text-[var(--mint)]">可追溯證據</span>、
          以及對<span className="text-[var(--gold)]">人的價值</span>的尊重之上的系統，
          才能在時間的帳本上被證明為「真」。
        </p>

        <footer className="epi-rv pt-10" style={{ borderTop: '1px solid var(--line)' }}>
          <p className="font-mono2 text-[11px] leading-relaxed tracking-wide text-[var(--mist)] opacity-70">
            資料來源：Google 官方部落格、Alphabet 財報、CNBC、Fortune、TechCrunch、The New York Times 等公開報導（2025–2026）·
            本頁為評論性圖解，所有判斷仍需時間驗證 · 製作日期 2026.09
          </p>
        </footer>
      </div>
    </section>
  )
}
