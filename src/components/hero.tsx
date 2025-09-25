"use client";

import Image from "next/image";

export default function HeroSection() {
  const services = [
    { title: "Digital Hearing Aids", icon: "/4.png" },
    { title: "Rechargeable Hearing Aids", icon: "/3.png" },
    { title: "Invisible Hearing Aids", icon: "/2.png" },
    { title: "Behind-the-Ear (BTE)", icon: "/4.png" },
    { title: "In-the-Canal (ITC)", icon: "/3.png" },
    { title: "CIC / IIC Models", icon: "/2.png" },
    { title: "Free Hearing Test", icon: "/3.png" },
    { title: "Hearing Aid Accessories", icon: "/4.png" },
  ];

  const heroImages = ["/test1.jpeg", "/test2.jpg", "/test3.jpeg", "/test4.jpg"];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 mt-6 sm:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 ">
          {/* Heading above card */}
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 text-left">
            Restore Clear Hearing at Your Doorstep
          </h2>

          <div className="p-6 border border-gray-200">
            <h4 className="text-xl sm:text-2xl font-normal mb-6 text-gray-900 text-left">
              What are you looking for?
            </h4>
            <div className="px-2 sm:px-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Image wrapper */}
                  <div className="relative w-32 h-24 mb-3 bg-[#dadada] rounded-lg overflow-hidden flex items-center justify-center">
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
        </div>

        {/* RIGHT IMAGE GRID - 2x2 */}
        <div className="hidden sm:grid grid-cols-2 grid-rows-2 w-full h-[520px] border-4 border-[#ebf5ff] rounded-lg overflow-hidden">
          {/* Top-left image */}
          <div className="relative border-r-4 border-b-4 border-white">
            <Image
              src={heroImages[0]}
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Top-right image */}
          <div className="relative border-b-4 border-white">
            <Image
              src={heroImages[1]}
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-left image */}
          <div className="relative border-r-4 border-white">
            <Image
              src={heroImages[2]}
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right image */}
          <div className="relative border-white">
            <Image
              src={heroImages[3]}
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
