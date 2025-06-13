"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

interface AnimatedPhotoProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedPhoto({ src, alt, className = '' }: AnimatedPhotoProps) {
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!photoRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={photoRef}
      className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
} 