import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/schoolData';

interface HeroSectionProps {
  onOpenAdmissions?: () => void;
}

const SLIDE_DURATION = 10000; // 10 seconds per image

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Timer loop: 10 seconds per slide; resets whenever the user manually changes slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <>
      {/* 1. HERO IMAGE CAROUSEL */}
      <section
        id="hero"
        className="relative w-full aspect-[12/7] sm:aspect-auto sm:h-[440px] md:h-[480px] lg:h-[520px] flex items-end justify-center overflow-hidden bg-neutral-100 text-[#222] select-none border-b border-[#ccc]"
        aria-label="Hero Image Carousel"
      >
        {/* =========================================================================
            BACKGROUND IMAGES (EXACT 1200x700 ASPECT RATIO ADAPTIVE SIZING)
            - Sequential order: 
                1st: g17.jpg (Student life, 1200x700)
                2nd: campus3-1.jpg (Campus architecture, 1200x700)
                3rd: g16.jpg / g16.webp (Sports & Football Team, 1200x700)
            - Same duration across all slides (10s each) with smooth fade transitions
            - Small screens: aspect-[12/7] container with object-contain ensures 
              100% of the image fits edge-to-edge without being cropped
            - Large screens: balanced banner height
            ========================================================================= */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeSlide.url}
                alt={activeSlide.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (activeSlide.id === 'slide-3') {
                    (e.target as HTMLImageElement).src = '/g16.jpg';
                  }
                }}
                className="w-full h-full object-contain sm:object-cover object-center"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft bottom legibility gradient on laptop/desktop screens where text overlays the banner */}
          <div className="hidden sm:block absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" />
        </div>

        {/* =========================================================================
            HERO CONTENT FOR LARGER SCREENS (LAPTOP / DESKTOP):
            - Placed inside the hero section just like before
            - "WE REDEFINE" stacked vertically directly on top of "FUTURE"
            - Capital letters in each device
            - Zero space between them (-space-y-1 / leading-none)
            - "WE REDEFINE": 23px Poppins, sans-serif, uppercase
            - "FUTURE": 59px Anton, sans-serif, uppercase
            ========================================================================= */}
        <div className="hidden sm:flex relative z-10 w-full px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 justify-center text-center pointer-events-none">
          <div className="flex flex-col items-center justify-center -space-y-1 sm:-space-y-2 leading-none">
            <span
              className="text-[23px] font-poppins font-semibold text-[#111] uppercase tracking-wider leading-none m-0 p-0 drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              WE REDEFINE
            </span>
            <span
              className="text-[46px] md:text-[59px] font-anton tracking-wide text-[#111] uppercase leading-none m-0 p-0 drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              FUTURE
            </span>
          </div>
        </div>

        {/* =========================================================================
            NAVIGATION CONTROLS — TWO ARROWS AT THE BOTTOM CORNER
            ========================================================================= */}
        <div
          className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-5 md:bottom-6 md:right-8 z-20 flex items-center gap-1.5 sm:gap-2"
          aria-label="Image Carousel Controls"
        >
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white active:bg-neutral-200 text-[#111] border border-[#ccc] shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#222]" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white active:bg-neutral-200 text-[#111] border border-[#ccc] shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#222]" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          HERO HEADLINE BANNER FOR SMALL SCREENS:
          - Kept as it is: located just beneath the hero section
          - Capital letters in each device ("WE REDEFINE" & "FUTURE")
          - Prevents arrows from overlapping text on smaller devices
          ========================================================================= */}
      <section
        className="sm:hidden w-full bg-white border-b border-[#ccc] py-6 px-4 text-center"
        aria-label="School Vision Headline"
      >
        <div className="w-full max-w-sm mx-auto flex items-center justify-center">
          <h1 className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
            <span
              className="text-[20px] font-poppins font-semibold text-[#222] uppercase tracking-wider leading-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              WE REDEFINE
            </span>
            <span
              className="text-[34px] font-anton tracking-wide text-[#111] uppercase leading-none"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              FUTURE
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

