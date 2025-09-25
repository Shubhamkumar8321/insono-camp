"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Appointment request submitted ✅");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <section className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">
          📅 Book an Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-3 py-2"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 px-3 py-2"
              placeholder="Enter phone number"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
