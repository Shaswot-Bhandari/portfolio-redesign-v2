"use client";

import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import LogoLoop from "./LogoLoop";
import { 
  Code2, Braces, Terminal, Database, GitBranch, GitMerge,
  PenTool, Image as ImageIcon, Paintbrush, Video, Layout, FileJson,
  Cpu, Box, PanelsTopLeft, AppWindow, Layers
} from 'lucide-react';

const techLogos = [
  { node: <Code2 />, title: 'React' },
  { node: <Box />, title: 'Next.js' },
  { node: <FileJson />, title: 'JavaScript' },
  { node: <Braces />, title: 'TypeScript' },
  { node: <Terminal />, title: 'Python' },
  { node: <Cpu />, title: 'Java' },
  { node: <Layout />, title: 'Tailwind CSS' },
  { node: <AppWindow />, title: 'Node.js' },
  { node: <Database />, title: 'MySQL' },
  { node: <GitBranch />, title: 'Git' },
  { node: <GitMerge />, title: 'GitHub' },
  { node: <PenTool />, title: 'Figma' },
  { node: <ImageIcon />, title: 'Photoshop' },
  { node: <Paintbrush />, title: 'Illustrator' },
  { node: <Video />, title: 'Premiere Pro' },
  { node: <PanelsTopLeft />, title: 'Flutter' },
  { node: <Layers />, title: 'Framer Motion' },
];

const skillCategories = [
  {
    category: "UI/UX & Graphic Design",
    skills: ["Figma", "Adobe Creative Suite", "Photoshop", "Illustrator", "Prototyping", "Wireframing", "Visual Design"],
  },
  {
    category: "Web & App Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Python", "PostgreSQL", "FastAPI", "Docker"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Node.js", "Figma Dev Mode", "Framer Motion", "GSAP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
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
        
        {/* Label + Heading flush left */}
        <div className="md:col-span-12 flex flex-col gap-2 mb-8">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase">
            <span className="text-accent">03.</span> Stack
          </div>
          <ScrollFloat
            animationDuration={0.6}
            ease={[0.16, 1, 0.3, 1]}
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
              <div className="w-48 shrink-0">
                <h3 className="font-mono text-[10px] uppercase tracking-wide-super text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex-1">
                <h3 className="font-mono text-[10px] uppercase tracking-wide-super text-muted mb-2">
                  Skills
                </h3>
                <p className="font-display text-2xl md:text-4xl text-muted tracking-tight-super leading-snug">
                  {group.skills.join(", ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
