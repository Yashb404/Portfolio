"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '../components/navbar';

// --- Icons ---
const IconArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconLock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

// --- Data ---
const projects = [
  
  {
    title: "Decentralized Music Player",
    subtitle: "Solana + Anchor Framework",
    description: "Developed a Solana program using Anchor for managing on-chain playlists and user profiles. Created a playlist system supporting up to 50 tracks per playlist, linking metadata to decentralized storage via IPFS. Integrated Solana Web3.js for real-time interactions.",
    tech: ["React", "TypeScript", "Solana", "Rust", "IPFS", "Anchor"],
    imageSeed: "music",
    image: "/projects/Decentralized-music-player.png",
    link: "https://github.com/Yashb404/SolanaMusicPlayer",
  },
  {
    title: "YouTube Clone Backend",
    subtitle: "RESTful API Architecture",
    description: "Designed and deployed a backend with 15+ API endpoints covering authentication, uploads, and playlist management. Integrated Cloudinary for scalable media storage and implemented likes, dislikes, and subscription features with modular architecture.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    imageSeed: "youtube",
    image: "/projects/YT-API.png",
    link: "https://github.com/YashB404/Youtube-clone-Backend-project",
  },
  {
    title: "Adversarial ML Paper",
    subtitle: "Academic Paper",
    description: "A comprehensive review of evasion attacks, defense mechanisms, and evaluation frameworks in cybersecurity. Compared multiple evasion techniques with applications in malware detection and IoT security. Submitted to the International Journal of Communication Systems.",
    tech: ["Python", "Machine Learning", "Cybersecurity"],
    imageSeed: "research",
     image: "/projects/Review_Paper_Censored.png",
    link: null,
  },
  {
    title: "BoliBazaar",
    subtitle: "Full-Stack Reverse-Auction Platform",
    description: "A platform enabling collective bargaining and bulk purchasing for vendors. Implemented role-based onboarding with 3 distinct user roles using Next.js middleware. Integrated vendor geo-location with Leaflet.js and designed a secure dashboard with JWT authentication.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Leaflet"],
    imageSeed: "boli",
     image: "/projects/Boli-Bazaar.png", 
    link: null, 
  },
  {
    title: "Ackee Blockchain School of Solana",
    subtitle: "Solana Bootcamp",
    description: "I had been learning rust for a month when I saw ackee school of solana on twitter and decided to join in , best decision. There structured course with assignments that held you accountable taught me a lot more than I may have learned on my own. I ended it with my first complete web3 project ",
    tech: ["Solana", "Anchor", "Rust", "TypeScript", "React","Fuzzing","Cybersecurity"],
    imageSeed: "solana",
    image: "/projects/School-of-Solana.png",
    link: null,
  }
  ,
  {
    title: "Solana Developer Bootcamp 2024",
    subtitle: "Solana Bootcamp",
    description: "I learned from the solana bootcamp on youtube ,it was my first foray into web3 development",
    tech: ["Solana", "Anchor", "Rust", "TypeScript", "React"],
    imageSeed: "solana",
    image: "/projects/solana-bootcamp.png",
    link: null,
  }
];

// --- Sub-Components ---

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 text-[10px] md:text-xs font-mono border border-gray-700 text-gray-400 rounded-sm uppercase tracking-wider">
    {tech}
  </span>
);

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-terminal-gray border border-border-gray hover:border-white transition-colors duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden bg-black">
        {/* Project Image with Grayscale Filter - Use project.image if available, otherwise placeholder */}
        {project.image ? (
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <img 
            src={`https://placehold.co/600x400/111/FFF?text=${project.title.replace(/\s/g, '+')}`}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40"
          />
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-terminal-gray to-transparent opacity-90"></div>
        
        {/* Floating Tech Badges on Image */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="text-[10px] font-mono text-white bg-black/80 px-2 py-1 rounded backdrop-blur-sm border border-white/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow relative">
        {/* Glitch line decoration */}
        <div className="absolute top-0 left-6 right-6 h-px bg-white/20 group-hover:bg-white transition-colors"></div>

        <div className="mb-2">
          <span className="text-xs font-mono text-gray-500 mb-1 block">{project.subtitle}</span>
          <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-6 grow font-light">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
           <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
           </div>

           {project.link ? (
             <a 
               href={project.link} 
               target="_blank" 
               rel="noreferrer"
               className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 group/link"
             >
               <span className="text-xs font-mono font-bold">CODE</span>
               <IconArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
             </a>
           ) : (
             <div className="flex items-center gap-2 text-gray-600">
               <IconLock className="w-4 h-4" />
               <span className="text-[10px] font-mono">PRIVATE</span>
             </div>
           )}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-void text-white font-sans">
      <Navbar />
      <div className="pt-24 pb-20 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-2">
             <div className="h-px bg-white w-12"></div>
             <span className="text-sm font-mono text-gray-500">PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            SELECTED WORK
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl font-light">
            A collection of full-stack applications, blockchain experiments, and research contributions.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Footer / CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto mt-24 text-center"
      >
        <p className="text-gray-500 font-mono text-sm mb-4">
          INTERESTED IN COLLABORATION?
        </p>
        <a href="http://localhost:3000/#socials" className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm font-bold">
          INITIATE CONTACT
        </a>
      </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;

