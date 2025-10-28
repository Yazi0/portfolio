"use client";

import { GraduationCap } from "lucide-react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

export default function EducationSection() {
  // Local static data (no backend needed)
  const education: Education[] = [
    {
      id: 1,
      degree: "HND in Information Technology",
      institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      year: "Ongoing",
      description:
        "Specialized in software development, database systems, and web technologies.",
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level Examination",
      institution: "MR/Denipitiya M.V. (National School)",
      year: "2021",
      description:
        "Completed A/L studies in the Technology stream with strong academic performance.",
    },
    {
      id: 3,
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
            >
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{edu.institution}</p>
                {edu.description && (
                  <p className="text-sm text-foreground/80">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
