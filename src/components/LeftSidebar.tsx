import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Monitor } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

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
      <p className="mb-1 font-body text-xs font-medium text-primary">CSE Undergraduate & Developer</p>
      <p className="mb-4 font-body text-xs text-muted-foreground">Bashundhara R/A, Dhaka</p>

      {/* Bio */}
      <p className="mb-6 text-center font-body text-sm leading-relaxed text-muted-foreground">
        Motivated Computer Science student with a passion for software
        development, UI/UX design, and creative digital projects. Seeking
        opportunities to deliver impactful, user-centered solutions in
        collaborative environments.
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
          href="https://linkedin.com/in/rakibul-islam-akash-2a0054347"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <Linkedin size={16} className="text-primary" />
          Linkedin
        </a>
        <a
          href="https://github.com/AxisAkash"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
        >
          <Github size={16} className="text-primary" />
          Github
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

      {/* Portfolio Link */}
      <a
        href="https://aquamarine-concha-57fd70.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 font-body text-sm text-secondary-foreground transition-all hover:border-primary/40"
      >
        <Monitor size={16} className="text-primary" />
        Portfolio
      </a>

      {/* Languages */}
      <div className="w-full">
        <h2 className="mb-3 font-heading text-lg font-bold">Language</h2>
        <div className="grid grid-cols-3 gap-2">
          <span className="rounded-lg border border-border bg-secondary py-2 text-center font-body text-xs text-secondary-foreground">
            Bangla
          </span>
          <span className="rounded-lg border border-border bg-secondary py-2 text-center font-body text-xs text-secondary-foreground">
            English
          </span>
          <span className="rounded-lg border border-border bg-secondary py-2 text-center font-body text-xs text-secondary-foreground">
            Hindi
          </span>
        </div>
      </div>

      {/* Contact Me Button */}
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
