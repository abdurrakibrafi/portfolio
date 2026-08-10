import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abdurrakibrafi",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdur-rakib-rafi-27b7451b6",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/8801743340330",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abdurrakibrafi469@gmail.com",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-8"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            backgroundColor: "hsl(160 100% 50% / 0.06)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="mb-2 block font-display text-sm text-primary">
            // let's connect
          </span>

          <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
            Get in Touch
          </h2>

          <p className="mx-auto mb-10 max-w-xl font-body text-base text-muted-foreground sm:text-lg">
            Let’s build something great together — open to opportunities and
            ready to be hired.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {socials.map((social, i) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow:
                    "0 0 25px hsl(160 100% 50% / 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                className="glass group flex h-12 w-12 items-center justify-center rounded-xl transition-all hover:border-primary/50 hover:bg-primary/10 sm:h-14 sm:w-14"
                aria-label={social.label}
                data-cursor-text={social.label}
              >
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;