import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Let's work together
          </h2>
          <p className="mb-10 font-body text-muted-foreground">
            I'm currently open to internships, collaborations, and freelance
            opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <a
            href="mailto:rakibulislamakash40@gmail.com"
            className="card-gradient flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/40"
          >
            <Mail className="text-primary" size={20} />
            <span className="font-body text-sm text-foreground">rakibulislamakash40@gmail.com</span>
          </a>
          <a
            href="tel:01973096450"
            className="card-gradient flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/40"
          >
            <Phone className="text-primary" size={20} />
            <span className="font-body text-sm text-foreground">01973096450</span>
          </a>
          <a
            href="https://github.com/AxisAkash"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/40"
          >
            <Github className="text-primary" size={20} />
            <span className="font-body text-sm text-foreground">GitHub</span>
            <ExternalLink className="ml-auto text-muted-foreground" size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/rakibul-islam-akash-2a0054347/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-gradient flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/40"
          >
            <Linkedin className="text-primary" size={20} />
            <span className="font-body text-sm text-foreground">LinkedIn</span>
            <ExternalLink className="ml-auto text-muted-foreground" size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
