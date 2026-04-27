"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";
import GlareHover from "./GlareHover";

const images = [
  { src: "/images/Apple-Juice-Ad.jpg",        alt: "Apple Juice Ad" },
  { src: "/images/Coffee-ad.jpg",              alt: "Coffee Ad" },
  { src: "/images/Hot-&-Spicy.jpg",            alt: "Hot & Spicy Poster" },
  { src: "/images/Senna-(F1).jpg",             alt: "Ayrton Senna F1 Poster" },
  { src: "/images/Sprite-Ad.jpg",              alt: "Sprite Ad" },
  { src: "/images/Untitled-1.jpg",             alt: "Untitled Creative" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const close = React.useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    if (!selectedImage) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
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

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
      previouslyFocusedRef.current = null;
    };
  }, [selectedImage, close]);

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16 md:mb-24">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase">
            <span className="text-accent">06.</span> Archive
          </div>
          <ScrollFloat
            animationDuration={0.6}
            ease={[0.16, 1, 0.3, 1]}
            scrollStart="top 95%"
            scrollEnd="bottom 20%"
            stagger={0.03}
            containerClassName="font-display text-4xl md:text-5xl tracking-tight-super text-foreground"
          >
            Visual Explorations
          </ScrollFloat>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.8,
              }}
              className="relative break-inside-avoid group bg-surface cursor-zoom-in"
              onClick={() => setSelectedImage(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(img);
                }
              }}
            >
              <GlareHover
                width="100%"
                height="100%"
                background="transparent"
                borderRadius="8px"
                borderColor="rgba(128,128,128,0.12)"
                glareColor="currentColor"
                glareOpacity={0.1}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{ width: '100%', height: '100%' }}
                className="group"
              >
                {/* Force image to dictate height properly in columns */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="font-mono text-[10px] uppercase tracking-wide-super text-foreground">
                    {img.alt}
                  </p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm flex items-center justify-center p-6"
            onClick={close}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                className="absolute -top-2 -right-2 md:top-0 md:right-0 text-foreground bg-background/10 hover:bg-background/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>

              <div className="w-full flex flex-col items-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={2200}
                  height={1400}
                  className="w-full max-h-[90vh] object-contain select-none"
                  priority
                />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wide-super text-foreground/80">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
