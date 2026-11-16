import React from "react";

export default function PoliciesSection() {
  const protocols = [
    {
      id: "protocol-01",
      protocolNum: "PROTOCOL 01",
      title: "PENERIMAAN",
      description:
        "Shoes are inspected in rigorous detail upon arrival. Customers are notified regarding delicate vintage materials and stubborn pre-existing dye bleeding before work commences.",
      tag: "Detailed Pre-Inspection",
      dotColor: "bg-emerald-500",
      tagTextColor: "text-emerald-700",
      tagBgColor: "bg-emerald-50 border-emerald-200",
    },
    {
      id: "protocol-02",
      protocolNum: "PROTOCOL 02",
      title: "PEMBAYARAN",
      description:
        "Payment strictly follows the issued digital invoice. Can be processed either at drop-off or post-completion via QRIS, Instant Bank Transfer, or Cash.",
      tag: "QRIS & Transfer Ready",
      dotColor: "bg-blue-500",
      tagTextColor: "text-blue-700",
      tagBgColor: "bg-blue-50 border-blue-200",
    },
    {
      id: "protocol-03",
      protocolNum: "PROTOCOL 03",
      title: "PICK UP & DELIVERY",
      description:
        "Complimentary doorstep pickup within a 7km radius from our central workshop. Flat rate distance surcharges apply transparently beyond 7km.",
      tag: "Direct Doorstep Courier",
      dotColor: "bg-amber-500",
      tagTextColor: "text-amber-700",
      tagBgColor: "bg-amber-50 border-amber-200",
    },
    {
      id: "protocol-04",
      protocolNum: "PROTOCOL 04",
      title: "KOMPLAIN & GARANSI",
      description:
        "100% satisfaction assurance. Complaints received within 1 x 24 hours of delivery qualify for free complimentary re-treatment and review.",
      tag: "24H Free Re-Treatment",
      dotColor: "bg-rose-500",
      tagTextColor: "text-rose-700",
      tagBgColor: "bg-rose-50 border-rose-200",
    },
  ];

  return (
    <section id="policies" className="w-full bg-white text-zinc-950 py-20 lg:py-28 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // TRANSPARENT ETHICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-4">
            SERVICE PROTOCOLS & POLICIES
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Clear standards for intake, guarantee periods, seamless local delivery, and convenient digital payment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {protocols.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9FAFB] border border-zinc-200/90 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {item.protocolNum}
                </span>
                <h3 className="text-base font-black tracking-tight text-zinc-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tag with dot */}
              <div className="pt-4 border-t border-zinc-200/60">
                <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium border px-2.5 py-1 rounded-full ${item.tagBgColor} ${item.tagTextColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                  <span>{item.tag}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
