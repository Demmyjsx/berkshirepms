'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="relative bg-white text-[#1A237E] overflow-hidden py-24 px-6 md:px-16">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-0 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 opacity-20 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[120%] h-[120%] -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-300 opacity-15 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.25 }}
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        {/* Header */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-400 mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
          className="text-base sm:text-lg md:text-xl mb-12"
        >
          Send us a message and our team at <span className="font-semibold text-orange-400">Berkshire PMS LLC</span> will get back to you promptly.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
            method="POST"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-orange-400"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[#1A237E]">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1A237E]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[#1A237E]">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Type your message here"
                className="w-full px-4 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-[#1A237E]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center gap-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">Contact Info</h2>
              <p>Phone: <span className="font-semibold">+1 (555) 123-4567</span></p>
              <p>Email: <span className="font-semibold">info@berkshirepms.com</span></p>
              <p>Office: <span className="font-semibold">135a Saka Tinubu St</span></p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">Follow Us</h2>
              <p className="font-semibold">LinkedIn | Twitter | Instagram</p>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-bold text-orange-400 mb-2">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.527628139957!2d3.430226314775702!3d6.428063125969904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50e05ad62cb%3A0x9b32fce2444d2cd0!2s35%20Saka%20Tinubu%20St%2C%20Victoria%20Island%2C%20Lagos%20101241!5e0!3m2!1sen!2sng!4v1699470207010!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
