"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Find the about section to trigger visibility when scrolled past it
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // If bottom of About section passes the middle of viewport, show button
        if (rect.bottom <= window.innerHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Fallback if section is not found
        if (window.scrollY > 800) setIsVisible(true);
        else setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Run once on mount
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Cool custom scroll animation using framer-motion easing matching the site's editorial feel
    animate(window.scrollY, 0, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], 
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(4px)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] p-3 md:p-4 rounded-full bg-surface/80 backdrop-blur-md border border-accent/20 shadow-[0_0_20px_rgba(107,140,174,0.15)] text-foreground overflow-hidden group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Subtle background glow on hover */}
          <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          
          <div className="relative flex items-center justify-center overflow-hidden h-5 w-5 md:h-6 md:w-6">
            {/* The primary arrow */}
            <ArrowUp 
              strokeWidth={1.5} 
              className="absolute w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ease-out group-hover:-translate-y-8" 
            />
            {/* The secondary arrow that comes up from below */}
            <ArrowUp 
              strokeWidth={1.5} 
              className="absolute w-5 h-5 md:w-6 md:h-6 translate-y-8 transition-transform duration-500 ease-out group-hover:translate-y-0 text-accent" 
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
