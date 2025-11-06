'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutBanner() {
  return (
    <section className="bg-[#1A237E] py-16 w-full text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, type: 'spring' }}
      >
        Meet Berkshire PMS LLC
      </motion.h1>
      <motion.p 
        className="max-w-xl text-lg text-[#E3F2FD] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
      >
        Reliable, innovative project delivery—transforming businesses since 2016.
      </motion.p>
    </section>
  );
}
