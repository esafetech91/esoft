import { useEffect } from 'react'

export function useTilt(ref, intensity = 10) {
  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    const handleMove = (event) => {
      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      element.style.setProperty('--tilt-x', `${-y * intensity}deg`)
      element.style.setProperty('--tilt-y', `${x * intensity}deg`)
      element.style.setProperty('--tilt-lift', '8px')
    }

    const handleLeave = () => {
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
      element.style.setProperty('--tilt-lift', '0px')
    }

    element.addEventListener('mousemove', handleMove)
    element.addEventListener('mouseleave', handleLeave)

    return () => {
      element.removeEventListener('mousemove', handleMove)
      element.removeEventListener('mouseleave', handleLeave)
    }
  }, [ref, intensity])
}
