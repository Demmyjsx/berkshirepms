'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Use correct image paths for your team
const team = [
  { name: 'Olivia James', title: 'CEO', img: '/team1.jpg' },
  { name: 'Sam Lee', title: 'Head of Strategy', img: '/team2.jpg' },
  { name: 'Maya Chen', title: 'Lead Product Manager', img: '/team3.jpg' }
];

export default function AboutTeam() {
  return (
    <section className="max-w-5xl mx-auto py-14 px-4">
      <motion.h2 
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our Team
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center bg-[#E3F2FD] rounded-xl p-6 shadow w-60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7, type: 'spring' }}
            viewport={{ once: true }}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover rounded-full mb-3 border-4 border-white shadow"
              style={{ background: "#FFF" }}
            />
            <span className="font-bold text-lg">{member.name}</span>
            <span className="text-sm text-[#FF8400]">{member.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
