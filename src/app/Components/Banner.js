"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Banner() {
  return (
    <div className="hero my-15 text-center bg-base-200">
      <div className="hero-content text-center max-w-5xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h1
          className={`${spaceGrotesk.className} text-5xl sm:text-6xl font-bold my-5`}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className={`mb-2 text-xl sm:text-2xl lg:text-3xl tracking-tight text-gray-900 dark:text-gray-700`}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="block mb-3">
            Our team possesses deep knowledge and experience across a wide range of industries,
            allowing us to understand the unique challenges each sector faces.
          </span>
          <span className="block mb-3">
            We leverage this expertise to deliver tailored solutions that drive growth, efficiency,
            and innovation for our clients.
          </span>
          <span className="block mb-3">
            By combining industry insight with practical strategies, we ensure measurable results
            and lasting impact that align with our clients’ long-term vision.
          </span>
          <span className="block">
            With a commitment to excellence and collaboration, we transform challenges into
            opportunities for success across every industry we serve.
          </span>
        </motion.p>
      </div>
    </div>
  );
}
