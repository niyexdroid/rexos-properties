"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white fixed top-0 left-0 w-full z-50 navbar-bg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Rexos logo.svg"
              alt="Rexos Properties Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Rexos
          </Link>
          <Link href="/schedule-tour" className="hover:text-gray-300">
            Schedule Tour
          </Link>
          <Link href="/properties" className="hover:text-gray-300">
            Our Properties
          </Link>
        </nav>
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button onClick={toggleMenu} title="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden navbar-bg border-t border-gray-600">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Rexos
            </Link>
            <Link
              href="/schedule-tour"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Tour
            </Link>
            <Link
              href="/properties"
              className="block hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Properties
            </Link>
            <Link
              href="/contact"
              className="block border border-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-800 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
