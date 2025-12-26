"use client";

import React from "react";
import { IconArrowRight } from "./icons";

const projectData = [
  {
    title: "Decentralized Music Player (Solana + Anchor)",
    tech: ["React/TypeScript", "Solana Blockchain", "Anchor Framework", "Rust", "IPFS (Pinata)"],
    desc: "Developed Solana program with Anchor for managing on-chain playlists, tracks, and user profiles. Created a playlist system supporting up to 50 tracks per playlist, linking metadata to decentralized storage via IPFS. Integrated Solana Web3.js to handle client-side program interactions in real-time.",
    link: "https://github.com/Yashb404/SolanaMusicPlayer",
  },
  {
    title: "YouTube Clone – Backend API",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    desc: "Designed and deployed a RESTful backend with 15+ API endpoints covering authentication, uploads, and playlist management. Integrated Cloudinary for scalable media storage; implemented likes, dislikes, and subscription features. Applied modular architecture and error handling practices for maintainability.",
    link: "https://github.com/YashB404/Youtube-clone-Backend-project",
  },
  {
    title: "BoliBazaar – Full-Stack Reverse-Auction Platform",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Tailwind CSS"],
    desc: "Built a full-stack platform for reverse auctions enabling collective bargaining. Implemented role-based onboarding with 3 distinct user roles using Next.js middleware and integrated vendor geo-location with Leaflet.js. Designed a secure vendor dashboard with transactional API endpoints, order tracking, and JWT-based authentication.",
    link: null,
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
        {projectData.map((project, idx) => {
          const content = (
            <>
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  )}
                </div>

                <p className="font-mono text-gray-400 text-sm mb-6">
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
            </>
          );

          const className = "group relative border border-border-gray bg-terminal-gray hover:bg-white transition-all duration-300 overflow-hidden block fade-in-up";
          const style = { animationDelay: `${idx * 100}ms` };

          return project.link ? (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={className}
              style={style}
            >
              {content}
            </a>
          ) : (
            <div
              key={project.title}
              className={className}
              style={style}
            >
              {content}
            </div>
          );
        })}
        
        {/* 4th Card - View All Projects */}
        <a
          href="/projects"
          className="group relative border border-border-gray bg-terminal-gray hover:bg-white transition-all duration-300 overflow-hidden block fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="p-8 relative z-10 flex flex-col items-center justify-center h-full min-h-75">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-bold text-white group-hover:text-black transition-colors text-center">
                View All Projects
              </h3>
              <p className="font-mono text-gray-400 text-sm text-center mb-6">
                Explore more of my work and projects
              </p>
              <IconArrowRight className="w-8 h-8 text-gray-500 group-hover:text-black group-hover:translate-x-2 transition-all" />
            </div>
          </div>

          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-500 opacity-50 group-hover:border-black"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-500 opacity-50 group-hover:border-black"></div>
        </a>
      </div>
    </div>
  </section>
);

