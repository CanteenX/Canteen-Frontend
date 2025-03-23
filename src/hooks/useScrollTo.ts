'use client'

export function useScrollTo() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - 80

    // Custom easing function for gentler movement
    const easing = (t: number) => {
      // Smoother easing function
      return t < 0.5 
        ? 2 * t * t 
        : -1 + (4 - 2 * t) * t
    }

    let start: null | number = null
    const duration = 1500 // Increased duration for gentler movement
    const startPosition = window.pageYOffset

    function animate(currentTime: number) {
      if (start === null) start = currentTime
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)

      window.scrollTo({
        top: startPosition + (offsetPosition - startPosition) * easing(progress),
        behavior: 'auto'
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return scrollTo
} 