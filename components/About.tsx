"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: The Quote / Impact */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/images/profile-photo.png" 
              alt="Shaswot Bhandari" 
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            "Good architecture is invisible. <br/>
            <span className="italic text-muted">Great design is unforgettable.</span>"
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 font-mono text-xs text-accent tracking-widest uppercase"
          >
            &mdash; The Philosophy
          </motion.div>
        </div>

        {/* Right Side: The Data / Paragraph */}
        <div className="font-mono text-sm leading-relaxed text-muted flex flex-col justify-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm Shaswot Bhandari, a designer and developer who likes 
            simple, thoughtful interfaces and clean visual communication. 
            I enjoy working on projects that feel calm, useful, and 
            visually strong.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Currently in 3rd year at IIMS College, Bhagwati Bahal, Naxal, Kathmandu, 
            pursuing Bachelor of Computer Science (Hons) with AI specialization, 
            affiliated with Taylor's University, Malaysia.
          </motion.p>

          {/* Data Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 pt-8 border-t border-muted/10 text-xs"
          >
            <div>
              <p className="text-foreground uppercase tracking-widest mb-1">Focus</p>
              <p>UI/UX Design</p>
              <p>Frontend Engineering</p>
              <p>AI Specialization</p>
            </div>
            <div>
              <p className="text-foreground uppercase tracking-widest mb-1">Location</p>
              <p>Kathmandu, Nepal</p>
              <p className="text-accent mt-2">Open to Part-time</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
