"use client";
import React from 'react';

const services = [
  {
    title: 'Anesthesiology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Cardiology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'General Surgery',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Gynecology and Obstetrics',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Nephology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Oral Dental',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Orthopaedics',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Pediatric',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Physiotherapy',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Pulmonology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Surgical Gastroenterology',
    description: '20+ Doctors are available under this department who serve.',
  },
];

const Specialty = () => {
  return (
    <section className="bg-gray-50 py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-blue-600 text-sm font-semibold mb-2 tracking-widest animate-slide-in-down">OUR SERVICES</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 animate-slide-in-up">
          We Serve In Different <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Areas</span> <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">For Our Patients</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer animate-card-in border border-gray-100 hover:border-blue-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon/Badge */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm mb-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                {description}
              </p>
              
              {/* Read More Link */}
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300"
              >
                <span>Read more</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-700 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          We have 8+ more Care Service including Emergency Department.{' '}
          <a 
            href="#" 
            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300 inline-flex items-center space-x-1 group"
          >
            <span>View All</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </p>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out 0.3s both;
        }

        .animate-card-in {
          animation: card-in 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Specialty;
