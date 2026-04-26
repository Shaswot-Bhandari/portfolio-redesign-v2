"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10 aurora-bg">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-8"
        >
          {`{ "status": "Open to Part-time Work", "location": "Kathmandu, Nepal" }`}
        </motion.p>
        
        <MagneticButton className="inline-block">
          <motion.a 
            href="mailto:shaswotbhandari1@gmail.com"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="font-display text-5xl md:text-8xl lg:text-[10rem] hover:text-accent transition-colors duration-500 leading-none px-4 text-center break-all inline-block"
          >
            Let's Build.
          </motion.a>
        </MagneticButton>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 flex flex-wrap justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted"
        >
          <a href="https://github.com/ShaswotBh" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/shaswot-bhandari-508b73283" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://www.behance.net/shaswotbhandari" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Behance</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted/70 text-center space-y-2"
        >
          <p>Phone: [ADD: phone number]</p>
          <p>Other: [ADD: extra contact]</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-16 pt-8 w-full font-mono text-[10px] text-muted/50 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-center md:text-left">Services: Graphic Design · UI/UX Design · Brand Identity · Web Design</p>
          <p>&copy; {new Date().getFullYear()} Shaswot Bhandari. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
