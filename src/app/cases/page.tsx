"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

type Case = {
  id: number;
  src: string;
  alt: string;
  category: "Branding" | "Motion" | "Website";
  title: string;
  description: string;
};

const cases: Case[] = [
  { id: 1, src: "/mac.png", alt: "Case 1", category: "Website", title: "Brazilian Footwear", description: "For over 50 years, we have been encouraging and promoting Brazilian sports. With quality, durability, comfort and cost-effectiveness, our brand caters to all" },
  { id: 4, src: "/alma.png", alt: "Case 4", category: "Branding", title: "Alma Studio", description: "Branding project for Alma." },
  { id: 3, src: "/tgr.png", alt: "Case 3", category: "Motion", title: "TGR Motion", description: "Motion design project." },
  { id: 5, src: "/bag.png", alt: "Case 5", category: "Branding", title: "Sementes do Fundão", description: "Visual Identity for a personal project" },
  { id: 2, src: "/luci.png", alt: "Case 2", category: "Branding", title: "Portfolio Website", description: "Portfolio Website for Luciano." },
  { id: 6, src: "/iPhone.png", alt: "Case 6", category: "Website", title: "Planeta Atlântida", description: "Planeta Atlântida Website" },
];

export default function Work() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Branding" | "Motion" | "Website">("All");

  const filteredCases =
    selectedCategory === "All"
      ? cases
      : cases.filter((c) => c.category === selectedCategory);

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Header Desktop */}
      <header className="hidden md:flex justify-between items-center px-12 py-6 text-sm">
      <Link href="/">
          <h1 className="font-black text-4xl tracking-tighter cursor-pointer">
            reinehr
          </h1>
        </Link>
        <nav className="flex items-center gap-12 text-xl">
          <a href="/cases">Selected work (05)</a>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      </header>

      {/* Header Mobile */}
      <header className="md:hidden flex justify-between items-center px-6 py-4">
        <h1 className="font-black text-3xl tracking-tighter">reinehr</h1>
        <button
          className="flex flex-col justify-between w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </header>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-6 py-8 text-xl bg-black">
          <a href="#">Selected work (05)</a>
          <a href="#">Info</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <div className="flex gap-3">
            <a href="#">(IG)</a>
            <a href="#">(LI)</a>
          </div>
        </nav>
      )}

      {/* Banner */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <h2 className="relative z-10 text-[24vw] font-black tracking-tighter text-transparent stroke-text leading-none top-0">
          Work
        </h2>
        <Image
          src="/frame.png"
          alt="Work Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Filtros */}
      <section className="px-8 py-12 flex-1">
        <h3 className="text-xl mb-6">Selected work ({filteredCases.length})</h3>
        <div className="flex gap-3 mb-12 flex-wrap">
          {["All", "Branding", "Motion", "Website"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as "All" | "Branding" | "Motion" | "Website")}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === cat ? "bg-white text-black" : "border-white text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-2 gap-4 space-y-4">
          {filteredCases.map((c) => (
            <div key={c.id} className="relative w-full mb-4 break-inside-avoid overflow-hidden group cursor-pointer">
              <Image
                src={c.src}
                alt={c.alt}
                width={500}
                height={400}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <div className="text-left">
                  <h2 className="text-xl font-bold">{c.title}</h2>
                  <p className="text-sm">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
