'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';
import { servicesList } from '../constants';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});   

export default function ServicesGrid() {
  return (
    <section className="px-4 md:px-8 lg:px-20 py-20 bg-linear-to-b from-indigo-50 via-white to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white`}
      >
        Our Services Across Industries
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {servicesList.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              <strong>Products:</strong> {service.products}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 mb-3 space-y-1">
              {service.services.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              💡 {service.example}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
