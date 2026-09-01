import TiltCard from '../components/TiltCard'
import Float3D from '../components/Float3D'
import Reveal from '../components/Reveal'

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 3h3l1.5 5-2.5 2c1.5 2.5 3.5 4.5 6.5 6L16 13l5 1.5V18c0 .5-.5 1-1 1C8 19 1 12 1 4c0-.5.5-1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
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

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4.5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BtnMailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BtnPhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L14 11l4 1.5V15c0 .5-.5 1-1 1C7.5 16 2 10.5 2 4c0-.5.5-1 1-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const contactDetails = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'tamer.ahmed@besafe-tech.com',
    href: 'mailto:tamer.ahmed@besafe-tech.com',
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+1 (979) 312-4180',
    href: 'tel:+19793124180',
  },
  {
    icon: PinIcon,
    label: 'Office',
    value: '107 E Springfield Ave, Champaign, IL 61820',
    href: 'https://maps.google.com/?q=107+E+Springfield+Ave,+Champaign,+IL+61820',
  },
  {
    icon: ClockIcon,
    label: 'Response time',
    value: 'Within two business days',
  },
]

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <Reveal className="contact-page__header" direction="up">
          <h1 className="contact-page__title text-3d">
            Tell us what you&apos;re{' '}
            <span className="text-gradient text-gradient-3d">building.</span>
          </h1>
          <p className="contact-page__subtitle">
            Send a short note about the product, the stack and the timeline — or
            just call. We answer every serious enquiry ourselves.
          </p>
        </Reveal>

        <div className="contact-page__grid">
          <Reveal direction="left" delay={100}>
            <TiltCard className="contact-info card-3d" intensity={8}>
              <ul className="contact-info__list">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <>
                      <span className="contact-info__icon">
                        <Icon />
                      </span>
                      <span className="contact-info__body">
                        <span className="contact-info__label">{item.label}</span>
                        <span className="contact-info__value">{item.value}</span>
                      </span>
                    </>
                  )

                  return (
                    <li key={item.label} className="contact-info__item">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="contact-info__link"
                          target={item.label === 'Office' ? '_blank' : undefined}
                          rel={item.label === 'Office' ? 'noopener noreferrer' : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="contact-info__link">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal direction="right" delay={160}>
            <TiltCard className="contact-project card-3d" intensity={10} float>
              <div className="contact-project__visual">
                <Float3D
                  src="/images/object-engineering.jpg"
                  alt="Start a project"
                  className="contact-project__coin"
                  speed="slow"
                />
              </div>
              <h2 className="contact-project__title heading-3d">Start a project</h2>
              <p className="contact-project__text">
                Include your stack, scope and rough timeline and we&apos;ll come
                back with an architecture sketch, not a sales deck.
              </p>
              <div className="contact-project__actions">
                <a
                  href="mailto:tamer.ahmed@besafe-tech.com"
                  className="btn btn--primary"
                >
                  <BtnMailIcon />
                  Email us
                </a>
                <a href="tel:+19793124180" className="btn btn--secondary">
                  <BtnPhoneIcon />
                  Call us
                </a>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Contact
