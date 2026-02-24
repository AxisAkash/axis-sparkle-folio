import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const topProjects = [
  {
    title: "AI Calculator — NLP-powered intelligent calculator",
    link: "https://github.com/AxisAkash",
  },
  {
    title: "Digital Currency Converter — Real-time API rates",
    link: "https://github.com/AxisAkash",
  },
  {
    title: "Rental Management System — .NET & SQL",
    link: "https://github.com/AxisAkash",
  },
];

const researchHighlights = [
  {
    title: "How AI Companions Shape Emotional Decision-Making Among Students",
    status: "Published",
    link: "https://www.researchgate.net/",
  },
  {
    title: "Silent Struggles: Adolescent Anxiety & Parent-Child Communication",
    status: "In Progress",
    link: "#",
  },
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

      {/* Research Papers */}
      <div className="mt-2 rounded-xl border border-border bg-secondary p-3">
        <h2 className="text-center font-heading text-base font-bold text-secondary-foreground">
          Research Papers
        </h2>
      </div>

      {researchHighlights.map((paper, i) => (
        <a
          key={i}
          href={paper.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-gradient flex items-center justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/30"
        >
          <div className="pr-2">
            <p className="font-heading text-xs font-semibold leading-relaxed">{paper.title}</p>
          </div>
          <span
            className={`shrink-0 rounded px-3 py-1 font-body text-xs ${
              paper.status === "Published"
                ? "border border-primary/30 bg-primary/15 text-primary"
                : "border border-border bg-secondary text-muted-foreground"
            }`}
          >
            {paper.status}
          </span>
        </a>
      ))}
    </motion.aside>
  );
};

export default RightSidebar;
