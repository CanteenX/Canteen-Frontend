'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HeroAnimationProps {
  children: ReactNode
}

export function HeroAnimation({ children }: HeroAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contents" // This ensures the div doesn't affect layout
    >
      {children}
      <style jsx global>{`
        .animate-pulse-subtle {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .bg-glow {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </motion.div>
  )
} 