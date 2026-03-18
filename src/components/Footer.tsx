import data from "../data/portfolio.json";

const Footer = () => (
  <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} · Designed by {data.profile.name}
    </p>
    <div className="flex gap-6">
      {data.socials.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {social.platform}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
