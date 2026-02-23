import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Education", "Projects", "Skills"] as const;
type Tab = (typeof tabs)[number];

const educationData = [
  {
    institution: "American International University-Bangladesh (AIUB) Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering 2023–Present, GPA: 3.38",
    courses:
      "Major Courses: Data Structure & Algorithm, Object Oriented Concepts, Computer Architecture, Operating Systems and System Programming, Database Management System, Software Engineering, Software Requirements Engineering, Artificial Intelligence, Software Testing and Quality Assurance, Software Project Management",
  },
  {
    institution: "Govt. Yeasin College",
    degree: "Higher Secondary Certificate (Science), GPA: 5.00",
    courses:
      "Core subjects in Science stream with distinction in Mathematics, Physics, and Chemistry.",
  },
  {
    institution: "Faridpur Zilla School",
    degree: "Secondary School Certificate (Science), GPA: 4.89",
    courses:
      "Foundation in Science with strong academic performance across all subjects.",
  },
];

const projectsData = [
  {
    title: "Rental Management System",
    tech: ".NET, C#, SQL",
    description:
      "A comprehensive desktop application for property management featuring billing automation, secure authentication, and streamlined tenant management workflows.",
  },
  {
    title: "AI Calculator",
    tech: "Python, TensorFlow, NLP",
    description:
      "An intelligent calculator that accepts conversational input and uses machine learning models to parse natural language and perform accurate calculations.",
  },
  {
    title: "Digital Currency Converter",
    tech: "JavaScript, REST API",
    description:
      "A responsive web application that fetches real-time exchange rates via API integration, enabling quick and accurate digital currency conversions.",
  },
];

const skillsData = [
  { category: "Languages", items: ["C++", "Java", "C#", "Python", "SQL", "JavaScript"] },
  { category: "Frameworks & Tools", items: [".NET Framework", "TensorFlow", "REST APIs", "Node.js"] },
  { category: "Design & IDE", items: ["UI/UX Design", "Figma", "Visual Studio"] },
];

const CenterContent = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Education");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Tab Navigation */}
      <div className="mb-6 flex gap-3">
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
                className="card-gradient rounded-xl border border-border p-5"
              >
                <h3 className="mb-1 font-heading text-sm font-semibold">{edu.institution}</h3>
                <p className="mb-2 font-body text-sm text-primary">{edu.degree}</p>
                <p className="font-body text-xs leading-relaxed text-muted-foreground">
                  {edu.courses}
                </p>
              </div>
            ))}

          {activeTab === "Projects" &&
            projectsData.map((proj, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl border border-border p-5"
              >
                <h3 className="mb-1 font-heading text-sm font-semibold">{proj.title}</h3>
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
                className="card-gradient rounded-xl border border-border p-5"
              >
                <h3 className="mb-3 font-heading text-sm font-semibold text-primary">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-secondary px-3 py-1.5 font-body text-xs text-secondary-foreground"
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
