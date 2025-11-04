'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Location() {
  return (
    <section className="bg-linear-to-r from-blue-100 via-green-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">

      
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-black text-center mb-8"
      >
        Our Location
      </motion.h2>

      {/* Animated Address */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-center mb-12 font-medium tracking-wide  text-black"
      >
        35 Saka Tinubu St, Eti-Osa, Lagos 101241, Lagos, Nigeria
      </motion.p>

      {/* Animated Map Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-white/20"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.527628139957!2d3.430226314775702!3d6.428063125969904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50e05ad62cb%3A0x9b32fce2444d2cd0!2s35%20Saka%20Tinubu%20St%2C%20Victoria%20Island%2C%20Lagos%20101241!5e0!3m2!1sen!2sng!4v1699470207010!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      
        <div className="absolute inset-0 bg-linear-to-tr from-indigo-900/30 via-purple-800/20 to-transparent pointer-events-none"></div>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
