"use client";
import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyButton = () => {
  return (
    <a
      href="tel:+917078599991"
      className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl hover:shadow-red-500/25 animate-pulse hover:animate-none transition-all duration-300 transform hover:scale-110 group"
      aria-label="Emergency Call"
    >
      <div className="relative">
        <Phone className="w-6 h-6" />
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 animate-ping group-hover:animate-none" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Emergency Call
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </a>
  );
};

export default EmergencyButton;
