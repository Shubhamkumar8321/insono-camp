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
        <div className="bg-white p-6 rounded-lg shadow-md mt-16">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Restore Clear Hearing at Your Doorstep
          </h1>
          <h2 className="text-lg font-medium mb-4 text-gray-700">
            What are you looking for?
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((service, i) => {
              // Show only first 6 on mobile
              const showOnMobile = i < 6;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 border rounded-lg hover:shadow-md transition cursor-pointer bg-white
                    ${!showOnMobile ? "hidden sm:flex" : ""}
                  `}
                >
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE GRID - hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 gap-4">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className="relative h-36 sm:h-60 lg:h-[240px] rounded-lg overflow-hidden"
            >
              <Image
                src={img}
                alt={`Hero ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
