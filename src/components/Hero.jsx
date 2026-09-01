import { Link } from 'react-router-dom'
import TiltCard from './TiltCard'
import Float3D from './Float3D'
import Reveal from './Reveal'

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1L7.8 5.2L12 6L7.8 6.8L7 11L6.2 6.8L2 6L6.2 5.2L7 1Z"
        fill="url(#spark-gradient)"
      />
      <defs>
        <linearGradient id="spark-gradient" x1="2" y1="1" x2="12" y2="11">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

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

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <Reveal className="hero__content" direction="left">
          <span className="pill">
            <SparkIcon />
            Software &amp; AI · Champaign, IL
          </span>

          <h1 className="hero__title text-3d">
            Software and AI,{' '}
            <span className="text-gradient text-gradient-3d">built to be safe.</span>
          </h1>

          <p className="hero__subtitle">
            ESoft Technologies designs and ships modern software and AI
            systems — web products, cloud backends, and intelligent
            applications that hold up under real users and real production
            loads.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a project
              <ArrowIcon />
            </Link>
            <Link to="/products" className="btn btn--secondary">
              See what we build
            </Link>
          </div>
        </Reveal>

        <Reveal className="hero__visual" direction="right" delay={120}>
          <TiltCard className="hero__image-card card-3d" intensity={14} float floatSpeed="slow">
            <Float3D
              src="/images/hero-3d.jpg"
              alt="Secure software and AI infrastructure illustration"
              className="hero__float"
              speed="slow"
            />
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
