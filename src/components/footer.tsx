"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-xs text-gray-400 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Insono Hearing. All rights reserved.
        </p>

        {/* Developed By */}
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://webspecia.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Webspecia
          </a>
        </p>
      </div>
    </footer>
  );
}
