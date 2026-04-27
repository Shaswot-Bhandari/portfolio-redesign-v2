"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import ScrollFloat from "./ScrollFloat";

export default function Credentials() {
  const education = [
    {
      degree: "Bachelor of Computer Science (Hons) with AI",
      school: "IIMS College, Kathmandu",
      affiliation: "Affiliated: Taylor's University, Malaysia",
      year: "Sep 2023 - Present (Expected Sep 2027) — 3rd year of 4"
    },
    {
      degree: "High School Diploma (+2)",
      school: "Trinity International College, Kathmandu",
      affiliation: "Final CGPA 3.40",
      year: "Jun 2021 - Apr 2023"
    },
    {
      degree: "Secondary School (up to Grade X)",
      school: "Triyog High School, Dhapasi, Kathmandu",
      affiliation: "triyog.edu.np",
      year: ""
    }
  ];

  const bootcamp = [
    {
      title: "IIMS 2.0 Bootcamp Certificate of Completion",
      organization: "IIMS College",
      date: "Feb 1 - Mar 16, 2026",
      details: "Tracks covered: Flutter, Software Testing, ML Model / AI Automation, JavaScript, Git/GitHub, UI/UX"
    }
  ];

  const certifications = [
    {
      title: "Google Analytics Certification",
      organization: "Google Skillshop",
      date: "Dec 2025 (Valid until Dec 2026)"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      organization: "Forage",
      date: "Dec 2025"
    },
    {
      title: "Future Forward: Putting Mindfulness into Action",
      organization: "IIMS College",
      date: "Nov 29, 2023 — 4-hour workshop"
    }
  ];

  const volunteering = [
    {
      title: "Volunteer",
      organization: "IIMS Holi Blast 8.0",
      date: "Mar 22, 2024 — IIMS College, Kathmandu"
    },
    {
      title: "Volunteer",
      organization: "IIMS Khel Utsav 2024",
      date: "Mar 15-16, 2024 — Army Physical Training & Sports Center"
    },
    {
      title: "Volunteer",
      organization: "Blood Donation Program",
      date: "Jun 14, 2024 — IIMS College & Nepal Red Cross Society"
    }
  ];

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 relative border-t border-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16 md:mb-32">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase mb-4">
            <span className="text-accent">05.</span> Credentials
          </div>
          <ScrollFloat
            animationDuration={0.6}
            ease="power3.out"
            scrollStart="top 95%"
            scrollEnd="bottom 20%"
            stagger={0.03}
            containerClassName="font-display text-4xl md:text-5xl tracking-tight-super text-foreground"
          >
            Credentials
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="space-y-24">
          {/* Education */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-mono text-xs uppercase tracking-widest text-accent mb-12 pb-4 border-b border-muted/20"
            >
              Education
            </motion.h3>
            <div className="space-y-12">
              {education.map((item, i) => (
                <motion.div 
                  key={`${item.degree}-${item.school}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <h4 className="font-display text-2xl md:text-3xl text-foreground mb-2">{item.degree}</h4>
                  <p className="font-mono text-sm text-muted mb-1">{item.school}</p>
                  {item.affiliation && <p className="font-mono text-xs text-muted/70 mb-4">{item.affiliation}</p>}
                  {item.year && <p className="font-mono text-[10px] uppercase tracking-wide-super text-accent">{item.year}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bootcamp */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-mono text-xs uppercase tracking-widest text-accent mb-12 pb-4 border-b border-muted/20"
            >
              Bootcamps
            </motion.h3>
            <div className="space-y-12">
              {bootcamp.map((item, i) => (
                <motion.div 
                  key={`${item.title}-${item.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <h4 className="font-display text-2xl md:text-3xl text-foreground mb-2">{item.title}</h4>
                  <p className="font-mono text-sm text-muted mb-1">{item.organization}</p>
                  <p className="font-mono text-xs text-muted/70 mb-4">{item.details}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide-super text-accent">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-24">
          {/* Certifications */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-mono text-xs uppercase tracking-widest text-accent mb-12 pb-4 border-b border-muted/20"
            >
              Certifications
            </motion.h3>
            <div className="space-y-12">
              {certifications.map((item, i) => (
                <motion.div 
                  key={`${item.title}-${item.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <h4 className="font-display text-2xl md:text-3xl text-foreground mb-2">{item.title}</h4>
                  <p className="font-mono text-sm text-muted mb-4">{item.organization}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide-super text-accent">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-mono text-xs uppercase tracking-widest text-accent mb-12 pb-4 border-b border-muted/20"
            >
              Volunteering
            </motion.h3>
            <div className="space-y-12">
              {volunteering.map((item, i) => (
                <motion.div 
                  key={`${item.organization}-${item.date}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <h4 className="font-display text-2xl md:text-3xl text-foreground mb-2">{item.title}</h4>
                  <p className="font-mono text-sm text-muted mb-4">{item.organization}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide-super text-accent">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

        <div className="mt-16 flex justify-end">
          <a
            href="/images/Shaswot_Bhandari_CV.pdf"
            download="Shaswot_Bhandari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide-super text-muted hover:text-foreground transition-colors"
          >
            <span className="border-b border-muted/30 pb-1">Download CV</span>
            <ArrowDownToLine size={14} className="opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
