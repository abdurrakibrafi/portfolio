import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects", icon: "01" },
  { label: "Skills", href: "#skills", icon: "02" },
  { label: "About", href: "#about", icon: "03" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], [0, 0.8]);
  const navBlur = useTransform(scrollY, [0, 100], [10, 20]);
  const navBorder = useTransform(scrollY, [0, 100], [0, 0.15]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "about", "skills", "projects"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3"
    >
      <motion.div
        className="max-w-5xl mx-auto flex items-center justify-between rounded-full px-5 md:px-8 py-2.5 border"
        style={{
          backgroundColor: useTransform(navBg, (v) => `hsl(150 25% 9% / ${v})`),
          backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          borderColor: useTransform(navBorder, (v) => `hsl(160 100% 50% / ${v})`),
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" data-cursor-text="Home">
          <motion.div
            className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
            whileHover={{ rotate: 180, scale: 1.1, borderColor: "hsl(160 100% 50% / 0.5)" }}
            transition={{ duration: 0.4 }}
          >
            <Code2 className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="font-display font-bold text-sm hidden sm:block">
            <span className="text-primary">Ra </span>
            <span className="text-muted-foreground">Fi</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="relative px-4 py-2 rounded-full font-display text-xs tracking-wide transition-colors group"
                data-cursor-text="View"
              >
                {/* Active indicator pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"} transition-colors`}>
                  <span className="text-[10px] text-primary/50 font-mono">{link.icon}</span>
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://wa.me/8801743340330?text=Hey%20Abdur%20Rakib%20Rafi%2C%0A%0AAre%20you%20there%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground font-display text-xs font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(160 100% 50% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
            data-cursor-text="Hi!"
          >
            <Sparkles className="w-3 h-3" />
            Hire Me
          </motion.a>

          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center text-foreground"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:hidden mt-2 rounded-2xl p-4 max-w-5xl mx-auto overflow-hidden border"
            style={{
              backgroundColor: "hsl(150 25% 9% / 0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "hsl(160 100% 50% / 0.1)",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 py-4 px-3 rounded-xl font-display text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group"
              >
                <span className="text-[10px] text-primary/40 font-mono w-5">{link.icon}</span>
                <span>{link.label}</span>
                <motion.span
                  className="ml-auto text-primary/0 group-hover:text-primary/60 transition-colors text-xs"
                  initial={false}
                >
                  →
                </motion.span>
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-display text-sm font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
