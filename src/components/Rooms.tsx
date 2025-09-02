'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Bed, Mountain, Heart, Star } from 'lucide-react';
import { useRef } from 'react';

const Rooms = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const rooms = [
    {
      name: "Mountain View Suite",
      description: "Breathtaking panoramic views of the Himalayan peaks",
      features: ["King Bed", "Private Balcony", "Mountain Views", "Luxury Bath"],
      image: "/upload/room1.png",
      price: "From $280/night"
    },
    {
      name: "Forest Retreat",
      description: "Secluded cabin surrounded by ancient pine trees",
      features: ["Queen Bed", "Wood Fireplace", "Forest Views", "Private Deck"],
      image: "/upload/room2.png",
      price: "From $220/night"
    },
    {
      name: "Garden Cottage",
      description: "Charming cottage with private garden and mountain backdrop",
      features: ["Double Bed", "Garden Access", "Mountain Views", "Cozy Interior"],
      image: "/upload/house2.png",
      price: "From $180/night"
    }
  ];

  return (
    <section ref={ref} id="rooms" className="section-padding bg-white newspaper-section newspaper-section-light">
      <div className="container-newspaper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-20 sm:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8 sm:mb-12 px-6 sm:px-8 py-3 sm:py-4 border border-coffee/40 text-coffee/80 text-xs font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase backdrop-blur-sm bg-white/80"
          >
            Our Rooms
          </motion.div>
          
          <h2 className="newspaper-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12">
            Where <span className="text-gradient">Comfort</span> Meets Elegance
          </h2>
          
          <div className="accent-divider mb-12 sm:mb-16"></div>
        </motion.div>

        {/* Enhanced Parallax Background Section */}
        <motion.div
          style={{ y, opacity }}
          className="relative h-[500px] sm:h-[600px] mb-20 sm:mb-24 overflow-hidden"
        >
          <div 
            className="parallax-bg"
            style={{
              backgroundImage: `url('/upload/house1.png')`
            }}
          />
          <div className="absolute inset-0 bg-charcoal/70"></div>
          
          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center p-8 sm:p-16 max-w-3xl sm:max-w-4xl"
            >
              <h3 className="newspaper-heading-light text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">
                Experience Luxury in Nature
              </h3>
              <p className="newspaper-text-dark text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed">
                Each room is thoughtfully designed to provide the perfect balance of comfort, luxury, and connection to the natural world that surrounds us.
              </p>
              <motion.a 
                href="#contact" 
                className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Stay
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Rooms - Enhanced Newspaper Style Layout */}
        <div className="space-y-24 sm:space-y-32">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? "newspaper-layout" : "newspaper-layout-reverse"}
            >
              {/* Enhanced Image Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent rounded-2xl"></div>
              </motion.div>

              {/* Enhanced Content Section */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="newspaper-heading text-3xl sm:text-4xl mb-6 sm:mb-8">
                  {room.name}
                </h3>
                
                <p className="newspaper-text-light-strong text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed">
                  {room.description}
                </p>
                
                {/* Enhanced Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {room.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-block px-4 sm:px-5 py-3 bg-coffee/15 backdrop-blur-sm border-2 border-coffee/25 text-coffee/90 text-sm sm:text-base font-medium rounded-xl hover:bg-coffee/20 transition-all duration-300 transform hover:scale-105"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                {/* Enhanced Price and CTA */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                  <span className="newspaper-heading text-2xl sm:text-3xl text-coffee font-bold">
                    {room.price}
                  </span>
                  <motion.a
                    href="#contact"
                    className="btn-primary rounded-xl px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 sm:mt-24"
        >
          <div className="accent-divider mb-6 sm:mb-8"></div>
          <p className="newspaper-text-light-medium text-base sm:text-lg italic">
            &ldquo;Where every moment becomes a memory&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
