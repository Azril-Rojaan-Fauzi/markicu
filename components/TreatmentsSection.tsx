import React from "react";
import { ArrowUpRight } from "lucide-react";

interface TreatmentItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
}

export default function TreatmentsSection() {
  const treatments: TreatmentItem[] = [
    {
      id: "unyellowing",
      name: "Unyellowing",
      tag: "UV Matrix",
      description: "Oxidation reversal using clinical UV accelerator chamber.",
      price: "$15",
    },
    {
      id: "suede-care",
      name: "Suede Care",
      tag: "Nap Revival",
      description: "Delicate brass bristle nap revival and hydrophobic barrier seal.",
      price: "$15",
    },
    {
      id: "leather-care",
      name: "Leather Care",
      tag: "Balm Nourish",
      description: "Mink balm conditioning, supple anti-creasing, and natural satin luster.",
      price: "$15",
    },
    {
      id: "whitening",
      name: "Whitening",
      tag: "Pure Pigment",
      description: "Intensive optical pigment brightening for aged canvas and textiles.",
      price: "$15",
    },
    {
      id: "spot-reglue",
      name: "Spot Reglue",
      tag: "Toe / Heel",
      description: "Flexible elastic polyurethane adhesive bonding for partial separations.",
      price: "From $15",
    },
    {
      id: "full-reglue",
      name: "Full Reglue",
      tag: "Total Rebuild",
      description: "Complete factory glue ablation, heat activation primer, and press clamp.",
      price: "$30",
    },
  ];

  return (
    <section id="treatments" className="w-full bg-white text-zinc-950 py-20 lg:py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // SPECIFIC TREATMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-4">
            MORE CARE FOR YOUR SHOES.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Specialized restorative interventions targeting sole yellowing, suede dehydration, stiff leather creasing, and delaminated outsoles.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F9FAFB] hover:bg-white border border-zinc-200/90 hover:border-zinc-300 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Title + Tag and Price */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-600 bg-zinc-200/70 px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                  </div>
                  <span className="text-lg font-black text-zinc-950 tracking-tight whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Consult Link */}
              <div className="pt-4 mt-4 border-t border-zinc-200/50 flex justify-end">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Markicu,%20saya%20mau%20konsultasi%20layanan%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>CONSULT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
