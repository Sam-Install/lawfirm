'use client'

import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <section className="my-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-14">

    
        <div className="w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/lawcloth.jpeg"
            alt="Mission and Vision"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex flex-col gap-10">

          <div>
            <h2 className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Our Mission
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dedicated to Justice & Integrity
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to provide exceptional legal services grounded in
              integrity, professionalism, and dedication. We are committed to
              protecting our clients’ rights, delivering practical legal
              solutions, and ensuring justice is served with diligence and care.
            </p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest text-orange-500 font-semibold mb-2">
              Our Vision
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              A Trusted Legal Partner
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our vision is to be a leading law firm in Kenya, recognized for
              excellence, ethical practice, and client-centered legal services.
              We aim to build lasting relationships based on trust, results, and
              professional excellence.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Mission
