import { useEffect, useRef, useState } from "react";
import { Code2, Wrench, Users } from "lucide-react";

/* ────────────────────────── Data ────────────────────────── */
const skillCategories = [
  {
    title: "Technical Skills",
    subtitle: "Languages & Frameworks",
    icon: Code2,
    gradient: "from-violet-600 via-indigo-500 to-blue-500",
    ring: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
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
    subtitle: "Development Environment",
    icon: Wrench,
    gradient: "from-cyan-500 via-teal-400 to-emerald-500",
    ring: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Netbeans", level: 70 },
      { name: "JDK", level: 75 },
      { name: "Git", level: 80 },
      { name: "Database Mgmt", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    subtitle: "Personal Strengths",
    icon: Users,
    gradient: "from-rose-500 via-pink-500 to-orange-400",
    ring: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    skills: [
      { name: "Project Mgmt", level: 80 },
      { name: "Leadership", level: 85 },
      { name: "Team Work", level: 90 },
      { name: "Time Management", level: 75 },
      { name: "Critical Thinking", level: 80 },
    ],
  },
];

/* ────────────── Circular Progress Ring ─────────────── */
function CircleProgress({
  level,
  color,
  animate,
  size = 52,
}: {
  level: number;
  color: string;
  animate: boolean;
  size?: number;
}) {
  const stroke = 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * (animate ? level : 0)) / 100;

  return (
    <svg width={size} height={size} className="shrink-0 -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        className="text-foreground/10"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)" }}
      />
      <text
        x={size / 2}
        y={size / 2}
        dominantBaseline="central"
        textAnchor="middle"
        className="fill-foreground text-[10px] font-bold"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
      >
        {level}%
      </text>
    </svg>
  );
}

/* ────────────── Skill Card ─────────────── */
function SkillCard({
  category,
  index,
  animate,
}: {
  category: (typeof skillCategories)[number];
  index: number;
  animate: boolean;
}) {
  const Icon = category.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -12, y: (x - 0.5) * 12 });
    setShine({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="skill-card group relative"
      style={{
        animationDelay: `${index * 200}ms`,
        perspective: "1000px",
      }}
    >
      {/* Glow behind card on hover */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25`}
      />

      <div
        ref={cardRef}
        className="relative rounded-3xl border border-border p-6 md:p-8 overflow-hidden"
        style={{
          background: "hsl(var(--card) / 0.7)",
          backdropFilter: "blur(20px)",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shine reflection overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* Top gradient strip */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
        />

        {/* Floating corner decoration */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-[0.07] pointer-events-none transition-transform duration-700 group-hover:scale-150"
          style={{
            background: `radial-gradient(circle, ${category.ring} 0%, transparent 70%)`,
          }}
        />

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {category.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-6" />

        {/* Skills grid with circle progress */}
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-300 hover:bg-foreground/5 cursor-default"
              style={{
                animationName: animate ? "skillFadeIn" : "none",
                animationDuration: "0.5s",
                animationDelay: `${index * 150 + i * 80}ms`,
                animationFillMode: "both",
              }}
            >
              <CircleProgress
                level={skill.level}
                color={category.ring}
                animate={animate}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {skill.name}
                </p>
                {/* Mini bar beneath the name */}
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-foreground/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 150 + i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {category.skills.length} skills
          </span>
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${category.gradient}`}
          >
            Avg{" "}
            {Math.round(
              category.skills.reduce((s, sk) => s + sk.level, 0) /
              category.skills.length
            )}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

/* ────────────── Main Section ─────────────── */
export default function SkillsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-background"
    >
      {/* ── Ambient blobs ── */}
      <div
        aria-hidden
        className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f43f5e 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            What I Do Best
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            A journey through my technical landscape — from code to
            collaboration.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <SkillCard
              key={idx}
              category={cat}
              index={idx}
              animate={inView}
            />
          ))}
        </div>

        {/* ── Bottom marquee chips ── */}
        <div className="mt-14 overflow-hidden relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

          <div
            className="flex gap-3 w-max"
            style={{ animation: "scrollChips 20s linear infinite" }}
          >
            {[...Array(2)].flatMap((_, dup) =>
              skillCategories.flatMap((cat) =>
                cat.skills
                  .filter((s) => s.level >= 80)
                  .map((s, i) => (
                    <span
                      key={`${cat.title}-${i}-${dup}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border border-border bg-card text-muted-foreground whitespace-nowrap hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                    >
                      <span
                        className="w-2 h-2 rounded-full inline-block shrink-0"
                        style={{ background: cat.ring }}
                      />
                      {s.name}
                    </span>
                  ))
              )
            )}
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        .skill-card {
          animation: cardEntrance 0.8s cubic-bezier(.25,.46,.45,.94) both;
        }
        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-25deg) rotateX(10deg) translateY(60px) scale(0.9);
            filter: blur(4px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        @keyframes skillFadeIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scrollChips {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
