"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const slides = [
  {
    image: "/hero.jpeg",
    heading: "Mwende Waweru Advocates",
    subHeading: "Your Trusted Legal Partner",
    subText: "Expert Legal Services With Integrity, Passion, and Commitment",
  },
  {
    image: "/hero2.jpeg",
    heading: "We Stand For You",
    subHeading: "Dedicated to Protecting Your Rights",
    subText: "Professional Representation You Can Trust Every Step of the Way",
  },
];

const Header = () => {
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

        
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-24 text-white">
            <h1 className="text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
              {slide.heading}
            </h1>
            <h2 className="text-2xl lg:text-3xl mt-2 font-semibold drop-shadow-md">
              {slide.subHeading}
            </h2>
            <p className="text-lg lg:text-xl mt-3 drop-shadow-sm">
              {slide.subText}
            </p>
          </div>
        </div>
      ))}

      
      <nav className="absolute top-0 left-0 w-full px-6 lg:px-12 py-4 flex items-center justify-between text-white z-30">
        
    
        <Link href="/" className="text-2xl font-bold text-orange-400 drop-shadow-lg">
          Mwende Waweru Advocates
        </Link>

    
        <ul className="hidden lg:flex gap-10 text-sm font-medium">
          <li><Link href="/home">Home</Link></li>
          <li><Link href="about">About Us</Link></li>
          <li><Link href="#practice">Practice Area</Link></li>
          <li><Link href="gallery">Gallery</Link></li>
          <li><Link href="contact">Contact Us</Link></li>
        </ul>

        
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMobileOpen(true)}
        >
          <GiHamburgerMenu />
        </div>

      </nav>

    
      {mobileOpen && (
        <div className="absolute inset-0 bg-white text-black z-40 py-10 px-6 flex flex-col gap-6">
          <div
            className="self-end text-2xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            <FaTimes />
          </div>

          <Link href="/" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
            Home
          </Link>
          <Link href="about" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
            About Us
          </Link>
          <Link href="#practice" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
            Practice Area
          </Link>
          <Link href="#gallery" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
            Gallery
          </Link>
          <Link href="contact" onClick={() => setMobileOpen(false)} className="text-lg font-semibold">
            Contact Us
          </Link>
        </div>
      )}

    </header>
  );
};

export default Header;
