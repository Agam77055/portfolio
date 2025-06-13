"use client"

import { motion } from 'framer-motion'
import { ReactNode, useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSAPText } from './gsap-text-animations'

interface AnimatedElementProps {
  children: ReactNode
  className?: string
}

// Cycling typing animation for multiple texts
export const CyclingTypingAnimation = ({ 
  texts, 
  className = "",
  typingSpeed = 50,
  deletingSpeed = 50,
  pauseDuration = 2000
}: { 
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTypingActive, setIsTypingActive] = useState(true)

  useEffect(() => {
    const targetText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < targetText.length) {
          setIsTypingActive(true)
          setCurrentText(targetText.slice(0, currentText.length + 1))
        } else {
          // Finished typing, start pause before deleting
          setIsTypingActive(false)
          setTimeout(() => {
            setIsDeleting(true)
            setIsTypingActive(true)
          }, pauseDuration)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setIsTypingActive(true)
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setIsTypingActive(true)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={
          isTypingActive 
            ? { opacity: 1 }  // Solid line when typing/deleting
            : { opacity: [1, 0] }  // Blinking when paused
        }
        transition={
          isTypingActive 
            ? { duration: 0.8 }  // Instant solid line
            : { duration: 0.8, repeat: Infinity, repeatType: "reverse"}  // Instant blink every 0.5s
        }
        className="inline-block ml-1 font-light"
      >
        |
      </motion.span>
    </span>
  )
}

// Continuous rotation animation
export const RotatingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous floating animation
export const FloatingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{ y: [-20, 20, -20] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous pulsing animation
export const PulsingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous glowing animation
export const GlowingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 0 20px rgba(59, 130, 246, 0.5)",
          "0 0 40px rgba(59, 130, 246, 0.8)",
          "0 0 20px rgba(59, 130, 246, 0.5)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous typing animation effect
export const TypingAnimation = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      {text}
    </motion.div>
  )
}

// Continuous wave animation
export const WaveElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 15, -15, 0],
        transformOrigin: "70% 70%"
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous gradient background animation
export const AnimatedGradient = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={`${className} bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% 200%"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous particle-like movement
export const ParticleElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -30, 30, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous bounce animation
export const BouncingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous shake animation
export const ShakingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, -5, 5, -5, 5, 0],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous breath animation (subtle scale)
export const BreathingElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Continuous color shifting animation
export const ColorShiftElement = ({ children, className = "" }: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        color: [
          "rgb(239, 68, 68)",   // red
          "rgb(245, 158, 11)",  // orange
          "rgb(234, 179, 8)",   // yellow
          "rgb(34, 197, 94)",   // green
          "rgb(59, 130, 246)",  // blue
          "rgb(147, 51, 234)",  // purple
          "rgb(239, 68, 68)"    // back to red
        ]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  )
}

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const ScrollAnimatedName = () => {
  const nameRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!nameRef.current || !sectionRef.current) return

    // Create a timeline for the name animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        // markers: true, // Uncomment to see trigger points
      }
    })

    // Add animations to the timeline
    tl.fromTo(nameRef.current, 
      {
        scale: 0.8,
        opacity: 0.5,
        y: 100
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative flex place-items-center min-h-[80vh] w-full"
    >
      <div 
        ref={nameRef}
        className="relative z-10"
      >
        <GSAPText 
          text="Agam Harpreet Singh"
          className="text-7xl md:text-9xl mb-8"
          animationType="split-reveal"
          duration={2}
          delay={0.5}
          stagger={0.1}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-700/30 opacity-10 blur-2xl" />
    </section>
  )
} 