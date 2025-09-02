'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const galleryImages = [
    {
      src: "/upload/room1.png",
      alt: "Luxury Room Interior",
      category: "Interior",
      description: "Where comfort meets elegance"
    },
    {
      src: "/upload/room2.png",
      alt: "Premium Suite",
      category: "Luxury",
      description: "A peaceful retreat in nature"
    },
    {
      src: "/upload/house1.png",
      alt: "Mountain Sanctuary",
      category: "Exterior",
      description: "Dawn breaks over the Himalayan peaks"
    }
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-white newspaper-section newspaper-section-light" ref={containerRef}>
      <div className="container-newspaper">
        {/* Header with Parallax */}
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 border border-coffee/40 text-coffee/90 text-xs font-light tracking-[0.3em] uppercase backdrop-blur-sm"
          >
            Visual Journey
          </motion.div>
          
          <h2 className="newspaper-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8 px-4">
            A <span className="text-gradient">Story</span> in Images
          </h2>
          
          <div className="accent-divider mb-8 sm:mb-12"></div>
        </motion.div>

        {/* Editorial-Style Hero Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          {/* Main Hero Image */}
          <div className="relative mb-8 sm:mb-10">
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
              className="showcase-image aspect-mobile sm:aspect-wide overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="w-full h-full object-cover transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Enhanced Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-coffee/90 mb-2 font-medium">
                      {galleryImages[activeImage].category}
                    </p>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                      {galleryImages[activeImage].alt}
                    </h3>
                    <p className="text-base sm:text-lg text-white/95 leading-relaxed">
                      {galleryImages[activeImage].description}
                    </p>
                  </div>
                  
                  {/* Enhanced Navigation Controls */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={prevImage}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 touch-target shadow-xl hover:shadow-2xl transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 touch-target shadow-xl hover:shadow-2xl transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Thumbnail Navigation - 2 Column Mobile Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-square overflow-hidden rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 ${
                  activeImage === index 
                    ? 'ring-4 ring-coffee/60 scale-105' 
                    : 'hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeImage === index 
                    ? 'bg-coffee/30' 
                    : 'bg-black/30 hover:bg-black/20'
                }`}></div>
                
                {/* Thumbnail Label */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs text-white font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg text-center">
                    {image.category}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="accent-divider mb-4 sm:mb-6"></div>
          <p className="newspaper-text-light-medium text-sm sm:text-base italic px-4">
            &ldquo;Every image tells a story of luxury, nature, and unforgettable moments&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

