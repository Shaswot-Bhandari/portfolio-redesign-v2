"use client";

import { useEffect, useRef, useState } from "react";


// Wide dramatic glitch character set
const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&|~`'\";:.,ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890█▓▒░▄▀■□▪▫";

interface Props {
  text: string;
  className?: string;
  /** How many scramble passes before settling (default 2) */
  passes?: number;
  /** Delay before starting in ms (default 2600) */
  delay?: number;
}

export default function ScrambleText({ text, className, passes = 2, delay = 2600 }: Props) {
  const [displayText, setDisplayText] = useState<string>(text.replace(/\S/g, "▓"));
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    let pass = 0;
    const totalPasses = passes;

    const runPass = () => {
      iteration = 0;
      const speed = pass === totalPasses - 1 ? 28 : 18; // last pass slower for drama

      const tick = () => {
        const resolved = Math.floor(iteration);

        setDisplayText(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolved) return text[i];
              // Extra glitch probability on unresolved chars
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            })
            .join("")
        );

        if (resolved >= text.length) {
          if (pass < totalPasses - 1) {
            pass++;
            // Brief pause between passes
            frameRef.current = setTimeout(runPass, 80);
          }
          // done — stay on final text
          return;
        }

        // Faster resolve on last pass
        iteration += pass === totalPasses - 1 ? 1 / 3.5 : 1 / 6;
        frameRef.current = setTimeout(tick, speed);
      };

      tick();
    };

    timerRef.current = setTimeout(() => {
      // Native animation before scramble starts
      if (spanRef.current) {
        const animation = spanRef.current.animate(
          [
            { opacity: 0, transform: 'skewX(-8deg)' },
            { opacity: 1, transform: 'skewX(0deg)' }
          ],
          {
            duration: 400,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards'
          }
        );
        animation.onfinish = runPass;
      } else {
        runPass();
      }
    }, delay);

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, passes, delay]);

  return (
    <span
      ref={spanRef}
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
}
