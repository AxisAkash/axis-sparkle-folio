import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const tabs = ["Education", "Projects", "Skills"] as const;
type Tab = (typeof tabs)[number];

const educationData = [
  {
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2023–Present",
    gpa: "GPA: 3.38",
    courses:
      "Major Courses: Data Structure & Algorithm, Object Oriented Concepts, Computer Architecture, Operating Systems, Database Management System, Software Engineering, Artificial Intelligence, Software Testing & QA, Software Project Management",
  },
  {
    institution: "Govt. Yeasin College, Faridpur",
    location: "Faridpur, Bangladesh",
    degree: "Higher Secondary Certificate (Science)",
    period: "2019–2022",
    gpa: "GPA: 5.00",
    courses:
      "Core subjects in Science stream with distinction in Mathematics, Physics, and Chemistry.",
  },
  {
    institution: "Faridpur Zilla School",
    location: "Faridpur, Bangladesh",
    degree: "Secondary School Certificate (Science)",
    period: "2017–2019",
    gpa: "GPA: 4.89",
    courses:
      "Foundation in Science with strong academic performance across all subjects.",
  },
];

const projectsData = [
  {
    title: "Rental Management System",
    tech: ".NET, C#, SQL",
    period: "AIUB, 2024–Present",
    description:
      "Developed a rental management system using C# and .NET Framework. Integrated SQL-based authentication, data storage, and automated billing. Focused on clean UI design and performance optimization.",
  },
  {
    title: "The Line Zen 2 Adventure — Game Design",
    tech: "Game Design, UI/UX, Animation",
    period: "AIUB, 2024–Present",
    description:
      "Designed engaging game mechanics and improved difficulty progression. Worked on UI/UX design, animation flow, and playtesting for an immersive experience.",
  },
  {
    title: "University Lost & Found System",
    tech: "Java, Email Integration",
    period: "AIUB, 2023–2024",
    description:
      "Created a Java-based app with secure login, photo uploads, and email alerts. Managed a 3-member team ensuring feature delivery and documentation.",
  },
  {
    title: "AI Calculator",
    tech: "Python, TensorFlow, NLP",
    period: "Personal Project",
    description:
      "An intelligent calculator that accepts conversational input and uses machine learning models to parse natural language and perform accurate calculations.",
  },
  {
    title: "Digital Currency Converter",
    tech: "JavaScript, REST API",
    period: "Personal Project",
    description:
      "A responsive web application that fetches real-time exchange rates via API integration, enabling quick and accurate digital currency conversions.",
  },
];

const skillsData = [
  { category: "Programming", items: ["C++", "Java", "C#", "SQL", "Python", "JavaScript"] },
  { category: "Frameworks & Tools", items: [".NET Framework", "Visual Studio", "TensorFlow", "REST APIs", "Node.js"] },
  { category: "Design", items: ["UI/UX Design", "Figma", "Adobe InDesign", "Canva", "Graphic Design", "Prototyping"] },
  { category: "Soft Skills", items: ["Leadership", "Communication", "Strategic Thinking", "Time Management"] },
  { category: "Other Tools", items: ["Microsoft 365", "Cap Cut"] },
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
            className={`rounded-lg border px-6 py-2.5 font-heading text-sm font-semibold transition-all ${
              activeTab === tab
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
            }`}
          >
            {tab}
          </button>
        ))}
        <a
          href="/CV_Akash_1.pdf"
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
                <p className="font-body text-xs leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
              </div>
            ))}

          {activeTab === "Skills" &&
            skillsData.map((cat, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5 transition-all hover:border-primary/30"
              >
                <h3 className="mb-3 font-heading text-sm font-semibold text-primary">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary px-3 py-1.5 font-body text-xs text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CenterContent;
