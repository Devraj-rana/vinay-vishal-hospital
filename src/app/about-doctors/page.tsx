"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

const doctors = [
  {
    id: 1,
    name: "Dr. Vinay Kumar",
    title: "Founding Director & Senior Cardiologist",
    category: "Cardiologist",
    image: "/test4.jpg",
    experience: "15+ Years",
    specialization: "Interventional Cardiology",
    description: "Leading expert in cardiac interventions and preventive cardiology with extensive experience in complex procedures."
  },
  {
    id: 2,
    name: "Dr. Vishal Sharma",
    title: "Co-Founder & Chief Orthopedic Surgeon",
    category: "Orthopedist",
    image: "/test5.jpg",
    experience: "12+ Years",
    specialization: "Joint Replacement Surgery",
    description: "Renowned orthopedic surgeon specializing in joint replacements and sports medicine with thousands of successful surgeries."
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    title: "Head of Pediatrics",
    category: "Pediatrician",
    image: "/test6.jpg",
    experience: "10+ Years",
    specialization: "Child Development",
    description: "Dedicated pediatrician focused on comprehensive child healthcare from newborn care to adolescent development."
  },
  {
    id: 4,
    name: "Dr. Priya Patel",
    title: "Senior Gynecologist",
    category: "Gynecologist",
    image: "/test7.jpg",
    experience: "8+ Years",
    specialization: "Women's Health",
    description: "Expert in women's healthcare including obstetrics, gynecological surgeries, and family planning services."
  },
];

const categories = [
  { id: "All", name: "All Doctors", count: doctors.length },
  { id: "Cardiologist", name: "Cardiology", count: doctors.filter(d => d.category === "Cardiologist").length },
  { id: "Orthopedist", name: "Orthopedics", count: doctors.filter(d => d.category === "Orthopedist").length },
  { id: "Pediatrician", name: "Pediatrics", count: doctors.filter(d => d.category === "Pediatrician").length },
  { id: "Gynecologist", name: "Gynecology", count: doctors.filter(d => d.category === "Gynecologist").length },
];

const AboutDoctors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.category === selectedCategory);

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
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <span className="text-lg font-bold">Medical Excellence Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              Meet Our Expert
              <span className="text-emerald-400 block mt-2">Medical Team</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our dedicated team of expert doctors combines years of experience with compassionate care to provide you with the best medical treatment.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={25} suffix="+" duration={2000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Expert Doctors</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={15} suffix="+" duration={2500} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={10} suffix="K+" duration={3000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Happy Patients</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2 transform transition-all duration-500 hover:scale-110 animate-pulse"
                     style={{ textShadow: '0 0 20px rgba(52, 211, 153, 0.3)' }}>
                    24/7
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Medical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Hospital Leadership</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-800 leading-tight">
              Meet Our
              <span className="text-blue-600 block">Founding Directors</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our visionary leaders who established this hospital with a mission to provide world-class healthcare services to our community.
            </p>
          </div>

          {/* Directors Videos */}
          <div className="space-y-20">
            {/* First Director */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 lg:pr-8 w-full">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-l-4 border-blue-500">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4 sm:gap-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center sm:mr-6">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Dr. Vinay Kumar</h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">Founding Director & Chief Medical Officer</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                    With over 15 years of experience in cardiology and healthcare administration, Dr. Vinay has been instrumental in establishing our hospital as a center of medical excellence. His vision of accessible, compassionate healthcare drives our mission every day.
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">5K+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Patients Treated</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Surgeries</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative group">
                  <video
                    src="/DR.Vinay web.mp4"
                    controls
                    className="w-full h-full object-cover"
                    poster="/11.jpg"
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* Second Director */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="flex-1 lg:pl-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-emerald-500">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-6">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">Dr. Vishal Sharma</h3>
                      <p className="text-emerald-600 font-semibold">Co-Founder & Chief Operating Officer</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Dr. Vishal brings extensive expertise in hospital operations and patient care management. His commitment to innovation and quality improvement has helped us achieve recognition as a leading healthcare institution in the region.
                  </p>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">12+</div>
                      <div className="text-sm text-gray-600">Years Leadership</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">3K+</div>
                      <div className="text-sm text-gray-600">Operations Led</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">98%</div>
                      <div className="text-sm text-gray-600">Patient Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative group">
                  <video
                    src="/Dr. vishal.mp4"
                    controls
                    className="w-full h-full object-cover"
                    poster="/22.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full mb-8">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Our Medical Team</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-slate-800 leading-tight">
              Expert Doctors
              <span className="text-blue-600 block mt-2">Ready to Serve You</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              Our team of highly qualified specialists brings together decades of experience and cutting-edge medical expertise to provide you with the best possible care.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-xl scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:scale-105 shadow-md"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-sm px-2 py-1 rounded-full font-bold ${
                    selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Doctor Image */}
                    <div className="relative mb-6">
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Experience Badge */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {doctor.experience}
                      </div>
                      
                      {/* Specialization Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {doctor.specialization}
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-3">
                        {doctor.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {doctor.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>Book Appointment</span>
                      </button>
                      
                      <button className="w-full border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm">
                        View Profile
                      </button>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Meet Our Experts?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class healthcare with our dedicated medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>Call: +91 123 456 7890</span>
            </button>
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Book Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDoctors;
