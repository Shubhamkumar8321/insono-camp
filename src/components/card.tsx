"use client";

import React from "react";
import Image from "next/image";
import "@/app/globals.css"; // Ensure this path is correct

const products = [
  { id: 1, title: "Digital Hearing Aids", image: "/1.jpg" },
  { id: 2, title: "Rechargeable Hearing Aids", image: "/2.png" },
  { id: 3, title: "Invisible Hearing Aids", image: "/3.png" },
  { id: 4, title: "Behind-the-Ear (BTE)", image: "/4.png" },
  { id: 5, title: "CIC Hearing Aids", image: "/1.jpg" },
  { id: 6, title: "Bluetooth Hearing Aids", image: "/2.png" },
  { id: 7, title: "Premium Hearing Devices", image: "/3.png" },
  { id: 8, title: "Smart Hearing Solutions", image: "/4.png" },
];

export default function CardSection() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>

      {/* Constrain container width and add left & right margin */}
      <div className="max-w-[1200px] mx-auto overflow-x-auto px-6 sm:px-8 md:px-12 scrollbar-hide">
        <div className="flex gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] sm:min-w-[260px] md:min-w-[280px] bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
            >
              <div className="relative w-full h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-center">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
