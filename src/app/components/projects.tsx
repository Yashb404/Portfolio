"use client";

import React from "react";
import { IconArrowRight } from "./icons";

const projectData = [
  {
    title: "Solana DEX Aggregator",
    tech: ["Rust", "Solana", "Anchor"],
    desc: "A high-performance aggregator routing swaps across multiple AMMs on Solana. Optimized for minimal slippage and latency.",
    link: "#",
  },
  {
    title: "Rust Actix Microservice",
    tech: ["Rust", "Actix-web", "PostgreSQL"],
    desc: "Core authentication service handling 10k+ RPS. Implements JWT auth, rate limiting, and connection pooling.",
    link: "#",
  },
  {
    title: "NFT Metadata Parser",
    tech: ["Rust", "Web3", "Async"],
    desc: "An indexer tool that crawls the Solana network to parse and update off-chain metadata for large NFT collections.",
    link: "#",
  },
  {
    title: "Token Vesting Program",
    tech: ["Rust", "Solana", "PDAs"],
    desc: "Smart contract implementing a cliff and linear vesting schedule for team tokens using Program Derived Addresses.",
    link: "#",
  },
];

export const Projects = () => (
  <section id="projects" className="py-32 px-6 bg-void relative">
    <div className="absolute top-0 left-0 w-full h-px bg-border-gray"></div>
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">
        02. SELECTED WORK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, idx) => (
          <a
            href={project.link}
            key={project.title}
            className="group relative border border-border-gray bg-terminal-gray hover:bg-white transition-all duration-300 overflow-hidden block fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </div>

              <p className="font-mono text-gray-400 text-sm mb-6 h-20">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono border border-gray-600 px-2 py-1 rounded group-hover:border-black group-hover:text-black transition-colors text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-500 opacity-50 group-hover:border-black"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-500 opacity-50 group-hover:border-black"></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

