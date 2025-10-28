"use client";

import { FolderGit2, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Travelling Web Application",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "A responsive travel booking platform for exploring destinations, viewing packages, and planning trips interactively.",
      github: "https://github.com/Yazi0",
      live: "https://your-travel-site.vercel.app",
    },
    {
      id: 2,
      title: "Food Ordering Web Application",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "A simple yet powerful food ordering platform with menu browsing, cart system, and real-time order tracking.",
      github: "https://github.com/Yazi0",
      live: "https://your-foodapp.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Creative and fully responsive web applications I’ve built recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="border border-border/50 rounded-2xl p-6 backdrop-blur-md bg-background/70 shadow-md hover:shadow-xl hover:border-primary/50 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <FolderGit2 className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
