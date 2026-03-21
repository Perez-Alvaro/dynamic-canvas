import { motion } from "framer-motion";
import data from "../data/portfolio.json";
import { ArrowUpRight } from "lucide-react";

const easing = [0.25, 0.1, 0.25, 1] as const;

interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  role: string;
  description: string;
  image: string;
  link: string;
  size: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: easing, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-3xl bg-card border border-border flex flex-col card-shadow hover:card-shadow-hover transition-all duration-500"
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground tracking-tight">
          {project.title}
        </h3>
        <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
          {project.date}
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="mt-auto pt-5 flex items-center justify-between">
        <span className="text-xs text-primary font-medium">
          • ROLE: {project.role}
        </span>
        <span className="text-xs font-semibold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
          VIEW DETAIL <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  </motion.a>
);

const Projects = () => (
  <section id="projects" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easing }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-foreground">
        My Projects
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-lg">
        Where form meets function seamlessly to create captivating digital experiences.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {data.projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
