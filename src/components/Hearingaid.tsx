"use client";

import { Search } from "lucide-react";

export default function HearingAidInfoSection() {
  const tags = [
    "Digital hearing machine price",
    "Best hearing aid in India",
    "Signia Silk X price",
    "Phonak hearing aid cost",
    "Ear machine price in India",
  ];

  return (
    <section className="max-w-7xl mx-auto bg-white  p-6 md:p-10">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
        🎧 Ready to Buy a Hearing Aid?
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magnam
        alias eveniet rem, voluptatem dolore eaque cum quas, maiores minima
        tenetur placeat quam inventore et! Accusamus iste nam, asperiores magnam
        fugit doloribus esse adipisci deleniti fuga eaque non quasi aliquam
        reiciendis sit deserunt amet magni ut et labore sed. Illo optio officiis
        nostrum dolore accusamus maxime quibusdam laudantium architecto deserunt
        facilis. Earum atque necessitatibus molestias minima repudiandae qui,
        labore ducimus.
      </p>
      <p className="mt-2 text-gray-700">
        Explore the latest models from{" "}
        <span className="font-semibold">ReSound, Phonak, Signia</span>, and
        other companies.
      </p>

      {/* Tags */}
      <div className="mt-6">
        <h3 className="font-semibold flex items-center gap-2 text-gray-800">
          <Search size={18} className="text-blue-600" />
          Top Searches Our Users Look For:
        </h3>

        <div className="flex flex-wrap gap-3 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-blue-700 text-sm rounded-full border border-gray-200 cursor-pointer hover:bg-blue-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 bg-blue-900 rounded-md p-6 text-center">
        <h4 className="text-xl md:text-2xl font-semibold text-white">
          Insono Hearing Solutions.
        </h4>
        <p className="text-gray-100 mt-2">
          Let us help you hear clearly again with the right device near you.
        </p>
      </div>
    </section>
  );
}
