'use client';

import React from "react";
import { About } from "./components/about";

import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Socials } from "./components/socials";

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-white selection:text-black">
      <div className="noise-overlay" aria-hidden />
      <Navbar />

      <div className="fixed top-20 left-6 z-40 pointer-events-none md:hidden">
        <p className="text-[10px] font-mono text-gray-500">
          (all effects may not be visible on smaller devices)
        </p>
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <Socials />
      </main>
    </div>
  );
}
