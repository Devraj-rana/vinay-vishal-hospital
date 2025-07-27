"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const checklistLeft = [
  'Advanced Medical Technology',
  'State-of-the-Art Facilities',
  'Comprehensive Treatment Plans',
  'Board-Certified Specialists',
];

const checklistRight = [
  'Patient-Centered Excellence',
  'Personalized Healthcare Solutions',
  'Award-Winning Medical Care',
  '24/7 Emergency Services',
];

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const HospitalInfoSection = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const leftInView = useInView(leftRef, { once: false, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.3 });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Enhanced Left Column */}
      <motion.div
        ref={leftRef}
        variants={leftVariants}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-1"
      >
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
          </svg>
          <span className="font-semibold">About Our Hospital</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-slate-800">
          Excellence in Healthcare
          <span className="text-blue-600 block mt-2">That You Can Trust</span>
        </h2>
        
        <p className="text-slate-600 mb-8 max-w-xl text-lg leading-relaxed">
          For over a decade, Vinay Vishal Hospital has been at the forefront of medical excellence, 
          providing comprehensive healthcare services with cutting-edge technology and compassionate care.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mb-8 max-w-2xl">
          <ul className="flex-1 space-y-4">
            {checklistLeft.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <span className="inline-block bg-emerald-500 rounded-full p-2 flex-shrink-0 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700 text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="flex-1 space-y-4">
            {checklistRight.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <span className="inline-block bg-emerald-500 rounded-full p-2 flex-shrink-0 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700 text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-8 border-l-4 border-blue-500">
          <p className="text-slate-700 text-lg leading-relaxed italic">
            &ldquo;Our commitment extends beyond treatment to building lasting relationships with our patients and their families, 
            ensuring they receive not just medical care, but genuine support throughout their healthcare journey.&rdquo;
          </p>
          <div className="mt-4 flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">VV</span>
            </div>
            <div>
              <p className="font-bold text-slate-800">Dr. Vinay & Dr. Vishal</p>
              <p className="text-blue-600 text-sm">Founding Directors</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center hover:shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Learn More About Us
          </button>
          
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center hover:shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Virtual Tour
          </button>
        </div>
      </motion.div>

      {/* Enhanced Right Column */}
      <motion.div
        ref={rightRef}
        variants={rightVariants}
        initial="hidden"
        animate={rightInView ? "visible" : "hidden"}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex-1 flex flex-col items-center"
      >
        <div className="relative">
          <Image
            src="/doctorji.jpg"
            alt="Medical professional providing expert care"
            className="rounded-3xl object-cover w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-3xl h-auto shadow-2xl"
            width={10000}
            height={90000}
          />
          
          {/* Enhanced floating boxes for desktop */}
          <div className="hidden lg:block">
            <div className="absolute top-6 right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl px-6 py-4 text-center shadow-xl backdrop-blur-sm">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm font-medium opacity-90">Medical Departments</p>
            </div>
            <div className="absolute bottom-6 left-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl px-6 py-4 text-center shadow-xl backdrop-blur-sm">
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-sm font-medium opacity-90">Happy Patients</p>
            </div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/2 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl px-4 py-3 text-center shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-xs font-medium opacity-90">Years</p>
            </div>
          </div>
          
          {/* Enhanced boxes below image for mobile */}
          <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-sm sm:max-w-md lg:max-w-2xl xl:max-w-3xl lg:hidden">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl px-6 py-4 text-center shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold">25+</p>
              <p className="text-sm font-medium opacity-90">Medical Departments</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl px-6 py-4 text-center shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold">10K+</p>
              <p className="text-sm font-medium opacity-90">Happy Patients</p>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-200 rounded-full opacity-20 -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HospitalInfoSection;
