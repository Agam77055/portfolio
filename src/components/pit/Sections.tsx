'use client'

import Image from 'next/image'
import {
  EXPERIENCES,
  STACK,
  PAPERS,
  ACHIEVEMENTS,
  PROJECTS,
  LAB,
  SOCIALS,
} from './content'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, MailIcon, ArrowIcon } from './icons'
import { CompanyMark, Trophy, PlayBadge } from './marks'
import { TECH_COLLAGE } from './content'

function Head({ lap, title, sub }: { lap: string; title: string; sub: string }) {
  return (
    <div className="pit-reveal">
      <span className="sector-tag"><span className="dot" />{lap}</span>
      <h2 className="section-title display" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="section-subtitle">{sub}</p>
    </div>
  )
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about">
      <div className="pit-container">
        <Head lap="LAP 02 · Driver Profile" title="Behind<br/>the Visor." sub="AI & Data Science student at IIT Jodhpur — I build across ML research, systems, and full-stack product, and care about getting the details right." />
        <div className="pit-about-grid">
          <div className="pit-driver-card pit-reveal">
            <div className="pit-driver-photo">
              <span className="pit-driver-num">77</span>
              <Image src="/assets/images/IMG_7656.jpg" alt="Agam Harpreet Singh" fill sizes="380px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="pit-driver-info">
              <div className="name display">A. H. SINGH</div>
              <div className="team mono">Team IIT Jodhpur · 2023–27</div>
            </div>
            <div className="pit-driver-socials">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
              <a href={`mailto:${SOCIALS.email}`} aria-label="Email"><MailIcon /></a>
            </div>
          </div>

          <div className="pit-bio pit-reveal">
            <p>I&apos;m <strong>Agam</strong>, a BTech student in <strong>AI &amp; Data Science at IIT Jodhpur</strong>. I like building software end to end — from research prototypes to full-stack products — and I care about the details that make systems fast, reliable, and genuinely useful.</p>
            <p>My work spans <span className="hl">machine learning, high-performance computing, and full-stack development</span>. From <strong>analysing lunar XRF data for ISRO</strong> to <strong>stress-testing frontier LLMs</strong> and publishing <strong>research on dynamic-graph algorithms</strong>, I&apos;m drawn to problems where the engineering matters as much as the result.</p>
            <p>Outside of work, I&apos;m a big <span className="hl">Formula 1</span> fan and a keen gamer — I enjoy the strategy and engineering behind the sport, and a little of that personality shows up in how this site is built.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- EXPERIENCE ---------------- */
export function Experience() {
  return (
    <section id="experience">
      <div className="pit-container">
        <Head lap="LAP 03 · Race History" title="On the<br/>Grid." sub="Internships and contracts across AI tooling, full-stack product, and quant systems — most recent first." />
        <div className="pit-exp-list">
          {EXPERIENCES.map((e) => (
            <article key={e.team} className="pit-exp pit-reveal" style={{ ['--ax' as string]: e.accent }}>
              <div className="pit-exp-mark">
                <span className="pit-logo"><CompanyMark team={e.team} /></span>
              </div>
              <div>
                <div className="pit-exp-team display">{e.team}</div>
                <div className="pit-exp-role mono">{e.role} · {e.type}</div>
                <p className="pit-exp-desc">{e.summary}</p>
                <div className="pit-exp-tech">
                  {e.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="pit-exp-side">
                <span className="pit-exp-period mono">{e.period}</span>
                {e.status === 'LIVE' && <span className="pit-badge live"><span className="d" />LIVE</span>}
                {e.fastestLap && <span className="pit-badge fl">Fastest Lap</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- SETUP (skills) ---------------- */
export function Setup() {
  return (
    <section id="setup" className="pit-setup">
      <div className="pit-setup-bg" aria-hidden>
        {Array.from({ length: 10 }).flatMap((_, k) =>
          TECH_COLLAGE.map((c, i) => <i key={`${k}-${i}`} className={c} />)
        )}
      </div>
      <div className="pit-container" style={{ position: 'relative', zIndex: 1 }}>
        <Head lap="LAP 04 · Car Setup Sheet" title="The Garage,<br/>End to End." sub="From front-wing front-end to rear-axle backend — the toolkit I run when I'm building, training, and shipping." />
        <div className="pit-stack-grid">
          {STACK.map((s) => (
            <div key={s.name} className="pit-stack pit-reveal">
              <div className="pit-stack-head">
                <div className="name display">{s.name}</div>
                <div className="badge mono"><span className={`pit-compound ${s.compound}`} />{s.label}</div>
              </div>
              <div className="pit-pills">
                {s.pills.map((p) => <span key={p} className="pit-pill">{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- RESEARCH ---------------- */
export function Research() {
  return (
    <section id="research">
      <div className="pit-container">
        <Head lap="LAP 05 · R&D Lab" title="Pushing<br/>the Limit." sub={`Published & in-review research in high-performance computing and dynamic graph algorithms. ${LAB}.`} />
        <div className="pit-rnd-list">
          {PAPERS.map((p, i) => (
            <article key={p.title} className="pit-rnd pit-reveal" style={{ ['--ax' as string]: p.accent }}>
              <div className="pit-rnd-idx display">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="pit-rnd-title display">{p.title}</div>
                <div className="pit-rnd-auth">{p.authors}</div>
                <div className="pit-rnd-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="pit-rnd-side">
                <span className="pit-rnd-venue mono">{p.venue}</span>
                <span className={`pit-rnd-status ${p.status === 'ACCEPTED' ? 'acc' : 'rev'}`}>{p.status}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- PODIUM ---------------- */
export function Podium() {
  return (
    <section id="podium">
      <div className="pit-container">
        <Head lap="LAP 06 · Podium Finishes" title="On the<br/>Podium." sub="National-level competitions and the teams I've led where the work cleared the gap." />
        <div className="pit-ach-list">
          {ACHIEVEMENTS.map((a) => (
            <article key={a.event} className="pit-ach pit-reveal">
              <div className="pit-ach-trophy">
                <Trophy variant={a.trophy} />
                <span className="pit-ach-place mono">{a.trophy === 'cap' ? 'LEAD' : a.place + a.sub}</span>
              </div>
              <div className="pit-ach-meta">
                <h3 className="pit-ach-event display">{a.event}</h3>
                <p className="pit-ach-desc">{a.desc}</p>
                <div className="pit-ach-tags">
                  {a.tags.map((t) => <span key={t} className="pit-ach-tag">{t}</span>)}
                </div>
              </div>
              <div className="pit-ach-side">
                <div className="pit-ach-year display">{a.year}</div>
                <div className="pit-ach-cat mono">{a.cat}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- PROJECTS ---------------- */
export function Projects() {
  return (
    <section id="projects">
      <div className="pit-container">
        <Head lap="LAP 07 · Race Highlights" title="Builds &amp;<br/>Battles." sub="Selected projects spanning AI research, full-stack product, and a podium-finishing space mission." />
        <div className="pit-proj-list">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className={`pit-proj pit-reveal${i % 2 === 1 ? ' rev' : ''}`}>
              <div className="pit-proj-img">
                <span className="pit-proj-num mono">{`// ${p.build}`}</span>
                {p.trophy && <span className="pit-proj-trophy mono">{p.trophy}</span>}
                {p.img ? (
                  <Image src={p.img} alt={p.title} fill sizes="(max-width: 900px) 100vw, 640px" style={{ objectFit: 'cover', objectPosition: p.imgTop ? 'top' : 'center' }} />
                ) : (
                  <div className="pit-proj-ph"><span className="display">{p.title.split(' ')[0]}</span></div>
                )}
                {p.video && <PlayBadge />}
              </div>
              <div className="pit-proj-body">
                <div>
                  <div className="pit-proj-cat mono">{p.cat}</div>
                  <h3 className="pit-proj-title display">{p.title}</h3>
                  <p className="pit-proj-desc">{p.desc}</p>
                </div>
                <div className="pit-proj-tech">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="pit-proj-stats">
                  {p.stats.map((s) => (
                    <div key={s.lbl} className="pit-proj-stat">
                      <div className="lbl">{s.lbl}</div>
                      <div className={`val${s.tone ? ' ' + s.tone : ''}`}>{s.val}</div>
                    </div>
                  ))}
                </div>
                <div className="pit-proj-actions">
                  {p.links.map((l) => (
                    <a key={l.label} className={`pit-proj-btn ${l.primary ? 'primary' : 'ghost'}`} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const original = btn.textContent
    btn.textContent = 'TRANSMITTING…'
    btn.disabled = true
    try {
      const res = await fetch('https://formspree.io/f/xgvykbzd', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('failed')
      form.reset()
      btn.textContent = 'MESSAGE RECEIVED ✓'
    } catch {
      btn.textContent = 'FAILED — RETRY'
    }
    setTimeout(() => {
      btn.textContent = original
      btn.disabled = false
    }, 3200)
  }

  return (
    <section id="contact" style={{ paddingBottom: 70 }}>
      <div className="pit-container">
        <Head lap="LAP 08 · Pit Radio" title="Box Box.<br/>Let's Talk." sub="Open to internships, research collaborations, and freelance builds — or a conversation about either Hamilton's championship count or your next ML pipeline." />
        <div className="pit-contact-grid">
          <form className="pit-form pit-reveal" onSubmit={onSubmit}>
            <div className="pit-form-head">
              <span className="lbl">{'// Send a Message'}</span>
            </div>
            <div className="pit-form-row">
              <div className="pit-field">
                <label htmlFor="cname">Your Name</label>
                <input id="cname" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="pit-field">
                <label htmlFor="cemail">Email Address</label>
                <input id="cemail" name="email" type="email" required placeholder="you@email.com" />
              </div>
            </div>
            <div className="pit-field full">
              <label htmlFor="csubject">Subject</label>
              <input id="csubject" name="subject" type="text" placeholder="What's this about?" />
            </div>
            <div className="pit-field full">
              <label htmlFor="cmsg">Message</label>
              <textarea id="cmsg" name="message" required placeholder="Write your message…" />
            </div>
            <button type="submit" className="pit-submit">Transmit Message <ArrowIcon /></button>
          </form>

          <div className="pit-contact-side">
            <div className="pit-ccard pit-reveal">
              <div className="lbl">{'// Direct Channel'}</div>
              <a className="val" href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a>
              <div className="sub">Reply within 24 race hours</div>
            </div>
            <div className="pit-ccard pit-reveal">
              <div className="lbl">{'// Pit Wall'}</div>
              <a className="val" href={`tel:${SOCIALS.phone.replace(/[^+\d]/g, '')}`}>{SOCIALS.phone}</a>
              <div className="sub">Noida · India · IST (UTC+5:30)</div>
            </div>
            <div className="pit-ccard pit-reveal" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="lbl">{'// Pit Crew'}</div>
              <div className="pit-socials">
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>
                <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer"><LeetCodeIcon /> LeetCode</a>
                <a href={`mailto:${SOCIALS.email}`}><MailIcon /> Mail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
