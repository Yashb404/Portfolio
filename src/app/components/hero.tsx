"use client";

import React, { useEffect, useState } from "react";
import { IconArrowRight } from "./icons";
import FaultyTerminal from "../../components/FaultyTerminal";
import TypingText from "../../components/ui/shadcn-io/typing-text/index";

export const Hero = () => {
  const [dpr, setDpr] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Cap DPR to 1.5 to improve performance on high-density mobile screens
    if (typeof window !== "undefined") {
      setDpr(Math.min(window.devicePixelRatio, 1.5));

      // On mobile, pause the animation after 3 seconds to save battery
      if (window.innerWidth < 768) {
        const timer = setTimeout(() => {
          setIsPaused(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        
        <FaultyTerminal
          className="absolute inset-0 -z-10"
          style={{ width: "100%", height: "100%" }}
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={isPaused}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.5}
          chromaticAberration={0.01}
          dither={0}
          curvature={0.1}
          tint="#ffffff"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6} 
          dpr={dpr}        
        />
      </div>

      <div className="max-w-4xl w-full text-center md:text-left z-10">
        <div className="backdrop-blur-md bg-black/30 rounded-lg p-8 md:p-12">
          <div className="font-mono text-highlight mb-4 text-sm fade-in-up">
            SYSTEM STATUS: ONLINE
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 fade-in-up delay-100">
             Hey,  <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">
            I&apos;m Yashaswi
            </span>{" "}
            <br />
            
          </h1>

          <div className="h-24 md:h-12 flex items-center justify-center md:justify-start">
            <p className="text-xl md:text-2xl font-mono text-gray-400 border-l-2 border-white pl-4">
              
              <TypingText
                as="span"
                text={["Backend Dev", "Rust & Solana", "Web App Builder"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-white"
                textColors={['#ffffff', '#ffffff', '#ffffff']}
                variableSpeed={{ min: 20, max: 20 }}
              />
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
      </div>
    </section>
  );
};

