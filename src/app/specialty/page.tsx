"use client";
import React, { useState, useEffect } from 'react';

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

const services = [
  {
    title: 'Anesthesiology',
    description: 'Advanced pain management and anesthesia services with state-of-the-art monitoring systems for safe surgical procedures.',
    icon: '💉',
    specialists: '2+ Specialists',
    features: ['Pain Management', 'Surgical Anesthesia', 'Critical Care', 'Emergency Support']
  },
  {
    title: 'Cardiology',
    description: 'Comprehensive heart care including diagnostics, interventional procedures, and cardiac rehabilitation programs.',
    icon: '❤️',
    specialists: '3+ Specialists',
    features: ['ECG & Echo', 'Cardiac Catheterization', 'Heart Surgery', 'Preventive Care']
  },
  {
    title: 'General Surgery',
    description: 'Expert surgical care using minimally invasive techniques and advanced laparoscopic procedures.',
    icon: '🔬',
    specialists: '4+ Specialists',
    features: ['Laparoscopic Surgery', 'Emergency Surgery', 'Trauma Care', 'Oncology Surgery']
  },
  {
    title: 'Gynecology & Obstetrics',
    description: 'Complete women\'s healthcare from pregnancy care to gynecological treatments and family planning.',
    icon: '👶',
    specialists: '3+ Specialists',
    features: ['Prenatal Care', 'Delivery Services', 'Gynecological Surgery', 'Family Planning']
  },
  {
    title: 'Nephrology',
    description: 'Specialized kidney care including dialysis services, transplant support, and chronic kidney disease management.',
    icon: '🫘',
    specialists: '2+ Specialists',
    features: ['Dialysis Center', 'Kidney Transplant', 'Chronic Care', 'Preventive Screening']
  },
  {
    title: 'Oral & Dental',
    description: 'Comprehensive dental care including oral surgery, orthodontics, and cosmetic dentistry services.',
    icon: '🦷',
    specialists: '2+ Specialists',
    features: ['Dental Surgery', 'Orthodontics', 'Cosmetic Dentistry', 'Preventive Care']
  },
  {
    title: 'Orthopedics',
    description: 'Advanced bone and joint care including joint replacement, sports medicine, and trauma management.',
    icon: '🦴',
    specialists: '3+ Specialists',
    features: ['Joint Replacement', 'Sports Medicine', 'Trauma Care', 'Physiotherapy']
  },
  {
    title: 'Pediatrics',
    description: 'Specialized healthcare for children from newborns to adolescents with child-friendly facilities.',
    icon: '👶',
    specialists: '2+ Specialists',
    features: ['Newborn Care', 'Vaccination', 'Child Development', 'Emergency Pediatrics']
  },
  {
    title: 'Physiotherapy',
    description: 'Rehabilitation services for injury recovery, pain management, and mobility improvement.',
    icon: '🏃',
    specialists: '2+ Specialists',
    features: ['Injury Recovery', 'Pain Management', 'Mobility Training', 'Sports Rehab']
  },
  {
    title: 'Pulmonology',
    description: 'Respiratory care including lung function tests, treatment of breathing disorders, and critical care.',
    icon: '🫁',
    specialists: '2+ Specialists',
    features: ['Lung Function Tests', 'Asthma Care', 'Sleep Studies', 'Critical Care']
  },
  {
    title: 'Gastroenterology',
    description: 'Digestive system care including endoscopy, liver treatments, and gastrointestinal surgery.',
    icon: '🔍',
    specialists: '2+ Specialists',
    features: ['Endoscopy', 'Liver Care', 'GI Surgery', 'Digestive Health']
  },
];

const Specialty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-24 lg:py-32">
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-bold">Medical Specialties</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              Expert Care in Every
              <span className="text-emerald-400 block mt-2">Department</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our specialized departments offer comprehensive healthcare services with expert doctors and advanced medical technology.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={services.length} suffix="+" duration={2000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Specialties</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={25} suffix="+" duration={2500} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Expert Doctors</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={25} suffix="+" duration={3000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Years Experience</div>
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
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Our Medical Departments</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-800 leading-tight">
              Comprehensive Healthcare
              <span className="text-blue-600 block">Services</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert medical teams provide specialized care across multiple departments with state-of-the-art facilities and compassionate service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Specialists Count */}
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    {service.specialists}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Need Emergency Care?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Our 24/7 emergency department is always ready to provide immediate medical attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+911234567890"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>Emergency: +91 123 456 7890</span>
                </a>
                <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialty;
