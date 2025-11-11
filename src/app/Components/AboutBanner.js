'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your actual images
const serviceCarouselImages = [
  '/transportation.jpg',
  '/realestate.jpg',
  '/health.jpg',
];

export default function ServicesHeader() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % serviceCarouselImages.length),
      3200
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 w-full text-center overflow-hidden min-h-[700px] flex flex-col justify-center items-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {serviceCarouselImages.map((img, idx) =>
            idx === current ? (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(0.85) contrast(1.1) saturate(1.1)', // 🌟 makes image vivid and clear
                }}
              />
            ) : null
          )}
        </AnimatePresence>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-white px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-4 drop-shadow-lg">
          Our Services
        </h1>
        <motion.p
          className="max-w-xl text-lg font-semibold text-whie-300 mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, type: 'spring' }}
        >
          Discover how Berkshire PMS can transform your project management with a full spectrum of services.
        </motion.p>
      </motion.div>

      {/* Indicators */}
      <div className="relative z-10 flex gap-2 mt-8 justify-center">
        {serviceCarouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx ? 'bg-orange-400 scale-110' : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
