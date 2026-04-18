import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-23">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-white">Ashok</span>
            <span className="text-blue-500"> Mallenipalli</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-blue-400 transition text-sm uppercase tracking-wider"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium shadow-lg shadow-blue-500/20"
            >
              Hire Me <ArrowRight size={16} />
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-t border-blue-500/20 py-6 space-y-5"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-center text-gray-300 hover:text-blue-400 transition uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}

            <div className="flex justify-center pt-2">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium"
              >
                Hire Me <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}