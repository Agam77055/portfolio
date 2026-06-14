'use client'

import { useState } from 'react'
import { NAV, RESUME_URL, TICKER } from './content'
import { useScrollSpy } from './hooks'
import { ArrowIcon } from './icons'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export function PitNav({ active }: { active: boolean }) {
  const current = useScrollSpy(NAV.map((n) => n.id), active)
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <nav className="pit-nav">
      <div className="pit-nav-inner">
        <button className="pit-brand" onClick={() => go('home')}>
          <span className="pit-brand-num"><span>77</span></span>
          <span>AGAM</span>
        </button>

        <div className="pit-links" role="tablist">
          {NAV.map((n, i) => (
            <button
              key={n.id}
              className={`pit-link${current === n.id ? ' active' : ''}`}
              onClick={() => go(n.id)}
            >
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="lbl">{n.label}</span>
              <i className="br tl" /><i className="br tr" /><i className="br bl" /><i className="br br" />
            </button>
          ))}
        </div>

        <a className="pit-cta" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          <span className="key">R</span> Resume <ArrowIcon />
        </a>

        <button
          className={`pit-burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`pit-mobile${open ? ' open' : ''}`}>
        {NAV.map((n, i) => (
          <button
            key={n.id}
            className={`pit-mobile-link${current === n.id ? ' active' : ''}`}
            onClick={() => go(n.id)}
          >
            <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
            {n.label}
          </button>
        ))}
        <a className="pit-mobile-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          <span className="idx mono">R</span> Resume
        </a>
      </div>
    </nav>
  )
}

export function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="pit-ticker">
      <div className="pit-ticker-track">
        {items.map((t, i) => (
          <span key={i} className="pit-ticker-item">{t} <span className="sep" /></span>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="pit-footer">
      <div className="pit-checker" />
      <div className="pit-footer-inner">
        <div>© 2026 · Agam Harpreet Singh · <span className="accent">Built at the limit</span></div>
        <div>Designed in India 🇮🇳 · <span className="accent">Lights out and away we go.</span></div>
      </div>
    </footer>
  )
}
