"use client";
import React from "react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "D.R Walter white",
    title: "Head of Cardiologist",
    category: "Cardiologist",
    image: "/test4.jpg",
  },
  {
    id: 2,
    name: "D.R VICTOR JAMES",
    title: "Head of Orthopedist Department",
    category: "Orthopedist",
    image: "/test5.jpg",
  },
  {
    id: 3,
    name: "D.R JONNATHAN RONAN",
    title: "Pediatric Nutritionist",
    category: "Nutritionist",
    image: "/test6.jpg",
  },
  {
    id: 4,
    name: "D.R JANE RONAN",
    title: "Gynocologist",
    category: "Gynocologist",
    image: "/test7.jpg",
  },
];

const categories = [
  "All",
  "Cardiologist",
  "Orthopedist",
  "Nutritionist",
  "Gynocologist",
];

const AboutDoctors = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredDoctors =
    selectedCategory === "All"
      ? doctors
      : doctors.filter((doctor) => doctor.category === selectedCategory);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold text-4xl">
        DIRECTORS
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-8">
        <p className="text-base sm:text-lg text-gray-700 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          aliquam fugit voluptatibus excepturi inventore hic molestias magni
          quasi maxime illum. Magni dolores debitis vel nulla id. Repellendus
          quia odio laboriosam!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        {/* First row: Left text, right video */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-2">Director&#39;s Message</h3>
            <p>
              Welcome to our hospital. Our mission is to provide the best
              healthcare services with compassion and excellence. We are proud
              of our dedicated team and state-of-the-art facilities.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
                  <video
                    src="/DR.Vinay web.mp4"
                    controls
                    className="w-full h-full object-cover"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second row: Left video, right text */}
        <div className="flex flex-col md:flex-row items-center gap-8">
         <div className="flex-1 w-full order-2 md:order-1">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
                  <video
                    src="/Dr. vishal.mp4"
                    controls
                    className="w-full h-full object-cover"
                  ></video>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p>
              We envision a future where quality healthcare is accessible to
              all. Our directors are committed to continuous improvement and
              innovation in patient care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 text-xs sm:text-sm font-semibold mb-2 tracking-widest">
          DOCTORS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 sm:mb-10">
          Our Experts Doctors <br />
          <span>For The Patients</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold ${
                selectedCategory === category
                  ? "bg-blue-300 text-black"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {filteredDoctors.map(({ id, name, title, image }) => (
            <div
              key={id}
              className="flex flex-col items-center space-y-3 sm:space-y-4 group cursor-pointer"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden rounded-[100px_100px_0_0] group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={image}
                  alt={name}
                  width={192}
                  height={224}
                  className="object-cover w-full h-full rounded-[100px_100px_0_0] transition-all duration-500 group-hover:scale-110"
                  style={{ width: "100%", height: "100%" }}
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

export default AboutDoctors;
