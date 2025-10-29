import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Welcome to\nThe Kayile',
    description: 'Experience the serenity of the Himalayas at our boutique homestay. Nestled in the mountains, we offer an authentic escape from the everyday.',
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzYxNjY5MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Book Now',
  },
  {
    id: 2,
    title: 'Authentic\nHimalayan Stay',
    description: 'Immerse yourself in local culture and traditions. Our homestay offers a genuine connection to the mountains and their people.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YXMlMjBtb3VudGFpbnxlbnwxfHx8fDE3NjE3MDQ0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore More',
  },
  {
    id: 3,
    title: 'Curated\nExperiences',
    description: 'From guided treks to local cuisine workshops, discover unique experiences that connect you with the essence of mountain living.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NjE3MDQ0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Learn More',
  },
  {
    id: 4,
    title: 'Unwind in\nNature',
    description: 'Wake up to misty mornings and panoramic views. Every moment at The Kayile is designed to restore and rejuvenate your spirit.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZpZXd8ZW58MXx8fHwxNzYxNzA0NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Book Now',
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -20 : 20,
    }),
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-secondary transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-screen items-center py-24 lg:py-24">
          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-secondary-foreground"
              >
                <h1
                  className="text-4xl sm:text-5xl lg:text-7xl mb-4 lg:mb-6 whitespace-pre-line"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base lg:text-lg text-secondary-foreground/80 mb-6 lg:mb-8 max-w-md leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary-foreground w-full sm:w-auto">
                  {slides[currentSlide].cta}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image with Swipe */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2 cursor-grab active:cursor-grabbing touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={slides[currentSlide].image}
                  alt={`The Kayile - ${slides[currentSlide].title.replace('\n', ' ')}`}
                  className="w-full h-full object-cover rounded-sm"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Swipe hint indicator - Mobile only */}
            <div className="lg:hidden absolute top-4 right-4 bg-background/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-secondary-foreground/70 pointer-events-none">
              Swipe
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center bg-secondary/80 backdrop-blur-sm border border-gold/30 rounded-full text-secondary-foreground hover:bg-secondary hover:border-gold hover:scale-110 transition-all shadow-lg group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 items-center justify-center bg-secondary/80 backdrop-blur-sm border border-gold/30 rounded-full text-secondary-foreground hover:bg-secondary hover:border-gold hover:scale-110 transition-all shadow-lg group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-8 lg:w-12 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-secondary-foreground/30 hover:bg-secondary-foreground/50 active:bg-secondary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-foreground/10">
        <motion.div
          key={currentSlide}
          className="h-full bg-gold"
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? '0%' : '100%' }}
          transition={{
            duration: isPaused ? 0 : 6,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
}