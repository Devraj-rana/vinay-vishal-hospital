'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group
                 bg-blue-600 hover:bg-blue-700 
                 text-white p-3 sm:p-4 rounded-full shadow-lg
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110 hover:shadow-xl
                 touch-manipulation"
      aria-label="Back to top"
      style={{ minHeight: '56px', minWidth: '56px' }}
    >
      <ChevronUp 
        className="w-5 h-5 sm:w-6 sm:h-6 
                   transition-transform duration-200
                   group-hover:-translate-y-0.5" 
      />
      
      {/* Tooltip - Hidden on mobile */}
      <span className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                       bg-gray-800 text-white text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       whitespace-nowrap pointer-events-none">
        Back to Top
      </span>
      
      {/* Pulse animation for visibility */}
      <span className="absolute inset-0 rounded-full bg-blue-600 
                       animate-ping opacity-20"></span>
    </button>
  );
}
