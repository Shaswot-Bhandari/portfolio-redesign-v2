"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Avoid hydration mismatch for theme
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xl bg-background/40 border-b border-white/5"
      >
        <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground">
          <Link href="/">
            Shaswot Bhandari <span className="text-accent ml-2">[DB_ENG]</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <MagneticButton>
            <Link href="#work" className="hover:-translate-y-0.5 hover:text-accent transition-all duration-300">Work</Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="#gallery" className="hover:-translate-y-0.5 hover:text-accent transition-all duration-300">Gallery</Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="#about" className="hover:-translate-y-0.5 hover:text-accent transition-all duration-300">About</Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="#contact" className="hover:-translate-y-0.5 hover:text-accent transition-all duration-300">Contact</Link>
          </MagneticButton>
          
          <MagneticButton>
            <a 
              href="/images/Shaswot_Bhandari_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-muted/20 rounded hover:bg-foreground hover:text-background transition-colors duration-300 ml-4"
            >
              CV
            </a>
          </MagneticButton>

          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 ml-2 hover:bg-muted/10 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          {mounted && (
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-surface transition-colors text-muted hover:text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button onClick={toggleMenu} className="p-2 text-foreground" aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-background flex flex-col items-center justify-center gap-8 font-display text-5xl"
          >
            <Link href="#work" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Work</Link>
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Gallery</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">About</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">Contact</Link>
            
            <a 
              href="/images/Shaswot_Bhandari_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 border border-muted/20 rounded text-center hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
