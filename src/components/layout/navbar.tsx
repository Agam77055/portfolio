"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div 
        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-3 shadow-2xl"
        animate={{
          boxShadow: [
            "0 8px 32px rgba(255, 255, 255, 0.1)",
            "0 8px 32px rgba(255, 255, 255, 0.15)",
            "0 8px 32px rgba(255, 255, 255, 0.1)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '')
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative cursor-pointer px-2 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isActive 
                      ? 'text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>
                  
                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover underline for non-active items */}
                  {!isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/60 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
} 