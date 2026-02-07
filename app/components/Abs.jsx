'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Abs = () => {
  return (
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-24">

      <div className="flex flex-col sm:flex-row items-center gap-12">

    
        <motion.div
          className="w-full sm:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold text-gray-800">
            About Us
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Mwende Waweru Advocates is a premier law firm dedicated to providing expert
            legal services with integrity, professionalism, and a strong commitment
            to our clients. Our team of experienced attorneys specializes in multiple
            areas of law, delivering strategic solutions tailored to meet the unique
            needs of each client.
          </p>

          <h1 className="text-2xl font-semibold text-gray-800 mt-6">
            Word From Our CEO
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed italic">
            "At Mwende Waweru Advocates, our mission is to serve our clients with
            integrity and dedication. Every case we handle receives our utmost
            attention and expertise, ensuring that justice is pursued fairly and
            effectively."
          </p>
        </motion.div>

        
        <motion.div
          className="w-full sm:w-1/2 relative h-80 sm:h-[400px] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/ceo.jpeg"
            alt="CEO or About Us"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>

    </section>
  )
}

export default Abs
