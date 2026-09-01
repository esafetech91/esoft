import TiltCard from './TiltCard'
import Float3D from './Float3D'
import Reveal from './Reveal'

const points = [
  'Secure authentication and access control',
  'Data privacy and encryption by default',
  'Secrets management and environment hygiene',
  'Operational security for production systems',
]

function Custody() {
  return (
    <section className="custody">
      <div className="container">
        <Reveal direction="scale">
          <TiltCard className="custody__card card-3d" intensity={10}>
            <div className="custody__content">
              <h2 className="custody__title heading-3d">
                Security and privacy, handled properly.
              </h2>
              <p className="custody__text">
                We treat security as a first-class engineering problem — not an
                afterthought. From access control to data protection, every
                path is documented, tested, and ready for production.
              </p>
              <ul className="custody__list">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="custody__visual">
              <Float3D
                src="/images/object-security.jpg"
                alt="Security and privacy illustration"
                className="custody__float"
                speed="slow"
                delay={300}
              />
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default Custody
