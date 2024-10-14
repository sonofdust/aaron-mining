'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 hidden md:block">
            <h3 className="text-lg font-bold mb-2">MiningCo</h3>
            <p>Leading global mining company</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 hidden md:block">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/ore_quality" className="hover:underline">Ore Quality</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0 hidden md:block">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p>Email: info@miningco.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 hidden md:block">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons or links here */}
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 text-center">
          <p>&copy; 2024 Aaron Mining LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
