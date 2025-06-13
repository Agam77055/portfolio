'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin)
}

interface GSAPTextProps {
  text: string
  className?: string
  animationType?: 'typewriter' | 'reveal' | 'split' | 'wave' | 'glitch' | 'morphing' | 'elastic' | 'split-reveal' | 'neon' | 'floating' | 'rainbow' | 'particle' | 'matrix'
  duration?: number
  delay?: number
  stagger?: number
}

export const GSAPText = ({ 
  text, 
  className = "",
  animationType = 'reveal',
  duration = 2,
  delay = 0,
  stagger = 0.1
}: GSAPTextProps) => {
  const textRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Clear any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const element = textRef.current
    
    // Create new timeline
    timelineRef.current = gsap.timeline({ delay })

    switch (animationType) {
      case 'typewriter':
        // Typewriter effect
        element.textContent = ''
        timelineRef.current.to(element, {
          duration,
          text: text,
          ease: "none"
        })
        break

      case 'reveal':
        // Letter-by-letter reveal with enhanced animations
        const letters = text.split('').map((char, i) => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="letter-${i} inline-block">${char}</span>`
        ).join('')
        
        element.innerHTML = letters
        const spans = element.querySelectorAll('span')
        
        // Set initial state with more properties
        gsap.set(spans, { 
          y: 50, 
          opacity: 0,
          rotation: 15,
          scale: 0.5,
          transformOrigin: "center center"
        })
        
        // Create a more dynamic animation
        timelineRef.current.to(spans, {
          duration: duration / spans.length,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          stagger: {
            amount: 0.5,
            from: "random",
            grid: "auto",
            axis: "x"
          },
          ease: "elastic.out(1, 0.3)"
        })
        break

      case 'split':
        // Split and slide in from sides
        const words = text.split(' ')
        const wordSpans = words.map(word => `<span class="inline-block mr-4">${word}</span>`).join('')
        
        element.innerHTML = wordSpans
        const wordElements = element.querySelectorAll('span')
        
        gsap.set(wordElements, { x: (i) => i % 2 === 0 ? -200 : 200, opacity: 0 })
        timelineRef.current.to(wordElements, {
          duration: duration / wordElements.length,
          x: 0,
          opacity: 1,
          stagger,
          ease: "power3.out"
        })
        break

      case 'wave':
        // Wave animation
        const waveLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block">${char}</span>`
        ).join('')
        
        element.innerHTML = waveLetters
        const waveSpans = element.querySelectorAll('span')
        
        gsap.set(waveSpans, { y: 0 })
        timelineRef.current.to(waveSpans, {
          duration: 0.6,
          y: -30,
          stagger: 0.1,
          ease: "power2.out",
          yoyo: true,
          repeat: 1
        })
        break

      case 'glitch':
        // Glitch effect
        element.textContent = text
        timelineRef.current
          .set(element, { opacity: 0 })
          .to(element, { duration: 0.1, opacity: 1, x: -5, skewX: 10 })
          .to(element, { duration: 0.1, x: 5, skewX: -10 })
          .to(element, { duration: 0.1, x: -2, skewX: 5 })
          .to(element, { duration: 0.1, x: 2, skewX: -5 })
          .to(element, { duration: 0.2, x: 0, skewX: 0 })
          .to(element, { duration: 0.1, opacity: 0.8 })
          .to(element, { duration: 0.1, opacity: 1 })
        break

      case 'morphing':
        // Text morphing effect (placeholder text first)
        const placeholderText = text.split('').map(() => '█').join('')
        element.textContent = placeholderText
        
        timelineRef.current
          .to(element, { duration: 0.5, scale: 1.1, ease: "power2.out" })
          .to(element, { 
            duration: 1, 
            text: text, 
            ease: "none",
            onUpdate: function() {
              // Add some random character flickering during morph
              if (Math.random() > 0.8) {
                const currentText = element.textContent || ''
                const randomIndex = Math.floor(Math.random() * currentText.length)
                const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
                const randomChar = chars[Math.floor(Math.random() * chars.length)]
                element.textContent = currentText.substring(0, randomIndex) + randomChar + currentText.substring(randomIndex + 1)
                
                setTimeout(() => {
                  element.textContent = text
                }, 50)
              }
            }
          })
          .to(element, { duration: 0.3, scale: 1, ease: "back.out(1.7)" })
        break

      case 'elastic':
        // Elastic bounce effect
        const elasticLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block">${char}</span>`
        ).join('')
        
        element.innerHTML = elasticLetters
        const elasticSpans = element.querySelectorAll('span')
        
        gsap.set(elasticSpans, { scale: 0, rotation: 180 })
        timelineRef.current.to(elasticSpans, {
          duration: 0.8,
          scale: 1,
          rotation: 0,
          stagger: 0.05,
          ease: "elastic.out(1, 0.3)"
        })
        break

      case 'split-reveal':
        // Split reveal from bottom and middle
        const splitLetters = text.split('').map((char, i) => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="letter-${i} inline-block">${char}</span>`
        ).join('')
        
        element.innerHTML = splitLetters
        const splitSpans = element.querySelectorAll('span')
        
        // Set initial state with different starting positions
        gsap.set(splitSpans, { 
          y: (i) => i % 2 === 0 ? 100 : 50, // Alternate between bottom and middle
          opacity: 0,
          rotation: (i) => i % 2 === 0 ? 15 : -15, // Alternate rotation
          scale: 0.5,
          transformOrigin: "center center"
        })
        
        // Create a more dynamic animation
        timelineRef.current.to(splitSpans, {
          duration: duration / splitSpans.length,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          stagger: {
            amount: 0.5,
            from: "center", // Start from center and expand outward
            grid: "auto",
            axis: "x"
          },
          ease: "elastic.out(1, 0.3)"
        })
        break

      case 'neon':
        // Neon glow effect with flicker
        const neonLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block relative">
            <span class="absolute inset-0 blur-sm text-blue-400">${char}</span>
            <span class="relative text-white">${char}</span>
          </span>`
        ).join('')
        
        element.innerHTML = neonLetters
        const neonSpans = element.querySelectorAll('span')
        
        gsap.set(neonSpans, { opacity: 0 })
        timelineRef.current
          .to(neonSpans, {
            duration: 0.5,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
          })
          .to(neonSpans, {
            duration: 0.2,
            opacity: 0.8,
            stagger: {
              amount: 0.5,
              from: "random"
            },
            repeat: -1,
            yoyo: true
          })
        break

      case 'floating':
        // Floating letters with 3D rotation
        const floatingLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block perspective-1000">${char}</span>`
        ).join('')
        
        element.innerHTML = floatingLetters
        const floatSpans = element.querySelectorAll('span')
        
        gsap.set(floatSpans, { 
          opacity: 0,
          rotationX: 90,
          transformOrigin: "50% 50% -50"
        })
        
        timelineRef.current
          .to(floatSpans, {
            duration: 1,
            opacity: 1,
            rotationX: 0,
            stagger: 0.1,
            ease: "back.out(1.7)"
          })
          .to(floatSpans, {
            duration: 2,
            y: -20,
            rotation: 5,
            stagger: {
              amount: 1,
              from: "random"
            },
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          })
        break

      case 'rainbow':
        // Rainbow color cycling effect
        const rainbowLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block">${char}</span>`
        ).join('')
        
        element.innerHTML = rainbowLetters
        const rainbowSpans = element.querySelectorAll('span')
        
        gsap.set(rainbowSpans, { opacity: 0 })
        timelineRef.current
          .to(rainbowSpans, {
            duration: 0.5,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
          })
          .to(rainbowSpans, {
            duration: 2,
            color: (i) => `hsl(${i * 30}, 100%, 50%)`,
            stagger: {
              amount: 1,
              from: "start"
            },
            repeat: -1,
            ease: "none"
          })
        break

      case 'particle':
        // Particle explosion effect
        const particleLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block relative">
            <span class="absolute inset-0 opacity-0">${char}</span>
            <span class="relative">${char}</span>
          </span>`
        ).join('')
        
        element.innerHTML = particleLetters
        const particleSpans = element.querySelectorAll('span')
        
        gsap.set(particleSpans, { 
          opacity: 0,
          scale: 0,
          rotation: 360
        })
        
        timelineRef.current.to(particleSpans, {
          duration: 1,
          opacity: 1,
          scale: 1,
          rotation: 0,
          stagger: {
            amount: 0.5,
            from: "center",
            grid: "auto",
            axis: "x"
          },
          ease: "elastic.out(1, 0.3)"
        })
        break

      case 'matrix':
        // Matrix-style digital rain effect
        const matrixLetters = text.split('').map(char => 
          char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
          `<span class="inline-block relative">
            <span class="absolute inset-0 opacity-0 matrix-char">${char}</span>
            <span class="relative">${char}</span>
          </span>`
        ).join('')
        
        element.innerHTML = matrixLetters
        const matrixSpans = element.querySelectorAll('span')
        const matrixChars = element.querySelectorAll('.matrix-char')
        
        // Generate random matrix characters
        const matrixCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        matrixChars.forEach(char => {
          char.textContent = matrixCharSet[Math.floor(Math.random() * matrixCharSet.length)]
        })
        
        gsap.set(matrixSpans, { opacity: 0 })
        gsap.set(matrixChars, { opacity: 0 })
        
        timelineRef.current
          .to(matrixChars, {
            duration: 0.2,
            opacity: 1,
            stagger: 0.1,
            onComplete: () => {
              matrixChars.forEach(char => {
                char.textContent = matrixCharSet[Math.floor(Math.random() * matrixCharSet.length)]
              })
            },
            repeat: 3
          })
          .to(matrixSpans, {
            duration: 0.5,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out"
          })
        break

      default:
        element.textContent = text
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [text, animationType, duration, delay, stagger])

  return (
    <div 
      ref={textRef} 
      className={`font-poppins font-bold text-white ${className}`}
    />
  )
}

// Preset components for common use cases
export const TypewriterText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="typewriter" />
)

export const RevealText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="reveal" />
)

export const SplitText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="split" />
)

export const WaveText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="wave" />
)

export const GlitchText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="glitch" />
)

export const MorphingText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="morphing" />
)

export const ElasticText = (props: Omit<GSAPTextProps, 'animationType'>) => (
  <GSAPText {...props} animationType="elastic" />
)

// Advanced component with multiple animation sequences
export const GSAPTextSequence = ({ 
  texts, 
  className = "",
  duration = 2,
  pauseBetween = 1,
  pauseVisible = 3
}: {
  texts: string[]
  className?: string
  duration?: number
  pauseBetween?: number // Pause when no text is visible (transition)
  pauseVisible?: number // Pause when text is fully visible (reading time)
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!containerRef.current || texts.length === 0) return

    // Clear existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const container = containerRef.current
    const timeline = gsap.timeline({ repeat: -1 })
    timelineRef.current = timeline

    // Calculate total cycle time for each text
    const animateInDuration = duration 
    const animateOutDuration = duration
    const totalCycleTime = animateInDuration + pauseVisible + animateOutDuration + pauseBetween

    texts.forEach((text, index) => {
      // Create a div for each text
      const textDiv = document.createElement('div')
      textDiv.className = 'absolute inset-0 flex items-center justify-center'
      textDiv.innerHTML = text.split('').map(char => 
        char === ' ' ? '<span class="inline-block">&nbsp;</span>' : 
        `<span class="inline-block">${char}</span>`
      ).join('')
      
      container.appendChild(textDiv)
      const spans = textDiv.querySelectorAll('span')

      // Set initial state
      gsap.set(spans, { y: 50, opacity: 0 })
      gsap.set(textDiv, { opacity: 0 })

      const startTime = index * totalCycleTime

      // Add to timeline with proper timing
      timeline
        // Show container
        .set(textDiv, { opacity: 1 }, startTime)
        // Animate letters in
        .to(spans, {
          duration: animateInDuration,
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }, startTime)
        // Pause while visible (reading time)
        // Animate letters out
        .to(spans, {
          duration: animateOutDuration,
          y: -50,
          opacity: 0,
          stagger: 0.03,
          ease: "back.in(1.7)"
        }, startTime + animateInDuration + pauseVisible)
        // Hide container
        .set(textDiv, { opacity: 0 }, startTime + animateInDuration + pauseVisible + animateOutDuration)
        // Pause between texts (transition time)
    })

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      // Clean up created elements
      container.innerHTML = ''
    }
  }, [texts, duration, pauseBetween, pauseVisible])

  return (
    <div 
      ref={containerRef} 
      className={`relative font-poppins font-bold text-white ${className}`}
      style={{ minHeight: '1.2em' }}
    />
  )
} 