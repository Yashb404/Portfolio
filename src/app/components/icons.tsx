"use client";

import React from "react";

type IconProps = {
  className?: string;
};

export const IconGithub = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const IconTwitter = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const IconLinkedin = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconTerminal = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

export const IconArrowRight = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const IconRust = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-.6 0-1.1.1-1.7.2l-1.3.4-1.2.6c-.8.5-1.5 1-2.1 1.7-.6.6-1.2 1.4-1.6 2.1-.5.8-.8 1.6-1 2.5-.2.9-.3 1.8-.2 2.7 0 .9.2 1.9.5 2.7.3.9.8 1.7 1.3 2.4.6.7 1.3 1.4 2.1 1.9.8.5 1.7.9 2.6 1.1.9.2 1.9.3 2.8.2.9-.1 1.9-.3 2.7-.7.8-.4 1.6-.9 2.3-1.6.7-.6 1.3-1.4 1.7-2.2.5-.8.8-1.7.9-2.6.2-.9.2-1.9 0-2.8-.2-.9-.5-1.8-1-2.6-.5-.8-1.1-1.5-1.8-2.1-.7-.6-1.6-1.1-2.5-1.4-.9-.3-1.8-.4-2.7-.4-.8 0-1.6.1-2.4.3.5.2 1 .4 1.4.7.4.2.8.5 1.1.8.3.3.6.7.8 1.1.2.4.3.8.3 1.3 0 .6-.1 1.1-.4 1.6-.3.5-.6.9-1.1 1.2-.4.3-1 .6-1.5.7-.6.2-1.1.2-1.7.2-.6 0-1.1-.1-1.7-.3-.5-.2-1-.5-1.4-.8-.4-.4-.8-.8-1-1.3-.3-.5-.4-1.1-.4-1.7 0-.5.1-1.1.3-1.6.2-.5.5-1 .8-1.4.3-.4.8-.8 1.2-1.1.5-.3 1-.5 1.6-.6-.9-.2-1.8-.3-2.7-.2zM12 17c1.7 0 3.1-.6 4.2-1.8 1.1-1.1 1.7-2.6 1.7-4.2 0-.8-.2-1.6-.5-2.3-.3-.7-.8-1.4-1.4-2-.6-.6-1.3-1-2-1.3-.8-.3-1.5-.5-2.4-.5-.8 0-1.6.2-2.3.5-.7.3-1.4.8-2 1.3-.6.6-1 1.2-1.3 2-.3.7-.5 1.5-.5 2.3 0 .8.2 1.6.5 2.3.3.7.7 1.4 1.3 2 .6.6 1.3 1 2 1.4.7.3 1.5.4 2.3.4z" />
  </svg>
);

export const IconSolana = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.353 13.293l6.147-6.147a.5.5 0 0 1 .707 0l1.647 1.646a.5.5 0 0 1 0 .707L6.707 14.647a.5.5 0 0 1-.707 0l-2.647-2.647a.5.5 0 0 1 0-.707zM13.353 3.293l6.147 6.147a.5.5 0 0 1 0 .707l-2.647 2.647a.5.5 0 0 1-.707 0L10 6.647a.5.5 0 0 1 0-.707l2.646-2.647a.5.5 0 0 1 .707 0zM13.353 10.293l6.147 6.147a.5.5 0 0 1 0 .707l-2.647 2.647a.5.5 0 0 1-.707 0L10 13.647a.5.5 0 0 1 0-.707l2.646-2.647a.5.5 0 0 1 .707 0zM3.353 20.293l6.147-6.147a.5.5 0 0 1 .707 0l1.647 1.646a.5.5 0 0 1 0 .707l-6.147 6.147a.5.5 0 0 1-.707 0l-1.647-1.647a.5.5 0 0 1 0-.706z" />
  </svg>
);

export const IconLeetCode = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.14 5.14 0 0 0-.125.39 5.507 5.507 0 0 0 .062 2.362 5.57 5.57 0 0 0 .349 1.017 5.59 5.59 0 0 0 1.271 1.818l4.277 4.193.039.038 2.746-3.174a1.141 1.141 0 0 1 1.664.008l5.274 5.274c.17.171.43.22.658.11a.555.555 0 0 0 .367-.39l1.03-5.119a1.176 1.176 0 0 1 .405-.831L22.525 9.443a1.147 1.147 0 0 1 .42-.865l1.757-1.515a.5.5 0 0 0 .018-.786l-7.174-6.62a1.069 1.069 0 0 0-.746-.36L13.483.001zm-2.866 12.815a2.43 2.43 0 0 0 2.88-2.88c0-1.423-.65-2.11-1.978-2.11-1.308 0-1.952.697-1.952 2.11 0 1.412.624 2.88 2.05 2.88zm-1.552-7.821h1.888c.188 0 .327.039.415.09.079.05.137.127.163.228.034.11.04.207.04.293 0 .35-.076.533-.228.656a1.182 1.182 0 0 1-.35.193 1.055 1.055 0 0 1-.238.06l-.02.006h-1.888c-.2 0-.35-.016-.45-.045a.933.933 0 0 1-.246-.128 1.01 1.01 0 0 1-.2-.247.95.95 0 0 1-.073-.352c0-.2.053-.376.158-.527.106-.15.25-.263.432-.338a1.324 1.324 0 0 1 .488-.082h.02z" />
  </svg>
);

