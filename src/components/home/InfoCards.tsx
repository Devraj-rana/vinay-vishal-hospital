"use client"
import React, { useState, useEffect, useRef } from 'react'

const cards = [
  {
    title: 'Patient Care Services',
    description: 'Comprehensive patient information, admission procedures, and visitor guidelines for optimal healthcare experience',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700',
    linkColor: 'group-hover:text-blue-600',
    hoverShadow: 'hover:shadow-blue-200/50',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mb-3 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2-5H7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M5 7h14l-1 10a1 1 0 01-1 1H7a1 1 0 01-1-1L5 7z" />
      </svg>
    ),
  },
  {
    title: 'Find Specialist Doctors',
    description: 'Connect with our experienced medical professionals and specialists across various healthcare departments',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-200',
    titleColor: 'text-emerald-800',
    textColor: 'text-emerald-700',
    linkColor: 'group-hover:text-emerald-600',
    hoverShadow: 'hover:shadow-emerald-200/50',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mb-3 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Hospital Locations',
    description: 'Find our healthcare facilities, departments, and specialized units with detailed location information',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    borderColor: 'border-purple-200',
    titleColor: 'text-purple-800',
    textColor: 'text-purple-700',
    linkColor: 'group-hover:text-purple-600',
    hoverShadow: 'hover:shadow-purple-200/50',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mb-3 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Contact & Support',
    description: 'Get in touch with our healthcare team for appointments, emergencies, and medical consultations',
    bgColor: 'bg-gradient-to-br from-rose-50 to-rose-100',
    borderColor: 'border-rose-200',
    titleColor: 'text-rose-800',
    textColor: 'text-rose-700',
    linkColor: 'group-hover:text-rose-600',
    hoverShadow: 'hover:shadow-rose-200/50',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mb-3 text-rose-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

const InfoCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [animationKey, setAnimationKey] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey(prev => prev + 1)
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  if (!prev.includes(index)) {
                    return [...prev, index]
                  }
                  return prev
                })
              }, index * 150)
            })
          } else {
            setVisibleCards([])
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold">Healthcare Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Quick Access to
            <span className="text-blue-600 block mt-2">Essential Services</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Navigate through our comprehensive healthcare services designed to provide you with easy access to quality medical care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {cards.map(({ title, description, bgColor, borderColor, titleColor, textColor, linkColor, hoverShadow, icon }, index) => (
            <div
              key={`${animationKey}-${index}`}
              className={`${bgColor} ${borderColor} rounded-2xl p-6 sm:p-8 lg:p-6 border-2 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 ${hoverShadow} hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm
                ${visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
                }`}
              style={{
                transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transitionDelay: visibleCards.includes(index) ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Professional card header with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced animations */}
              <div className={`transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10 ${visibleCards.includes(index) ? 'scale-100 rotate-0' : 'scale-75 -rotate-12'}`}>
                {icon}
              </div>
              
              {/* Title with professional styling */}
              <h3 className={`font-bold text-lg sm:text-xl mb-3 transition-all duration-700 ${titleColor} relative z-10 ${visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                {title}
              </h3>
              
              {/* Description with enhanced readability */}
              <p className={`text-sm sm:text-base mb-6 transition-all duration-800 ${textColor} leading-relaxed relative z-10 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {description}
              </p>
              
              {/* Enhanced CTA button */}
              <button 
                className={`text-sm sm:text-base flex items-center space-x-2 font-semibold transition-all duration-500 ${linkColor} hover:font-bold relative z-10 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 ${visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                onClick={(e) => e.preventDefault()}
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default InfoCards