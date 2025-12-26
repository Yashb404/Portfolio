'use client';

import React from "react";
import { About } from "./components/about";

import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Socials } from "./components/socials";
import { SmoothScroll } from "./components/smooth-scroll";

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-white selection:text-black">
      <SmoothScroll />
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
