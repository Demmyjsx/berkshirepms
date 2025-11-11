"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <motion.section
        className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="md:col-span-2 space-y-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            Empower your team — deliver results
          </motion.h1>
          <motion.p className="text-gray-600 mb-6" variants={fadeInUp}>
            Berkshire’s innovative project management approach gives you immediate access to top-tier talent across multiple industries. 
            We combine expertise with flexible resourcing to ensure projects are completed on time, within budget, and with high quality.
          </motion.p>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={fadeInUp}>
            <motion.div className="p-6 bg-white rounded-xl shadow-sm" variants={fadeInUp}>
              <h3 className="font-semibold mb-2">Our Services</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Project Management Consulting</li>
                <li>Team Augmentation</li>
                <li>Process Optimization</li>
                <li>Quality & Risk Management</li>
                <li>Solution Services</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-sm" variants={fadeInUp}>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-4">Tell us about your project and we&apos;ll get back to you.</p>
            <form className="space-y-4">
              <input className="w-full border rounded px-3 py-2" placeholder="Name" />
              <input className="w-full border rounded px-3 py-2" placeholder="Email" />
              <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Message"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Send Message</button>
            </form>
          </motion.div>
        </motion.section>
      </main>
    );
  }
