"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectPhases } from "../constants/index";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Banner() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl font-extrabold tracking-tight`}
          >
            Our Core Project Expertise
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We deliver disciplined project leadership across construction, technology,
            marketing and social impact initiatives — ensuring accountability, compliance,
            and measurable results.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectPhases.map((phase, idx) => (
            <motion.article
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl">{phase.icon}</div>
                <h3 className="text-lg font-semibold">{phase.title}</h3>
              </div>

              <div className="text-sm text-gray-700 mb-3">
                {Array.isArray(phase.description) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {phase.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{phase.description ?? ""}</p>
                )}
              </div>

              <p className="text-sm text-gray-500 italic mb-4">{phase.example}</p>

              <div className="mt-auto">
                <Link
                  href="/servicePage"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                >
                  Learn more about {phase.title.split(" ")[0]}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/servicePage"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            See More Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
