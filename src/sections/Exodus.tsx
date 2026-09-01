import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waveOne, waveTwo } from '../data/story'

gsap.registerPlugin(ScrollTrigger)

function Wave({
  title,
  en,
  period,
  people,
  accent,
  note,
}: {
  title: string
  en: string
  period: string
  people: typeof waveOne
  accent: string
  note: string
}) {
  return (
    <div className="wave-block">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8">
        <h3 className="font-display font-black text-2xl md:text-3xl">{title}</h3>
        <span className="font-mono2 text-[11px] tracking-[0.25em]" style={{ color: accent }}>
          {en} · {period}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'var(--line)' }}>
        {people.map((p) => (
          <div key={p.name} className="p-5 md:p-6" style={{ background: 'var(--ink)' }}>
            <div className="flex items-baseline justify-between gap-3 mb-1.5">
              <p className="font-medium text-[0.95rem]">{p.name}</p>
              <span className="font-mono2 text-[10px] text-[var(--mist)] shrink-0">{p.year}</span>
            </div>
            <p className="text-xs text-[var(--mist)] mb-3 leading-relaxed">{p.role}</p>
            <p className="font-mono2 text-[11px] tracking-wide" style={{ color: accent }}>
              → {p.to}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-[var(--mist)] leading-relaxed">{note}</p>
    </div>
  )
}

export default function Exodus() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.wave-block').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative grid-bg" style={{ background: 'var(--ink)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-28 relative">
        <span className="vlabel hidden lg:block absolute left-6 top-36 font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          EXODUS · 出走
        </span>
        <p className="font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-4">TWO WAVES · 兩波大逃亡</p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.6rem)] leading-tight mb-6">
          靈魂人物的出走名錄
        </h2>
        <p className="max-w-2xl text-[var(--mist)] leading-relaxed mb-6">
          第一波發生在墜落期——可以解釋為「被雪藏者的出走」。
          第二波發生在反攻成功之後——這才是結構問題的鐵證：
          <span className="text-[var(--paper)]">即使贏了模型戰爭，帝國依然留不住創造價值的人。</span>
        </p>
        <blockquote
          className="max-w-3xl pl-5 py-1 mb-16 text-[0.95rem] leading-relaxed text-[var(--paper)] opacity-90"
          style={{ borderLeft: '2px solid var(--gold)' }}
        >
          「成為獨立公司後，我們或許能做出一些不符合公司最純粹財務利益的決定。」
          <span className="block mt-2 font-mono2 text-[11px] tracking-widest text-[var(--mist)]">
            —— Jeff Dean，2026 年 8 月，談離職原因
          </span>
        </blockquote>

        <div className="space-y-20">
          <Wave
            title="第一波 · Transformer 八子"
            en="WAVE I"
            period="2019–2023"
            people={waveOne}
            accent="var(--amber)"
            note="寫下《Attention Is All You Need》的 8 位作者，在論文發表後六年內全數離開 Google——沒有一人留下。"
          />
          <Wave
            title="第二波 · 勝利當年的出走"
            en="WAVE II"
            period="2026"
            people={waveTwo}
            accent="var(--gold)"
            note="Gemini 3 登頂僅半年後，重建帝國的這一代人也走了：首席科學家、諾貝爾獎得主、模型負責人、DeepMind 執行長。"
          />
        </div>
      </div>
    </section>
  )
}
