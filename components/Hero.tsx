"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Parallax effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 300]);

  // The bio text broken down for the NLP tagging effect
  const bio = [
    { text: "I am", tag: null, color: "" },
    { text: "Shaswot Bhandari,", tag: "NAME", color: "text-accent border-accent" },
    { text: "a", tag: null, color: "" },
    { text: "designer and developer", tag: "ROLE", color: "text-accent border-accent" },
    { text: "building", tag: null, color: "" },
    { text: "simple interfaces", tag: "OUTPUT", color: "text-emerald-500 border-emerald-500" },
    { text: "and", tag: null, color: "" },
    { text: "strong visual communication.", tag: "SKILL", color: "text-purple-500 border-purple-500" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden aurora-bg" id="hero">
      
      {/* Decorative Schema / NLP Metadata */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ 
          delay: 0.5, 
          duration: 4, 
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
        className="absolute top-32 left-6 md:left-12 font-mono text-[10px] md:text-xs text-muted uppercase tracking-widest"
      >
        <p>{"{"}</p>
        <p className="pl-4">"role": "Designer & Developer",</p>
        <p className="pl-4">"location": "Kathmandu, Nepal",</p>
        <p className="pl-4">"status": "Available",</p>
        <p>{"}"}</p>
      </motion.div>

      {/* Main Editorial Typography */}
      <div className="z-10 mt-16 md:mt-0 pointer-events-none">
        <div className="overflow-hidden">
          <motion.h1 
            style={{ y: y1 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight text-foreground"
          >
            <ScrambleText text="Structuring" />
          </motion.h1>
        </div>
        <div className="overflow-hidden flex items-center gap-4 md:gap-12 mt-2">
          <motion.h1 
            style={{ y: y2 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] italic leading-[0.85] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-muted to-foreground/50"
          >
            <ScrambleText text="Chaos." />
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="h-[1px] flex-1 bg-muted origin-left max-w-[80px] md:max-w-md mt-4"
          />
        </div>
      </div>

      {/* NLP Bio Section (The Wow Factor) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-mono text-xs md:text-sm max-w-2xl mt-16 md:mt-24 leading-loose text-muted relative"
      >
        <div className="flex flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
          {bio.map((item, index) => {
            if (!item.tag) return <span key={index} className="py-1">{item.text}</span>;

            const isHovered = hoveredIndex === index;

            return (
              <span
                key={index}
                className="relative inline-block cursor-crosshair group py-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className={`transition-colors duration-300 ${isHovered ? item.color.split(' ')[0] : "text-foreground"}`}>
                  {item.text}
                </span>
                
                {/* NLP Tag Overlay */}
                <motion.span
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? -25 : 5,
                    scale: isHovered ? 1 : 0.95
                  }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 -top-1 px-1.5 py-0.5 text-[9px] md:text-[10px] font-bold border rounded bg-background uppercase tracking-widest pointer-events-none z-20 ${item.color}`}
                >
                  [{item.tag}]
                </motion.span>
                
                {/* Highlight underline */}
                <span 
                  className={`absolute bottom-1 left-0 w-full h-[1px] border-b border-dashed transition-colors duration-300 ${isHovered ? item.color.split(' ')[1] : 'border-transparent group-hover:border-muted'}`}
                />
              </span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
