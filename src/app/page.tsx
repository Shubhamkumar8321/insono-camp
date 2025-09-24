import Hero from "@/components/hero";
import Card from "@/components/card";
import Faq from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-b from-[#eaf5ff]/50 to-white">
      <Hero />
      <Card />
      <Faq />
    </main>
  );
}
