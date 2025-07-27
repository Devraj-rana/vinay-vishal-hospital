"use client";
import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const [countingNumbers, setCountingNumbers] = useState({
    patients: 0,
    doctors: 0,
    years: 0
  });
  const contentRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Counter animation function
  const animateCounter = (target: number, key: 'patients' | 'doctors' | 'years', duration: number = 2000) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smoother easing function for more fluid animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutCubic);
      
      setCountingNumbers(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset counters to 0 when coming into view
            setCountingNumbers({
              patients: 0,
              doctors: 0,
              years: 0
            });
            
            // Animate elements in sequence with longer delays
            const elements = ['title', 'subtitle', 'buttons', 'stats'];
            elements.forEach((element, index) => {
              setTimeout(() => {
                setVisibleElements(prev => {
                  if (!prev.includes(element)) {
                    // Start counting animations when stats become visible - synchronized timing
                    if (element === 'stats') {
                      setTimeout(() => animateCounter(5000, 'patients', 2200), 300);
                      setTimeout(() => animateCounter(25, 'doctors', 2200), 400);
                      setTimeout(() => animateCounter(15, 'years', 2200), 500);
                    }
                    return [...prev, element];
                  } else if (element === 'stats') {
                    // Re-trigger counter animations even if stats are already visible
                    setTimeout(() => animateCounter(5000, 'patients', 2200), 300);
                    setTimeout(() => animateCounter(25, 'doctors', 2200), 400);
                    setTimeout(() => animateCounter(15, 'years', 2200), 500);
                  }
                  return prev;
                });
              }, index * 600); // Increased delay from 200ms to 600ms
            });
          } else {
            // Reset animations when going out of view
            setVisibleElements([]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '100px'
      }
    );

    const currentContent = contentRef.current;
    if (currentContent) {
      observer.observe(currentContent);
    }

    return () => {
      if (currentContent) {
        observer.unobserve(currentContent);
      }
    };
  }, []);

  const getAnimationClass = (elementName: string) => {
    return visibleElements.includes(elementName) 
      ? 'opacity-100 translate-y-0 scale-100' 
      : 'opacity-0 translate-y-12 scale-95';
  };

  return (
    <>
      <motion.div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
          }}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          controls={false}
          preload="metadata"
          poster="/test1.jpg"
        >
          <source src="/HOspital trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Desktop Overlay - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent z-10">
          {/* Modern Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/50 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-20 border border-white/30"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-emerald-500/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">Certified Healthcare Excellence</span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Your Health, Our
                <span className="text-emerald-400 block">Priority</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed">
                Advanced medical care with compassion. 15+ years of trusted healthcare excellence serving our community.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="tel:+917078599991"
                  className="group bg-red-600 hover:bg-red-700 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center touch-manipulation"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="whitespace-nowrap">Emergency: Call Now</span>
                </a>
                
                <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center touch-manipulation">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="whitespace-nowrap">Book Appointment</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-blue-200">
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="whitespace-nowrap">24/7 Emergency Care</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="whitespace-nowrap">Expert Specialists</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="whitespace-nowrap">Modern Equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Hero Content - Below Video */}
      <div className="block md:hidden bg-gradient-to-b from-slate-900 to-slate-800 py-6 px-4">
        <div className="text-center text-white max-w-lg mx-auto">
          {/* Trust Badge - Mobile */}
          <div className="inline-flex items-center bg-emerald-500/90 px-3 py-2 rounded-full mb-4">
            <svg className="w-4 h-4 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">Vinay Vishal Hospital</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Your Health, Our
            <span className="text-emerald-400 block">Priority</span>
          </h1>
          
          <p className="text-sm sm:text-base mb-4 text-blue-100 leading-relaxed">
            Advanced medical care with compassion. 15+ years of trusted healthcare excellence serving our community.
          </p>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mb-4">
            <a
              href="tel:+917078599991"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center touch-manipulation"
            >
              <svg className="w-5 h-5 mr-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Emergency: Call Now</span>
            </a>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center touch-manipulation">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Trust Indicators - Mobile Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-blue-200">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-2 py-2 rounded-lg border border-white/20">
              <svg className="w-4 h-4 mr-1.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>24/7 Care</span>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-2 py-2 rounded-lg border border-white/20">
              <svg className="w-4 h-4 mr-1.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>15+ Years</span>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-2 py-2 rounded-lg border border-white/20">
              <svg className="w-4 h-4 mr-1.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Expert Doctors</span>
            </div>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-md px-2 py-2 rounded-lg border border-white/20">
              <svg className="w-4 h-4 mr-1.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Modern Tech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Below Video with Professional Medical Styling */}
      <div ref={contentRef} className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Trusted Healthcare Excellence Since 2009</span>
            </div>

            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-slate-800 transition-all duration-1200 ease-out ${getAnimationClass('title')}`}
            >
              Comprehensive Healthcare
              <span className="text-blue-600 block mt-2">You Can Trust</span>
            </h2>
            
            <p 
              className={`text-lg sm:text-xl md:text-2xl mb-12 text-slate-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1400 ease-out ${getAnimationClass('subtitle')}`}
            >
              Advanced medical technology combined with compassionate care to provide exceptional healthcare services for you and your family.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20 transition-all duration-1600 ease-out ${getAnimationClass('buttons')}`}
          >
            <a 
              href="tel:+917078599991" 
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 hover:shadow-2xl w-full sm:w-auto justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 z-10 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="z-10">Emergency: +91 70785 99991</span>
            </a>

            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 hover:shadow-2xl w-full sm:w-auto justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span className="z-10">Book Appointment</span>
            </button>

            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 hover:shadow-2xl w-full sm:w-auto justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span className="z-10">Online Consultation</span>
            </button>
          </div>

          {/* Enhanced Statistics with Medical Theme */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-6xl mx-auto transition-all duration-1800 ease-out ${getAnimationClass('stats')}`}
          >
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {countingNumbers.patients.toLocaleString()}+
              </div>
              <div className="text-slate-700 font-semibold text-lg">Happy Patients Served</div>
              <div className="text-slate-500 text-sm mt-1">Comprehensive care with excellence</div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border-l-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {countingNumbers.doctors}+
              </div>
              <div className="text-slate-700 font-semibold text-lg">Expert Specialists</div>
              <div className="text-slate-500 text-sm mt-1">Qualified & experienced professionals</div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border-l-4 border-amber-500 sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-amber-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {countingNumbers.years}+
              </div>
              <div className="text-slate-700 font-semibold text-lg">Years of Excellence</div>
              <div className="text-slate-500 text-sm mt-1">Trusted healthcare legacy</div>
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Why Choose Vinay Vishal Hospital?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">24/7 Emergency</h4>
                <p className="text-sm text-slate-600">Round-the-clock emergency care</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">Modern Equipment</h4>
                <p className="text-sm text-slate-600">Latest medical technology</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">Expert Doctors</h4>
                <p className="text-sm text-slate-600">Highly qualified specialists</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">Compassionate Care</h4>
                <p className="text-sm text-slate-600">Patient-centered approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
