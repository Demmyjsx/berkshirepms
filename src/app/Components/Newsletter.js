'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSignup() {
  return (
    <motion.section 
      className="flex flex-col items-center py-12"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 0.52, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#E3F2FD] rounded-xl shadow-md px-8 py-10 w-full max-w-2xl flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#1A237E] mb-2">Stay Updated!</h3>
        <p className="text-gray-600 mb-6 text-center">
          Join our newsletter to get the latest news, tips, and updates from Berkshire PMS.
        </p>
        <form className="w-full flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            required
            className="flex-1 rounded-md border border-[#ECECEC] p-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF8400]"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="bg-[#FF8400] hover:bg-orange-600 transition-colors rounded-md px-6 py-3 font-semibold text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.section>
  );
}
