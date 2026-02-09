'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Practice Area", href: "/#practice" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact Us", href: "/contact" },
  ];

  const services = [
    "Corporate & Commercial Law",
    "Financial Services",
    "Civil Litigation",
    "Real Estate Law"
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-orange-400 mb-4 drop-shadow-lg">Mwende Waweru Advocates</h1>
          <p className="text-gray-200 leading-relaxed">
            Delivering expert legal services with integrity, professionalism, and dedication. Your legal needs are our priority.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-orange-400 transition-colors">{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="flex flex-col gap-2">
            {services.map((service, idx) => (
              <li key={idx} className="hover:text-orange-400 transition-colors">{service}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-8 py-4 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Mwende Waweru Advocates. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
