"use client";

import React from "react";
import Link from "next/link";

export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-md border-b border-border-gray">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold font-mono tracking-tighter text-white hover:text-highlight transition-colors">
        &lt;YashB404 /&gt;
      </Link>
        
      <div className="hidden md:flex space-x-8 text-sm font-mono text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">
          01. SKILLS
        </a>
        <a href="/projects" className="hover:text-white transition-colors">
          02. PROJECTS
        </a>
        <a href="#socials" className="hover:text-white transition-colors">
          03. SOCIALS
        </a>
        <span 
          className="text-gray-600 cursor-not-allowed relative group"
          title="Coming Soon"
        >
          <span className="group-hover:hidden">04. BLOGS</span>
          <span className="hidden group-hover:inline">COMING SOON</span>
        </span>
      </div>
    </div>
  </nav>
);

