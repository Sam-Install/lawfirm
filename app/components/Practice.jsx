'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Practice = () => {

  const areas = [
    {
      image: "/corporate.jpeg",
      title: "Corporate & Commercial Law",
      description: "We provide expert advice on corporate structuring, mergers, contracts, and commercial transactions."
    },
    {
      image: "/financial.jpeg",
      title: "Financial Services",
      description: "Specializing in banking, investments, and financial regulations to secure your financial interests."
    },
    {
      image: "/litigation.jpeg",
      title: "Civil Litigation",
      description: "Our team represents clients in disputes, negotiations, and court proceedings efficiently and effectively."
    },
    {
      image: "/realestate.jpg",
      title: "Real Estate Law",
      description: "We assist with property transactions, land disputes, leasing, and regulatory compliance."
    },
  ];

  return (
    <section className='my-20 px-4 sm:px-8 md:px-12 lg:px-24'>
      
    
      <motion.h1
        className='text-2xl lg:text-3xl font-bold text-gray-800 mb-10 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Areas of Expertise
      </motion.h1>

    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {areas.map((area, idx) => (
          <motion.div
            key={idx}
            className='relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            
            <div className='relative w-full h-56'>
              <Image
                src={area.image}
                alt={area.title}
                fill
                className='object-cover rounded-t-lg'
              />
            </div>

        
            <div className='p-4 bg-white'>
              <h2 className='text-lg font-semibold text-gray-800'>{area.title}</h2>
              <p className='text-gray-600 text-sm mt-1'>{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Practice;
