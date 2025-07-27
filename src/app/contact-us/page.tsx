"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-40 sm:h-48 md:h-56 rounded-b-3xl"
      >
        <Image
          src="/test9.jpg"
          alt="Banner Image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-b-3xl"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-b-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-lg sm:text-xl ">Contact Us</h2>
            <nav className="text-xs sm:text-sm mt-1">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>{" "}
              <span>Contact Us</span>
            </nav>
          </div>
          <div>
            <button className="flex items-center bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow hover:bg-green-600 transition text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h1l2 3 3-2 4 4 5-5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12h6"
                />
              </svg>
              CALL: +91 1234567890
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 sm:gap-12">
        {/* Left Info Boxes */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {/* Our Locations */}
          <div className="bg-purple-300 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-purple-400 rounded-lg flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 text-purple-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21c-4 0-7-3-7-7 0-3.866 3-7 7-7s7 3.134 7 7c0 4-3 7-7 7z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-sm sm:text-base">
                Our Locations
              </h4>
              <p className="text-xs sm:text-sm">
                1485 Bayshore Blvd. Ste 154, <br />
                San Francisco, CA 95124
              </p>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="bg-pink-200 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-pink-300 rounded-lg flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 text-pink-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h1l2 3 3-2 4 4 5-5"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h6" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-sm sm:text-base">
                CONNECT WITH US
              </h4>
              <p className="text-xs sm:text-sm">
                Call: +91 1234567890 <br />
                +91 0987654321
              </p>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="bg-green-200 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-green-300 rounded-lg flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle cx="12" cy="12" r="10" stroke="none" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-sm sm:text-base">
                VISITING HOURS
              </h4>
              <p className="text-xs sm:text-sm">
                Sunday: 08:00 AM - 10:00 PM <br />
                Monday - Friday: 06:00 AM - 12:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Send Us <span className="font-bold">A Message</span> Anytime
          </h2>
          <p className="mb-6 text-xs sm:text-sm text-gray-600">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-sm sm:text-base"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your message"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-sm sm:text-base"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-sm sm:text-base"
              >
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-sm sm:text-base"
              >
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-md border border-gray-300 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                placeholder="Your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Send Message Now
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
