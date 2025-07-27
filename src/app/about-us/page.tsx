"use client";
import React from 'react'
import Image from 'next/image'

const checklistLeft = [
  "24/7 Emergency Services",
  "Qualified Doctors",
  "Modern Equipment",
  "Patient-Centered Care"
];

const checklistRight = [
  "Advanced Diagnostics",
  "Comfortable Rooms",
  "Experienced Staff",
  "Comprehensive Support"
];

const AboutUs = () => {
  return (
    <div className="animate-fade-in">
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-10">
           {/* Left Column */}
           <div className="flex-1 animate-slide-in-left">
           <p className="text-blue-600 text-sm font-semibold mb-2">ABOUT HOSPITAL</p>
           <h2 className="text-3xl sm:text-4xl mb-4">
             We Provide Finest Patient&apos;s <br />
             Care & Amenities
           </h2>
           <p className="text-gray-700 mb-6 max-w-xl">
             Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we&apos;re dedicated to providing you with personalized and compassionate medical services.
           </p>
   
           <div className="flex flex-wrap gap-6 mb-6 max-w-xl">
             <ul className="flex-1 space-y-3">
               {checklistLeft.map((item, idx) => (
                 <li key={idx} className="flex items-center space-x-3">
                   <span className="inline-block bg-green-500 rounded-full p-1">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 text-white"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={3}
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                     </svg>
                   </span>
                   <span className="text-gray-900">{item}</span>
                 </li>
               ))}
             </ul>
             <ul className="flex-1 space-y-3">
               {checklistRight.map((item, idx) => (
                 <li key={idx} className="flex items-center space-x-3">
                   <span className="inline-block bg-green-500 rounded-full p-1">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 text-white"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={3}
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                     </svg>
                   </span>
                   <span className="text-gray-900">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
   
           <p className="text-gray-700 mb-6 max-w-xl">
             Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis nisl ut aliquip erat volutpat autem vel eum iriure dolor in hendrerit in vulputate velit.
           </p>
   
           <button className="bg-purple-400 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
             &rarr; More About Us
           </button>
         </div>
   
      {/* Right Column */}
   <div className="relative flex-1 flex flex-col items-center animate-slide-in-right">
     <Image
       src="/doctorji.jpg"
       alt="Doctor performing surgery"
       className="rounded-3xl object-cover w-full max-w-md h-auto transform hover:scale-105 transition-transform duration-500"
       width={400}
       height={500}
     />
     {/* Floating boxes for desktop */}
     <div className="hidden lg:block">
       <div className="absolute top-4 right-4 bg-purple-200 rounded-3xl px-6 py-4 text-center w-28 shadow-lg animate-bounce-in hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
         <p className="text-3xl font-bold">22</p>
         <p className="text-xs uppercase tracking-widest">Different Sections</p>
       </div>
       <div className="absolute bottom-4 left-4 bg-green-200 rounded-3xl px-6 py-4 text-center w-28 shadow-lg animate-bounce-in hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
         <p className="text-3xl font-bold">5K+</p>
         <p className="text-xs uppercase tracking-widest">Patient Reviews</p>
       </div>
     </div>
     {/* Boxes below image for mobile */}
     <div className="flex flex-col gap-3 mt-4 w-full max-w-md lg:hidden">
       <div className="bg-purple-200 rounded-3xl px-6 py-4 text-center w-full shadow-lg animate-bounce-in hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
         <p className="text-3xl font-bold">22</p>
         <p className="text-xs uppercase tracking-widest">Different Sections</p>
       </div>
       <div className="bg-green-200 rounded-3xl px-6 py-4 text-center w-full shadow-lg animate-bounce-in hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
         <p className="text-3xl font-bold">5K+</p>
         <p className="text-xs uppercase tracking-widest">Patient Reviews</p>
       </div>
     </div>
   </div>
        
       </section>

       <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.4s both;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
export default AboutUs;
