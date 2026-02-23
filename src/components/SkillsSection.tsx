import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "C#", "Python", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks & Tools",
    skills: [".NET Framework", "TensorFlow", "REST APIs"],
  },
  {
    title: "Design & IDE",
    skills: ["UI/UX Design", "Figma", "Visual Studio"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mb-10 font-heading text-3xl font-bold md:text-4xl">
            My technical toolkit
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="card-gradient rounded-xl border border-border p-6"
            >
              <h3 className="mb-4 font-heading text-base font-semibold text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 font-body text-sm text-secondary-foreground"
                  >
                    {skill}
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

export default SkillsSection;
