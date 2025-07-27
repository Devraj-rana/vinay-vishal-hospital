"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Message sent successfully!');
    setFormData({ message: '', name: '', email: '', phone: '' });
  };

  return (
    <div className="animate-fade-in">
      <section
        className="relative bg-cover bg-center h-40 sm:h-48 md:h-56 rounded-b-3xl overflow-hidden group"
      >
        <Image
          src="/og.png"
          alt="Contact Us Banner"
          fill
          style={{ 
            objectFit: "cover",
            objectPosition: "left 30%"
          }}
          className="rounded-b-3xl transition-transform duration-700 group-hover:scale-105"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
          <div className="text-white animate-slide-in-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Us</h2>
            <nav className="text-sm sm:text-base flex items-center space-x-2">
              <Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:underline">
                Home
              </Link>
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Contact Us</span>
            </nav>
          </div>
          <div className="animate-slide-in-right">
            <a href="tel:+911234567890" className="flex items-center bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base ">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              CALL: +91 1234567890
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 sm:gap-12">
        {/* Left Info Boxes */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3 animate-slide-in-left">
          {/* Our Locations */}
          <div className="bg-purple-200 rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="p-4 bg-purple-400 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg text-purple-800 group-hover:text-purple-900 transition-colors">
                Our Locations
              </h4>
              <p className="text-sm text-purple-700 leading-relaxed">
                1485 Bayshore Blvd. Ste 154, <br />
                San Francisco, CA 95124
              </p>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="bg-blue-200 rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="p-4 bg-blue-400 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg text-blue-800 group-hover:text-blue-900 transition-colors">
                CONNECT WITH US
              </h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                <a href="tel:+911234567890" className="hover:underline block">Call: +91 1234567890</a>
                <a href="tel:+910987654321" className="hover:underline block">+91 0987654321</a>
              </p>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="bg-green-200 rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
            <div className="p-4 bg-green-400 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg text-green-800 group-hover:text-green-900 transition-colors">
                VISITING HOURS
              </h4>
              <p className="text-sm text-green-700 leading-relaxed">
                Sunday: 08:00 AM - 10:00 PM <br />
                Monday - Friday: 06:00 AM - 12:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 animate-slide-in-right">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Send Us <span className="text-blue-600">A Message</span> Anytime
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Your email address will not be published. Required fields are marked with *
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm">
            <div className="group">
              <label htmlFor="message" className="block mb-3 font-semibold text-gray-700 text-base group-focus-within:text-blue-600 transition-colors">
                <svg className="inline w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-xl border-2 border-gray-200 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block mb-3 font-semibold text-gray-700 text-base group-focus-within:text-blue-600 transition-colors">
                  <svg className="inline w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border-2 border-gray-200 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="Your full name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block mb-3 font-semibold text-gray-700 text-base group-focus-within:text-blue-600 transition-colors">
                  <svg className="inline w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border-2 border-gray-200 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="phone" className="block mb-3 font-semibold text-gray-700 text-base group-focus-within:text-blue-600 transition-colors">
                <svg className="inline w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-xl border-2 border-gray-200 p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                placeholder="+91 1234567890"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    <span>Send Message Now</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

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
      `}</style>
    </div>
  );
};

export default ContactUs;
