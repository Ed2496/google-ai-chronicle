import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { chapters } from '../data/story'

gsap.registerPlugin(ScrollTrigger)

const moodColor: Record<string, string> = {
  fact: 'var(--mint)',
  power: 'var(--amber)',
  turn: 'var(--gold)',
}
const moodTint: Record<string, string> = {
  fact: 'var(--mint-tint)',
  power: 'var(--amber-tint)',
  turn: 'rgba(246,205,41,0.10)',
}
const moodName: Record<string, string> = {
  fact: '事實主導',
  power: '權力敘事',
  turn: '過渡 · 內耗',
}

export default function Timeline() {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // whole-section progress for the rail line
      ScrollTrigger.create({
        trigger: '.tl-chapters',
        start: 'top 60%',
        end: 'bottom 40%',
        onUpdate: (self) => setProgress(self.progress),
      })
      // active chapter detection
      chapters.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `#chapter-${i}`,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            if (self.isActive) setActive(i)
          },
        })
      })
      // panel reveals
      gsap.utils.toArray<HTMLElement>('.chapter-panel').forEach((panel) => {
        gsap.from(panel.querySelectorAll('.rv'), {
          y: 44,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 70%' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const cur = chapters[active]

  return (
    <section ref={root} className="relative" style={{ background: 'var(--ink-deep)' }}>
      {/* section header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-24 pt-28 pb-4 relative">
        <span className="vlabel hidden lg:block absolute left-6 top-32 font-mono2 text-[11px] text-[var(--mist)] opacity-60">
          TIMELINE · 時間軸
        </span>
        <p className="font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-4">SIX ACTS · 六幕編年</p>
        <h2 className="font-display font-black text-[clamp(2rem,5vw,3.6rem)] leading-tight">
          九年時間軸：<span className="text-[var(--amber)]">墜落</span>
          <span className="text-[var(--mist)]"> → </span>
          <span className="text-[var(--mint)]">反攻</span>
          <span className="text-[var(--mist)]"> → </span>
          <span className="text-[var(--gold)]">再裂變</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-24 flex gap-10">
        {/* sticky year rail */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-0 h-screen flex flex-col justify-center">
            {/* stacked giant years */}
            <div className="relative h-40 overflow-hidden">
              {chapters.map((c, i) => (
                <div
                  key={c.id}
                  className="absolute inset-0 flex items-center transition-all duration-500"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `translateY(${(i - active) * 36}px)`,
                    color: moodColor[c.mood],
                  }}
                >
                  <span className="font-display font-black text-[5.5rem] leading-none">{c.year}</span>
                </div>
              ))}
            </div>
            {/* mood label */}
            <div
              className="mt-2 font-mono2 text-[11px] tracking-[0.25em] transition-colors duration-500"
              style={{ color: moodColor[cur.mood] }}
            >
              {moodName[cur.mood]}
            </div>
            {/* progress rail */}
            <div className="mt-10 flex gap-4">
              <div className="relative w-px self-stretch" style={{ background: 'var(--line)', minHeight: 220 }}>
                <div
                  className="absolute top-0 left-0 w-px transition-all duration-300"
                  style={{ height: `${progress * 100}%`, background: moodColor[cur.mood] }}
                />
              </div>
              <div className="flex flex-col justify-between py-1" style={{ minHeight: 220 }}>
                {chapters.map((c, i) => (
                  <div key={c.id} className="flex items-center gap-3">
                    <span
                      className="block rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? 10 : 6,
                        height: i === active ? 10 : 6,
                        background: i === active ? moodColor[c.mood] : 'var(--line)',
                      }}
                    />
                    <span
                      className="font-mono2 text-[10px] tracking-widest transition-opacity duration-300"
                      style={{ color: 'var(--mist)', opacity: i === active ? 1 : 0.35 }}
                    >
                      {c.span}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* chapters */}
        <div className="tl-chapters flex-1">
          {chapters.map((c, i) => (
            <article
              key={c.id}
              id={`chapter-${i}`}
              className="chapter-panel min-h-[88vh] flex flex-col justify-center py-16"
              style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
            >
              <div className="rv flex items-center gap-4 mb-6">
                <span
                  className="font-mono2 text-[11px] tracking-[0.25em] px-3 py-1"
                  style={{ color: moodColor[c.mood], background: moodTint[c.mood] }}
                >
                  {c.tag}
                </span>
                <span className="md:hidden font-display font-black text-3xl" style={{ color: moodColor[c.mood] }}>
                  {c.year}
                </span>
              </div>

              <p className="rv font-mono2 text-xs tracking-[0.3em] text-[var(--mist)] mb-3">{c.span}</p>
              <h3 className="rv font-display font-black text-[clamp(1.9rem,4vw,3.2rem)] leading-tight mb-2">
                {c.title}
              </h3>
              <p className="rv text-lg mb-10" style={{ color: moodColor[c.mood] }}>
                {c.kicker}
              </p>

              <ul className="space-y-5 max-w-2xl">
                {c.points.map((p, j) => (
                  <li key={j} className="rv flex gap-4 text-[var(--mist)] leading-relaxed">
                    <span
                      className="mt-2.5 block w-2 h-2 shrink-0 rounded-full"
                      style={{ background: moodColor[c.mood] }}
                    />
                    <span className="text-base md:text-[1.05rem]">{p}</span>
                  </li>
                ))}
              </ul>

              {c.footnote && (
                <blockquote
                  className="rv mt-10 max-w-2xl pl-5 py-1 text-[0.95rem] leading-relaxed text-[var(--paper)] opacity-90"
                  style={{ borderLeft: `2px solid ${moodColor[c.mood]}` }}
                >
                  {c.footnote}
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
