import TiltCard from './TiltCard'
import Reveal from './Reveal'

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
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

function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <Reveal direction="scale">
          <TiltCard className="contact-cta__card card-3d" intensity={12} float>
            <div className="contact-cta__icon-wrap">
              <img
                src="/images/object-engineering.jpg"
                alt=""
                className="contact-cta__icon"
                aria-hidden="true"
                loading="lazy"
              />
              <span className="contact-cta__icon-shadow" />
            </div>
            <h2 className="contact-cta__title heading-3d">
              Tell us what you&apos;re building.
            </h2>
            <p className="contact-cta__text">
              Contact us now to talk about your project and see how we can help
              you achieve your goals.
            </p>
            <div className="contact-cta__actions">
              <a href="mailto:tamer.ahmed@besafe-tech.com" className="btn btn--primary contact-cta__btn">
                <MailIcon />
                tamer.ahmed@besafe-tech.com
              </a>
              <a href="tel:+19793124180" className="btn btn--secondary contact-cta__btn">
                <PhoneIcon />
                +1 (979) 312-4180
              </a>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default ContactCTA
