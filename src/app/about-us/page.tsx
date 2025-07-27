"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}-${suffix}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, suffix, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div 
      id={`counter-${end}-${suffix}`}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110"
      style={{
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        opacity: isVisible ? 1 : 0.5,
        textShadow: '0 0 20px rgba(52, 211, 153, 0.3)'
      }}
    >
      {count}{suffix}
    </div>
  );
};

const missionPoints = [
  'Advanced Medical Technology',
  'Compassionate Patient Care',
  'Expert Medical Professionals',
  '24/7 Emergency Services'
];

const visionPoints = [
  'Leading Healthcare Innovation',
  'Comprehensive Treatment Plans',
  'Patient-Centered Excellence',
  'Community Health Leadership'
];

const coreValues = [
  {
    icon: '🏥',
    title: 'Excellence',
    description: 'Delivering the highest standards of medical care with state-of-the-art technology and expert professionals.'
  },
  {
    icon: '💝',
    title: 'Compassion',
    description: 'Treating every patient with empathy, dignity, and genuine care throughout their healthcare journey.'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Maintaining transparency, honesty, and ethical practices in all our medical services and interactions.'
  },
  {
    icon: '🌟',
    title: 'Innovation',
    description: 'Continuously adopting cutting-edge medical technologies and treatments for better patient outcomes.'
  }
];

const milestones = [
  {
    year: '2009',
    title: 'Hospital Founded',
    description: 'Dr. Vinay and Dr. Vishal established the hospital with a vision of accessible healthcare.'
  },
  {
    year: '2012',
    title: 'Emergency Wing',
    description: 'Launched 24/7 emergency services with advanced life support systems.'
  },
  {
    year: '2015',
    title: 'Specialty Centers',
    description: 'Expanded to include specialized departments for cardiology, orthopedics, and pediatrics.'
  },
  {
    year: '2018',
    title: 'Digital Healthcare',
    description: 'Implemented electronic health records and telemedicine services.'
  },
  {
    year: '2023',
    title: '10,000+ Patients',
    description: 'Achieved milestone of serving over 10,000 satisfied patients with excellence.'
  }
];

const AboutUs = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24 lg:py-32"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-emerald-500/90 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-bold">15+ Years of Healthcare Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              About Vinay Vishal
              <span className="text-emerald-400 block mt-2">Hospital</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Pioneering healthcare excellence with compassionate care, advanced technology, and unwavering commitment to your well-being.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={15} suffix="+" duration={2000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={10} suffix="K+" duration={2500} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Happy Patients</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={25} suffix="+" duration={3000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Expert Doctors</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110 animate-pulse"
                     style={{ textShadow: '0 0 20px rgba(52, 211, 153, 0.3)' }}>
                    24/7
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        ref={missionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-20 sm:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Our Purpose & Vision</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-slate-800 leading-tight">
              Excellence in Healthcare
              <span className="text-blue-600 block mt-2">That You Can Trust</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Our Mission</h3>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To provide comprehensive, compassionate healthcare services that enhance the quality of life for our patients and their families through advanced medical technology, expert care, and unwavering commitment to excellence.
              </p>

              <ul className="space-y-4">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block bg-emerald-500 rounded-full p-2 flex-shrink-0 shadow-lg mr-4">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-l-4 border-emerald-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">Our Vision</h3>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To be the leading healthcare institution in our region, recognized for innovation, excellence in patient care, and our contribution to building healthier communities through accessible, world-class medical services.
              </p>

              <ul className="space-y-4">
                {visionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block bg-emerald-500 rounded-full p-2 flex-shrink-0 shadow-lg mr-4">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Our Core Values</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-slate-800 leading-tight text-center">
              Values That Drive
              <span className="text-blue-600 block mt-2">Everything We Do</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
              Our core values guide every decision we make and every service we provide, ensuring the highest standards of healthcare excellence.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>      {/* Timeline Section */}
      <motion.section
        ref={timelineRef}
        initial={{ opacity: 0, y: 50 }}
        animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="py-20 sm:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Our Journey</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-slate-800 leading-tight">
              15+ Years of
              <span className="text-blue-600 block mt-2">Healthcare Excellence</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From our humble beginnings to becoming a trusted healthcare institution, discover the milestones that have shaped our journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-emerald-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founders Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-500/90 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Meet Our Founders</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Visionary Leaders in
              <span className="text-emerald-400 block mt-2">Healthcare Excellence</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">VV</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Vinay & Dr. Vishal</h3>
                <p className="text-emerald-400 text-lg font-semibold">Founding Directors</p>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-center text-blue-100 leading-relaxed italic mb-8">
                &ldquo;Our commitment extends beyond treatment to building lasting relationships with our patients and their families, ensuring they receive not just medical care, but genuine support throughout their healthcare journey. We believe that every patient deserves compassionate, world-class healthcare delivered with dignity and respect.&rdquo;
              </blockquote>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group cursor-pointer">
                  <div className="relative">
                    <AnimatedCounter end={15} suffix="+" duration={2000} />
                    <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">Years Combined Experience</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative">
                    <AnimatedCounter end={10} suffix="K+" duration={2500} />
                    <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">Lives Touched</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="relative">
                    <AnimatedCounter end={100} suffix="%" duration={3000} />
                    <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">Dedicated to Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
