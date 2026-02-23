import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const topProjects = [
  { title: ".NET Framework Developer — Rental Management System" },
  { title: "AI Calculator — Python & TensorFlow" },
  { title: "Digital Currency Converter — JavaScript" },
];

const papers = [
  { title: "Privacy Awareness" },
  { title: "Software Quality Assurance" },
];

const RightSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-6 flex flex-col gap-4"
    >
      {/* Top Projects */}
      <div className="rounded-2xl border border-border bg-primary p-4">
        <h2 className="text-center font-heading text-base font-bold text-primary-foreground">
          Top Projects
        </h2>
      </div>

      {topProjects.map((proj, i) => (
        <div
          key={i}
          className="card-gradient flex items-start justify-between rounded-xl border border-border p-4"
        >
          <p className="pr-2 font-body text-xs leading-relaxed text-foreground">
            {proj.title}
          </p>
          <button className="shrink-0 rounded border border-border bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground transition-all hover:border-primary/40">
            View
          </button>
        </div>
      ))}

      {/* Papers */}
      <div className="mt-2 rounded-xl border border-border bg-secondary p-3">
        <h2 className="text-center font-heading text-base font-bold text-secondary-foreground">
          Papers
        </h2>
      </div>

      {papers.map((paper, i) => (
        <div
          key={i}
          className="card-gradient flex items-center justify-between rounded-xl border border-border p-4"
        >
          <p className="font-heading text-sm font-semibold">{paper.title}</p>
          <button className="shrink-0 rounded border border-border bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground transition-all hover:border-primary/40">
            View
          </button>
        </div>
      ))}
    </motion.aside>
  );
};

export default RightSidebar;
