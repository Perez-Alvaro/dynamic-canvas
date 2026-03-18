import { motion } from "framer-motion";
import data from "../data/portfolio.json";

const easing = [0.25, 0.1, 0.25, 1];

const handleNav = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient orb */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-40 blur-[120px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, hsl(28 100% 55%), hsl(270 80% 60%), transparent 70%)"
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easing }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-8 border border-border">
          {data.profile.location} — Disponible para proyectos
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-foreground leading-[1.05] max-w-4xl" style={{ textWrap: "balance" as any }}>
          {data.hero.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {data.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => handleNav(data.hero.ctaHref)}
            className="gradient-bg px-8 py-4 rounded-full font-medium text-primary-foreground active:scale-[0.96] transition-all duration-200 hover:opacity-90"
          >
            {data.hero.cta} →
          </button>
          <button
            onClick={() => handleNav(data.hero.secondaryCtaHref)}
            className="px-8 py-4 rounded-full font-medium text-foreground border border-border hover:bg-secondary active:scale-[0.96] transition-all duration-200"
          >
            {data.hero.secondaryCta}
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
