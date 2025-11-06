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
   <section id="key-services" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 max-w-6xl text-center">
        <h1
          className={`${spaceGrotesk.className} text-5xl font-bold text-gray-900 mb-14`}
        >
          Our Key Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceSteps.map((step) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full h-40 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={step.image}
                  alt={step.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                {step.name}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
