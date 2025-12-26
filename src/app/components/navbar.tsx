"use client";

import React from "react";

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-border-gray">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-xl font-bold font-mono tracking-tighter text-white">
        &lt;YashB404 /&gt;
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-mono text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">
          01. ABOUT
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          02. PROJECTS
        </a>
        <a href="#socials" className="hover:text-white transition-colors">
          03. SOCIALS
        </a>
      </div>
    </div>
  </nav>
);

