import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 lg:py-32 overflow-hidden border-t border-zinc-800">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
          DIRECT CONCIERGE LINE
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-6">
          READY TO GIVE YOUR SHOES A NEW LOOK?
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
          Send photos of your footwear to our WhatsApp concierge for immediate evaluation, turnaround scheduling, and complimentary pickup booking.
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <a
            href="https://wa.me/6283829876116?text=Halo%20Markicu,%20saya%20ingin%20konsultasi%20cuci%20sepatu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
          >
            <span>CHAT WITH US ON WHATSAPP</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Contact info indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp Direct: +62 838-2987-6116</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <div>
            <span>Instant Response: Mon - Sat (09:00 - 20:00 WIB)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
