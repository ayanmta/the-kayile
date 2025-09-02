'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (video.currentTime >= 4) {
          video.currentTime = 0;
        }
      };
      
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        // Start playing once loaded
        video.play().then(() => {
          setIsVideoPlaying(true);
        }).catch(() => {
          // Fallback to image if video can't play
          setIsVideoError(true);
        });
      };
      
      const handleError = () => {
        setIsVideoError(true);
      };

      const handleCanPlay = () => {
        // Video is ready to play
        if (!isVideoPlaying) {
          video.play().then(() => {
            setIsVideoPlaying(true);
          }).catch(() => {
            setIsVideoError(true);
          });
        }
      };
      
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [isVideoPlaying]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Background Content */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        {/* Fallback Image - Shows initially and on error */}
        <img
          src="/upload/bannerback.png"
          alt="The Kayile - Himalayan Retreat"
          className={`w-full h-full object-cover object-center scale-110 transition-opacity duration-1000 ${
            isVideoLoaded && isVideoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Video Element - Optimized */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover object-center scale-110 transition-opacity duration-1000 ${
            isVideoLoaded && isVideoPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/upload/mainvid.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </motion.div>

      {/* Logo Only - Hero Centerpiece */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 80
          }}
        >
          <div className="relative">
            <img
              src="/upload/file.svg"
              alt="The Kayile - Himalayan Retreat at 9,000 feet in Chunjar Village, Rohru"
              className="hero-logo-journey object-contain drop-shadow-2xl"
            />
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-full blur-3xl scale-150"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
