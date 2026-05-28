"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollFloat from "./ScrollFloat";
import GlareHover from "./GlareHover";

interface Project {
  title: string;
  role: string;
  year: string;
  image: string;
  challenge: string;
  tools: string;
  outcome: string;
  link?: string;
  offset?: string; // Tailwind class for Y-offset to create asymmetry
}

const projects: Project[] = [
  {
    title: "SmartMatch Job Portal",
    role: "Full Stack + AI",
    year: "2026",
    image: "/images/7150.jpg",
    challenge: "A team project building a smart job portal with AI-powered job matching and a better way to connect candidates with relevant roles.",
    tools: "Python, PostgreSQL, pgvector, FastAPI, SQLAlchemy, Alembic, React, Docker",
    outcome: "Worked on database design, AI/NLP matching logic, and frontend integration for the portal.",
    offset: "md:mt-0",
  },
  {
    title: "JavaFX Nepal Tourism App",
    role: "Desktop · JavaFX",
    year: "2025",
    image: "/images/nepal-tourism.jpg",
    challenge: "Make Nepal travel information easier to browse in a desktop application.",
    tools: "Java, JavaFX, Scene Builder, FXML",
    outcome: "Created a desktop tourism app with structured destination browsing and a cleaner user flow.",
    offset: "md:mt-32",
  },
  {
    title: "ML Veggie Price Prediction",
    role: "Machine Learning",
    year: "2025",
    image: "/images/veggie-prediction.jpg",
    challenge: "Estimate vegetable prices more accurately using data-driven predictions.",
    tools: "Python, Pandas, scikit-learn, Jupyter Notebook",
    outcome: "Built a machine learning model to forecast pricing patterns from historical data.",
    offset: "md:-mt-16",
  },
  {
    title: "Behance Portfolio",
    role: "Visual Design",
    year: "2026",
    link: "https://www.behance.net/shaswotbhandari",
    image: "/images/behance-showcase-preview.png",
    challenge: "Present design work in a polished portfolio that highlights visual direction.",
    tools: "Figma, Adobe Photoshop, Adobe Illustrator, Behance",
    outcome: "Published a curated design showcase that strengthens the visual side of the portfolio.",
    offset: "md:mt-48",
  },
];

export default function Projects() {

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-start gap-2 mb-16 md:mb-24">
          <div className="font-mono text-[10px] text-muted tracking-wide-super uppercase">
            <span className="text-accent">02.</span> Selected Work
          </div>
          <ScrollFloat
            animationDuration={0.6}
            ease={[0.16, 1, 0.3, 1]}
            scrollStart="top 95%"
            scrollEnd="bottom 20%"
            stagger={0.03}
            containerClassName="font-display text-4xl md:text-5xl tracking-tight-super text-foreground"
          >
            Selected Work
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-0">
          {projects.map((project, i) => {
            const innerContent = (
              <div className="group flex flex-col space-y-4">
                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="8px"
                  borderColor="rgba(128,128,128,0.12)"
                  glareColor="currentColor"
                  glareOpacity={0.1}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  style={{ width: '100%', height: '100%' }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.role} project by Shaswot Bhandari`}
                      fill
                      sizes="(max-width: 768px) 100vw, 48vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </GlareHover>

                <div className="flex flex-col space-y-1">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight-super text-foreground">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] leading-relaxed text-muted">Challenge: {project.challenge}</p>
                  <p className="font-mono text-[11px] leading-relaxed text-muted">Tools: {project.tools}</p>
                  <p className="font-mono text-[11px] leading-relaxed text-muted">Outcome: {project.outcome}</p>
                  <div className="flex justify-between font-mono text-[10px] uppercase tracking-wide-super text-muted pt-2 border-t border-muted/20">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${project.offset || ""}`}
              >
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    {innerContent}
                  </a>
                ) : (
                  innerContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
