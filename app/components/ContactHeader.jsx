'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/hero.jpeg",
  },
  {
    image: "/hero2.jpeg",
  },
];

const ContactHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">

      {/* Background Slider */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-6 lg:px-12 py-4 flex items-center justify-between text-white z-30">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-2xl font-bold text-orange-400 drop-shadow-lg">
            Mwende Waweru Advocates
          </Link>
        </motion.div>

        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          {["Home","About Us","Practice Area","Gallery","Contact Us"].map((link, i) => (
            <motion.li
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link href={`/${link.toLowerCase().replace(" ","")}`}>{link}</Link>
            </motion.li>
          ))}
        </ul>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMobileOpen(true)}
        >
          <GiHamburgerMenu />
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute inset-0 bg-white text-black z-40 py-10 px-6 flex flex-col gap-6">
          <div className="self-end text-2xl cursor-pointer" onClick={() => setMobileOpen(false)}>
            <FaTimes />
          </div>
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">About Us</Link>
          <Link href="#practice" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">Practice Area</Link>
          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">Gallery</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">Contact Us</Link>
        </div>
      )}

      {/* Contact Page Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-24 text-white z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-lg lg:text-xl mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-orange-400 hover:underline">Home</Link> &gt;&gt; <span className="text-white">Contact Us</span>
        </motion.p>
        <motion.h1
          className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch with Us
        </motion.h1>
      </motion.div>
    </header>
  );
};

export default ContactHeader;
