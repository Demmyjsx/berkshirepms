'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative lg:mt-5 overflow-hidden py-24 px-6 sm:px-12 lg:px-20 bg-linear-to-r from-orange-300 via-amber-500 to-orange-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 ">
        {/* ===== Text Section ===== */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2
            className={`${spaceGrotesk.className} text-5xl  text-black dark:text-white font-extrabold mb-6`}
          >
            About Us
          </h2>
          <p className="text-3xl leading-relaxed text-black dark:text-white">
            We are a leading{' '}
            <span className="font-semibold  text-black dark:text-white">product management company</span>{' '}
            specializing in 10 industries — from Real Estate to Tech, Entertainment, Logistics,
            and more.
            <br />
            <br />
            Our mission is to drive innovation and deliver exceptional results for our clients
            across every project we manage.
          </p>
        </motion.div>

        {/* ===== Image Section ===== */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Desktop Layout: overlapping images */}
          <div className="hidden lg:block relative w-full h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -150, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute z-30 -top-12 left-10"
            >
              <Image
                src="/student.jpg"
                alt="Education"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl border-4 border-white dark:border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -150, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute z-20 top-0 right-20"
            >
              <Image
                src="/manufacture.jpg"
                alt="Manufacturing"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl border-4 border-white dark:border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 150, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute z-10 bottom-0 right-10"
            >
              <Image
                src="/energy.jpg"
                alt="Energy"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl border-4 border-white dark:border-gray-700"
              />
            </motion.div>
          </div>

          {/* Mobile Layout: stacked images below text */}
          <div className="flex flex-col items-center justify-center gap-6 lg:hidden mt-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image
                src="/education.jpg"
                alt="Education"
                width={200}
                height={200}
                className="rounded-xl shadow-lg border-2 border-white dark:border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image
                src="/manufacture.jpg"
                alt="Manufacturing"
                width={200}
                height={200}
                className="rounded-xl shadow-lg border-2 border-white dark:border-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image
                src="/energy.jpg"
                alt="Energy"
                width={200}
                height={200}
                className="rounded-xl shadow-lg border-2 border-white dark:border-gray-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
