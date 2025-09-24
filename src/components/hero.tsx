"use client";

import Image from "next/image";

export default function HeroSection() {
  const services = [
    { title: "Digital Hearing Aids", icon: "/1.jpg" },
    { title: "Rechargeable Hearing Aids", icon: "/2.png" },
    { title: "Invisible Hearing Aids", icon: "/3.png" },
    { title: "Behind-the-Ear (BTE)", icon: "/4.png" },
    { title: "In-the-Canal (ITC)", icon: "/1.jpg" },
    { title: "CIC / IIC Models", icon: "/2.png" },
    { title: "Free Hearing Test", icon: "/3.png" },
    { title: "Hearing Aid Accessories", icon: "/4.png" },
  ];

  const heroImages = ["/2.png", "/3.png", "/4.png"];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT CONTENT */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Restore Clear Hearing at Your Doorstep
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 hover:shadow-md transition cursor-pointer bg-white rounded-lg"
              >
                {/* Image */}
                <div className="relative w-16 h-16 mb-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Title */}
                <span className="text-sm font-medium text-gray-800">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="hidden sm:grid grid-cols-2 gap-0 ">
          {/* Large image on left (takes full height) */}
          <div className="relative row-span-2 h-80 lg:h-[480px] overflow-hidden border border-gray-200 rounded-l-lg">
            <Image
              src={heroImages[0]}
              alt="Hero Large"
              fill
              className="object-contain"
            />
          </div>

          {/* Top right small image */}
          <div className="relative h-40 lg:h-[240px] overflow-hidden border border-gray-200 rounded-r-lg">
            <Image
              src={heroImages[1]}
              alt="Hero Small 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom right small image */}
          <div className="relative h-40 lg:h-[240px] overflow-hidden border border-gray-200 rounded-r-lg">
            <Image
              src={heroImages[2]}
              alt="Hero Small 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
