import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/abdurrakibrafi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdur-rakib-rafi-27b7451b6" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/abdurrakibrafi" },
  { icon: Mail, label: "Email", href: "mailto:abdurrakibrafi469@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
          style={{ backgroundColor: "hsl(160 100% 50% / 0.06)" }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-display text-sm mb-2 block">// let's connect</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Get in Touch</h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
            
          Let’s build something great together — open to opportunities and ready to be hired.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0 0 25px hsl(160 100% 50% / 0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-xl glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all group"
              aria-label={social.label}
              data-cursor-text={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
