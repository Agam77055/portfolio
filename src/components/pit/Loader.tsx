'use client'

import { useEffect, useState } from 'react'

export function Loader({ onDone }: { onDone: () => void }) {
  const [lit, setLit] = useState(0)
  const [out, setOut] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const step = reduced ? 90 : 600
    const timers: ReturnType<typeof setTimeout>[] = []
    for (let i = 1; i <= 5; i++) timers.push(setTimeout(() => setLit(i), step * i))
    const hold = step * 5 + (reduced ? 120 : 400 + Math.random() * 1100)
    timers.push(setTimeout(() => setOut(true), hold))
    timers.push(setTimeout(() => setDone(true), hold + 600))
    timers.push(setTimeout(onDone, hold + 1000))
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`pit-loader${done ? ' done' : ''}`} aria-hidden>
      <div className="pit-rig">
        {[0, 1, 2, 3, 4].map((col) => (
          <div key={col} className={`pit-panel${!out && col < lit ? ' on' : ''}`}>
            <span className="pit-bulb" />
            <span className="pit-bulb" />
            <span className="pit-bulb" />
            <span className="pit-bulb" />
          </div>
        ))}
      </div>
      <div className={`pit-lstatus${out ? ' go' : ''}`}>
        {out ? 'LIGHTS OUT — GO GO GO' : 'FORMATION LAP COMPLETE'}
      </div>
    </div>
  )
}
