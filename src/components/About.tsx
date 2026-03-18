import { motion } from "framer-motion";
import data from "../data/portfolio.json";

const easing = [0.25, 0.1, 0.25, 1];

const About = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easing }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-foreground leading-tight">
          {data.about.title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easing, delay: 0.15 }}
        className="space-y-6"
      >
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {data.about.description}
        </p>
        <p className="text-foreground font-medium underline underline-offset-4 decoration-primary">
          {data.about.closingLine}
        </p>
      </motion.div>
    </div>

    {/* Skills */}
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easing }}
      className="mt-20"
    >
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        Highlighted Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: easing }}
            className="px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
