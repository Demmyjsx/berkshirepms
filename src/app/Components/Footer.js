'use client';
import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#1A237E] py-10 mt-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-4">
        <div className="flex flex-col gap-3">
          <div className="font-extrabold text-white text-lg">Berkshire PMS LLC</div>
          <div className="text-gray-400 text-xs">&copy; 2024 Berkshire PMS LLC. All rights reserved.</div>
          <div className="flex gap-3 mt-2">
            <motion.a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, backgroundColor: "#FF8400" }}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1A237E] hover:bg-[#FF8400] text-white transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, backgroundColor: "#FF8400" }}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1A237E] hover:bg-[#FF8400] text-white transition"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          <div>
            <div className="font-bold text-white mb-3">COMPANY</div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Press</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3">SERVICES</div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Planning</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Collaboration</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Analytics</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3">LEGAL</div>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-[#FF8400] transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
