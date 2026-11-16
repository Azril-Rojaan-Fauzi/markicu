import React from "react";
import { ArrowUpRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function AtelierStandardsSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "PRO SHOE CARE",
      description: "Certified footwear restorers using 100% pH-neutral solvents.",
    },
    {
      icon: Sparkles,
      title: "ULTRASONIC CLEAN",
      description: "Micro-bubble cavitation bath & humidity-regulated air curing.",
    },
    {
      icon: Truck,
      title: "7KM FREE PICKUP",
      description: "Complimentary concierge pickup and prompt scheduled return.",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#0A0A0A] text-white py-20 lg:py-28 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full border border-zinc-400" />
              ATELIER STANDARDS
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              BRING BACK THE FRESHNESS OF YOUR SHOES.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              Give your favorite sneakers the meticulous surgical care they deserve. No corrosive laundry chemicals, no washing machine damage — only tailored manual craftsmanship.
            </p>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Markicu,%20saya%20ingin%20cuci%20sepatu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>LET&apos;S CLEAN YOUR SHOES</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Workshop Card & 3 Feature Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Upper Card: Workshop Showcase */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  LABORATORY GRADE
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Climate & Humidity Controlled Workshop
                </h3>
              </div>

              {/* Workshop Image Placeholder */}
              <ImagePlaceholder
                label="Foto Workshop / Fasilitas Lab Perawatan Sepatu Markicu"
                sublabel="Ukuran rekomendasi: 700 x 360 px (Peralatan modern, rak sepatu, & lab steril)"
                aspectRatio="aspect-[16/8]"
                dark={true}
                className="bg-zinc-950/70 border-zinc-800"
              />
            </div>

            {/* Lower Grid: 3 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[#121214] border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-3.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
