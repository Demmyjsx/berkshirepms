'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../constants';


const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18 } }
};
const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.5 } }
};

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = index => setActiveIndex(activeIndex === index ? null : index);

  return (
    <motion.section 
      className="bg-[#E3F2FD] py-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-120px' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.h2
          className="text-4xl font-bold text-[#1A237E] tracking-wide text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, duration: 0.9 }}
        >
          FAQ
        </motion.h2>
        <motion.p
          className="text-center text-[#1A237E] text-base mt-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.7 }}
        >
          Common questions about our product management services
        </motion.p>
        <motion.div className="space-y-6">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={item}
                onClick={() => toggleFAQ(index)}
                className="bg-white border border-[#ECECEC] rounded-lg shadow-sm cursor-pointer px-6 py-4 transition-colors hover:bg-[#E3F2FD]/60"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 4px 20px 0 #FF840044',
                  borderColor: "#FF8400"
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#1A237E]">{item.q}</h3>
                  <motion.span
                    initial={false}
                    animate={{
                      rotate: isActive ? 45 : 0,
                      color: isActive ? "#FF8400" : "#1A237E",
                      scale: isActive ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    className="text-2xl font-bold select-none"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, scale: 0.92, y: -10 }}
                      animate={{ opacity: 1, height: "auto", scale: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, scale: 0.92, y: -10 }}
                      transition={{ duration: 0.38, ease: "easeOut", type: 'spring' }}
                    >
                      <p className="text-[#1A237E] mt-3 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
