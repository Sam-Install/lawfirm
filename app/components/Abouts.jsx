'use client';

import React from 'react';
import Image from 'next/image';

const Abouts = () => {
  return (
    <section className="my-20 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">

        
        <div className="w-full md:w-1/2">
          <span className="text-orange-500 font-semibold uppercase  tracking-wide">
            Know About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
            Who We Are
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Mwende Waweru Advocates is a premier law firm dedicated to delivering exceptional legal services with integrity, professionalism, and unwavering commitment to our clients. Our experienced team of attorneys specializes in a broad range of legal areas, offering strategic solutions tailored to meet the unique needs of individuals and businesses alike. We pride ourselves on our transparent communication, ethical practices, and relentless pursuit of justice, ensuring that every client receives personalized attention and representation. At Mwende Waweru Advocates, your legal challenges are our priority, and we are here to guide you every step of the way with expertise, care, and trust.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 md:gap-6">
          
          
          <div className="relative w-full h-64 md:h-[400px] lg:h-[500px] row-span-2 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hammer.jpeg" 
              alt="About Image 1"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="relative w-full h-32 md:h-[190px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/lawcloth.jpeg"
              alt="About Image 2"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="relative w-full h-32 md:h-[190px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero2.jpeg"
              alt="About Image 3"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Abouts;
