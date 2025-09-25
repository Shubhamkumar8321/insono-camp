// app/clinic/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- Types ---------- */
interface Clinic {
  id: string;
  name: string;
  locationLine: string;
  address: string;
  hours: string;
  tag?: string;
  catSlug?: string;
}

/* ---------- Data ---------- */
const clinics: Clinic[] = [
  {
    id: "noida",
    name: "Insono Hearing Cünic - Noida",
    locationLine: "Noida — Uttar Pridesh",
    address:
      "E -142 Ground Floor, Sec 20. Noida Kerala Ayurveda Uttar Pradesh - 201301",
    hours: "Open by pm",
    tag: "VÉw Clinic",
  },
  {
    id: "gurgaon",
    name: "Insono Hearing Clinic - Gurgaon",
    locationLine: "Gurgson — H&yana",
    address:
      "Shop No-232, First Floor. Central Arcade. Mehrauli Gurgaon Rd Opposite Sahara Mall. A Bbck. DLF Phase 2, Sector 25. Gurugram Sarho,L Haryana 122008",
    hours: "Open Closes by pm",
  },
  {
    id: "lajpat-nagar",
    name: "Insono Hearing Clinic - Lajpat Nagar",
    locationLine: "Lajpat — Delhi",
    address:
      "E- 195, Ground Floor, Amar Colony, Lajpat Nagar-4 New Delhi -1b0024",
    hours: "Open Closes pm",
  },
  {
    id: "jamshedpur",
    name: "Insono Hearing Clinic — Jamshedpur",
    locationLine: "— hark and Jamshedpur",
    address: "Jamshedpur",
    hours: "Open by pm",
  },
  {
    id: "lucknow",
    name: "Insono Hearing Clinic — Lucknow",
    locationLine: "Lucknow — Uttar Pradesh",
    address:
      "10/36, Tedhi Pulia Ring Rd. near Narayan Automobile, behind Mahendra Agency. Shekhupura Vikas Nagar, Lucknow, Pradesh 226022",
    hours: "Open by 7 pm",
  },
  {
    id: "ranchi",
    name: "Insono Hearing Clinic — Ranchi",
    locationLine: "- Ranchi",
    address: "Online Service Available",
    hours: "Open by pm",
  },
];

/* ---------- Comparison Items ---------- */
const comparisonItems: string[] = [
  "Booking for an appointment at hearing clinics is quick and easy",
  "Free hearing checkup at any time and anywhere",
  "Generating free preliminary hearing report",
  "Visiting a hearing clinic is mandatory",
  "Home visits by the hearing experts",
  "Live interaction with hearing experts at any time",
  "Many choices for hearing aids",
  "Clinic visit for the purchase of hearing aid accessories is compulsory",
  "Reminder for the service and warranty of the hearing aid",
  "Transparency while selecting the hearing aid by using Latest Hii5 technology is available",
  "Hassle-free hearing care experience at your fingertips",
];

/* ------------------ Component ------------------ */
export default function ClinicPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      {/* Breadcrumb area */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#112f70]">
            Insono Hearing Clinics
          </h1>
          <p className="mt-2 text-[#112f70]">
            Best hearing experiences at Insono Hearing Clinics. Trusted by 1
            Million+ satisfied customers.
          </p>
        </div>
        {/* Clinics grid */}
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {clinics.map((c) => (
                <article
                  key={c.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
                >
                  <div className="bg-[#e9f2ff] p-3">
                    <p className="text-[#023784] font-semibold">{c.name}</p>
                    {c.tag && (
                      <p className="text-xs text-gray-600 mt-1">{c.tag}</p>
                    )}
                  </div>

                  <div className="p-4 flex-1">
                    <p className="text-sm font-semibold text-[#023784]">
                      {c.locationLine}
                    </p>
                    <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                      {c.address}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-green-600 font-bold text-sm">
                        {c.hours.includes("Open") ? "Open" : c.hours}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {c.hours.includes("Closes") ? "· " + c.hours : ""}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-300 bg-white">
                    <Link
                      href={`/appointment?cat=${encodeURIComponent(
                        c.catSlug || c.id
                      )}&slug=${encodeURIComponent(c.id)}`}
                      className="block text-center bg-[#023784] text-white py-2 rounded-md font-semibold"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
