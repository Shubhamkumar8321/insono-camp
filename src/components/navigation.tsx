"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "best hearing aids",
    "digital hearing aids",
    "top 5 hearing aids",
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load animation
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setAnimatedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setAnimatedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, wordIndex, words]);

  const isFormPage = pathname === "/appointment";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 font-museo ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
    >
      {/* ---------------- DESKTOP ---------------- */}
      <div className="hidden sm:flex w-full items-center justify-between px-6 lg:px-20 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Insono Hearing"
            width={130}
            height={45}
            priority
          />
        </Link>

        {/* Search */}
        {!isFormPage && (
          <div className="relative w-96">
            <Search
              className="absolute left-2 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder={`Search for ${animatedText}`}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#023784] focus:outline-none text-sm"
            />
          </div>
        )}

        {/* Call button */}
        <a
          href="tel:+916204260510"
          className="flex items-center gap-2 bg-[#f59e0b] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          <Phone size={16} /> 6204260510
        </a>
      </div>

      {/* ---------------- MOBILE ---------------- */}
      <div className="flex flex-col sm:hidden w-full px-4 py-3 gap-2">
        {/* Top row: Logo + Call button */}
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Insono Hearing"
              width={130}
              height={45}
              priority
            />
          </Link>

          <a
            href="tel:+916204260510"
            className="flex items-center gap-2 bg-[#f59e0b] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            <Phone size={16} /> 6204260510
          </a>
        </div>

        {/* Search bar below */}
        {!isFormPage && (
          <div className="relative w-full">
            <Search
              className="absolute left-2 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder={`Search for ${animatedText}`}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#023784] focus:outline-none text-sm"
            />
          </div>
        )}
      </div>
    </header>
  );
}
