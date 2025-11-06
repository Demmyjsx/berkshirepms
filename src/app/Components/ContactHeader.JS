'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHeader() {
  return (
    <section className="w-full bg-[#1A237E] py-16 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, type: 'spring' }}
      >
        Get In Touch With Us
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg mx-auto text-[#E3F2FD]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.7, type: 'spring' }}
      >
        Interested in our services? Have questions? Reach out and our team will respond quickly
      </motion.p>
    </section>
  );
}
