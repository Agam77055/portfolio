'use client'

import { useEffect, useRef, useState } from 'react'

/** UTC HH:MM:SS clock */
export function useClock() {
  const [t, setT] = useState('--:--:--')
  useEffect(() => {
    const update = () => {
      const d = new Date()
      setT(
        `${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}:${String(d.getUTCSeconds()).padStart(2, '0')}`
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

/** ambient (decorative) F1 telemetry numbers */
export function useLiveTelemetry() {
  const [v, setV] = useState({ speed: 318, gear: 7, rpm: 12450, throttle: 98 })
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let s = 318, r = 12450, th = 98
    const id = setInterval(() => {
      s = Math.max(180, Math.min(345, s + (Math.random() - 0.45) * 18))
      r = Math.max(8000, Math.min(15000, r + (Math.random() - 0.5) * 600))
      th = Math.max(10, Math.min(100, th + (Math.random() - 0.5) * 8))
      setV({ speed: Math.round(s), gear: Math.max(3, Math.min(8, Math.round(s / 45))), rpm: Math.round(r), throttle: Math.round(th) })
    }, 700)
    return () => clearInterval(id)
  }, [])
  return v
}

/** rotating telemetry session label gag */
export function useRotatingSession() {
  const [s, setS] = useState('RACE')
  useEffect(() => {
    const sessions = ['RACE', 'QUALI', 'FP3', 'SHIP']
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % sessions.length
      setS(sessions[i])
    }, 4000)
    return () => clearInterval(id)
  }, [])
  return s
}

/** track the section currently in view (scroll-position based, robust at top) */
export function useScrollSpy(ids: string[], active: boolean) {
  const [current, setCurrent] = useState(ids[0])
  const key = ids.join(',')
  useEffect(() => {
    if (!active) return
    const onScroll = () => {
      const y = window.scrollY + 150 // offset for the fixed nav
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      }
      // near the bottom, force the last section active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        cur = ids[ids.length - 1]
      }
      setCurrent(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, active])
  return current
}

/** On touch/small screens, mark the card crossing the ~0.38 viewport line as
   `.pit-hl` (simulated hover), handing off to the next card as it crosses. */
export function useActiveOnScroll(active: boolean) {
  useEffect(() => {
    if (!active) return
    if (!window.matchMedia('(max-width: 980px)').matches) return
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.pit-exp, .pit-proj, .pit-stack, .pit-rnd, .pit-ach, .pit-ccard')
    )
    if (!els.length) return
    let raf = 0
    let cur: HTMLElement | null = null
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      const lo = vh * 0.22 // de-highlight once the card's centre rises above this
      const hi = vh * 0.78 // start highlighting once the centre drops below this
      const target = vh * 0.46 // sweet spot a card gravitates to
      let best: HTMLElement | null = null
      let bestDist = Infinity
      for (const el of els) {
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        if (center >= lo && center <= hi) {
          const d = Math.abs(center - target)
          if (d < bestDist) {
            bestDist = d
            best = el
          }
        }
      }
      if (best !== cur) {
        cur?.classList.remove('pit-hl')
        best?.classList.add('pit-hl')
        cur = best
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      cur?.classList.remove('pit-hl')
    }
  }, [active])
}

/** add `.in` to `.pit-reveal` elements as they scroll into view */
export function useReveal(active: boolean) {
  const started = useRef(false)
  useEffect(() => {
    if (!active || started.current) return
    started.current = true
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.pit-reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [active])
}
