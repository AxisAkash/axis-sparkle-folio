import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const topProjects = [
  {
    title: ".NET Framework Developer — Rental Management System",
    link: "https://github.com/AxisAkash",
  },
  {
    title: "Game Designer — The Line Zen 2 Adventure",
    link: "https://github.com/AxisAkash",
  },
  {
    title: "University Lost & Found System — Java",
    link: "https://github.com/AxisAkash",
  },
];

const papers = [
  { title: "Privacy Awareness", link: "#" },
  { title: "Software Quality Assurance", link: "#" },
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
        <a
          key={i}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-gradient flex items-start justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/40"
        >
          <p className="pr-2 font-body text-xs leading-relaxed text-foreground">
            {proj.title}
          </p>
          <span className="shrink-0 flex items-center gap-1 rounded border border-border bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary">
            View <ExternalLink size={10} />
          </span>
        </a>
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
          className="card-gradient flex items-center justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/30"
        >
          <p className="font-heading text-sm font-semibold">{paper.title}</p>
          <span className="shrink-0 rounded border border-border bg-secondary px-3 py-1 font-body text-xs text-muted-foreground">
            Coming Soon
          </span>
        </div>
      ))}

      {/* Reference */}
      <div className="mt-2 rounded-xl border border-border bg-secondary/50 p-4">
        <h3 className="mb-1 font-heading text-xs font-semibold text-muted-foreground">Reference</h3>
        <p className="font-body text-xs text-foreground">Khairul Alam Robin</p>
        <p className="font-body text-xs text-muted-foreground">Lecturer, AIUB</p>
      </div>
    </motion.aside>
  );
};

export default RightSidebar;
