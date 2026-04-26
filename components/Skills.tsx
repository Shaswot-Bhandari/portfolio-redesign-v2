"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Programming & Frameworks",
      skills: ["Java", "Python", "JavaScript", "HTML/CSS", "JavaFX", "React", "Node.js", "GSAP"]
    },
    {
      title: "Database & AI",
      skills: ["MySQL", "SQLite", "ML Fundamentals", "Data Preprocessing"]
    },
    {
      title: "Design",
      skills: ["UI/UX", "Brand Identity", "Social Media Creatives", "Figma", "Photoshop", "Illustrator"]
    }
  ];

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10 bg-surface/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {categories.map((category, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-8 pb-4 border-b border-muted/20">
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, j) => (
                <li key={j} className="font-display text-2xl text-foreground/90">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
