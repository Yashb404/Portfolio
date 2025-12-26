"use client";

import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { IconArrowRight } from "./icons";

export const Hero = () => {
  const role1 = useTypewriter("Rust Developer", 100);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative overflow-hidden">
      <div className="max-w-4xl w-full text-center md:text-left z-10">
        <div className="font-mono text-highlight mb-4 text-sm fade-in-up">
          SYSTEM STATUS: ONLINE
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 fade-in-up delay-100">
          BUILDING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            DECENTRALIZED
          </span>{" "}
          <br />
          FUTURE.
        </h1>

        <div className="h-24 md:h-12 flex items-center justify-center md:justify-start">
          <p className="text-xl md:text-2xl font-mono text-gray-400 border-l-2 border-white pl-4">
            <span className="text-highlight">I am a </span>
            <span className="text-white">{role1.text}</span>
            {role1.isFinished && <span className="animate-pulse">|</span>}
          </p>
        </div>

        <div className="mt-8 fade-in">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-mono text-sm hover:bg-gray-200 transition-colors group"
          >
            VIEW WORK
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

