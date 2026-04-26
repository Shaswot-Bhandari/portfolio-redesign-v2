"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work",    href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="text-muted mt-1">Designer &amp; Developer</div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-start gap-12 font-mono text-[10px] uppercase tracking-wide-super">
          <div className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-muted hover:text-foreground transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="/images/Shaswot_Bhandari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground border-b border-foreground/30 hover:border-accent hover:text-accent pb-1 transition-all"
            >
              CV
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Toggle Theme"
              >
                [{theme === "dark" ? "Light" : "Dark"}]
              </button>
            )}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-6 font-mono text-[10px] uppercase tracking-wide-super">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted hover:text-foreground transition-colors"
            >
              [{theme === "dark" ? "LT" : "DK"}]
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background flex flex-col justify-center px-12 gap-8 font-display text-6xl"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-accent transition-colors tracking-tight-super"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              href="/images/Shaswot_Bhandari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 font-mono text-[10px] uppercase tracking-wide-super text-muted hover:text-foreground transition-colors"
            >
              Download resumé →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
