"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", active: true },
    { label: "Services", href: "#services" },
    { label: "Price List", href: "#treatments" },
    { label: "Our Results", href: "#archive" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-black tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <span>MARKICU.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${link.active
                    ? "bg-zinc-800 text-white font-medium shadow-xs"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/6283829876116?text=Halo%20Markicu,%20saya%20ingin%20konsultasi%20cuci%20sepatu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white text-zinc-950 hover:bg-zinc-100 px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white p-2 rounded-lg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-zinc-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base px-4 py-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/6283829876116?text=Halo%20Markicu,%20saya%20ingin%20konsultasi%20cuci%20sepatu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full bg-white text-zinc-950 py-3 rounded-full text-sm font-semibold"
            >
              <span>Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
