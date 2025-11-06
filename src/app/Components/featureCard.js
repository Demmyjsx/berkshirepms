'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Jumbo() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/estate-dubai.jpg')" }}
        initial={{ y: 200, opacity: 0 }} // start below viewport
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-left max-w-5xl mx-auto"
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
       
        <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
          Empowering Businesses Across Industries
        </p>

       
        <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="text-orange-300 bg-clip-text ">
            Innovative Project
          </span>{" "}
          Management Solutions
        </h1>

        
        <p className="mt-4 text-lg font-bold text-white lg:text-2xl sm:mt-6 sm:px-0">
          We are a Leading Project Management Company specializing in diverse sectors from Real Estate to finance and more. We drive innovation and growth through strategic product development and management.
        </p>

       
        <Link
          href="#key-services"
          className="relative mt-8 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white rounded-lg bg-orange-400  hover:bg-orange-600  focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900"
        >
          Explore Our Services
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>

        {/* Stats / small info */}
        <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-700">
          {/* <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          {/* <span className="ml-2 text-base font-normal text-white">
            42 projects delivered last month
          </span> */}
        </div>
      </motion.div>
    </div>
  );
}
