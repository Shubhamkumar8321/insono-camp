import Hero from "@/components/hero";
import Card from "@/components/card";
import Faq from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <Hero />
      </section>
      <Card />
      <Faq />
    </main>
  );
}
