"use client";

import { FolderGit2, Github, Globe, Sparkles, ExternalLink, ArrowUpRight, Code2, Eye, Star, GitBranch } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AETI from "../assets/image/aeti.png";

type Project = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  image?: string;
  github?: string;
  live?: string;
  demo?: string;
  accentColor?: string;
  gradient?: string;
  stats?: {
    stars?: number;
    forks?: number;
  };
};

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Tripzio Full Web Site",
      tech: ["React", "TypeScript", "Tailwind", "Leaflet", "Node.js"],
      description:
        "A premium full-stack tourism platform featuring interactive maps, booking systems, and destination discovery.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/Tripzio---Full-Web-Site",
      demo: "https://tripzio.vercel.app",
      accentColor: "#3B82F6",
      gradient: "from-blue-500 to-indigo-500",
      stats: { stars: 12, forks: 4 }
    },
    {
      id: 2,
      title: "AETI",
      tech: ["React", "TypeScript", "Tailwind", "Leaflet", "Node.js"],
      description:
        "Technical education portal for AETI (Automotive Engineering Training Institute) providing digital resources and training management.",
      image: AETI,
      github: "https://github.com/Yazi0",
      demo: "https://aeti.naita.gov.lk",
      accentColor: "#3B82F6",
      gradient: "from-blue-500 to-indigo-500",
      stats: { stars: 10, forks: 2 }
    },
    {
      id: 3,
      title: "A9 Education Portal",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      description:
        "Comprehensive learning management system with student dashboards, course management, and interactive portals.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/A9-Education",
      demo: "https://github.com/Yazi0/A9-Education",
      accentColor: "#F59E0B",
      gradient: "from-amber-500 to-orange-600",
      stats: { stars: 8, forks: 2 }
    },
    {
      id: 4,
      title: "Education Management System",
      tech: ["React", "Python", "Flask", "PostgreSQL", "Recharts"],
      description:
        "Advanced institutional management system with QR attendance, analytics, and comprehensive student tracking.",
      image: "https://images.unsplash.com/photo-1523050335312-0d0571050849?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/Education-Management-System",
      demo: "https://github.com/Yazi0/Education-Management-System",
      accentColor: "#10B981",
      gradient: "from-emerald-500 to-cyan-600",
      stats: { stars: 15, forks: 5 }
    },
    {
      id: 5,
      title: "FoodFlowHub",
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
      description:
        "Complete food delivery and management ecosystem streamlining order flows and kitchen operations.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/FoodFlowHub",
      demo: "https://github.com/Yazi0/FoodFlowHub",
      accentColor: "#EF4444",
      gradient: "from-red-500 to-rose-600",
      stats: { stars: 6, forks: 3 }
    },
    {
      id: 6,
      title: "Smart Tuition Manager",
      tech: ["React", "Firebase", "Tailwind CSS", "Cloud Functions"],
      description:
        "Streamlined platform for tuition centers to manage enrollments, fee collections, and student performance.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/SmartTuitionManager",
      demo: "https://github.com/Yazi0/SmartTuitionManager",
      accentColor: "#8B5CF6",
      gradient: "from-violet-500 to-fuchsia-600",
      stats: { stars: 5, forks: 1 }
    },
    {
      id: 7,
      title: "Travelling Web App",
      tech: ["React", "JavaScript", "Node.js", "Express"],
      description:
        "Interactive travel platform focusing on tour packages and user journey mapping for seamless experiences.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/Tripzio---Tourism-Traveling-web-site",
      demo: "https://github.com/Yazi0/Tripzio---Tourism-Traveling-web-site",
      accentColor: "#0EA5E9",
      gradient: "from-sky-500 to-blue-600",
      stats: { stars: 4, forks: 2 }
    },
    {
      id: 8,
      title: "AI Content Studio",
      tech: ["Next.js", "TypeScript", "OpenAI API", "Drizzle ORM"],
      description:
        "Cutting-edge AI dashboard for generating high-quality marketing content and automating creative workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      demo: "https://github.com/Yazi0",
      accentColor: "#6366F1",
      gradient: "from-indigo-500 to-violet-600",
      stats: { stars: 22, forks: 7 }
    },
    {
      id: 9,
      title: "Modern Portfolio",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      description:
        "The current premium portfolio project showcasing advanced animations and creative layout designs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Yazi0/portfolio",
      demo: "https://yasirunimsara.vercel.app",
      accentColor: "#EC4899",
      gradient: "from-pink-500 to-rose-600",
      stats: { stars: 3, forks: 1 }
    },
  ];

  // Parallax effect for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Orbs */}
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[128px]"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-24 relative"
        >
          {/* Floating Badges */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32"
          >
            <div className="absolute inset-0 border border-blue-500/30 rounded-full" />
            <div className="absolute inset-2 border border-purple-500/30 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium text-white/80 tracking-wider uppercase">
              Featured Creations
            </span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Masterpieces
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            Where <span className="text-blue-400 font-semibold">innovation</span> meets{" "}
            <span className="text-purple-400 font-semibold">execution</span> —
            transforming ideas into exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full"
              >
                {/* Card Background with Hover Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300 flex flex-col">
                  {/* Card Header Illustration/Image */}
                  <div className="h-48 relative overflow-hidden shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                    {project.image ? (
                      <motion.img
                        initial={{ scale: 1.2 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <FolderGit2 className="w-12 h-12 text-white/20" />
                      </div>
                    )}

                    {/* Floating Tech Badges on Image */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {project.tech.slice(0, 2).map((tech, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Project Number and Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-md opacity-50" />
                        <div className="relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white truncate">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="relative pl-4 mb-6 flex-1">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <p className="text-white/70 text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((techItem, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-medium"
                        >
                          {techItem}
                        </div>
                      ))}
                    </div>

                    {/* Project Stats */}
                    {project.stats && (
                      <div className="flex gap-4 text-white/50 text-xs mb-6 px-1">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500/80" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitBranch className="w-3.5 h-3.5 text-blue-500/80" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    )}

                    {/* Interactive Links Container */}
                    <div className="space-y-3 mt-auto">
                      {/* Live Preview Button (Primary CTA) */}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative block group/live"
                        >
                          <div className="relative px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-between overflow-hidden">
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-white/90" />
                              <span className="text-white/90 font-semibold text-sm">Live Preview</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-white/60 group-hover/live:text-white transition-all" />
                          </div>
                        </motion.a>
                      )}

                      {/* Secondary Actions (Side-by-side) */}
                      <div className="flex gap-3">
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 relative group/demo"
                          >
                            <div className="relative px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-xs text-blue-400">
                              <Eye className="w-3.5 h-3.5" />
                              <span>Demo</span>
                            </div>
                          </motion.a>
                        )}

                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 relative group/github"
                          >
                            <div className="relative px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 font-semibold text-xs text-white/70 hover:text-white">
                              <Github className="w-3.5 h-3.5" />
                              <span>Source</span>
                            </div>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-32 pt-16 border-t border-white/10"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59,130,246,0)",
                "0 0 0 20px rgba(59,130,246,0.1)",
                "0 0 0 0 rgba(59,130,246,0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block rounded-full"
          >
            <motion.a
              href="https://github.com/Yazi0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg group/cta overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Github className="w-6 h-6" />
                Explore All Projects
                <ExternalLink className="w-5 h-5 opacity-0 group-hover/cta:opacity-100 transition-all group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
              </span>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-white/40 mt-8 text-lg"
          >
            Each project is crafted with passion and precision
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}