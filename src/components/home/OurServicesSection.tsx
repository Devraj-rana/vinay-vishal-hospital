"use client";
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const services = [
  { 
    title: 'Anesthesiology', 
    description: 'Advanced pain management and surgical anesthesia with state-of-the-art monitoring systems.',
    icon: '💉',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    textColor: 'text-blue-800',
    linkColor: 'text-blue-600'
  },
  { 
    title: 'Cardiology', 
    description: 'Comprehensive heart care with advanced cardiac procedures and preventive treatments.',
    icon: '❤️',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    textColor: 'text-red-800',
    linkColor: 'text-red-600'
  },
  { 
    title: 'General Surgery', 
    description: 'Expert surgical care using minimally invasive techniques and advanced surgical technologies.',
    icon: '🔬',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
    textColor: 'text-emerald-800',
    linkColor: 'text-emerald-600'
  },
  { 
    title: 'Gynecology & Obstetrics', 
    description: 'Complete women\'s healthcare from pregnancy care to gynecological treatments.',
    icon: '👶',
    bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100',
    textColor: 'text-pink-800',
    linkColor: 'text-pink-600'
  },
  { 
    title: 'Nephrology', 
    description: 'Specialized kidney care including dialysis and transplant consultation services.',
    icon: '🫘',
    bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
    textColor: 'text-teal-800',
    linkColor: 'text-teal-600'
  },
  { 
    title: 'Oral & Dental Care', 
    description: 'Complete dental healthcare with modern equipment and cosmetic dental procedures.',
    icon: '🦷',
    bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
    textColor: 'text-cyan-800',
    linkColor: 'text-cyan-600'
  },
  { 
    title: 'Orthopedics', 
    description: 'Advanced bone and joint care with sports medicine and rehabilitation services.',
    icon: '🦴',
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    textColor: 'text-orange-800',
    linkColor: 'text-orange-600'
  },
  { 
    title: 'Pediatrics', 
    description: 'Specialized healthcare for children from newborns to adolescents with family-centered care.',
    icon: '👶',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    textColor: 'text-yellow-800',
    linkColor: 'text-yellow-600'
  },
  { 
    title: 'Physiotherapy', 
    description: 'Rehabilitation and recovery services with modern equipment and personalized treatment plans.',
    icon: '🏃‍♂️',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    textColor: 'text-green-800',
    linkColor: 'text-green-600'
  },
  { 
    title: 'Pulmonology', 
    description: 'Respiratory care and lung disease treatment with advanced diagnostic capabilities.',
    icon: '🫁',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    textColor: 'text-indigo-800',
    linkColor: 'text-indigo-600'
  },
  { 
    title: 'Gastroenterology', 
    description: 'Digestive system care with endoscopic procedures and advanced treatment options.',
    icon: '🔍',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    textColor: 'text-purple-800',
    linkColor: 'text-purple-600'
  },
  { 
    title: 'Emergency Medicine', 
    description: '24/7 emergency care with rapid response team and advanced life support systems.',
    icon: '🚨',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    textColor: 'text-red-800',
    linkColor: 'text-red-600'
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OurServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // 👈 allow re-trigger

  return (
    <section ref={ref} className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Heading Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold">Medical Specialties</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-slate-800">
            Comprehensive Healthcare
            <span className="text-blue-600 block mt-2">Services & Specialties</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our expert medical teams provide world-class care across multiple specialties, 
            ensuring comprehensive healthcare solutions for all your medical needs.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map(({ title, description, icon, bgColor, textColor, linkColor }, index) => (
            <motion.div
              key={index}
              className={`${bgColor} rounded-2xl p-6 sm:p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/50 backdrop-blur-sm relative overflow-hidden group`}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 25px 40px -10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-lg sm:text-xl font-bold mb-3 ${textColor} leading-tight relative z-10 group-hover:text-opacity-90 transition-all duration-300`}>
                {title}
              </h3>
              
              {/* Description */}
              <p className={`text-sm sm:text-base mb-6 leading-relaxed relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300`} style={{color: textColor.replace('text-', '').replace('-800', '-700')}}>
                {description}
              </p>
              
              {/* Enhanced CTA */}
              <button className={`${linkColor} hover:font-bold flex items-center space-x-2 text-sm sm:text-base font-semibold transition-all duration-300 relative z-10 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 group-hover:shadow-md`}>
                <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Footer Section */}
        <motion.div
          className="mt-16 sm:mt-20"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need Specialized Medical Care?</h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Our multidisciplinary team of specialists work together to provide personalized treatment plans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 hover:shadow-2xl justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book Consultation
              </button>
              
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 hover:shadow-2xl justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                View All Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServicesSection;
