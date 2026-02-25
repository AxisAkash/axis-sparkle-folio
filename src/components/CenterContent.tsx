import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const tabs = ["Education", "Projects", "Skills", "Research"] as const;
type Tab = (typeof tabs)[number];

const educationData = [
  {
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2023–Present",
    gpa: "GPA: 3.38",
    courses:
      "Data Structure & Algorithm, OOP, Computer Architecture, Operating Systems, DBMS, Software Engineering, AI, Software Testing & QA",
  },
  {
    institution: "Govt. Yeasin College, Faridpur",
    location: "Faridpur, Bangladesh",
    degree: "Higher Secondary Certificate (Science)",
    period: "2019–2022",
    gpa: "GPA: 5.00",
    courses: "Distinction in Mathematics, Physics, and Chemistry.",
  },
  {
    institution: "Faridpur Zilla School",
    location: "Faridpur, Bangladesh",
    degree: "Secondary School Certificate (Science)",
    period: "2017–2019",
    gpa: "GPA: 4.89",
    courses: "Strong academic performance across all Science subjects.",
  },
];

const projectsData = [
  {
    title: "AI Calculator",
    tech: "Python, TensorFlow, NLP",
    period: "Personal Project",
    description:
      "Developed an AI-powered calculator using Python and TensorFlow, integrating NLP for seamless user interaction and real-time calculation.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "Digital Currency Converter",
    tech: "JavaScript, REST API",
    period: "Personal Project",
    description:
      "Built a real-time currency converter with JavaScript, using an API for live exchange rates and supporting global currencies.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "Rental Management System",
    tech: ".NET, C#, SQL",
    period: "AIUB, 2024–Present",
    description:
      "Developed a rental management system using C# and .NET Framework, with SQL-based authentication and automated billing.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "The Line Zen 2 Adventure — Game Design",
    tech: "Game Design, UI/UX, Animation",
    period: "AIUB, 2024–Present",
    description:
      "Designed engaging game mechanics with improved difficulty progression, UI/UX design, animation flow, and playtesting for an immersive experience.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "University Lost & Found System",
    tech: "Java, Email Integration",
    period: "AIUB, 2023–2024",
    description:
      "Created a Java-based app with secure login, photo uploads, and email alerts. Managed a 3-member team ensuring feature delivery and documentation.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
];

const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", level: 90, proficiency: "Expert" },
      { name: "Java", level: 90, proficiency: "Expert" },
      { name: "C#", level: 90, proficiency: "Expert" },
      { name: "SQL", level: 70, proficiency: "Intermediate" },
      { name: "Python", level: 50, proficiency: "Beginner" },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: ".NET Framework", level: 90, proficiency: "Expert" },
      { name: "Visual Studio", level: 90, proficiency: "Expert" },
      { name: "Figma", level: 70, proficiency: "Intermediate" },
      { name: "Adobe InDesign", level: 70, proficiency: "Intermediate" },
      { name: "Canva", level: 50, proficiency: "Beginner" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design", level: 90, proficiency: "Expert" },
      { name: "Graphic Design", level: 90, proficiency: "Expert" },
      { name: "Prototyping", level: 70, proficiency: "Intermediate" },
      { name: "Brand Visuals", level: 70, proficiency: "Intermediate" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 90, proficiency: "Expert" },
      { name: "Communication", level: 90, proficiency: "Expert" },
      { name: "Strategic Thinking", level: 70, proficiency: "Intermediate" },
      { name: "Time Management", level: 50, proficiency: "Beginner" },
    ],
  },
  {
    category: "Other Tools",
    items: [
      { name: "Microsoft 365", level: 90, proficiency: "Expert" },
      { name: "CapCut", level: 70, proficiency: "Intermediate" },
    ],
  },
];

const researchData = [
  {
    title: "How AI Companions Shape Emotional Decision-Making Among Students",
    summary:
      "Explores the influence of AI companion tools on the emotional reasoning and decision-making processes of university students.",
    link: "https://www.researchgate.net/",
    status: "Published",
  },
  {
    title: "Silent Struggles: The Impact of Adolescent Anxiety Disorders on Parent-Child Communication Patterns",
    summary:
      "Investigates how anxiety disorders in adolescents affect communication dynamics within parent-child relationships.",
    link: "#",
    status: "In Progress",
  },
];

const CenterContent = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Education");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Bio Section */}
      <div className="card-gradient mb-6 rounded-xl border border-border p-5">
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          I'm a computer science student with a passion for building intelligent, user-friendly web applications and exploring the intersection of AI and software development. I strive to solve real-world problems with innovative technology.
        </p>
      </div>

      {/* Header with tabs and CV download */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg border px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
              activeTab === tab
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
            }`}
          >
            {tab}
          </button>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}CV_Akash_1.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-2 rounded-lg border border-primary/40 bg-secondary px-4 py-2.5 font-heading text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          {activeTab === "Education" &&
            educationData.map((edu, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5 transition-all hover:border-primary/30"
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-sm font-semibold">{edu.institution}</h3>
                  <span className="shrink-0 rounded bg-secondary px-2 py-1 font-body text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-1 font-body text-sm text-primary">{edu.degree}</p>
                <p className="mb-2 font-body text-xs font-semibold text-accent">{edu.gpa}</p>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">
                  {edu.courses}
                </p>
              </div>
            ))}

          {activeTab === "Projects" &&
            projectsData.map((proj, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5 transition-all hover:border-primary/30"
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-sm font-semibold">{proj.title}</h3>
                  <span className="shrink-0 rounded bg-secondary px-2 py-1 font-body text-xs text-muted-foreground">
                    {proj.period}
                  </span>
                </div>
                <p className="mb-2 font-body text-xs text-primary">{proj.tech}</p>
                <p className="mb-3 font-body text-xs leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded border border-border bg-secondary px-3 py-1.5 font-body text-xs text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    GitHub <ExternalLink size={10} />
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 rounded border border-primary/40 bg-primary/10 px-3 py-1.5 font-body text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      Live Demo <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}

          {activeTab === "Skills" &&
            skillsData.map((cat, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5 transition-all hover:border-primary/30"
              >
                <h3 className="mb-4 font-heading text-sm font-semibold text-primary">
                  {cat.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {cat.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-body text-xs text-secondary-foreground">
                          {skill.name}
                        </span>
                        <span className="rounded bg-primary/10 px-2 py-0.5 font-body text-[10px] font-medium text-primary">
                          {skill.proficiency}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {activeTab === "Research" &&
            researchData.map((paper, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5 transition-all hover:border-primary/30"
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-sm font-semibold">{paper.title}</h3>
                  <span
                    className={`shrink-0 rounded px-2 py-1 font-body text-xs ${
                      paper.status === "Published"
                        ? "bg-primary/15 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {paper.status}
                  </span>
                </div>
                <p className="mb-3 font-body text-xs leading-relaxed text-muted-foreground">
                  {paper.summary}
                </p>
                {paper.status === "Published" && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center gap-1 rounded border border-primary/40 bg-primary/10 px-3 py-1.5 font-body text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    Read on ResearchGate <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <div className="mt-8 card-gradient rounded-xl border border-border p-6 text-center">
        <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
          Feel free to reach out if you're interested in collaborating or discussing potential opportunities.
        </p>
        <a
          href="mailto:rakibulislamakash40@gmail.com"
          className="inline-block rounded-lg bg-primary px-6 py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  );
};

export default CenterContent;
