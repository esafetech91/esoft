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

const products = [
  {
    id: 'softvault',
    name: 'SoftVault',
    category: 'Security',
    description:
      'Secrets management and access tooling with role-scoped approvals, audit trails and environment hygiene.',
    image: '/images/object-security.jpg',
    alt: 'SoftVault security product illustration',
    status: 'Available',
    statusVariant: 'available',
  },
  {
    id: 'softflow',
    name: 'SoftFlow',
    category: 'Data',
    description:
      'Data pipelines, analytics dashboards and workflow automation with real-time visibility into your systems.',
    image: '/images/object-data.jpg',
    alt: 'SoftFlow data product illustration',
    status: 'Available',
    statusVariant: 'available',
  },
  {
    id: 'softmind',
    name: 'SoftMind',
    category: 'AI',
    description:
      'LLM integrations and AI feature kits for products — evaluation harnesses, guardrails and production monitoring included.',
    image: '/images/object-crypto.jpg',
    alt: 'SoftMind AI product illustration',
    status: 'Available',
    statusVariant: 'available',
  },
  {
    id: 'softwatch',
    name: 'SoftWatch',
    category: 'Monitoring',
    description:
      'Continuous application monitoring with anomaly alerts, performance checks and incident runbooks.',
    image: '/images/object-engineering.jpg',
    alt: 'SoftWatch monitoring product illustration',
    status: 'In beta',
    statusVariant: 'beta',
  },
]

function Products() {
  return (
    <div className="products-page">
      <div className="container">
        <Reveal className="products-page__header" direction="up">
          <h1 className="products-page__title text-3d">
            Tooling we built{' '}
            <span className="text-gradient text-gradient-3d">for ourselves.</span>
          </h1>
          <p className="products-page__subtitle">
            Every product started as internal infrastructure on a client
            project, then got hardened, tested and packaged so your team can run
            it too.
          </p>
        </Reveal>

        <section className="products-grid" aria-label="Our products">
          <div className="products-grid__inner">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 80} direction="up">
                <TiltCard className="product-card card-3d" intensity={8}>
                  <div className="product-card__image-wrap">
                    <Float3D
                      src={product.image}
                      alt={product.alt}
                      speed={index % 2 === 0 ? 'slow' : 'normal'}
                      delay={index * 150}
                    />
                  </div>
                  <div className="product-card__body">
                    <div className="product-card__meta">
                      <h2 className="product-card__name">{product.name}</h2>
                      <span className="product-card__category">{product.category}</span>
                    </div>
                    <p className="product-card__description">{product.description}</p>
                    <span
                      className={`product-card__status product-card__status--${product.statusVariant}`}
                    >
                      {product.status}
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="products-deploy">
          <Reveal direction="scale">
            <TiltCard className="products-deploy__card card-3d" intensity={10}>
              <div className="products-deploy__visual">
                <Float3D
                  src="/images/hero-3d.jpg"
                  alt="Private deployment infrastructure illustration"
                  className="products-deploy__image"
                  speed="slow"
                />
              </div>
              <div className="products-deploy__content">
                <h2 className="products-deploy__title heading-3d">
                  Want a private deployment?
                </h2>
                <p className="products-deploy__text">
                  Each product can run in your own cloud, with your keys and your
                  compliance rules.
                </p>
                <Link to="/contact" className="btn btn--primary products-deploy__btn">
                  Request a demo
                  <ArrowIcon />
                </Link>
              </div>
            </TiltCard>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default Products
