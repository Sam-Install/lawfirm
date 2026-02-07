'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/hero.jpeg",
    heading: "About Us",
    subHeading: "Your Trusted Legal Partner",
    subText:
      "Learn more about Mwende Waweru Advocates and how we provide exceptional legal services with integrity, passion, and commitment.",
  },
];

const Header2 = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">

      
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: current === idx ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

        
          <div className="absolute inset-0 bg-black/60" />

          
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-24 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
              {slide.heading}
            </h1>
            <h2 className="text-2xl lg:text-3xl mt-2 font-semibold drop-shadow-md">
              {slide.subHeading}
            </h2>
            <p className="text-lg lg:text-xl mt-3 drop-shadow-sm max-w-3xl">
              {slide.subText}
            </p>
          </motion.div>
        </motion.div>
      ))}

    
      <motion.nav
        className="absolute top-0 left-0 w-full px-6 lg:px-12 py-4 flex items-center justify-between text-white z-30"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link href="/" className="text-2xl font-bold text-orange-400 drop-shadow-lg">
          Mwende Waweru Advocates
        </Link>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="practice">Practice Area</Link></li>
          <li><Link href="gallery">Gallery</Link></li>
          <li><Link href="contact">Contact Us</Link></li>
        </ul>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMobileOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </motion.nav>

      
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute inset-0 bg-white text-black z-40 py-10 px-6 flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="self-end text-2xl cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              <FaTimes />
            </div>

            <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
              About Us
            </Link>
            <Link href="practice" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
              Practice Area
            </Link>
            <Link href="gallery" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
              Gallery
            </Link>
            <Link href="contact" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header2;
