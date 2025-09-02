'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TreePine, Apple, Mountain } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: TreePine,
      title: "Pinus Wallichiana",
      description: "Dark burnt wood craftsmanship"
    },
    {
      icon: Apple,
      title: "Apple Orchard",
      description: "Dense forest sanctuary"
    },
    {
      icon: Mountain,
      title: "9,000 ft",
      description: "Chanchal Valley views"
    }
  ];

  return (
    <section id="about" className="section-padding bg-charcoal newspaper-section newspaper-section-dark" ref={containerRef}>
      <div className="container-newspaper">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            The Kayile
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Himalayan luxury at 9,000 feet
          </motion.p>
        </div>

        {/* Hero Image */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          className="showcase-image aspect-[16/9] mb-20 overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/upload/house1.png"
            alt="The Kayile - Himalayan Retreat"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
        </motion.div>

        {/* Core Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Crafted from the finest Pinus wallichiana, nestled within pristine forests and apple orchards, 
            offering breathtaking views of the majestic Chanchal Valley.
          </p>
        </motion.div>

        {/* Three Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4">
            <p className="text-white/90 text-lg">
              Chunjar Village, Rohru • Himachal Pradesh
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
