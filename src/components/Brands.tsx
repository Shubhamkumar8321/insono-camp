"use client";

import React from "react";
import Image from "next/image";

export default function HearingBanner() {
  const brands = [
    { src: "/Brands/Phonak.png", alt: "Phonak" },
    { src: "/Brands/Resound.png", alt: "Resound" },
    { src: "/Brands/Widex.png", alt: "Widex" },
    { src: "/Brands/Signia.png", alt: "Signia" },
    { src: "/Brands/Oticon.png", alt: "Oticon" },
    { src: "/Brands/Starkey.png", alt: "Starkey" },
  ];

  return (
    <section
      className="py-16 px-4 text-center relative text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/Brands/Background.png')" }}
    >
      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-32 h-20 flex items-center justify-center   p-2"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={120} // Fixed width
              height={50} // Fixed height
              className="object-contain invert brightness-0"
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-white w-4/5 mx-auto mb-8 opacity-80" />

      {/* Banner Text */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          Get the Right Hearing Aid — From Trusted Global Brands.
        </h1>
        <p className="text-white/90 mb-8 text-lg sm:text-xl">
          Trusted by doctors. Chosen by families. Recommended by expert
          audiologists for seniors across India.
        </p>
        <a
          href="/appointment"
          className="inline-block px-16 sm:px-48 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-red-700 transition"
        >
          See Price List
        </a>
      </div>
    </section>
  );
}
