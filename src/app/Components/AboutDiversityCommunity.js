'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutDiversityCommunity() {
  return (
    <section className="bg-[#1A237E] py-14">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">Diversity & Inclusion</h3>
          <ul className="text-[#E3F2FD] text-base space-y-1 list-disc pl-6">
            <li>Inclusive team from 6+ nations</li>
            <li>Equal opportunity employer</li>
            <li>Active women in leadership roles</li>
            <li>Commitment to accessibility</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">Community Impact</h3>
          <ul className="text-[#E3F2FD] text-base space-y-1 list-disc pl-6">
            <li>Pro-bono project management training to nonprofits</li>
            <li>Annual community service for local schools</li>
            <li>Ongoing partnerships with NGOs worldwide</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
