import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh",
    period: "2023 — Present",
    gpa: "GPA 3.38",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Govt. Yeasin College",
    period: "Completed",
    gpa: "GPA 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Faridpur Zilla School",
    period: "Completed",
    gpa: "GPA 4.89",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </p>
          <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
            Academic background
          </h2>
        </motion.div>

        <div className="relative space-y-6 border-l-2 border-border pl-8">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <GraduationCap size={14} className="text-primary" />
              </div>
              <div className="card-gradient rounded-xl border border-border p-5">
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-base font-semibold">{edu.degree}</h3>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 font-body text-xs font-medium text-primary">
                    {edu.gpa}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground">{edu.institution}</p>
                <p className="font-body text-xs text-muted-foreground/70">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
