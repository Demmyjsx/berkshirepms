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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ y: -50, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          About Berkshire PMS LLC
        </motion.h2>

        {content.map((para, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, rotate: idx % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2, type: 'spring', stiffness: 70 }}
            className="mb-6 text-lg md:text-xl leading-relaxed"
          >
            {para}
          </motion.p>
        ))}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5, type: 'spring', stiffness: 80 }}
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
