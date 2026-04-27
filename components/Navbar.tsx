"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Sun, Moon, ArrowDownToLine } from "lucide-react";
import RotatingText from "./RotatingText";
import BubbleMenu from "./BubbleMenu";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-start justify-between
                    px-6 py-6 md:px-12 transition-all duration-300
                    ${scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-wide-super text-foreground">
          <Link href="/" className="hover:text-accent transition-colors">
            Shaswot Bhandari
          </Link>
          <div className="text-muted mt-1 h-4 overflow-hidden">
            <RotatingText
              texts={['Designer.', 'Developer.', 'AI Student.', 'Freelancer.']}
              mainClassName="text-rotate-accent overflow-hidden"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-wide-super">
          <div className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="relative text-muted hover:text-foreground transition-colors duration-300 py-1 group"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex gap-6 items-center border-l border-muted/20 pl-6">
            <a
              href="/images/Shaswot_Bhandari_CV.pdf"
              download="Shaswot_Bhandari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-muted/30 rounded-full bg-surface/30 hover:bg-surface hover:border-foreground/30 text-foreground transition-all duration-300 group"
            >
              <span>Resume</span>
              <ArrowDownToLine size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-y-[2px] transition-all" />
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-foreground hover:text-accent transition-colors relative overflow-hidden"
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {theme === "dark" ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-6 font-mono text-[10px] uppercase tracking-wide-super">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun size={24} strokeWidth={2} /> : <Moon size={24} strokeWidth={2} />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
          <div className="md:hidden">
            <BubbleMenu
              logo={<span style={{ fontWeight: 700, fontFamily: 'Oswald, sans-serif', fontSize: '1.1rem' }}>SB</span>}
              menuAriaLabel="Toggle navigation"
                menuBg="var(--bg-color)"
                menuContentColor="var(--fg-color)"
              useFixedPosition={true}
              animationEase={[0.16, 1, 0.3, 1]}
              animationDuration={0.5}
              staggerDelay={0.12}
              items={[
                { label: 'home', href: '#hero', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: 'var(--accent-color)', textColor: 'var(--bg-color)' } },
                { label: 'about', href: '#about', ariaLabel: 'About', rotation: 8, hoverStyles: { bgColor: 'var(--accent-color)', textColor: 'var(--bg-color)' } },
                { label: 'work', href: '#work', ariaLabel: 'Work', rotation: 8, hoverStyles: { bgColor: 'var(--accent-color)', textColor: 'var(--bg-color)' } },
                { label: 'skills', href: '#skills', ariaLabel: 'Skills', rotation: 8, hoverStyles: { bgColor: 'var(--accent-color)', textColor: 'var(--bg-color)' } },
                { label: 'contact', href: '#contact', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: 'var(--accent-color)', textColor: 'var(--bg-color)' } }
              ]}
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
