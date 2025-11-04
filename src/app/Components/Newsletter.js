'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-linear-to-r from-blue-100 via-green-100 to-blue-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-3 text-gray-800"
      >
        Get more updates...
      </motion.h2>

      <p className="text-gray-600 text-sm max-w-md mb-6 font-bold">
       
        Sign up for our newsletter and be among the first to find out about
        new updates, features, and exclusive offers.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input input-bordered w-full sm:w-auto flex-1 px-4 py-2 rounded-lg border focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          disabled={!email}
          className="btn bg-black hover:bg-black px-4 rounded-sm text-white w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-700 text-sm mt-4"
        >
          🎉 Subscription successful! Thank you for joining.
        </motion.p>
      )}

      <p className="text-xs text-gray-500 mt-6 max-w-md">
        By subscribing, you agree with our{' '}
        <a href="#" className="text-green-600 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-green-600 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </motion.div>
  );
}
