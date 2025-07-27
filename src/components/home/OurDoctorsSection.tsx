"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'Dr. Walter Harrison',
    title: 'Chief Cardiologist & Department Head',
    category: 'Cardiologist',
    experience: '15+ Years',
    specialization: 'Interventional Cardiology',
    image: '/test4.jpg',
    credentials: 'MD, FACC, FSCAI'
  },
  {
    id: 2,
    name: 'Dr. Victor Martinez',
    title: 'Senior Orthopedic Surgeon',
    category: 'Orthopedist',
    experience: '12+ Years',
    specialization: 'Joint Replacement Surgery',
    image: '/test5.jpg',
    credentials: 'MD, MS (Ortho), FAAOS'
  },
  {
    id: 3,
    name: 'Dr. Jonathan Chen',
    title: 'Pediatric Nutritionist & Wellness Expert',
    category: 'Nutritionist',
    experience: '10+ Years',
    specialization: 'Child Nutrition & Development',
    image: '/test6.jpg',
    credentials: 'MD, PhD (Nutrition)'
  },
  {
    id: 4,
    name: 'Dr. Jane Morrison',
    title: 'Women\'s Health Specialist',
    category: 'Gynecologist',
    experience: '14+ Years',
    specialization: 'Reproductive Health & Surgery',
    image: '/test7.jpg',
    credentials: 'MD, FACOG, FRCOG'
  },
];

const categories = [
  { name: 'All', count: doctors.length },
  { name: 'Cardiologist', count: doctors.filter(d => d.category === 'Cardiologist').length },
  { name: 'Orthopedist', count: doctors.filter(d => d.category === 'Orthopedist').length },
  { name: 'Nutritionist', count: doctors.filter(d => d.category === 'Nutritionist').length },
  { name: 'Gynecologist', count: doctors.filter(d => d.category === 'Gynecologist').length }
];

const OurDoctorsSection = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [filterTransition, setFilterTransition] = useState(false);
  const sectionRef = useRef(null);

  const filteredDoctors = selectedCategory === 'All'
    ? doctors
    : doctors.filter(
        (doctor) => doctor.category === selectedCategory
      );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey(prev => prev + 1);
            // Animate elements in sequence
            const elements = ['subtitle', 'title', 'filters', ...filteredDoctors.map(d => `doctor-${d.id}`)];
            elements.forEach((element, index) => {
              setTimeout(() => {
                setVisibleElements(prev => {
                  if (!prev.includes(element)) {
                    return [...prev, element];
                  }
                  return prev;
                });
              }, index * 150);
            });
          } else {
            setVisibleElements([]);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, [filteredDoctors]);

  const handleCategoryChange = (category: string) => {
    setFilterTransition(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setFilterTransition(false);
    }, 300);
  };

  const getAnimationClass = (elementName: string) => {
    return visibleElements.includes(elementName) 
      ? 'opacity-100 translate-y-0 scale-100' 
      : 'opacity-0 translate-y-8 scale-95';
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Header Section */}
        <div className="mb-16">
          <div className={`inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${getAnimationClass('subtitle')}`}>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            <span className="font-semibold">Medical Experts</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-slate-800 transition-all duration-800 ${getAnimationClass('title')}`}>
            Meet Our Expert
            <span className="text-blue-600 block mt-2">Medical Specialists</span>
          </h2>
          
          <p className={`text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed transition-all duration-900 ${getAnimationClass('title')}`}>
            Our dedicated team of board-certified physicians and healthcare professionals 
            are committed to providing exceptional patient care with years of specialized experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 transition-all duration-900 ${getAnimationClass('filters')}`}>
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-4 sm:px-6 lg:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-lg border-2 ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-400'
              }`}
              style={{
                transitionDelay: visibleElements.includes('filters') ? `${index * 100}ms` : '0ms'
              }}
            >
              <span className="flex items-center gap-2">
                {category.name.toUpperCase()}
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Doctors Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 transition-all duration-500 ${filterTransition ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          {filteredDoctors.map(({ id, name, title, experience, specialization, credentials, image }, index) => (
            <div 
              key={`${animationKey}-${id}`}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl group cursor-pointer transition-all duration-700 border border-gray-100 hover:border-blue-200 relative overflow-hidden ${getAnimationClass(`doctor-${id}`)}`}
              style={{
                transitionDelay: visibleElements.includes(`doctor-${id}`) ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={320}
                  className="object-cover w-full h-64 transition-all duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {experience}
                </div>
                
                {/* Certification Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs font-bold text-blue-600">{credentials}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="text-center relative z-10">
                <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2 text-sm">
                  {title}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {specialization}
                </p>
              </div>

              {/* Enhanced Appointment Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl px-6 py-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Book Appointment
                </span>
              </button>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need to Consult with a Specialist?</h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Schedule a consultation with our experienced medical professionals for personalized healthcare solutions
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                View All Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctorsSection;