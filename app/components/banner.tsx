'use client'

import React, { useEffect, useState } from 'react'

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
      <section id="aboutme" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
                transition: 'background-image 0.3s ease',
              }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <div className="mb-6">
          <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-mono">
            Full-Stack Developer & Game Dev
          </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hello! I&apos;m Alex
          </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            London-based BSc (Hons) Games Development student crafting elegant solutions across web,
            software, and interactive experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <a
                href="#software"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 font-medium"
            >
              View Projects
            </a>
            <a
                href="#contact"
                className="px-8 py-3 border border-slate-700 hover:border-slate-500 rounded-lg transition-all font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
  )
}