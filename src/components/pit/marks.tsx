/* Company marks (brand-coloured; rendered greyscale by CSS, pop on hover),
   original podium trophies (Monaco / Monza, bronze) + a Ferrari-style cap,
   and a play badge for video projects. */

export function CompanyMark({ team }: { team: string }) {
  switch (team) {
    case 'MongoDB':
      return (
        <svg viewBox="0 0 48 48" className="pit-logo-svg" aria-hidden>
          <path d="M24 4c2 6 9 10 9 20 0 8-5 13-8 15l-1 5-1-5c-3-2-8-7-8-15 0-10 7-14 9-20z" fill="#00ED64" />
          <path d="M24 9c-1.4 4-5 7.5-5 14.5 0 6 2.8 10 5 12z" fill="#00684A" opacity="0.7" />
          <rect x="23.2" y="38" width="1.6" height="6" rx="0.8" fill="#9fb0a8" />
        </svg>
      )
    case 'AfterQuery':
      return <img src="/assets/logos/afterquery.png" alt="AfterQuery" className="pit-logo-img" />
    case 'Acro Edge Systems':
      // AcroEdge circular icon — two interlocking comma swooshes in its blues
      return (
        <svg viewBox="0 0 48 48" className="pit-logo-svg" aria-hidden>
          <path d="M24 8a16 16 0 0 0-13.9 23.9l6.1-3.5A9 9 0 0 1 24 15z" fill="#1f4e8f" />
          <path d="M24 40a16 16 0 0 0 13.9-23.9l-6.1 3.5A9 9 0 0 1 24 33z" fill="#2bb3e0" />
          <circle cx="24" cy="15.5" r="2.6" fill="#1f4e8f" />
          <circle cx="24" cy="32.5" r="2.6" fill="#2bb3e0" />
        </svg>
      )
    case 'CarSaarthi':
      return (
        <svg viewBox="0 0 48 48" className="pit-logo-svg" aria-hidden>
          <circle cx="24" cy="24" r="19" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <circle cx="24" cy="24" r="5.5" fill="#3b82f6" />
          <path d="M24 18.5V7M24 29.5l9.5 9.5M24 29.5l-9.5 9.5" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
          <path d="M9 22h30" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
        </svg>
      )
    default:
      return null
  }
}

export function Trophy({ variant }: { variant: 'monaco' | 'monza' | 'cap' }) {
  // Real open-licensed Twemoji SVGs (transparent). Trophy is tinted bronze for
  // 3rd-place finishes; the cap marks the leadership role.
  if (variant === 'cap') {
    return <img src="/assets/trophies/1f9e2.svg" alt="Cap" className="pit-trophy-img" />
  }
  return <img src="/assets/trophies/1f3c6.svg" alt="3rd place trophy" className="pit-trophy-img pit-trophy-bronze" />
}

export function PlayBadge() {
  return (
    <span className="pit-play" aria-hidden>
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
    </span>
  )
}
