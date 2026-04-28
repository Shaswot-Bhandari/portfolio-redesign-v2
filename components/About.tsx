"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import ScrollFloat from "./ScrollFloat";
import CountUp from "./CountUp";

export default function About() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsLightboxOpen(false);
        return;
      }
      
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);

      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (!active || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    if (isLightboxOpen) window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (isLightboxOpen) {
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus?.();
    }
  }, [isLightboxOpen]);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">

        {/* Label + Heading flush left — spans full width */}
        <div className="md:col-span-12 flex flex-col gap-2 mb-8">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase">
            <span className="text-accent">01.</span> About
          </div>
          <ScrollFloat
            animationDuration={0.6}
            ease={[0.16, 1, 0.3, 1]}
            scrollStart="top 95%"
            scrollEnd="bottom 20%"
            stagger={0.03}
            containerClassName="font-display text-4xl md:text-5xl tracking-tight-super text-foreground"
          >
            About
          </ScrollFloat>
        </div>

        {/* Image - Asymmetrical Placement & Interactive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 relative group"
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerRef.current = document.activeElement as HTMLElement | null;
                setIsLightboxOpen(true);
              }
            }}
            className="relative w-full aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-90 
                       cursor-zoom-in transition-all duration-700 ease-out
                       group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 
                       group-hover:shadow-[0_0_40px_rgba(107,140,174,0.15)] ring-1 ring-transparent group-hover:ring-accent/20"
            onClick={() => {
              triggerRef.current = document.activeElement as HTMLElement | null;
              setIsLightboxOpen(true);
            }}
          >
            <Image
              src="/images/profile-photo.png"
              alt="Shaswot Bhandari"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Hint Icon */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-foreground">
              <Plus size={16} strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 font-display text-7xl text-foreground/10 italic pointer-events-none select-none transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2">
            SB.
          </div>
        </motion.div>

        {/* Text Copy - Conversational & Raw */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-5 md:col-start-8 flex flex-col space-y-12 md:mt-24"
        >
          <div className="font-mono text-xs leading-relaxed text-muted space-y-6 mb-12">
            <p>
              Hi, I&apos;m Shaswot. I like things that work well and look quiet.
            </p>
            <p>
              I don&apos;t believe in decorating for the sake of decoration. I believe in
              structural integrity, clear hierarchies, and getting out of the user&apos;s way.
              My background is in Computer Science with a focus on AI, but my actual work is
              making sure digital products don&apos;t feel robotic.
            </p>
            <p>
              Currently studying at IIMS College in Kathmandu. Previously, I worked as an Intern at
              <span className="text-foreground"> Ajima Engineering Construction</span> (Remote) from Jan 2024 to Sep 2025,
              focusing on graphic design, visual content creation, and digital marketing using Adobe Photoshop, Illustrator, and Premiere Pro.
            </p>
            <p>
              When I&apos;m not coding or aligning pixels, I&apos;m probably over-analyzing a typeface.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full border-t border-b border-muted/15 py-6">
            <div className="md:pr-4 md:border-r md:border-muted/15">
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight-super leading-none">
                <CountUp to={3} from={0} direction="up" duration={2} delay={0.2} />
                <span>+</span>
              </p>
              <p className="mt-2 font-sans font-light text-xs text-muted">Years Learning</p>
            </div>

            <div className="md:px-4 md:border-r md:border-muted/15">
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight-super leading-none">
                <CountUp to={10} from={0} direction="up" duration={2} delay={0.2} />
                <span>+</span>
              </p>
              <p className="mt-2 font-sans font-light text-xs text-muted">Projects Built</p>
            </div>

            <div className="md:px-4 md:border-r md:border-muted/15">
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight-super leading-none">
                <CountUp to={6} from={0} direction="up" duration={2} delay={0.2} />
              </p>
              <p className="mt-2 font-sans font-light text-xs text-muted">Certifications</p>
            </div>

            <div className="md:pl-4">
              <p className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight-super leading-none">
                <CountUp to={3} from={0} direction="up" duration={2} delay={0.2} />
              </p>
              <p className="mt-2 font-sans font-light text-xs text-muted">Volunteer Events</p>
            </div>
          </div>

          <a
            href="/images/Shaswot_Bhandari_CV.pdf"
            download="Shaswot_Bhandari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-[10px] text-foreground uppercase tracking-wide-super hover:text-accent transition-colors w-fit border-b border-foreground/30 pb-1"
          >
            Read the resumé →
          </a>
        </motion.div>

      </div>

      {/* Lightbox Overlay */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsLightboxOpen(false)}
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-6 cursor-zoom-out"
            >
              <button
                ref={closeButtonRef}
                aria-label="Close image"
                className="fixed top-6 right-6 md:top-10 md:right-10 text-foreground hover:text-accent transition-colors p-3 bg-background/20 backdrop-blur-md rounded-full z-[110]"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X size={28} strokeWidth={2} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-[calc(85vh*0.75)] aspect-[3/4] overflow-hidden shadow-2xl cursor-default border border-muted/20"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/images/profile-photo.png"
                  alt="Shaswot Bhandari"
                  fill
                  sizes="(max-width: 768px) 90vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
