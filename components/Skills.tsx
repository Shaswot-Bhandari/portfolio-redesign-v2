"use client";

import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import LogoLoop from "./LogoLoop";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython,
  SiTailwindcss, SiNodedotjs, SiMysql, SiGit, SiGithub,
  SiFigma,
  SiFlutter, SiGsap, SiFramer
} from 'react-icons/si';
import { FaJava, FaImage, FaPaintBrush, FaVideo } from 'react-icons/fa';

const techLogos = [
  { node: <SiReact />, title: 'React' },
  { node: <SiNextdotjs />, title: 'Next.js' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiPython />, title: 'Python' },
  { node: <FaJava />, title: 'Java' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiMysql />, title: 'MySQL' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiGithub />, title: 'GitHub' },
  { node: <SiFigma />, title: 'Figma' },
  { node: <FaImage />, title: 'Photoshop' },
  { node: <FaPaintBrush />, title: 'Illustrator' },
  { node: <FaVideo />, title: 'Premiere Pro' },
  { node: <SiFlutter />, title: 'Flutter' },
  { node: <SiGsap />, title: 'GSAP' },
  { node: <SiFramer />, title: 'Framer Motion' },
];

const skillCategories = [
  {
    category: "Frontend & Interface",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Design & Direction",
    skills: ["Figma", "Adobe Creative Suite", "Typography", "Prototyping", "Brand Identity"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Python", "SQL", "Git", "REST APIs", "Machine Learning Concepts"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 relative border-t border-muted/20 overflow-hidden">
      <div className="w-full mb-12 md:mb-16">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Tech stack"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
        {/* Timestamp */}
        <div className="md:col-span-2 font-mono text-[10px] text-muted tracking-wide-super uppercase">
          <span className="text-accent">04.</span> Stack
        </div>

        <div className="md:col-span-10 md:col-start-3">
          <ScrollFloat
            animationDuration={0.6}
            ease="power3.out"
            scrollStart="top 95%"
            scrollEnd="bottom 20%"
            stagger={0.03}
            containerClassName="font-display text-4xl md:text-5xl tracking-tight-super text-foreground"
          >
            Stack
          </ScrollFloat>
        </div>

        {/* Skills List */}
        <div className="md:col-span-10 md:col-start-3 flex flex-col space-y-16">
          {skillCategories.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 border-b border-muted/10 pb-8"
            >
              <h3 className="w-48 font-mono text-[10px] uppercase tracking-wide-super text-foreground shrink-0">
                {group.category}
              </h3>
              <p className="font-display text-2xl md:text-4xl text-muted tracking-tight-super leading-snug">
                {group.skills.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
