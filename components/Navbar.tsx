"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#solution" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Demo", href: "#demo" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080d1a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#3DCBD2] flex items-center justify-center shadow-lg shadow-[#3DCBD2]/30 group-hover:shadow-[#3DCBD2]/50 transition-shadow">
              <Zap className="w-4 h-4 text-[#080d1a]" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              more<span className="text-[#3DCBD2]">leadz</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Contact
            </a>
            <a href="#demo" className="btn-primary text-sm">
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0d1424]/95 backdrop-blur-xl border border-white/10 rounded-2xl mx-2 mb-4 p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/10 mt-2 pt-4">
                <a
                  href="#demo"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center text-sm block"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
