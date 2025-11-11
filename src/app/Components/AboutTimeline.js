'use client';
import React from 'react';
import { motion } from 'framer-motion';

const content = [
  "At Berkshire PMS LLC, we believe that infrastructure is the gateway to opportunity — strengthening communities, expanding access, and safeguarding our planet.",
  "We manage every project with responsibility, integrity, and a commitment to excellence — reducing environmental impact, delivering social value, and fostering a workplace where everyone thrives.",
  "We recognize the urgent challenges facing society and embrace our role to act with impact and longevity, partnering with organizations who share a vision for positive change.",
  "By listening to clients and the communities we serve, we aim to improve lives, create sustainable legacies, and leave a lasting mark for generations to come.",
  "At Berkshire PMS LLC, ideas have no limits. Our global expertise is ready to serve anyone, anywhere, and our culture encourages bold, innovative thinking.",
  "We are trusted project managers, planners, engineers, and consultants, delivering services across cities, transportation, buildings, water, energy, and the environment. Working as one unified team, we are driven by a shared purpose: to deliver a better world."
];

export default function AboutBerkshire() {
  return (
    <section className="bg-gradient-to-r from-[#0D47A1] to-[#1976D2] text-white py-20 px-6 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 15 } }
          }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          About Berkshire PMS LLC
        </motion.h2>

        {content.map((para, idx) => (
          <motion.p
            key={idx}
            variants={{
              hidden: { opacity: 0, x: idx % 2 === 0 ? -100 : 100, rotate: idx % 2 === 0 ? -2 : 2 },
              visible: { opacity: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 70 } }
            }}
            className="mb-6 text-lg md:text-xl leading-relaxed"
          >
            {para}
          </motion.p>
        ))}

        <motion.div
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 0.5 } }
          }}
          className="mt-10 text-center"
        >
          <span className="text-2xl md:text-3xl font-semibold tracking-wide text-yellow-400">
            Delivering a better world, together.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
