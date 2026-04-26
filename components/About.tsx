"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-48 px-6 md:px-12 relative border-t border-muted/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
        {/* Timestamp */}
        <div className="md:col-span-2 font-mono text-[10px] text-muted tracking-wide-super uppercase">
          <span className="text-accent">02.</span> About
        </div>

        {/* Image - Asymmetrical Placement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-4 relative"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-90">
            <Image
              src="/images/profile-photo.png"
              alt="Shaswot Bhandari"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 font-display text-7xl text-foreground/10 italic pointer-events-none select-none">
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
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-foreground tracking-tight-super">
            Hi, I&apos;m Shaswot. I like things that work well and look quiet.
          </h2>

          <div className="font-mono text-xs leading-relaxed text-muted space-y-6">
            <p>
              I don&apos;t believe in decorating for the sake of decoration. I believe in 
              structural integrity, clear hierarchies, and getting out of the user&apos;s way. 
              My background is in Computer Science with a focus on AI, but my actual work is 
              making sure digital products don&apos;t feel robotic.
            </p>
            <p>
              Currently studying at IIMS College in Kathmandu. When I&apos;m not coding or 
              aligning pixels, I&apos;m probably over-analyzing a typeface.
            </p>
          </div>

          <a 
            href="/images/Shaswot_Bhandari_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-mono text-[10px] text-foreground uppercase tracking-wide-super hover:text-accent transition-colors w-fit border-b border-foreground/30 pb-1"
          >
            Read the resumé →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
