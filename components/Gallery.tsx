"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/Apple-Juice-Ad.jpg", alt: "Apple Juice Ad" },
    { src: "/images/Coffee-ad.jpg", alt: "Coffee Ad" },
    { src: "/images/Hot-&-Spicy.jpg", alt: "Hot & Spicy Poster" },
    { src: "/images/Senna-(F1).jpg", alt: "Ayrton Senna F1 Poster" },
    { src: "/images/Sprite-Ad.jpg", alt: "Sprite Ad" },
    { src: "/images/Untitled-1.jpg", alt: "Untitled Creative" }
  ];

  return (
    <section id="gallery" className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between"
        >
          <h2 className="font-display text-5xl md:text-7xl">Design Work.</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mt-4 md:mt-0">Graphic Design & Art Direction</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg group bg-surface/50 border border-white/5"
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
