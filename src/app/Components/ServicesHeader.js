'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHeader() {
  return (
    <section className="bg-[#1A237E] py-16 w-full text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.7, type: 'spring' }}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg text-[#E3F2FD] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.7, type: 'spring' }}
      >
        Discover how Berkshire PMS can transform your project management with a full spectrum of services.
      </motion.p>
    </section>
  );
}
