"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
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

    const timeoutId = setTimeout(() => {
      if (window.location.hash) {
        handleHashScroll();
      }
    }, 100);

    window.addEventListener("hashchange", handleHashScroll);

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
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname]);

  return null;
};

