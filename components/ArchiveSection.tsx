import React from "react";
import { Star } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

interface SpecimenItem {
  id: string;
  specimenNumber: string;
  shoeName: string;
  condition: string;
  beforeImageLabel: string;
  afterImageLabel: string;
  treatment: string;
  turnaround: string;
}

export default function ArchiveSection() {
  const specimens: SpecimenItem[] = [
    {
      id: "specimen-01",
      specimenNumber: "SPECIMEN #01",
      shoeName: "AIR JORDAN 1 RETRO HIGH",
      condition: "Severe sole oxidation, ground mud ingrained into toe-box leather.",
      beforeImageLabel: "Foto BEFORE: Jordan 1 Kotor & Teroksidasi",
      afterImageLabel: "Foto AFTER: Jordan 1 Bersih & Unyellowed",
      treatment: "Keseluruhan + Deoxidize",
      turnaround: "3 Days",
    },
    {
      id: "specimen-02",
      specimenNumber: "SPECIMEN #02",
      shoeName: "COMMON PROJECTS ACHILLES",
      condition: "Surface scuffs on Italian nappa, dull graying laces and midsole.",
      beforeImageLabel: "Foto BEFORE: CP Achilles Kusam & Scuffed",
      afterImageLabel: "Foto AFTER: CP Achilles Putih Bersih Mengkilap",
      treatment: "All White + Leather Balm",
      turnaround: "2 Days",
    },
    {
      id: "specimen-03",
      specimenNumber: "SPECIMEN #03",
      shoeName: "YEEZY BOOST 350 TRIPLE WHITE",
      condition: "Mud saturated translucent outsole and deeply stained knit weave.",
      beforeImageLabel: "Foto BEFORE: Yeezy 350 Berlumpur & Menguning",
      afterImageLabel: "Foto AFTER: Yeezy 350 Bersih Cerah",
      treatment: "Ultrasonic Knit Clean",
      turnaround: "3 Days",
    },
  ];

  return (
    <section id="archive" className="w-full bg-[#F9FAFB] text-zinc-950 py-20 lg:py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
              // REAL RESTORATION ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950">
              SEE THE DIFFERENCE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed">
            Strict before-and-after benchmark results. No filters, no digital touch-ups — genuine chemical restoration and deep foam extraction.
          </p>
        </div>

        {/* 3 Specimen Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specimens.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Specimen # & Stars */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                    {item.specimenNumber}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Sneaker Title */}
                <h3 className="text-base sm:text-lg font-black tracking-tight text-zinc-950 mb-1.5">
                  {item.shoeName}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  {item.condition}
                </p>

                {/* Before / After Dual Image Container */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {/* Before Side */}
                  <div className="relative group">
                    <ImagePlaceholder
                      label={item.beforeImageLabel}
                      sublabel="Foto Before"
                      aspectRatio="aspect-[4/5]"
                      dark={false}
                      className="bg-zinc-100 border-zinc-200 p-2"
                    />
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono font-bold bg-zinc-950 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm">
                      BEFORE
                    </span>
                  </div>

                  {/* After Side */}
                  <div className="relative group">
                    <ImagePlaceholder
                      label={item.afterImageLabel}
                      sublabel="Foto After"
                      aspectRatio="aspect-[4/5]"
                      dark={false}
                      className="bg-blue-50/50 border-blue-200 p-2"
                    />
                    <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono font-bold bg-blue-600 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider shadow-sm">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Treatment & Turnaround */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span className="truncate max-w-[170px]" title={item.treatment}>
                  Treatment: <strong className="text-zinc-900 font-semibold">{item.treatment}</strong>
                </span>
                <span>
                  Turnaround: <strong className="text-zinc-900 font-semibold">{item.turnaround}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
