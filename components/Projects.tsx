"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "SmartMatch",
      role: "Full Stack + AI",
      year: "2026",
      image: "/images/behance-showcase-preview.png",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      title: "JavaFX Nepal Tourism App",
      role: "Desktop · JavaFX",
      year: "2025",
      image: "/images/hero-mountain.jpg", // Fallback for /images/project-two-preview.jpg
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "ML Veggie Price Prediction",
      role: "Machine Learning",
      year: "2025",
      image: "/images/hero-mountain.jpg", // Fallback for /images/project-three-preview.jpg
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Behance Portfolio",
      role: "Visual Design",
      year: "2026",
      link: "https://www.behance.net/shaswotbhandari",
      image: "/images/hero-mountain.jpg", // Fallback for /images/project-four-preview.jpg
      span: "md:col-span-2 md:row-span-1",
    }
  ];

  return (
    <section id="work" className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-display text-5xl md:text-7xl mb-16"
        >
          Selected Work.
        </motion.h2>

        <div className="flex flex-nowrap md:grid md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
          {projects.map((project, i) => {
            const CardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative p-8 backdrop-blur-xl bg-background/50 border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between transition-all h-full min-w-[85vw] md:min-w-0 snap-center`}
              >
                {/* Background Image */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-500 z-0 grayscale group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-0" />

                <div className="z-10 mt-auto">
                  <h3 className="font-display text-3xl mb-2 text-foreground group-hover:text-white">{project.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">{project.role}</p>
                    <p className="font-mono text-[10px] text-accent">{project.year}</p>
                  </div>
                </div>
              </motion.div>
            );

            return project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" key={i} className={`block shrink-0 md:shrink ${project.span}`}>
                {CardContent}
              </a>
            ) : (
              <div key={i} className={`block shrink-0 md:shrink ${project.span}`}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
