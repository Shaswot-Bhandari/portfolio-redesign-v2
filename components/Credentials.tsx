"use client";

import { motion } from "framer-motion";

export default function Credentials() {
  const education = [
    {
      degree: "Bachelor of Computer Science (Hons) with AI",
      school: "IIMS College, Kathmandu",
      affiliation: "Affiliated: Taylor's University, Malaysia",
      year: "3rd Year of 4"
    },
    {
      degree: "[ADD: Previous Degree / High School]",
      school: "[ADD: School Name]",
      affiliation: "",
      year: "[ADD: Year]"
    }
  ];

  const achievements = [
    "[ADD: Certificates & Credentials]",
    "[ADD: Bootcamps]",
    "[ADD: Trainings & Workshops]",
    "[ADD: Volunteering]",
    "[ADD: Showcases & Exhibitions]",
    "[ADD: Dean List & Academic Honors]"
  ];

  return (
    <section className="py-32 md:py-40 px-6 md:px-12 relative border-t border-muted/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
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
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <h4 className="font-display text-3xl md:text-4xl text-foreground mb-2">{item.degree}</h4>
                <p className="font-mono text-sm text-muted mb-1">{item.school}</p>
                {item.affiliation && <p className="font-mono text-xs text-muted/70 mb-4">{item.affiliation}</p>}
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-xs uppercase tracking-widest text-accent mb-12 pb-4 border-b border-muted/20"
          >
            Achievements
          </motion.h3>
          <ul className="space-y-6">
            {achievements.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="font-mono text-sm text-muted flex items-start gap-4"
              >
                <span className="text-accent mt-0.5">▹</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
