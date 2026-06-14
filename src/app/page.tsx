'use client'

import { useEffect, useState } from 'react'
import { Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google'
import { Loader } from '@/components/pit/Loader'
import { PitNav, Ticker, Footer } from '@/components/pit/Chrome'
import { Hero } from '@/components/pit/Hero'
import { About, Experience, Setup, Research, Podium, Projects, Contact } from '@/components/pit/Sections'
import { useReveal, useActiveOnScroll } from '@/components/pit/hooks'
import '@/components/pit/pitwall.css'

const bebas = Bebas_Neue({ variable: '--font-bebas', subsets: ['latin'], weight: '400' })
const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })
const jbmono = JetBrains_Mono({ variable: '--font-jbmono', subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export default function PrototypePage() {
  const [started, setStarted] = useState(false)
  useReveal(started)
  useActiveOnScroll(started)

  useEffect(() => {
    document.body.style.overflow = started ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [started])

  return (
    <div className={`pit ${bebas.variable} ${outfit.variable} ${jbmono.variable}`}>
      {!started && <Loader onDone={() => setStarted(true)} />}

      <PitNav active={started} />

      <main>
        <Hero started={started} />
        <Ticker />
        <About />
        <Experience />
        <Setup />
        <Research />
        <Podium />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
