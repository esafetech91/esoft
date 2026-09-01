import TiltCard from './TiltCard'
import Reveal from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Architect',
    description:
      'Requirements, system design, and technical specifications — scoped before a single line of code is written.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Clean, typed code with full unit and integration test coverage. Every module ships with documentation.',
  },
  {
    number: '03',
    title: 'Secure & Ship',
    description:
      'Security review, quality checks, and production deployment with monitoring and incident runbooks.',
  },
]

function ProcessSteps() {
  return (
    <section className="process" id="methodology">
      <div className="container">
        <div className="process__grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120} direction="up">
              <TiltCard className="process-card card-3d" intensity={6}>
                <span className="process-card__number">{step.number}</span>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__description">{step.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
