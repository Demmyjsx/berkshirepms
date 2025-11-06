'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCareersCta() {
  return (
    <section className="bg-[#E3F2FD] py-16 mt-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-6 text-[#1A237E] text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
        >
          Join Our Team
        </motion.h3>
        <p className="text-base text-[#1A237E] mb-4 text-center max-w-2xl">
          We&apos;re always looking for passionate, diverse, and driven talent. Check our <a href="/careers" className="underline text-[#FF8400] hover:text-orange-600 transition-colors">Careers</a> page for current openings, internship opportunities, and FAQs.
        </p>
      </div>
    </section>
  );
}
