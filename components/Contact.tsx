"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-12 relative border-t border-foreground"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
        
        <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase mb-8">
          <span className="text-accent">06.</span> Let&apos;s Talk
        </div>

        <motion.a
          href="mailto:shaswotbhandari1@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-[12rem] text-foreground 
                     hover:text-accent transition-colors duration-300 leading-[0.8] tracking-tight-super
                     optical-align-left inline-block mb-16"
        >
          shaswotbhandari1<br/>@gmail.com
        </motion.a>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end font-mono text-[10px] uppercase tracking-wide-super text-muted border-t border-muted/20 pt-8 mt-16 md:mt-32">
          
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <p className="text-foreground">Elsewhere</p>
            <div className="flex gap-8">
              <a href="https://github.com/ShaswotBh" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/shaswot-bhandari-508b73283" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://www.behance.net/shaswotbhandari" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Behance
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-left md:text-right">
            <p className="text-foreground">Availability</p>
            <p>Open for Part-time Roles &amp; Freelance</p>
            <p className="text-muted/50 mt-4">&copy; {new Date().getFullYear()} Shaswot Bhandari</p>
          </div>

        </div>
      </div>
    </section>
  );
}
