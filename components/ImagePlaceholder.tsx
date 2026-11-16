import React from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  dark?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
}

export default function ImagePlaceholder({
  label,
  sublabel = "Rekomendasi format: JPG/PNG/WebP",
  aspectRatio = "aspect-video",
  className = "",
  dark = false,
  src,
  alt,
  priority = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={`relative w-full ${aspectRatio} rounded-xl overflow-hidden group bg-zinc-900 ${className}`}
      >
        <Image
          src={src}
          alt={alt || label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle vignette shadow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-xl border border-dashed flex flex-col items-center justify-center p-4 text-center transition-all duration-300 group ${
        dark
          ? "border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-500 text-zinc-400"
          : "border-zinc-300 bg-zinc-100/80 hover:bg-zinc-100 hover:border-zinc-400 text-zinc-600"
      } ${className}`}
      data-placeholder={label}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 ${
          dark
            ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
            : "bg-white text-zinc-700 border border-zinc-200 shadow-xs"
        }`}
      >
        <ImageIcon className="w-5 h-5 opacity-80" />
      </div>

      <span
        className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full mb-1 ${
          dark ? "bg-zinc-800 text-zinc-200" : "bg-zinc-200/80 text-zinc-800"
        }`}
      >
        [ Area Gambar ]
      </span>

      <p
        className={`text-sm font-medium leading-snug max-w-[280px] ${
          dark ? "text-zinc-200" : "text-zinc-900"
        }`}
      >
        {label}
      </p>

      {sublabel && (
        <span
          className={`text-[11px] mt-1 font-mono ${
            dark ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
}
