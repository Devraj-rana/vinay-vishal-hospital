"use client"
import React, { useState, useEffect, useRef } from 'react'

const cards = [
  {
    title: 'VISITOR INFORMATION',
    description: 'View all information of the visitors and follow all terms & conditions',
    bgColor: 'bg-blue-200',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-2 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6M5 6h14M5 18h14" />
      </svg>
    ),
  },
  {
    title: 'FIND A DOCTOR',
    description: 'View all information of the visitors and follow all terms & conditions',
    bgColor: 'bg-green-200',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-2 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: 'OUR LOCATIONS',
    description: 'View all information of the visitors and follow all terms & conditions',
    bgColor: 'bg-purple-200',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-2 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4 0-7-3-7-7 0-3.866 3-7 7-7s7 3.134 7 7c0 4-3 7-7 7z" />
      </svg>
    ),
  },
  {
    title: 'CONNECT WITH US',
    description: 'View all information of the visitors and follow all terms & conditions',
    bgColor: 'bg-red-200',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mb-2 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 3 3-2 4 4 5-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h6" />
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
        className="max-w-7xl mx-auto p-4 rounded-3xl flex flex-wrap justify-center gap-6 lg-custom-gap"
      >
        {cards.map(({ title, description, bgColor, icon }, index) => (
          <div
            key={`${animationKey}-${index}`}
            className={`${bgColor} rounded-xl p-6 w-full sm:w-64 border border-transparent hover:border-blue-500 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2
              ${visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }`}
            style={{
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: visibleCards.includes(index) ? `${index * 150}ms` : '0ms'
            }}
          >
            {/* Animated background overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon with animations */}
            <div className={`transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${visibleCards.includes(index) ? 'scale-100 rotate-0' : 'scale-75 -rotate-12'}`}>
              {icon}
            </div>
            
            {/* Title with animations */}
            <h3 className={`font-bold text-lg mb-2 transition-all duration-700 group-hover:text-gray-800 ${visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              {title}
            </h3>
            
            {/* Description with animations */}
            <p className={`text-sm mb-4 transition-all duration-800 group-hover:text-gray-700 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {description}
            </p>
            
            {/* Learn more link with enhanced hover animations */}
            <a 
              href="#" 
              className={`text-sm flex items-center space-x-1 hover:underline transition-all duration-500 group-hover:text-blue-600 group-hover:font-medium ${visibleCards.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              onClick={(e) => e.preventDefault()}
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">Learn more</span>
              <span aria-hidden="true" className="group-hover:translate-x-2 transition-transform duration-300 group-hover:scale-125">→</span>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .lg-custom-gap {
            gap: 4.25rem;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default InfoCards