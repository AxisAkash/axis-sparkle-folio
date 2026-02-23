import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding pt-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-primary">
            CSE Undergraduate & Software Developer
          </p>
          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Rakibul Islam</span>
            <br />
            Akash
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
            Passionate about building impactful software solutions. Currently
            pursuing my BSc in CSE at AIUB, Dhaka — exploring everything from
            .NET systems to AI-powered applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary px-8 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-border"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border bg-secondary px-8 py-3 font-heading text-sm font-semibold text-secondary-foreground transition-all hover:border-primary"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/AxisAkash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/rakibul-islam-akash-2a0054347"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:rakibulislamakash40@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 inline-block animate-bounce text-muted-foreground"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
