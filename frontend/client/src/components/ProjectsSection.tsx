"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, UtensilsCrossed, Globe2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

const iconMap = { UtensilsCrossed, Globe2 };

type Project = {
  id: number;
  title: string;
  technologies: string[];
  features: string[];
  gradient: string;
  icon: keyof typeof iconMap;
  link?: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/projects/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-transparent blur-3xl" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-white bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground  from-indigo-500 mt-3 text-lg"
          >
            A glimpse into my creative web development journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const Icon: LucideIcon = iconMap[project.icon] || Globe2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200/50 backdrop-blur-md bg-white/40 dark:bg-zinc-900/40">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-white/20`}
                  >
                    <Icon className="h-20 w-20 text-white drop-shadow-lg" />
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-xs bg-white/30 dark:bg-white/10 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 pt-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <Button
                        variant="outline"
                        className="w-full mt-4 transition-all hover:shadow-lg hover:-translate-y-1"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on GitHub
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
