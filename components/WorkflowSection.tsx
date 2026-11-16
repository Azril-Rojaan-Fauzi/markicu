import React from "react";
import { ArrowUpRight, MessageSquare, Search, Sparkles, Truck } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "CONTACT US",
      description:
        "Chat with us through WhatsApp and send your shoe photos for instant condition evaluation and estimated pricing.",
      linkText: "IMMEDIATE REPLY",
      linkUrl: "https://wa.me/6283829876116?text=Halo%20Markicu,%20mau%20tanya%20estimasi%20cuci%20sepatu",
    },
    {
      number: "02",
      icon: Search,
      title: "SHOE INSPECTION",
      description:
        "We check your shoes in-person, diagnose stain depth, test dye stability, and confirm the ideal treatment regimen with you.",
      linkText: "DIGITAL SPEC SHEET",
      linkUrl: "#policies",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "PRO CLEANING",
      description:
        "We execute the tailored care regimen using pH-neutral laboratory formulas, horsehair detailing, and controlled air curing.",
      linkText: "HOSPITAL GRADE",
      linkUrl: "#about",
    },
    {
      number: "04",
      icon: Truck,
      title: "DELIVERY RETURN",
      description:
        "Your fresh sneakers are delivered to your doorstep sealed in custom breathable dust bags, ready for your next outfit.",
      linkText: "FREE 7KM DROP-OFF",
      linkUrl: "https://wa.me/6283829876116?text=Halo%20Markicu,%20apakah%20lokasi%20saya%20masuk%20free%20pickup?",
    },
  ];

  return (
    <section id="workflow" className="w-full bg-[#0A0A0A] text-white py-20 lg:py-28 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // ZERO FRICTION WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            GET YOUR SHOES CLEANED IN 4 EASY STEPS.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#121214] hover:bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Step Number */}
                  <div className="text-4xl font-mono font-black text-zinc-700 group-hover:text-blue-500/80 transition-colors mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={step.linkUrl}
                    className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>{step.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
