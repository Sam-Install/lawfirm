'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [status, setStatus] = useState(null); // success | error

  return (
    <motion.section
      className="my-20 px-4 sm:px-8 md:px-16 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-center text-3xl font-bold text-gray-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Feel Free To Message Us
      </motion.h1>

      {/* Formspree form */}
      <motion.form
        action="https://formspree.io/f/mkovgbgw" // 👈 replace with your Formspree endpoint
        method="POST"
        className="max-w-2xl mx-auto flex flex-col gap-6"
        onSubmit={(e) => setStatus('success')} // optional simple success
      >
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            name="secondname"
            placeholder="Second Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </motion.div>

        <motion.input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Send Message
        </motion.button>

        {/* Optional status */}
        {status === 'success' && (
          <p className="text-green-600 text-center mt-2">
            Your message has been sent successfully!
          </p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Form;
