'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ComingSoon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="coming-soon" className="relative coming-soon-section overflow-hidden" ref={containerRef}>
      {/* Improved Blended Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal/95 to-black"></div>
      
      <div className="relative container-newspaper z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-6 py-3 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            Coming Soon
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Opening
          </motion.h2>
        </div>

        {/* Enhanced 2026 Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="inline-block">
            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-coffee tracking-tight mb-6 drop-shadow-2xl">
              2026
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-coffee/50 via-coffee to-coffee/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg lg:text-xl text-coffee/80 font-bold tracking-wide">
              The year of transformation
            </p>
          </div>
        </motion.div>

        {/* Enhanced Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <p className="newspaper-text-dark text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed px-4 font-semibold">
            A luxury mountain sanctuary unlike anything you&apos;ve experienced before, where every detail tells a story of craftsmanship and connection.
          </p>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.a
            href="#contact"
            className="spotify-btn inline-flex items-center gap-4 text-lg px-12 py-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join the Waitlist
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Enhanced Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-coffee/40 via-coffee/60 to-coffee/40 mx-auto mb-8 rounded-full"></div>
          <p className="newspaper-text-dark text-lg lg:text-xl italic px-4 max-w-3xl mx-auto">
            &ldquo;The greatest adventures begin with anticipation&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
