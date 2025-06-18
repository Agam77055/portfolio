"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setIsSidebarOpen(false) // Close sidebar after clicking
    }
  }

  // Detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'achievements', 'projects', 'contact']
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
    <>
      {/* Mobile Hamburger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 text-white/70 hover:text-white bg-white/5 backdrop-blur-lg border border-white/10 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 z-50 md:hidden"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-4 py-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-300 rounded-xl ${
                        isActive 
                          ? 'text-white bg-white/10' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 