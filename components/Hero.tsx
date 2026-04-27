"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });
  const lerpedRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);
  const gradientDivRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lerpFactor = 0.05;
    const animate = () => {
      lerpedRef.current.x += (mousePosRef.current.x - lerpedRef.current.x) * lerpFactor;
      lerpedRef.current.y += (mousePosRef.current.y - lerpedRef.current.y) * lerpFactor;
      if (gradientDivRef.current) {
        const theme = document.documentElement.getAttribute("data-theme");
        const isDark = theme === "dark";
        gradientDivRef.current.style.background = isDark
          ? `radial-gradient(ellipse at ${lerpedRef.current.x * 100}% ${lerpedRef.current.y * 100}%, rgba(40,40,60,0.45) 0%, transparent 70%)`
          : `radial-gradient(ellipse at ${lerpedRef.current.x * 100}% ${lerpedRef.current.y * 100}%, rgba(220,210,200,0.35) 0%, transparent 70%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 md:pt-36 overflow-hidden"
    >
      {/* Film grain texture layer */}
      {mounted && <div className="hero-grain" />}

      {/* Mouse-reactive gradient layer */}
      {mounted && (
        <div
          ref={gradientDivRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      <div className="max-w-7xl relative z-20">
        
        {/* Raw Timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-xs text-muted mb-12 tracking-wide-super uppercase"
        >
          <span className="text-accent">01.</span> Latent Space
        </motion.div>

        {/* Asymmetrical Typography */}
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.6rem,10vw,11rem)] leading-[0.82] tracking-tight-super optical-align-left text-foreground"
          >
            Design
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.6rem,10vw,11rem)] leading-[0.82] tracking-tight-super text-foreground/40 italic ml-0 md:ml-32"
          >
            with intent.
          </motion.h1>
        </div>

        {/* Minimal Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 md:mt-32 max-w-lg font-mono text-xs md:text-sm leading-relaxed text-muted"
        >
          <p>
            I am <span className="text-foreground">Shaswot Bhandari</span>, a designer and developer. 
            I build simple interfaces and clear visual systems without unnecessary noise.
          </p>
          <div className="mt-8 pt-6 border-t border-muted/20 flex gap-8">
            <div>
              <p className="uppercase tracking-wide-super text-[10px] mb-2 text-foreground">Location</p>
              <p>Kathmandu, Nepal</p>
            </div>
            <div>
              <p className="uppercase tracking-wide-super text-[10px] mb-2 text-foreground">Status</p>
              <p className="text-accent">Available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
