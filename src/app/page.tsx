import Hero from "@/components/hero";
import Card from "@/components/card";
import Faq from "@/components/FAQ";
import Image from "next/image";
import WhyBestSection from "@/components/whychoose";
import Testimonials from "@/components/Testomonial";
import Brands from "@/components/Brands";
import HearingAid from "@/components/Hearingaid";
import Clinics from "@/components/clinics";
export default function Home() {
  return (
    <main>
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <Hero />
      </section>
      <Card />
      <Clinics />
      <WhyBestSection />
      <Testimonials />
      <Faq />
      <HearingAid />
      <Brands />
    </main>
  );
}
