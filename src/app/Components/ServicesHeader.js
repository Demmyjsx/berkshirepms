'use client';
import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  "Record-breaking bridges that span continents",
  "Iconic skyscrapers that define city skylines",
  "Mega port developments shaping global trade",
  "Life-saving disaster recovery initiatives",
  "Unforgettable world-class sports and cultural events",
];

export default function BerkshireImpact() {
  return (
    <section className="relative bg-[#1A237E] text-white overflow-hidden py-24 px-6 md:px-16">
      {/* Animated background glow / parallax circles */}
      <motion.div
        className="absolute top-0 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 opacity-20 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[120%] h-[120%] -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-400 opacity-15 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.25 }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -60, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } }
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-orange-400 tracking-tight"
        >
          Building Legacies That Inspire
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
          }}
          className="text-base sm:text-lg md:text-xl mb-12 leading-relaxed"
        >
          At Berkshire PMS LLC, we partner with clients to tackle the toughest challenges and craft{' '}
          <span className="font-semibold text-orange-400">innovative solutions</span> that leave a lasting mark on the world.
        </motion.p>

        {/* Highlights */}
        <motion.ul className="space-y-5 text-left sm:text-center">
          {highlights.map((item, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, x: idx % 2 === 0 ? -150 : 150, rotate: idx % 2 === 0 ? -2 : 2, scale: 0.95 },
                visible: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } }
              }}
              className="relative text-base sm:text-lg md:text-xl font-medium before:content-['★'] before:text-orange-400 before:absolute before:-left-6 sm:before:static sm:before:inline-block sm:before:mr-2"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA / Tagline */}
        <motion.div
          variants={{
            hidden: { scale: 0.9, opacity: 0, y: 20 },
            visible: { scale: 1, opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, delay: 0.5 } }
          }}
          className="mt-16"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400">
            Delivering Impact. Creating Legacies.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
