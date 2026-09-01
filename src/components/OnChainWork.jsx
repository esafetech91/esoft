import { Link } from 'react-router-dom'
import TiltCard from './TiltCard'
import Float3D from './Float3D'
import Reveal from './Reveal'

function OnChainWork() {
  return (
    <section className="onchain" id="products">
      <div className="container">
        <Reveal direction="scale">
          <TiltCard className="onchain__card card-3d" intensity={10}>
            <div className="onchain__visual">
              <Float3D
                src="/images/object-engineering.jpg"
                alt="Software and AI delivery illustration"
                className="onchain__float"
                speed="normal"
              />
            </div>
            <div className="onchain__content">
              <h2 className="onchain__title heading-3d">
                Software craft, AI discipline.
              </h2>
              <p className="onchain__text">
                Web products, cloud platforms, and AI-powered systems — designed
                with the same rigor whether we are shipping a feature or training
                a model.
              </p>
              <Link to="/company" className="btn btn--primary">
                Read our case studies
              </Link>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}

export default OnChainWork
