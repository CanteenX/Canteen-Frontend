import { HeroContent } from './hero-content'
import { HeroAnimation } from './hero-animation'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-[0.15] z-0"></div>
      <div className="bg-glow top-20 left-1/4"></div>
      <div className="bg-glow bottom-20 right-1/4" style={{ animationDelay: "-2s" }}></div>
      
      <HeroAnimation>
        <HeroContent />
      </HeroAnimation>
    </section>
  )
} 