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
      "Developed an AI-powered calculator that uses NLP for user-friendly conversational interaction, parsing natural language input to perform accurate calculations via machine learning models.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "Digital Currency Converter",
    tech: "JavaScript, REST API",
    period: "Personal Project",
    description:
      "Built a real-time currency converter with JavaScript, integrating a REST API for live exchange rate fetching — enabling quick and accurate digital currency conversions with a responsive UI.",
    github: "https://github.com/AxisAkash",
    demo: null,
  },
  {
    title: "Rental Management System",
    tech: ".NET, C#, SQL",
    period: "AIUB, 2024–Present",
    description:
      "Created a full-featured rental management system using C# and .NET Framework, focusing on clean UI design, SQL-based authentication, secure tenant data storage, and automated billing.",
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
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "C#", level: 70 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: ".NET Framework", level: 70 },
      { name: "TensorFlow", level: 55 },
      { name: "Visual Studio", level: 80 },
      { name: "REST APIs", level: 65 },
      { name: "Node.js", level: 50 },
    ],
  },
  {
    category: "Design Tools",
    items: [
      { name: "Figma", level: 75 },
      { name: "Adobe InDesign", level: 60 },
      { name: "Canva", level: 85 },
      { name: "CapCut", level: 70 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Strategic Thinking", level: 75 },
      { name: "Time Management", level: 80 },
    ],
  },
];

const researchData = [
  {
    title: "How AI Companions Shape Emotional Decision-Making Among Students",
    summary:
      "Explores the influence of AI companion tools on the emotional reasoning and decision-making processes of university students.",
    link: "#",
    status: "Published",
  },
  {
    title: "Privacy Awareness in the Digital Age",
    summary:
      "Examines user awareness and behavior regarding data privacy across digital platforms.",
    link: "#",
    status: "In Progress",
  },
  {
    title: "Software Quality Assurance Best Practices",
    summary:
      "A survey of modern SQA methodologies and their effectiveness in agile development environments.",
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
          href="/Rakibul_Islam_Akash_CSE_AIUB_CV.pdf"
          download
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
                        <span className="font-body text-[10px] text-muted-foreground">
                          {skill.level}%
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
                    Read Paper <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CenterContent;
