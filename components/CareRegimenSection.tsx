import React from "react";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

interface RegimenPackage {
  id: string;
  badge: {
    label: string;
    style: string;
  };
  duration: string;
  title: string;
  category: string;
  description: string;
  priceUsd: string;
  priceIdr: string;
  imageLabel: string;
  recommendedSize: string;
}

export default function CareRegimenSection() {
  const packages: RegimenPackage[] = [
    {
      id: "deep-clean",
      badge: {
        label: "BEST SELLER",
        style: "bg-zinc-950 text-white",
      },
      duration: "2-3 DAYS",
      title: "KESELURUHAN (DEEP CLEAN)",
      category: "FULL TREATMENT",
      description:
        "Complete shoe cleaning inside and out. Deep insole sterilization, unthreaded lace bath, upper extraction, and outsole de-gumming.",
      priceUsd: "$35",
      priceIdr: "Rp 85.000",
      imageLabel: "Foto Treatment: Keseluruhan Deep Clean (Before/After atau Tampak Sepatu Bersih)",
      recommendedSize: "400 x 260 px",
    },
    {
      id: "fast-clean",
      badge: {
        label: "EXPRESS CLEAN",
        style: "bg-amber-500 text-white",
      },
      duration: "24 HOURS",
      title: "FAST CLEAN",
      category: "RAPID ROTATION",
      description:
        "Essential exterior care. Midsole scuff removal, upper refresh, and traction wash for daily gym pairs or rotation fresheners.",
      priceUsd: "$25",
      priceIdr: "Rp 60.000",
      imageLabel: "Foto Treatment: Fast Clean Quick Exterior Refresh",
      recommendedSize: "400 x 260 px",
    },
    {
      id: "all-white",
      badge: {
        label: "SPECIALIZED",
        style: "bg-blue-600 text-white",
      },
      duration: "3-4 DAYS",
      title: "ALL WHITE SHOES",
      category: "BRIGHTENING REGIMEN",
      description:
        "Tailored optical brightening treatment for pure monochrome sneakers, mesh canvas, and triple-white leather with anti-yellow protection.",
      priceUsd: "$40",
      priceIdr: "Rp 95.000",
      imageLabel: "Foto Treatment: All White Shoes Brightening Care",
      recommendedSize: "400 x 260 px",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#F9FAFB] text-zinc-900 py-20 lg:py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              // CORE CARE REGIMEN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
              KEEP YOUR SNEAKERS FRESH.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed">
            Artisanal restorative treatments engineered specifically for delicate primeknit, butter-soft suede, unsealed archival leather, and daily runners.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${pkg.badge.style}`}>
                    {pkg.badge.label}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 tracking-wider">
                    {pkg.duration}
                  </span>
                </div>

                {/* Package Image Placeholder */}
                <div className="mb-6">
                  <ImagePlaceholder
                    label={pkg.imageLabel}
                    sublabel={`Ukuran: ${pkg.recommendedSize}`}
                    aspectRatio="aspect-[16/10]"
                    dark={false}
                    className="bg-zinc-50 border-zinc-200"
                  />
                </div>

                {/* Package Details */}
                <h3 className="text-lg font-black tracking-tight text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {pkg.description}
                </p>
              </div>

              {/* Bottom Price & Action Row */}
              <div className="pt-4 border-t border-zinc-100 flex items-end justify-between">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    {pkg.category}
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl font-black text-zinc-950">{pkg.priceUsd}</span>
                    <span className="text-xs font-medium text-zinc-400">/ {pkg.priceIdr}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Markicu,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${pkg.title}`}
                  className="w-10 h-10 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-xs"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Markicu,%20saya%20ingin%20konsultasi%20layanan%20regimen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>CONTACT VIA WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
