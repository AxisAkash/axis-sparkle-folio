import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const languages = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Basic" },
];

const LeftSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="card-gradient sticky top-6 flex flex-col items-center rounded-2xl border border-border p-6"
    >
      {/* Avatar */}
      <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-primary/40">
        <img
          src={profileAvatar}
          alt="Rakibul Islam Akash"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="mb-1 font-heading text-xl font-bold">Rakibul Islam Akash</h1>
      <p className="mb-1 font-body text-xs font-medium text-primary">CSE Undergraduate & Software Developer</p>
      <p className="mb-4 font-body text-xs text-muted-foreground">Dhaka, Bangladesh</p>

      {/* Bio */}
      <p className="mb-6 text-center font-body text-sm leading-relaxed text-muted-foreground">
        Building smart, efficient solutions with AI and web technologies. I specialize in AI-powered web apps and data-driven tools.
      </p>

      {/* Social Links */}
      <div className="mb-6 grid w-full grid-cols-2 gap-3">
        <a
          href="mailto:rakibulislamakash40@gmail.com"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <Mail size={16} className="text-primary" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/rakibul-islam-akash-2a0054347/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <Linkedin size={16} className="text-primary" />
          LinkedIn
        </a>
        <a
          href="https://github.com/AxisAkash"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <Github size={16} className="text-primary" />
          GitHub
        </a>
        <a
          href="https://wa.me/8801973096450"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <MessageCircle size={16} className="text-primary" />
          WhatsApp
        </a>
      </div>

      {/* CV Download */}
      <a
        href={`${import.meta.env.BASE_URL}CV_Akash_1.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 font-heading text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Download CV
      </a>

      {/* Languages */}
      <div className="w-full">
        <h2 className="mb-3 font-heading text-lg font-bold">Languages</h2>
        <div className="flex flex-col gap-2">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between rounded-lg border border-border bg-secondary px-3 py-2"
            >
              <span className="font-body text-xs text-secondary-foreground">{lang.name}</span>
              <span className="rounded bg-primary/15 px-2 py-0.5 font-body text-[10px] font-medium text-primary">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Me */}
      <a
        href="mailto:rakibulislamakash40@gmail.com"
        className="mt-6 w-full rounded-lg bg-secondary py-3 text-center font-heading text-sm font-semibold text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Contact me
      </a>
    </motion.aside>
  );
};

export default LeftSidebar;
