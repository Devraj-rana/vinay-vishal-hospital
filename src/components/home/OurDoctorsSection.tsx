// "use client";
// import React from 'react';
// import Image from 'next/image';

// const doctors = [
//   {
//     id: 1,
//     name: 'D.R Walter white',
//     title: 'Head of Cardiologist',
//     category: 'Cardiologist',
//     image: '/test4.jpg',
//   },
//   {
//     id: 2,
//     name: 'D.R VICTOR JAMES',
//     title: 'Head of Orthopedist Department',
//     category: 'Orthopedist',
//     image: '/test5.jpg',
//   },
//   {
//     id: 3,
//     name: 'D.R JONNATHAN RONAN',
//     title: 'Pediatric Nutritionist',
//     category: 'Nutritionist',
//     image: '/test6.jpg',
//   },
//   {
//     id: 4,
//     name: 'D.R JANE RONAN',
//     title: 'Gynocologist',
//     category: 'Gynocologist',
//     image: '/test7.jpg',
//   },
// ];

// const categories = ['All', 'Cardiologist', 'Orthopedist', 'Nutritionist', 'Gynocologist'];

// const OurDoctorsSection = () => {
//   const [selectedCategory, setSelectedCategory] = React.useState('All');

//   const filteredDoctors = selectedCategory === 'All'
//     ? doctors
//     : doctors.filter(
//         (doctor) => doctor.category === selectedCategory
//       );

//   return (
//     <section className="py-8 sm:py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2 tracking-widest">DOCTORS</p>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10">
//           Our Experts Doctors <br />
//           <span className="font-black">For The Patients</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-10 sm:mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold ${
//                 selectedCategory === category
//                   ? 'bg-blue-300 text-black'
//                   : 'bg-blue-100 text-blue-700'
//               }`}
//             >
//               {category.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
//   {filteredDoctors.map(({ id, name, title, image }) => (
//     <div key={id} className="flex flex-col items-center space-y-3 sm:space-y-4">
//       <Image
//         src={image}
//         alt={name}
//         width={192}
//         height={224}
//         className="object-cover w-full h-full rounded-[100px_100px_0_0]"
//         style={{ width: '100%', height: '100%' }}
//       />
//       <button className="border border-red-500 text-red-500 font-bold rounded-full px-5 sm:px-6 py-1.5 sm:py-2 hover:bg-red-500 hover:text-white transition text-xs sm:text-sm">
//         &rarr; Book An Appointment
//       </button>
//       <div className="text-center">
//         <p className="font-bold text-sm sm:text-base">{name}</p>
//         <p className="text-xs sm:text-sm">{title}</p>
//       </div>
//     </div>
//   ))}
// </div>
//       </div>
//     </section>
//   );
// };

// export default OurDoctorsSection;






"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const doctors = [
  {
    id: 1,
    name: 'D.R Walter white',
    title: 'Head of Cardiologist',
    category: 'Cardiologist',
    image: '/test4.jpg',
  },
  {
    id: 2,
    name: 'D.R VICTOR JAMES',
    title: 'Head of Orthopedist Department',
    category: 'Orthopedist',
    image: '/test5.jpg',
  },
  {
    id: 3,
    name: 'D.R JONNATHAN RONAN',
    title: 'Pediatric Nutritionist',
    category: 'Nutritionist',
    image: '/test6.jpg',
  },
  {
    id: 4,
    name: 'D.R JANE RONAN',
    title: 'Gynocologist',
    category: 'Gynocologist',
    image: '/test7.jpg',
  },
];

const categories = ['All', 'Cardiologist', 'Orthopedist', 'Nutritionist', 'Gynocologist'];

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
    <section ref={sectionRef} className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <p className={`text-blue-600 text-xs sm:text-sm font-semibold mb-2 tracking-widest transition-all duration-700 ${getAnimationClass('subtitle')}`}>
          DOCTORS
        </p>
        
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-10 transition-all duration-800 ${getAnimationClass('title')}`}>
          Our Experts Doctors <br />
          <span className="font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            For The Patients
          </span>
        </h2>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-10 sm:mb-12 transition-all duration-900 ${getAnimationClass('filters')}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                selectedCategory === category
                  ? 'bg-blue-300 text-black shadow-lg scale-105'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
              style={{
                transitionDelay: visibleElements.includes('filters') ? `${index * 100}ms` : '0ms'
              }}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 transition-all duration-500 ${filterTransition ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
          {filteredDoctors.map(({ id, name, title, image }, index) => (
            <div 
              key={`${animationKey}-${id}`}
              className={`flex flex-col items-center space-y-3 sm:space-y-4 group cursor-pointer transition-all duration-700 ${getAnimationClass(`doctor-${id}`)}`}
              style={{
                transitionDelay: visibleElements.includes(`doctor-${id}`) ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-[100px_100px_0_0] group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={image}
                  alt={name}
                  width={192}
                  height={224}
                  className="object-cover w-full h-full rounded-[100px_100px_0_0] transition-all duration-500 group-hover:scale-110"
                  style={{ width: '100%', height: '100%' }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[100px_100px_0_0]"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-xs font-bold text-blue-600">★ Expert</span>
                </div>
              </div>

              {/* Appointment Button */}
              <button className="border border-red-500 text-red-500 font-bold rounded-full px-5 sm:px-6 py-1.5 sm:py-2 hover:bg-red-500 hover:text-white transition-all duration-300 text-xs sm:text-sm transform hover:scale-110 hover:shadow-lg group-hover:animate-pulse">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr; Book An Appointment
                </span>
              </button>

              {/* Doctor Info */}
              <div className="text-center transform transition-all duration-500 group-hover:translate-y-2">
                <p className="font-bold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                  {name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {title}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctorsSection;