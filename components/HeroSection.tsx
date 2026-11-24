import React from "react";
import { ArrowUpRight, Plus, Sparkles, X } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-[#0A0A0A] overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top pill badge */}


            {/* Giant Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
              SEPATU ANDA<br />
              LAYAK MENDAPAT<br />
              PERAWATAN <span className="text-blue-500">TERBAIK.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mb-10">
              Pembersihan sepatu profesional, ekstraksi noda mendalam, dan nutrisi material premium agar sneaker favorit Anda selalu bersih, segar, dan siap dipakai kembali.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14 w-full sm:w-auto">
              <a
                href="https://wa.me/6283829876116?text=Halo%20Markicu,%20saya%20ingin%20konsultasi%20cuci%20sepatu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
              >
                <span>HUBUNGI KAMI DI WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              >
                <span>Lihat Layanan</span>
                <Plus className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Key Stats Counter */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">15.000+</div>
                <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mt-1">SEPATU DITANGANI</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
                <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mt-1">FORMULA PH-NETRAL</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">GRATIS 7KM</div>
                <div className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider mt-1">ANTAR JEMPUT</div>
              </div>
            </div>
          </div>

          {/* Right Column: Specimen Showcase Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-[#121214] border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden">
              {/* Card Header Tag */}


              {/* Showcase Image */}
              <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                <ImagePlaceholder
                  label="Foto / Video Showcase: Live Foam Cleaning Treatment Specimen"
                  src="/images/hero-specimen.webp"
                  alt="Live Treatment Specimen - Foam Extraction"
                  aspectRatio="aspect-[4/3]"
                  priority={true}
                  dark={true}
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>

              {/* Bottom spec bar */}
              <div className="flex items-center justify-between bg-zinc-900/90 border border-zinc-800/80 rounded-xl px-4 py-3">
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                    PROSES PERAWATAN LANGSUNG
                  </div>
                  <div className="text-sm font-semibold text-zinc-200">
                    Ekstraksi Busa Ultra-Halus
                  </div>
                </div>
                <button
                  aria-label="Treatment details"
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
