"use client";

import React from "react";
import { TechOrbit } from "./tech-orbit";

export const About = () => (
  <section id="about" className="py-32 px-6 bg-void relative">
    <div className="absolute top-0 left-0 w-full h-px bg-border-gray"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT SIDE: SKILLS LIST */}
      <div className="h-full flex flex-col justify-center">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            01. SKILLS
          </h2>
          <div className="h-1 w-20 bg-white"></div>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Column 1 */}
          <div className="space-y-8">
            
            {/* Blockchain Section */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Blockchain
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base text-gray-400 font-mono">Solana</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">Rust</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">Anchor</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Web3.js</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">IPFS</li>
              </ul>
            </div>

            {/* Backend Section */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Backend & Infra
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base text-gray-400 font-mono">Node.js / Express</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">Docker</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">AWS</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Linux / Bash</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Postman / REST API</li>
              </ul>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Databases
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base text-gray-400 font-mono">PostgreSQL</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">MongoDB</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">MySQL</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Prisma ORM</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            
            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Languages
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base font-bold text-white font-mono">TypeScript</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">JavaScript</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Python</li>
                <li className="text-sm md:text-base font-bold text-white font-mono">Java</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">C / C++</li>
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Frontend
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base text-gray-400 font-mono">React.js</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Next.js</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Tailwind CSS</li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">
                Cybersecurity
              </h3>
              <ul className="space-y-1">
                <li className="text-sm md:text-base text-gray-400 font-mono">Adversarial ML</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Burp Suite</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Wireshark</li>
                <li className="text-sm md:text-base text-gray-400 font-mono">Kali Linux</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE: VISUALIZATION */}
      <TechOrbit />
      
    </div>
  </section>
);