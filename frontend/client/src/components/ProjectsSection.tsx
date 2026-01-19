"use client";

import { FolderGit2, Github, Globe, Sparkles, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
  accentColor?: string;
};

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Travelling Web Application",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "A responsive travel booking platform for exploring destinations, viewing packages, and planning trips interactively.",
      github: "https://github.com/Yazi0",
      live: "https://your-travel-site.vercel.app",
      accentColor: "#3B82F6", // Blue
    },
    {
      id: 2,
      title: "Food Ordering Web Application",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "A simple yet powerful food ordering platform with menu browsing, cart system, and real-time order tracking.",
      github: "https://github.com/Yazi0",
      live: "https://your-foodapp.vercel.app",
      accentColor: "#10B981", // Emerald
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Creative Design */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-sm font-semibold text-primary/80 tracking-wider uppercase">
              Featured Work
            </span>
            <Sparkles className="h-8 w-8 text-primary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Creative Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Where <span className="text-primary font-semibold">innovation</span> meets{" "}
            <span className="text-purple-500 font-semibold">execution</span> — explore my latest digital creations
          </motion.p>
        </div>

        {/* Projects Grid with Creative Layout */}
        <div className="grid gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated Background Effect */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.accentColor}10 0%, transparent 70%)`,
                }}
              />
              
              {/* Project Card */}
              <div className="relative border border-border/40 rounded-2xl p-8 bg-background/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  0{project.id}
                </div>
                
                {/* Content Container */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Left Column - Main Info */}
                  <div className="lg:w-2/3">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <FolderGit2 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed pl-4 border-l-2 border-primary/30">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack - Animated */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech.map((techItem, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="relative px-4 py-2 rounded-full bg-gradient-to-r from-background to-muted border border-border text-sm font-medium hover:scale-105 hover:border-primary/50 transition-all duration-300 group/tech"
                        >
                          <span className="relative z-10">{techItem}</span>
                          <span
                            className="absolute inset-0 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"
                            style={{ background: `${project.accentColor}20` }}
                          />
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Column - Links & Visual */}
                  <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-border/40">
                    {/* Live Preview Badge */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold mb-6 w-full justify-center group/live shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Globe className="h-5 w-5" />
                        Visit Live Site
                        <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover/live:opacity-100 transition-opacity" />
                      </motion.a>
                    )}
                    
                    {/* GitHub Link */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-all duration-300 group/github"
                      >
                        <div className="p-2 rounded-lg bg-background">
                          <Github className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">View Code</div>
                          <div className="text-xs text-muted-foreground">GitHub Repository</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/github:text-primary transition-colors" />
                      </motion.a>
                    )}
                    
                    {/* Tech Indicator */}
                    <div className="mt-8 pt-6 border-t border-border/40">
                      <div className="text-sm text-muted-foreground mb-2">Tech Stack</div>
                      <div className="flex gap-2">
                        {project.tech.map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: hoveredId === project.id ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.1,
                              repeat: hoveredId === project.id ? Infinity : 0,
                              repeatDelay: 1,
                            }}
                            className="w-2 h-2 rounded-full bg-primary"
                            style={{
                              backgroundColor: project.accentColor,
                              opacity: 0.6 + (i * 0.1),
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accentColor}08 0%, transparent 50%)`,
                  }}
                />
              </div>
              
              {/* Connection Line (for multi-project flow) */}
              {index < projects.length - 1 && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
        
        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20 pt-12 border-t border-border/40"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and experiments.
          </p>
          <motion.a
            href="https://github.com/Yazi0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-background to-muted border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group/cta"
          >
            <Github className="h-6 w-6" />
            <span className="font-semibold">Explore All Projects</span>
            <ExternalLink className="h-5 w-5 ml-2 opacity-0 group-hover/cta:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}