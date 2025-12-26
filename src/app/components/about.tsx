"use client";

import React from "react";
import { TechOrbit } from "./tech-orbit";

export const About = () => (
  <section id="about" className="py-32 px-6 bg-void relative">
    <div className="absolute top-0 left-0 w-full h-px bg-border-gray"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
          01. ABOUT ME
        </h2>
        <div className="font-mono text-gray-400 text-sm leading-relaxed space-y-4">
          <p>
            <span className="text-highlight">const</span> developer = {"{"}
          </p>
          <p className="pl-4">
            name: <span className="text-white">"Yashaswi Bhardwaj"</span>,
          </p>
          <p className="pl-4">
            focus: [
            <span className="text-white">"Rust"</span>,{" "}
            <span className="text-white">"Solana Blockchain"</span>,{" "}
            <span className="text-white">"Backend Development"</span>],
          </p>
          <p>{"};"}</p>
          <br />
          <p className="text-gray-300">
           
          </p>
        </div>
      </div>

      <TechOrbit />
    </div>
  </section>
);

