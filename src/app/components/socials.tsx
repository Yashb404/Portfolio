"use client";

import React from "react";
import { IconGithub, IconLinkedin, IconTwitter } from "./icons";

const socials = [
  { name: "GitHub", icon: <IconGithub />, url: "https://github.com/Yashb404" },
  { name: "Twitter / X", icon: <IconTwitter />, url: "https://x.com/yashb404" },
  { name: "LinkedIn", icon: <IconLinkedin />, url: "https://www.linkedin.com/in/yashaswi-bhardwaj-2936b8283/" },
];

export const Socials = () => (
  <section id="socials" className="py-32 px-6 bg-void relative border-t border-border-gray">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
        03. MY SOCIALS
      </h2>
      <p className="font-mono text-gray-400 mb-12">
          Reach out for collaborations or just a friendly chat.
      </p>

      <div className="flex justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 border border-border-gray flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="mt-20 font-mono text-xs text-gray-600">
        <p>© 2024 YASHASWI BHARDWAJ.</p>
        <p>BUILT WITH REACT, TYPESCRIPT & TAILWIND.</p>
      </div>
    </div>
  </section>
);

