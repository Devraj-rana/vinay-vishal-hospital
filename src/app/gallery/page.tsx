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

const images = [
  { id: 1, src: "/a1.jpg", alt: "Hospital Reception Area", category: "facilities" },
  { id: 2, src: "/a2.jpg", alt: "Modern Patient Room", category: "facilities" },
  { id: 4, src: "/a4.jpg", alt: "Advanced Medical Equipment", category: "equipment" },
  { id: 5, src: "/a5.jpg", alt: "Surgical Suite", category: "equipment" },
  { id: 6, src: "/a6.jpg", alt: "Diagnostic Center", category: "equipment" },
  { id: 7, src: "/a7.jpg", alt: "Patient Consultation Room", category: "facilities" },
  { id: 8, src: "/a8.jpg", alt: "Medical Laboratory", category: "equipment" },
  { id: 9, src: "/a9.jpg", alt: "Hospital Corridor", category: "facilities" },
  { id: 10, src: "/a10.jpg", alt: "Emergency Department", category: "facilities" },
  { id: 11, src: "/a11.jpg", alt: "ICU Unit", category: "facilities" },
  { id: 12, src: "/a12.jpg", alt: "Radiology Department", category: "equipment" },
  { id: 13, src: "/a13.jpg", alt: "Pharmacy Section", category: "services" },
  { id: 14, src: "/a14.jpg", alt: "Physiotherapy Center", category: "services" },
  { id: 15, src: "/a15.jpg", alt: "Medical Staff Area", category: "facilities" },
  { id: 16, src: "/a16.jpg", alt: "Hospital Garden", category: "facilities" },
  { id: 17, src: "/a17.jpg", alt: "Conference Room", category: "facilities" },
  { id: 18, src: "/a18.jpg", alt: "Rehabilitation Center", category: "services" },
  { id: 19, src: "/a19.jpg", alt: "Medical Equipment Storage", category: "equipment" },
  { id: 20, src: "/a20.jpg", alt: "Patient Waiting Area", category: "facilities" },
  { id: 21, src: "/a21.jpg", alt: "Blood Bank", category: "services" },
  { id: 22, src: "/a22.jpg", alt: "Hospital Cafeteria", category: "facilities" },
  { id: 23, src: "/a23.jpg", alt: "Medical Records Department", category: "services" },
  { id: 24, src: "/a24.jpg", alt: "Hospital Exterior", category: "facilities" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const categories = [
    { id: "all", name: "All Images", icon: "🏥", count: images.length },
    { id: "facilities", name: "Facilities", icon: "🏢", count: images.filter(img => img.category === "facilities").length },
    { id: "equipment", name: "Equipment", icon: "⚕️", count: images.filter(img => img.category === "equipment").length },
    { id: "services", name: "Services", icon: "🩺", count: images.filter(img => img.category === "services").length }
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Clean Hero Section */}
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
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM14 2a2 2 0 012 2v7a2 2 0 01-2 2v2a3 3 0 11-6 0v-2a2 2 0 01-2-2V4a2 2 0 012-2h6z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-bold">Visual Tour of Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
              Medical Facilities
              <span className="text-emerald-400 block mt-2">Gallery</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore our state-of-the-art medical facilities, advanced equipment, and compassionate care environment.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={images.length} duration={2000} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Gallery Images</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="relative">
                  <AnimatedCounter end={15} suffix="+" duration={2500} />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="text-sm sm:text-base text-blue-200 font-medium group-hover:text-white transition-colors duration-300">Departments</div>
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

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
              </svg>
              <span className="font-bold text-lg">Browse by Category</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-800 leading-tight">
              Explore Our Medical
              <span className="text-blue-600 block">Departments</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-xl scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 shadow-md"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-sm px-3 py-1 rounded-full font-bold ${
                  activeCategory === category.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Gallery Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={idx < 8}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      image.category === 'facilities' ? 'bg-blue-500/90 text-white' :
                      image.category === 'equipment' ? 'bg-green-500/90 text-white' :
                      'bg-purple-500/90 text-white'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {image.alt}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">{image.category}</span>
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="relative aspect-video w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.alt}</h3>
              <p className="text-blue-200 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}