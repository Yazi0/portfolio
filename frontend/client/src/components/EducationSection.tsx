"use client";

import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

type Education = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
};

export default function EducationSection() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/education/education/")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education:", err));
  }, []);

  return (
    <section id="education" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

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
                <p className="text-sm text-foreground/80">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
