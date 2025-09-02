'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mountain, TreePine, Hammer, Star, Calendar, MapPin, Heart, Coffee, Play, Pause } from 'lucide-react';

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activePhase, setActivePhase] = useState(1);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const timelineEvents = [
    {
      phase: "Phase 1",
      title: "Vision",
      description: "Himalayan site selection",
      year: "2023",
      status: "completed",
      icon: Mountain
    },
    {
      phase: "Phase 2",
      title: "Craftsmanship",
      description: "Pinus wallichiana wood",
      year: "2024",
      status: "current",
      icon: TreePine
    },
    {
      phase: "Phase 3",
      title: "Creation",
      description: "Forest sanctuary building",
      year: "2024",
      status: "upcoming",
      icon: Hammer
    },
    {
      phase: "Phase 4",
      title: "Opening",
      description: "Mountain luxury unveiled",
      year: "2025",
      status: "upcoming",
      icon: Star
    }
  ];

  const currentEvent = timelineEvents[activePhase - 1];

  return (
    <section id="timeline" className="section-padding bg-white newspaper-section newspaper-section-light" ref={containerRef}>
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
            The Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-coffee/80 max-w-2xl mx-auto leading-relaxed"
          >
            From vision to reality
          </motion.p>
        </div>

        {/* Japanese Minimalist Tree Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          {/* Current Phase Hero - Mobile Stacked, Desktop Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="showcase-image aspect-mobile overflow-hidden rounded-3xl shadow-2xl">
                <video
                  src="/upload/construction.mov"
                  poster="/upload/house2.png"
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  ref={(el) => {
                    if (el) {
                      if (isVideoPlaying) {
                        el.play();
                      } else {
                        el.pause();
                      }
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>

                {/* Enhanced Video Controls */}
                <motion.button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 touch-target shadow-xl hover:shadow-2xl transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isVideoPlaying ? <Pause size={20} className="w-6 h-6" /> : <Play size={20} className="w-6 h-6" />}
                </motion.button>
              </div>
            </motion.div>

            {/* Current Phase Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-8 mb-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-coffee to-mocha border-2 border-coffee/40 text-white flex items-center justify-center rounded-3xl shadow-2xl">
                    <currentEvent.icon size={28} className="w-12 h-12" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm uppercase tracking-wider text-coffee/90 mb-4 font-bold">
                      {currentEvent.phase}
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-coffee">
                      {currentEvent.title}
                    </h3>
                  </div>
                </div>

                <p className="newspaper-text text-lg lg:text-xl mb-8 leading-relaxed">
                  {currentEvent.description}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-coffee">
                    {currentEvent.year}
                  </span>
                  <span className={`px-6 py-3 text-sm uppercase tracking-wider rounded-full font-bold ${
                    currentEvent.status === 'completed' ? 'bg-green-100 text-green-700' :
                    currentEvent.status === 'current' ? 'bg-gradient-to-r from-coffee to-mocha text-white' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {currentEvent.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Japanese Minimalist Tree Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Central Tree Trunk */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-coffee/30 h-full hidden lg:block"></div>
          
          {/* Mobile: Vertical Tree */}
          <div className="lg:hidden relative">
            {/* Mobile Tree Trunk */}
            <div className="absolute left-6 sm:left-8 w-0.5 bg-coffee/30 h-full"></div>
            
            {/* Timeline Events - Mobile Tree */}
            <div className="space-y-8 sm:space-y-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Tree Node */}
                  <motion.button
                    onClick={() => setActivePhase(index + 1)}
                    className={`absolute left-4 sm:left-6 top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                      activePhase === index + 1 
                        ? 'bg-coffee border-coffee scale-125 shadow-lg' 
                        : 'bg-white border-coffee/40 hover:border-coffee/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* Content Branch */}
                  <div className={`ml-12 sm:ml-16 transition-all duration-500 ${
                    activePhase === index + 1 ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-2'
                  }`}>
                    {/* Phase Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activePhase === index + 2 
                          ? 'bg-coffee/20 text-coffee scale-110' 
                          : 'bg-coffee/5 text-coffee/80'
                      }`}>
                        <event.icon size={18} className="sm:w-6 sm:h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm sm:text-base font-medium text-coffee/80">
                            {event.phase}
                          </p>
                          <span className="text-lg sm:text-xl font-serif text-coffee font-medium">
                            {event.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="newspaper-heading text-base sm:text-lg font-medium text-charcoal">
                        {event.title}
                      </h4>
                      
                      <p className="newspaper-text-light-strong text-sm sm:text-base leading-relaxed">
                        {event.description}
                      </p>

                      {/* Status */}
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
                          event.status === 'completed' ? 'bg-green-100 text-green-700' :
                          event.status === 'current' ? 'bg-coffee/10 text-coffee' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal Tree */}
          <div className="hidden lg:block relative">
            {/* Timeline Events - Desktop Tree */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Tree Node */}
                  <motion.button
                    onClick={() => setActivePhase(index + 1)}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                      activePhase === index + 1 
                        ? 'bg-coffee border-coffee scale-125 shadow-lg' 
                        : 'bg-white border-coffee/40 hover:border-coffee/60'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  
                  {/* Content Branch */}
                  <div className={`w-5/12 transition-all duration-500 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  } ${activePhase === index + 1 ? 'opacity-100' : 'opacity-60'}`}>
                    {/* Phase Header */}
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activePhase === index + 2 ? 'bg-coffee/20 text-coffee scale-110' 
                          : 'bg-coffee/5 text-coffee/80'
                      }`}>
                        <event.icon size={20} />
                      </div>
                      
                      <div className={`text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <p className="text-sm font-medium text-coffee/80 mb-1">
                          {event.phase}
                        </p>
                        <span className="text-xl font-serif text-coffee font-medium">
                          {event.year}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="newspaper-heading text-lg font-medium text-charcoal">
                        {event.title}
                      </h4>
                      
                      <p className="newspaper-text-light-strong text-base leading-relaxed">
                        {event.description}
                      </p>

                      {/* Status */}
                      <div className={`flex items-center gap-2 ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}>
                        <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
                          event.status === 'completed' ? 'bg-green-100 text-green-700' :
                          event.status === 'current' ? 'bg-coffee/10 text-coffee' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <div className="text-center">
            <h3 className="newspaper-heading text-lg sm:text-xl mb-4 sm:mb-6">
              Progress
            </h3>
            
            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto bg-coffee/10 rounded-full h-2 mb-4 sm:mb-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(activePhase / timelineEvents.length) * 100}%` }}
                transition={{ duration: 1, delay: 1.4 }}
                viewport={{ once: true }}
                className="h-full bg-coffee rounded-full transition-all duration-500"
              />
            </div>
            
            <p className="text-sm sm:text-base text-coffee/80">
              Phase {activePhase} of {timelineEvents.length}
            </p>
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="accent-divider mb-4 sm:mb-6"></div>
          <p className="newspaper-text-light-medium text-sm sm:text-base italic px-4">
            &ldquo;Every phase brings us closer to your mountain sanctuary&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
