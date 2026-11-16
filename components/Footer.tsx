import React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white border-t border-zinc-900 overflow-hidden relative">

      {/* Huge Giant Watermark */}
      <div className="w-full select-none pointer-events-none py-10 lg:py-16 text-center overflow-hidden border-b border-zinc-900/80">
        <span className="text-[18vw] font-black tracking-tighter leading-none text-zinc-900/60 block uppercase whitespace-nowrap">
          MARKICU.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1: Atelier Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black tracking-tight text-white">MARKICU.</span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">ATELIER</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Modern archival footwear preservation, clinical sneaker restoration, and bespoke leather nourishment. Engineered with surgical discipline and architectural care.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-5">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="#home" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 hover:text-white transition-colors">
                  Services &amp; Tiers
                </Link>
              </li>
              <li>
                <Link href="#treatments" className="text-zinc-400 hover:text-white transition-colors">
                  Price List
                </Link>
              </li>
              <li>
                <Link href="#archive" className="text-zinc-400 hover:text-white transition-colors">
                  Our Results &amp; Archive
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Concierge & Atelier */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-5">
              CONCIERGE &amp; ATELIER
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://wa.me/6283829876116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Direct Line</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/markicu.shoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@markicu.shoes</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>Mon - Sat: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; 2025 MARKICU. SHOE CLEANING. All rights reserved.
          </div>
          <div className="tracking-widest uppercase">
            PRESERVATION &bull; RESTORATION &bull; CRAFTSMANSHIP
          </div>
        </div>

      </div>
    </footer>
  );
}
