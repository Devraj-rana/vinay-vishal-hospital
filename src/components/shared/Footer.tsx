'use client'
import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  // Navigation data to avoid redundancy
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/specialty", label: "Specialty" },
    { href: "/about-doctors", label: "About Doctors" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const contactInfo = {
    address: "Gandhi Nagar, Roorkee, Uttarakhand 247667",
    email: "drvinay.rke@gmail.com",
    phone: "+91 70785 99991",
    hours: {
      sunday: "08:00 AM - 10:00 PM",
      weekdays: "Monday - Saturday: 06:00 AM - 12:00 AM",
    },
  };

  return (
    <footer className="relative bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className={styles["meteor-container"]}>
          <div className={styles.meteor}></div>
          <div className={styles.meteor}></div>
          <div className={styles.meteor}></div>
          <div className={styles.meteor}></div>
          <div className={styles.meteor}></div>
        </div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-blue-400/30 pb-2">
              Contact Information
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm break-all"
                >
                  {contactInfo.email}
                </Link>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  {contactInfo.phone}
                </Link>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-blue-400/30 pb-2">
              Business Hours
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-3">
                <div className="text-gray-300 text-sm">
                  <span className="font-medium text-white block">Sunday:</span>
                  <span className="text-gray-400">{contactInfo.hours.sunday}</span>
                </div>
                <div className="text-gray-300 text-sm">
                  <span className="font-medium text-white block">Mon - Sat:</span>
                  <span className="text-gray-400">06:00 AM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-blue-400/30 pb-2">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-300 transition-all duration-200 hover:translate-x-1 transform text-sm hover:pl-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-blue-300 border-b border-blue-400/30 pb-2">
              Newsletter
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                Stay up-to-date with the latest updates, health tips, and news.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 transition-all duration-200 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-sm"
                >
                  {isLoading ? (
                    <>
                      <Send className="animate-spin w-4 h-4" />
                      Subscribing...
                    </>
                  ) : isSubscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            {/* Copyright */}
            <div>
              <p className="text-gray-400 text-sm">
                © Copyright {new Date().getFullYear()} Vinay Vishal. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
