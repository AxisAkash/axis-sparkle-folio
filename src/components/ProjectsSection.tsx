import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rental Management System",
    tech: [".NET", "C#", "SQL"],
    description:
      "A comprehensive desktop application for property management featuring billing automation, secure authentication, and streamlined tenant management workflows.",
  },
  {
    title: "AI Calculator",
    tech: ["Python", "TensorFlow", "NLP"],
    description:
      "An intelligent calculator that accepts conversational input and uses machine learning models to parse natural language and perform accurate calculations.",
  },
  {
    title: "Digital Currency Converter",
    tech: ["JavaScript", "REST API"],
    description:
      "A responsive web application that fetches real-time exchange rates via API integration, enabling quick and accurate digital currency conversions.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group card-gradient rounded-xl border border-border p-6 transition-all hover:border-primary/40 hover:glow-border"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                <ExternalLink className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" size={18} />
              </div>
              <p className="mb-5 font-body text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 px-2.5 py-1 font-body text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
