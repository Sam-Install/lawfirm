'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/hero.jpeg',
  '/hero2.jpeg',
  '/lawcloth.jpeg',
  '/hammer.jpeg',
  '/ceo.jpeg',
  '/hero3.jpeg',
];

export default function GalleryPage() {
  return (
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
