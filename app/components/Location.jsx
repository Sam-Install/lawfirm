'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Location = () => {
  return (
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-24">
      
      <div className="flex flex-col sm:flex-row gap-12 items-center">

    
        <motion.div
          className="w-full sm:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Location
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Visit us at{' '}
            <span className="font-semibold">
              Elephant Plaza, First Floor, Door No. 4
            </span>
            . We welcome clients for consultations and legal guidance. Our
            experienced team is ready to assist you with professional legal
            services and personalized attention.
          </p>
        </motion.div>

        
        <motion.div
          className="w-full sm:w-1/2 h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <iframe
            title="Diani Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19856.353267509263!2d39.582225975013374!3d-4.304217667935818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fe5a0b0e6bba1%3A0x2f59e17769f6f2b7!2sDiani%2C%20Kenya!5e0!3m2!1sen!2sus!4v1676329023451!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>

    </section>
  )
}

export default Location
