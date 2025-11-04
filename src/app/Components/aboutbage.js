


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function VisionBadgeWide() {
  return (
    <section
      id="vision-badge-wide"
      className="relative py-20 px-6 sm:px-12 lg:px-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30 w-full"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white mb-6`}
          >
            Vision from Reality
          </h2>
          <p className="text-xl sm:text-2xl text-black dark:text-white leading-relaxed">
            Berkshir began as a vision to transform products across diverse industries.
            Our journey has been marked by innovation, excellence, and client success —
            a passion for turning ideas into impact.
          </p>
        </motion.div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
