"use client";

import { useEffect, useState } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export default function ScrambleText({ text, className }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              // Don't scramble spaces
              if (text[index] === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        // Slower scramble effect
        iteration += 1 / 4;
      }, 30);
    };

    // Delay start to allow preloader to finish
    const timer = setTimeout(startScramble, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [text]);

  return <span className={className}>{displayText || text.replace(/./g, "_")}</span>;
}
