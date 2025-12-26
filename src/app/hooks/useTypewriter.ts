"use client";

import React from "react";

export const useTypewriter = (text: string, speed: number = 100) => {

  const [displayedText, setDisplayedText] = React.useState("");
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return { text: displayedText, isFinished: index === text.length };
};

