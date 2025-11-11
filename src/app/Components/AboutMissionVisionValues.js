'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaGlobeAfrica } from 'react-icons/fa';
import { mission, vision, values,} from '../constants';

export default function AboutTimeline() {
  return (
    <section className="bg-[#E3F2FD] py-14">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-2xl mb-2 text-[#1A237E]">Mission</h3>
          <p className="mb-6 text-[#1A237E]">{mission}</p>
          <h3 className="font-bold text-2xl mb-2 text-[#1A237E]">Vision</h3>
          <p className="mb-6 text-[#1A237E]">{vision}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="font-bold text-2xl mb-2 text-[#1A237E]">Values</h3>
          {values.map((value) => (
            <div key={value.label} className="p-4 bg-white rounded-lg shadow border-l-4 border-[#FF8400]">
              <span className="font-semibold">{value.label}</span>
              <p className="text-sm text-[#1A237E] mt-1">{value.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
