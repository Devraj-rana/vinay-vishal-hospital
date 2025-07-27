"use client";
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const services = [
  { title: 'Anesthesiology', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Cardiology', description: '20+ Doctors are available under this department who serve.' },
  { title: 'General Surgery', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Gynecology and Obstetrics', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Nephology', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Oral Dental', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Orthopaedics', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Pediatric', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Physiotherapy', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Pulmonology', description: '20+ Doctors are available under this department who serve.' },
  { title: 'Surgical Gastroenterology', description: '20+ Doctors are available under this department who serve.' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const OurServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // 👈 allow re-trigger

  return (
    <section ref={ref} className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-indigo-900 text-sm font-semibold mb-2 tracking-wider uppercase">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 leading-tight">
            We Serve In Different <span className="text-indigo-700">Areas</span><br />
            <span className="text-indigo-700">For Our Patients</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map(({ title, description }, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0px 20px 30px -10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-lg font-semibold mb-2 text-indigo-800">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{description}</p>
              <a href="#" className="text-sm text-indigo-600 hover:underline flex items-center space-x-1">
                <span>→ Read more</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-12 text-sm text-gray-700"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          We have 8+ more care services including Emergency Department.{' '}
          <a href="#" className="font-semibold text-indigo-700 hover:underline">
            View All →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default OurServicesSection;
