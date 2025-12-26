'use client';

import React from "react";
import { About } from "./components/about";
import { BlockchainNetwork } from "./components/blockchain-network";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Socials } from "./components/socials";

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-white selection:text-black">
      <BlockchainNetwork />
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Socials />
      </main>
    </div>
  );
}
