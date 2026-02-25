"use client";

import { GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

// Reusable typewriter component
function TypewriterText({
  text,
  delay = 0,
  speed = 30,
  className = "",
  trigger,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  trigger: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setDisplayed("");
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[2px] h-[0.85em] ml-0.5 bg-primary align-middle transition-opacity duration-300 ${isTyping ? "opacity-100 animate-pulse" : "opacity-0"
          }`}
      />
    </span>
  );
}

export default function EducationSection() {
  const fullSubtitle = "My academic journey and qualifications";
  const [subtitleDisplayed, setSubtitleDisplayed] = useState("");
  const [subtitleTyping, setSubtitleTyping] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    setSubtitleTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setSubtitleDisplayed(fullSubtitle.slice(0, i + 1));
      i++;
      if (i >= fullSubtitle.length) {
        clearInterval(interval);
        setSubtitleTyping(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isInView]);

  const education: Education[] = [
    {
      id: 1,
      degree: "Full Stack Developer (Internship)",
      institution: "National Apprentice & Industrial Training Authority (NAITA)",
      year: "2024 - Present",
      description:
        "Gaining hands-on experience in full-stack web development, software architecture, and industrial standards.",
    },
    {
      id: 2,
      degree: "HND in Information Technology",
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      year: "Ongoing",
      description:
        "Specialized in software development, database systems, and web technologies.",
    },
    {
      id: 3,
      degree: "G.C.E. Advanced Level Examination",
      institution: "MR/Denipitiya M.V. (National School)",
      year: "2021",
      description:
        "Completed A/L studies in the Technology stream with strong academic performance.",
    },
    {
      id: 4,
      degree: "G.C.E. Ordinary Level Examination",
      institution: "MR/Warakapitiya M.V.",
      year: "2018",
      description:
        "Achieved excellent results and built a strong foundation in mathematics and IT.",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto min-h-[1.5rem]">
            {subtitleDisplayed}
            <span
              className={`inline-block w-[2px] h-4 ml-0.5 bg-primary align-middle ${subtitleTyping ? "animate-pulse" : "opacity-0"
                }`}
            />
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate component so each card tracks its own inView
function EducationCard({ edu, index }: { edu: Education; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
        className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
      >
        <GraduationCap className="h-4 w-4 text-primary" />
      </motion.div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{edu.degree}</h3>
          <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
            {edu.year}
          </span>
        </div>

        {/* Institution with typewriter */}
        <p className="text-muted-foreground min-h-[1.5rem]">
          <TypewriterText
            text={edu.institution}
            trigger={isInView}
            delay={300}
            speed={25}
          />
        </p>

        {/* Description with typewriter — starts after institution finishes */}
        {edu.description && (
          <p className="text-sm text-foreground/80 min-h-[1.25rem]">
            <TypewriterText
              text={edu.description}
              trigger={isInView}
              delay={300 + edu.institution.length * 25 + 100}
              speed={18}
            />
          </p>
        )}
      </div>
    </motion.div>
  );
}
