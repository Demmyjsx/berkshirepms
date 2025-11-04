'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Ceo() {
  return (
    <section
      id="vision-badge"
      className="relative py-16 px-6 sm:px-12 lg:px-20  "
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
      
        <motion.div
          className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-10 shadow-2xl max-w-xl border border-white/30"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2
            className={`${spaceGrotesk.className} text-3xl sm:text-4xl font-bold  text-black dark:text-whitemb-4`}
          >
            Vision from Reality
          </h2>
          <p className="text-lg  text-black dark:text-white leading-relaxed">
            Berkshir began as a vision to transform products across diverse industries.
            Our journey has been marked by innovation, excellence, and client success —
            a passion for turning ideas into impact.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/Ceo.jpg"
            alt="Berkshir Badge"
            width={480}
            height={480}
            className=" shadow-xl border-4 rounded  object-cover"
          />
        </motion.div>
      </div>

      
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}