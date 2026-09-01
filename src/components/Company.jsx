import TiltCard from './TiltCard'
import Reveal from './Reveal'

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 10h16M10 2c2.5 2.5 4 5 4 8s-1.5 5.5-4 8M10 2C7.5 4.5 6 7 6 10s1.5 5.5 4 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const highlights = [
  {
    icon: GlobeIcon,
    text: 'Multi-jurisdiction legal & compliance team',
  },
  {
    icon: LockIcon,
    text: 'Robust compliance & regulatory protocols',
  },
  {
    icon: ShieldIcon,
    text: 'Tested, production-ready code for every project',
  },
]

function Company() {
  return (
    <section className="company" id="company">
      <div className="container">
        <Reveal direction="scale">
          <TiltCard className="company__card card-3d" intensity={8}>
            <div className="company__content">
              <h2 className="company__title heading-3d">The company</h2>
              <p className="company__text">
                ESoft Technologies was incorporated in Illinois in 2023. We build
                software and AI systems for teams that need their work to
                survive real users, real scale, and real production demands.
              </p>
              <p className="company__text">
                Our engineers have shipped production systems across web,
                mobile, and cloud — from product platforms and APIs to AI-powered
                features and data infrastructure. We bring the same standard of
                care to every engagement.
              </p>
            </div>
            <ul className="company__highlights">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="company__highlight">
                  <span className="company__highlight-icon">
                    <Icon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default Company
