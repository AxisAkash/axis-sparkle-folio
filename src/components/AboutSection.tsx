import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
            A glimpse into who I am
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 font-body leading-relaxed text-muted-foreground">
              I'm Rakibul Islam Akash, a CSE undergraduate at American
              International University-Bangladesh with a strong foundation in
              software development. I enjoy tackling complex problems and
              translating ideas into clean, efficient code.
            </p>
            <p className="font-body leading-relaxed text-muted-foreground">
              My experience spans desktop applications with .NET and C#,
              AI/ML projects with Python and TensorFlow, and web development
              with JavaScript. I'm always eager to learn new technologies and
              collaborate on impactful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="card-gradient flex items-center gap-4 rounded-xl border border-border p-4">
              <MapPin className="shrink-0 text-primary" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold">Location</p>
                <p className="font-body text-sm text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="card-gradient flex items-center gap-4 rounded-xl border border-border p-4">
              <Phone className="shrink-0 text-primary" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold">Phone</p>
                <p className="font-body text-sm text-muted-foreground">01973096450</p>
              </div>
            </div>
            <div className="card-gradient flex items-center gap-4 rounded-xl border border-border p-4">
              <Mail className="shrink-0 text-primary" size={20} />
              <div>
                <p className="font-heading text-sm font-semibold">Email</p>
                <p className="font-body text-sm text-muted-foreground">rakibulislamakash40@gmail.com</p>
              </div>
            </div>

            <div className="card-gradient rounded-xl border border-border p-4">
              <p className="mb-2 font-heading text-sm font-semibold">Languages</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">Bengali — Native</span>
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">English — Fluent</span>
                <span className="rounded-md bg-secondary px-3 py-1 font-body text-xs text-secondary-foreground">Hindi — Basic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
