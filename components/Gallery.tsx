"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/Apple-Juice-Ad.jpg",        alt: "Apple Juice Ad" },
  { src: "/images/Coffee-ad.jpg",              alt: "Coffee Ad" },
  { src: "/images/Hot-&-Spicy.jpg",            alt: "Hot & Spicy Poster" },
  { src: "/images/Senna-(F1).jpg",             alt: "Ayrton Senna F1 Poster" },
  { src: "/images/Sprite-Ad.jpg",              alt: "Sprite Ad" },
  { src: "/images/Untitled-1.jpg",             alt: "Untitled Creative" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-32 md:py-48 px-6 md:px-12 relative border-t border-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase mb-4 md:mb-0">
            <span className="text-accent">05.</span> Archive
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight-super text-foreground">
            Visual Explorations
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.8,
              }}
              className="relative break-inside-avoid overflow-hidden group bg-surface"
            >
              {/* Force image to dictate height properly in columns */}
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1000}
                className="w-full h-auto object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/90 to-transparent">
                <p className="font-mono text-[10px] uppercase tracking-wide-super text-foreground">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
