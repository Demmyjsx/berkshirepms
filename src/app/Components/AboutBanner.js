'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace these paths with your banner/service images
const serviceCarouselImages = [
  '/transportation.jpg',
  '/realestae.jpg',
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
    <section className="relative py-20 w-full text-center overflow-hidden min-h-[450px] flex flex-col justify-center items-center">
  
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {serviceCarouselImages.map((img, idx) =>
            idx === current ? (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 0.75, scale: 1 }}
                exit={{ opacity: 0, scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                
                  filter: ''
                }}
              />
            ) : null
          )}
        </AnimatePresence>

        <div className="absolute inset-0" />
      </div>

   
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          Our Services
        </h1>
        <motion.p
          className="max-w-xl text-lg text-[#E3F2FD] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, type: 'spring' }}
        >
          Discover how Berkshire PMS can transform your project management with a full spectrum of services.
        </motion.p>
      </motion.div>

      {/* Carousel indicators */}
      <div className="relative z-10 flex gap-2 mt-8 justify-center">
        {serviceCarouselImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-[#FF8400]' : 'bg-white/60'}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            style={{ outline: 'none', border: 'none' }}
          />
        ))}
      </div>
    </section>
  );
}
