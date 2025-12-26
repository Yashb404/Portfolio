"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only handle hash navigation on the home page
    if (pathname !== "/") return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const id = hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Calculate offset for fixed navbar (64px height)
          const offset = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle initial hash on page load
    handleHashScroll();

    // Handle hash changes (e.g., when clicking anchor links)
    window.addEventListener("hashchange", handleHashScroll);

    // Also handle clicks on anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const id = href.substring(1);
          const element = document.getElementById(id);
          
          if (element) {
            const offset = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });

            // Update URL without triggering scroll
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname]);

  return null;
};

