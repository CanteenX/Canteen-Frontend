'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      const isClickable = window.getComputedStyle(target).cursor === 'pointer'
      setIsPointer(isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        
        a, button, [role="button"], [type="button"], [type="submit"] {
          cursor: none !important;
        }
      `}</style>
      
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.8,
        }}
      />
    </>
  )
} 