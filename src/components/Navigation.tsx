'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation immediately, but change style on scroll
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Big Logo */}
          <div className="nav-logo-container">
            <div className="relative">
              <img
                src="/upload/file.svg"
                alt="Kayile"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link font-medium transition-colors duration-200 relative ${
                  isScrolled ? 'text-black/80 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className={`nav-cta px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              isScrolled 
                ? 'bg-black text-white hover:bg-black/80' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30'
            }`}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'} ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-4 border-t ${isScrolled ? 'border-black/10' : 'border-white/20'}`}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`mobile-nav-item block px-4 py-2 font-medium rounded-lg transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-black/80 hover:text-black hover:bg-black/5' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className={`nav-cta w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-black text-white hover:bg-black/80' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/30'
                }`}>
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
