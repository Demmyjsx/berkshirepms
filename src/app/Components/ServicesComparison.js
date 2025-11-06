'use client';
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Basic",
    price: "$199/mo",
    details: ["Unlimited team members", "Project templates", "Email support", "Basic analytics"],
    highlight: false
  },
  {
    name: "Professional",
    price: "$499/mo",
    details: ["All Basic features", "Advanced reporting", "Integrations", "Custom workflows"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Contact",
    details: ["All Pro features", "24/7 support", "Dedicated PM", "Custom contracts"],
    highlight: false
  }
];

export default function ServicesComparison() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-[#1A237E]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          Compare Our Packages
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`rounded-xl shadow-md p-7 w-full max-w-xs min-h-[350px] flex flex-col transition ${
                plan.highlight ? 'bg-[#FF8400] text-white scale-105 shadow-lg border-4 border-[#FFE0B2]' : 'bg-[#E3F2FD] text-[#1A237E]'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.13, duration: 0.57, type: 'spring' }}
              viewport={{ once: true, margin: '-70px' }}
              whileHover={{ y: -4, scale: 1.03, boxShadow: plan.highlight ? "0 8px 40px #ffffff44" : "0 2px 14px #FF840044" }}
            >
              <div className="text-2xl font-extrabold mb-2">{plan.name}</div>
              <div className="text-xl font-bold mb-2">{plan.price}</div>
              <ul className="mb-5 space-y-2">
                {plan.details.map((d, i) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <button
                className={`mt-auto rounded-lg px-6 py-2 font-medium transition-colors ${
                  plan.highlight ? "bg-white text-[#FF8400] hover:bg-orange-100" : "bg-[#FF8400] text-white hover:bg-orange-600"
                }`}
              >
                {plan.price === 'Contact' ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
