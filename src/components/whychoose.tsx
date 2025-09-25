"use client";

import Image from "next/image";

export default function WhyBestSection() {
  return (
    <section className="text-center py-12 px-4 bg-white  w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-[#023784] mb-12">
        Why 2 Lakh+ Indians Choose Insono Hearing?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/clinic.png"
            alt="Clinic Icon"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">15+</strong>
            <br />
            Clinics Across India
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/Experts.png"
            alt="Expert Audiologists"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">100+</strong>
            <br />
            Expert Audiologists
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/Experince.png"
            alt="Years of Experience"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">15+</strong>
            <br />
            Years Of Experience
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/Hearing Aids.png"
            alt="Hearing Aids Models"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">100+</strong>
            <br />
            Hearing Aids Models
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/satisfaction.png"
            alt="Satisfied Customers"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">2 Lakh+</strong>
            <br />
            Satisfied Customers
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/icon/warrenty.png"
            alt="Extended Warranty"
            width={60}
            height={60}
            className="mb-2"
          />
          <div>
            <strong className="text-lg">4 Years</strong>
            <br />
            Extended Warranty
          </div>
        </div>
      </div>

      {/* Text + CTA */}
      <p className="mt-8 max-w-xl mx-auto text-gray-700">
        You deserve more than just a device — you deserve lifelong hearing care.
      </p>
      <a
        href="/appointment"
        className="mt-4 inline-block bg-[#184A99] text-white px-8 sm:px-48 py-3 rounded-lg hover:bg-[#0f3a7e] transition"
      >
        See Price List
      </a>
    </section>
  );
}
