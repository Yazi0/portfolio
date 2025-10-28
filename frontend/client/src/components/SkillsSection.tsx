import {
  Code2,
  Wrench,
  Users,
  Brain,
  Target,
  Clock,
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Visual Studio Code", level: 90 },
      { name: "Netbeans", level: 70 },
      { name: "JDK", level: 75 },
      { name: "Git", level: 80 },
      { name: "Database Management", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Project Management", level: 80 },
      { name: "Leadership", level: 85 },
      { name: "Team Work", level: 90 },
      { name: "Time Management", level: 75 },
      { name: "Critical Thinking", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual representation of my skills and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="space-y-6 p-6 rounded-2xl bg-white/50 backdrop-blur-md border border-border shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform transition-all duration-1000 hover:scale-y-110"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
