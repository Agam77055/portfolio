'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { HERO_META, ROLES } from './content'
import { ArrowIcon } from './icons'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function RoleTicker() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="pit-roleline mono">
      <span className="pit-role-prefix">$</span>
      <span key={i} className="pit-role">{ROLES[i]}</span>
      <span className="pit-caret" />
    </div>
  )
}

export function Hero({ started }: { started: boolean }) {
  return (
    <section className={`pit-hero${started ? ' start' : ''}`} id="home">
      <div className="pit-hero-grid" />
      <div className="pit-hero-stripes" />

      <div className="pit-hero-inner">
        <div className="pit-hero-main">
          <div className="pit-eyebrow">
            <span className="bar" />
            <span>Driver No. 77 · IIT Jodhpur</span>
          </div>

          <h1>
            <span className="line"><span>AGAM HARPREET</span></span>
            <span className="line"><span><em className="em">SINGH</em>.</span></span>
          </h1>

          <RoleTicker />

          <div className="pit-hero-meta">
            {HERO_META.map((m) => (
              <div key={m.label} className="pit-meta-block">
                <span className="pit-meta-label">{m.label}</span>
                <span className="pit-meta-value" dangerouslySetInnerHTML={{ __html: m.value }} />
              </div>
            ))}
          </div>

          <div className="pit-hero-actions">
            <button className="pit-btn pit-btn-primary" onClick={() => scrollTo('experience')}>
              View Racing Career <ArrowIcon />
            </button>
            <button className="pit-btn pit-btn-ghost" onClick={() => scrollTo('contact')}>
              Pit Radio <ArrowIcon />
            </button>
          </div>
        </div>

        <aside className="pit-hero-photo">
          <div className="pit-hero-photo-frame">
            <Image
              src="/assets/images/IMG_1733.jpeg"
              alt="Agam Harpreet Singh"
              fill
              sizes="(max-width: 1000px) 80vw, 420px"
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
              priority
            />
            <span className="pit-hero-photo-num">77</span>
            <span className="pit-hero-photo-tag mono">● ON TRACK</span>
          </div>
        </aside>
      </div>

      <div className="pit-scroll-cue">
        <span>Scroll · Lap 1</span>
        <div className="stem" />
      </div>
    </section>
  )
}
