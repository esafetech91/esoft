import TiltCard from './TiltCard'
import Float3D from './Float3D'
import Reveal from './Reveal'

const practices = [
  {
    id: 'product-software',
    title: 'Product Software',
    description:
      'Web and mobile products, APIs and cloud backends — shipped fast, typed end to end and built to scale.',
    image: '/images/object-engineering.jpg',
    alt: 'Product engineering illustration',
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description:
      'LLM integrations, custom models, and intelligent features — designed for reliability, privacy and measurable outcomes.',
    image: '/images/object-data.jpg',
    alt: 'AI and machine learning illustration',
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud & Platforms',
    description:
      'Cloud infrastructure, data pipelines and platform engineering — secure by default and ready for production.',
    image: '/images/object-security.jpg',
    alt: 'Cloud and platforms illustration',
  },
]

const tags = [
  'React & TypeScript',
  'Python & Node.js',
  'LLM integrations',
  'ML pipelines',
  'AWS / GCP / Azure',
  'Cloud infrastructure',
  'API design',
  'CI / CD',
]

function Practices() {
  return (
    <section className="practices" id="services">
      <div className="container">
        <Reveal>
          <h2 className="practices__heading heading-3d">
            Three practices, one standard of care.
          </h2>
        </Reveal>

        <div className="practices__grid">
          {practices.map((practice, index) => (
            <Reveal key={practice.id} delay={index * 120} direction="up">
              <TiltCard
                className="practice-card card-3d"
                intensity={8}
              >
                <div className="practice-card__image-wrap">
                  <Float3D
                    src={practice.image}
                    alt={practice.alt}
                    speed={index === 1 ? 'normal' : 'slow'}
                    delay={index * 200}
                  />
                </div>
                <h3 className="practice-card__title">{practice.title}</h3>
                <p className="practice-card__description">{practice.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="practices__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Practices
