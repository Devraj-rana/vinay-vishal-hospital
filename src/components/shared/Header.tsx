"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
// import media from "@/lib/assets";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/specialty", label: "Specialty" },
    { href: "/about-doctors", label: "Doctors" },
    { href: "/gallery", label: "Gallery" },
    // { href: "/newsletter", label: "Newsletter" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-shrink">
            <span className="animate-pulse text-base flex-shrink-0">🚨</span>
            <span className="font-medium text-center sm:text-left truncate">24/7 Emergency Services Available</span>
          </div>
          <a 
            href="tel:+917078599991" 
            className="hover:text-red-200 transition-colors duration-200 font-semibold flex-shrink-0 bg-red-700 hover:bg-red-800 px-3 py-1 rounded-full text-xs sm:text-sm"
          >
            Emergency: +91 70785 99991
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 overflow-hidden ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between h-16 lg:h-18 min-w-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-200 min-w-0 flex-shrink-0"
          >
            <div className="relative flex-shrink-0">
              <Image
                src="/logo.jpg"
                width={1000}
                height={1000}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                alt="Vinay Vishal Hospital Logo"
                priority
              />
            </div>
            <div className="flex flex-row space-x-1 min-w-0">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#1c5099] flex-shrink-0">
                Vinay
              </span>
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#83be2d] flex-shrink-0">
                Vishal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-colors duration-200 group ${
                    isActive 
                      ? "text-blue-600" 
                      : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white border-t border-gray-200 shadow-lg overflow-hidden">
          <nav className="flex flex-col space-y-2 overflow-hidden">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-4 font-medium rounded-lg transition-colors duration-200 text-base touch-manipulation ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;