"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css"; // Ensure this path is correct

const products = [
  { id: 1, title: "Digital Hearing Aids", image: "/2.png" },
  { id: 2, title: "Rechargeable Hearing Aids", image: "/3.png" },
  { id: 3, title: "Invisible Hearing Aids", image: "/4.png" },
  { id: 4, title: "Behind-the-Ear (BTE)", image: "/product/4.png" },
  { id: 5, title: "CIC Hearing Aids", image: "/product/5.png" },
  { id: 6, title: "Bluetooth Hearing Aids", image: "/product/6.png" },
  { id: 7, title: "Premium Hearing Devices", image: "/product/7.png" },
  { id: 8, title: "Smart Hearing Solutions", image: "/product/8.png" },
];

export default function CardSection() {
  return (
    <section className="w-full py-10 bg-white">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#112f70] text-center mb-8">
        Our Products
      </h2>

      {/* Constrain container width and add left & right margin */}
      <div className="max-w-[1200px] mx-auto overflow-x-auto px-6  scrollbar-hide">
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] sm:min-w-[260px] md:min-w-[280px] bg-gray-100 rounded-xl shadow-md p-6 hover: transition-shadow duration-300 flex-shrink-0 flex flex-col items-center"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-center">
                {product.title}
              </h3>
              {/* CTA Button */}
              <Link
                href="/appointment"
                className="mt-4 px-16 py-2 bg-[#023784] text-white rounded-md hover:bg-[#0456a0] transition text-center"
              >
                See Price List
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
