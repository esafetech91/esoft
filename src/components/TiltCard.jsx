import { useRef } from 'react'
import { useTilt } from '../hooks/useTilt'

function TiltCard({
  children,
  className = '',
  intensity = 10,
  float = false,
  floatSpeed = 'normal',
}) {
  const ref = useRef(null)
  useTilt(ref, intensity)

  const classes = [
    'tilt-card',
    float && 'tilt-card--float',
    float && `tilt-card--float-${floatSpeed}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes}>
      <div className="tilt-card__shine" aria-hidden="true" />
      <div className="tilt-card__inner">{children}</div>
    </div>
  )
}

export default TiltCard
