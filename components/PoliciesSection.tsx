import React from "react";

export default function PoliciesSection() {
  const protocols = [
    {
      id: "protocol-01",
      protocolNum: "PROTOKOL 01",
      title: "PENERIMAAN",
      description:
        "Sepatu diinspeksi secara mendalam saat diterima. Pelanggan akan diberitahu terlebih dahulu mengenai bahan rentan atau noda luntur sebelum pengerjaan dimulai.",
      tag: "Inspeksi Awal Detail",
      dotColor: "bg-emerald-500",
      tagTextColor: "text-emerald-700",
      tagBgColor: "bg-emerald-50 border-emerald-200",
    },
    {
      id: "protocol-02",
      protocolNum: "PROTOKOL 02",
      title: "PEMBAYARAN",
      description:
        "Pembayaran mengikuti invoice digital resmi. Dapat diselesaikan saat serah terima atau setelah pengerjaan selesai via QRIS, Transfer Bank, atau Tunai.",
      tag: "Siap QRIS & Transfer",
      dotColor: "bg-blue-500",
      tagTextColor: "text-blue-700",
      tagBgColor: "bg-blue-50 border-blue-200",
    },
    {
      id: "protocol-03",
      protocolNum: "PROTOKOL 03",
      title: "ANTAR & JEMPUT",
      description:
        "Layanan antar jemput gratis dalam radius 7 km dari workshop kami. Tarif jarak tetap diberlakukan secara transparan untuk jarak di atas 7 km.",
      tag: "Kurir Langsung ke Lokasi",
      dotColor: "bg-amber-500",
      tagTextColor: "text-amber-700",
      tagBgColor: "bg-amber-50 border-amber-200",
    },
    {
      id: "protocol-04",
      protocolNum: "PROTOKOL 04",
      title: "KOMPLAIN & GARANSI",
      description:
        "Jaminan kepuasan 100%. Komplain yang diterima dalam 1 x 24 jam setelah pengantaran berhak mendapatkan cuci ulang gratis dan peninjauan kembali.",
      tag: "Garansi Cuci Ulang 24 Jam",
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
            // KEBIJAKAN &amp; TRANSPARANSI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-4">
            STANDAR &amp; KEBIJAKAN LAYANAN
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Standar yang jelas untuk penerimaan sepatu, masa garansi kepuasan, layanan antar-jemput, dan kemudahan pembayaran digital.
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
