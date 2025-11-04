'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { serviceSteps } from '../constants/index';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Grid() {
  return (
    <section id="key-services" className="py-20">
      <div className="mx-auto px-4 max-w-6xl text-center">
        <h1
          className={`${spaceGrotesk.className} text-5xl font-bold text-center mb-12`}
        >
          Our Key Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceSteps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center p-6 bg-white/5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-6">{step.icon}</div>
              <h2 className="text-xl font-bold text-gray-500 mb-3">{step.name}</h2>
              <p className=" text-sm  text-gray-800 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
