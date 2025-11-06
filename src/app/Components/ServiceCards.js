'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projectServices } from '../constants';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.17 }
  }
};

const card = {
  hidden: { opacity: 0, y: 64 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.45, duration: 0.75 } }
};

export default function ServiceCards() {
  return (
    <section className="py-16 bg-[#E3F2FD]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"

          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {projectServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: '0 8px 32px #FF840044'
              }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col transition group"
            >
              <div className="w-full mb-4 relative h-44">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 600px) 100vw, 400px"
                />
              </div>
              <h3 className="font-bold text-lg text-[#1A237E] mb-2 group-hover:text-[#FF8400] transition">{service.name}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
