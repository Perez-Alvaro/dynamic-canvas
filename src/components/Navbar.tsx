import { motion } from "framer-motion";
import data from "../data/portfolio.json";

const easing = [0.25, 0.1, 0.25, 1] as const;

const handleNav = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: easing }}
    className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-border"
  >
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold tracking-tighter text-xl text-foreground">
        {data.profile.name}
      </span>
      <div className="hidden md:flex items-center gap-8">
        {data.navigation.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item.href)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>
      <a
        href={`mailto:${data.profile.email}`}
        className="gradient-bg px-5 py-2 rounded-full text-sm font-medium text-primary-foreground active:scale-[0.96] transition-transform duration-200"
      >
        Contacto →
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
