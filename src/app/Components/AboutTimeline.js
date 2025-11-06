'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaGlobeAfrica } from 'react-icons/fa';

const timeline = [
  { year: '2016', event: 'Founded Berkshire PMS LLC', icon: <FaLightbulb /> },
  { year: '2018', event: 'Launched first SaaS product', icon: <FaGlobeAfrica /> },
  { year: '2020', event: 'Expanded to International Clients', icon: <FaHandshake /> },
  { year: '2024', event: '100+ Projects Completed', icon: <FaUsers /> },
];

export default function AboutTimeline() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.year}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.12, duration: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <span className="w-12 h-12 flex items-center justify-center bg-[#E3F2FD] rounded-full mb-2 text-2xl text-[#FF8400] shadow">{item.icon}</span>
            <span className="font-semibold">{item.year}</span>
            <span className="mx-2 mt-2 text-center text-[#1A237E] text-sm">{item.event}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
