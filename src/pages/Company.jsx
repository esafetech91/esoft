import { Link } from 'react-router-dom'
import TiltCard from '../components/TiltCard'
import Float3D from '../components/Float3D'
import Reveal from '../components/Reveal'

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7h1M8 10h1M8 13h1M11 7h1M11 10h1M11 13h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 7.5v3M8.2 13.5L6.8 12.5M11.8 13.5l1.4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const principles = [
  {
    title: 'Assume the attacker read the code',
    description:
      'Threat models come before features. If a design only works when nobody is adversarial, it isn\'t a design.',
  },
  {
    title: 'Senior hands, no hand-offs',
    description:
      'The engineers who scope your project are the ones who build it. Nothing gets tossed to someone who never met the problem.',
  },
  {
    title: 'Ship something clickable early',
    description:
      'Staging deployments and previews from week one, so decisions are made against reality instead of slides.',
  },
]

const companyMeta = [
  {
    icon: BuildingIcon,
    label: 'Entity',
    value: 'ESoft Technologies Inc. — Domestic corporation, Illinois',
  },
  {
    icon: NetworkIcon,
    label: 'Focus',
    value: 'Software engineering & AI',
  },
  {
    icon: PinIcon,
    label: 'Location',
    value: '107 E Springfield Ave, Champaign, IL 61820',
  },
]

function CompanyPage() {
  return (
    <div className="company-page">
      <div className="container">
        <section className="company-hero">
          <Reveal className="company-hero__content" direction="left">
            <h1 className="company-hero__title text-3d">
              A small team with{' '}
              <span className="text-gradient text-gradient-3d">long memory.</span>
            </h1>
            <p className="company-hero__text">
              ESoft Technologies is an Illinois corporation founded on April 3,
              2023 and operating out of Champaign. We work with product teams
              and founders who need software and AI work delivered carefully
              the first time.
            </p>
            <p className="company-hero__text">
              We stay deliberately small so that every project has senior
              engineers on it from architecture through production.
            </p>
          </Reveal>

          <Reveal className="company-hero__visual" direction="right" delay={120}>
            <TiltCard className="company-hero__image-card card-3d" intensity={14} float floatSpeed="slow">
              <Float3D
                src="/images/hero-3d.jpg"
                alt="Software and AI infrastructure illustration"
                className="company-hero__float"
                speed="slow"
              />
            </TiltCard>
          </Reveal>
        </section>

        <section className="company-principles" aria-label="Our principles">
          <div className="company-principles__grid">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 100} direction="up">
                <TiltCard className="company-principle card-3d" intensity={6}>
                  <h2 className="company-principle__title">{item.title}</h2>
                  <p className="company-principle__text">{item.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="company-details-section">
          <Reveal direction="scale">
            <TiltCard className="company-details card-3d" intensity={8}>
              <div className="company-details__content">
                <h2 className="company-details__title heading-3d">Company details</h2>
                <p className="company-details__text">
                  Registered and active in the State of Illinois, serving clients
                  across the United States and remote software teams worldwide.
                </p>
                <Link to="/contact" className="btn btn--primary">
                  Contact the team
                </Link>
              </div>
              <ul className="company-details__meta">
                {companyMeta.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="company-details__meta-item">
                    <span className="company-details__meta-icon">
                      <Icon />
                    </span>
                    <span className="company-details__meta-body">
                      <span className="company-details__meta-label">{label}</span>
                      <span className="company-details__meta-value">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default CompanyPage
