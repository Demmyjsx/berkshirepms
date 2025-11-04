'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const faqItems = [
    {
      q: "What does a product management service actually do?",
      a: "Product management services help businesses plan, develop, and launch products effectively. This includes market research, defining requirements, coordinating between teams, and ensuring the product meets customer and business goals.",
    },
    {
      q: "How does product management differ from project management?",
      a: "Product management focuses on the strategy, vision, and lifecycle of a product, while project management handles the execution and delivery of specific projects that support that strategy.",
    },
    {
      q: "Do I need a product manager for a small business or startup?",
      a: "Yes. Even small businesses benefit from product management because it ensures features are prioritized effectively, development stays aligned with customer needs, and limited resources are used strategically.",
    },
    {
      q: "What industries benefit most from product management services?",
      a: "Product management is valuable across all industries — from technology, construction, and real estate to finance and manufacturing — helping teams deliver impactful products efficiently.",
    },
    {
      q: "How do product managers measure success?",
      a: "They measure success using KPIs such as customer satisfaction, feature adoption, time-to-market, and business ROI. Continuous feedback loops ensure goals remain aligned with market needs.",
    },
    {
      q: "Can Berkshire help manage existing products?",
      a: "Absolutely. We assess current performance, analyze customer data, and develop strategies to optimize existing products for better results and market competitiveness.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="bg-linear-to-r from-blue-100 via-green-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">

        {/* Top Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              Berkshire
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Services</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700 sm:mx-auto lg:my-8" />

        {/* FAQ Section */}
        <div className="text-gray-800 dark:text-gray-300 p-8">
          <div className="max-w-5xl mx-auto p-4 py-8 mt-12">
            <h4 className="text-4xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center">
              FAQ
            </h4>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-2">
              Common questions about our product management services
            </p>

            <div className="space-y-6 mt-12">
              {faqItems.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => toggleFAQ(index)}
                    className="border-b border-gray-400/50 pb-4 cursor-pointer transition-colors duration-300 hover:bg-white/10 rounded-lg px-3"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.q}
                      </h3>
                      <motion.span
                        initial={false}
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 dark:text-gray-400 text-2xl font-bold select-none"
                      >
                        +
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <p className="text-gray-700 dark:text-gray-400 mt-3 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <span className="block text-sm text-gray-700 sm:text-center dark:text-gray-400 mt-8">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Berkshire™
          </a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
