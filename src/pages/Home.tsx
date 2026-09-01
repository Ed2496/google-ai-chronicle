import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../sections/Hero'
import Timeline from '../sections/Timeline'
import Framework from '../sections/Framework'
import DataBoard from '../sections/DataBoard'
import Exodus from '../sections/Exodus'
import Epilogue from '../sections/Epilogue'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative">
      <Hero />
      <Timeline />
      <Framework />
      <DataBoard />
      <Exodus />
      <Epilogue />
    </main>
  )
}
