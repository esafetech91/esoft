import { Link } from 'react-router-dom'
import TiltCard from '../components/TiltCard'
import Float3D from '../components/Float3D'
import Reveal from '../components/Reveal'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const services = [
  {
    id: 'product-software',
    title: 'Product Software',
    description:
      'Web and mobile products, typed APIs and cloud backends. We ship in short loops with previews you can click on day one.',
    image: '/images/object-engineering.jpg',
    alt: 'Product software illustration',
    bullets: [
      'React & TypeScript apps',
      'API & backend design',
      'Cloud infrastructure & CI/CD',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'LLM integrations, custom models and intelligent product features — designed for reliability, privacy and measurable outcomes.',
    image: '/images/object-data.jpg',
    alt: 'AI and machine learning illustration',
    bullets: [
      'LLM & agent integrations',
      'Custom ML pipelines',
      'Evaluation & monitoring',
    ],
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud & Platforms',
    description:
      'Cloud infrastructure, data pipelines and platform engineering with secure defaults and production-ready operations.',
    image: '/images/object-crypto.jpg',
    alt: 'Cloud and platforms illustration',
    bullets: [
      'AWS / GCP / Azure',
      'Data pipelines & APIs',
      'Observability & DevOps',
    ],
  },
  {
    id: 'security',
    title: 'Security & Reliability',
    description:
      'Application security, access control and operational hardening so your systems stay safe under real production load.',
    image: '/images/object-security.jpg',
    alt: 'Security and reliability illustration',
    bullets: [
      'Auth & access control',
      'Security reviews',
      'Production monitoring',
    ],
  },
]

const engagementModels = [
  {
    number: '01',
    title: 'Project build',
    description:
      'A defined scope with a fixed milestone plan — from architecture through production launch.',
  },
  {
    number: '02',
    title: 'Embedded team',
    description:
      'Senior engineers working inside your sprints, in your repo, on your roadmap.',
  },
  {
    number: '03',
    title: 'Review & rescue',
    description:
      'Architecture review, security hardening or taking over a codebase that stalled.',
  },
]

function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <Reveal className="services-page__header" direction="up">
          <h1 className="services-page__title text-3d">
            Services built for{' '}
            <span className="text-gradient text-gradient-3d">real products.</span>
          </h1>
          <p className="services-page__subtitle">
            Four practices, one standard of care. Every engagement ships with
            tests, documentation and a security story you can rely on.
          </p>
        </Reveal>

        <section className="services-grid" aria-label="Our services">
          <div className="services-grid__inner">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 80} direction="up">
                <TiltCard className="service-card card-3d" intensity={8}>
                  <div className="service-card__image-wrap">
                    <Float3D
                      src={service.image}
                      alt={service.alt}
                      speed={index % 2 === 0 ? 'slow' : 'normal'}
                      delay={index * 150}
                    />
                  </div>
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__description">{service.description}</p>
                  <ul className="service-card__list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="services-engagement" aria-label="How we work together">
          <Reveal>
            <h2 className="services-engagement__heading heading-3d">
              How we work together
            </h2>
          </Reveal>
          <div className="services-engagement__grid">
            {engagementModels.map((item, index) => (
              <Reveal key={item.number} delay={index * 100} direction="up">
                <TiltCard className="engagement-card card-3d" intensity={6}>
                  <span className="engagement-card__number">{item.number}</span>
                  <h3 className="engagement-card__title">{item.title}</h3>
                  <p className="engagement-card__description">{item.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="services-cta">
          <Reveal direction="scale">
            <TiltCard className="services-cta__card card-3d" intensity={8}>
              <div className="services-cta__content">
                <h2 className="services-cta__title heading-3d">
                  Not sure which one you need?
                </h2>
                <p className="services-cta__text">
                  Send us the problem and we&apos;ll tell you the shortest safe
                  path to it.
                </p>
              </div>
              <Link to="/contact" className="btn btn--primary services-cta__btn">
                Talk architecture
                <ArrowIcon />
              </Link>
            </TiltCard>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default Services
