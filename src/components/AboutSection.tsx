import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import developerPhoto from "@/assets/developer-photo.png";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Projects Done" },
  { value: "4.8", label: "Avg Store Rating" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const AboutSection = () => {
  const information = [
    {
      icon: MapPin,
      text: "Banasree C-Block, Road-04, Dhaka-1219, Bangladesh",
    },
    {
      icon: Briefcase,
      text: "Open to new opportunities and freelance or contract work.",
    },
    {
      icon: GraduationCap,
      text: "B.S. in Computer Science",
    },
  ];

  return (
    <section
      id="about"
      className="px-4 py-4 sm:px-3 sm:py-10 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="mb-2 block font-display text-xs text-primary sm:text-sm">
            // about me
          </span>

          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-9 md:grid-cols-2 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-4 sm:space-y-5"
          >
            {/* Profile */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <motion.img
                src={developerPhoto}
                alt="Abdur Rakib Rafi"
                loading="lazy"
                width={512}
                height={512}
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary sm:h-16 sm:w-16"
              />

              <div className="min-w-0">
                <h3 className="font-display text-base font-bold sm:text-lg">
                  Abdur Rakib Rafi
                </h3>

                <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                  Software Developer — Since 2023
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="font-body text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Mobile Application Developer with 3+ years of
                experience building scalable and high-performance
                applications. Skilled in mobile and web development,
                with a strong focus on cross-platform mobile
                solutions.
              </p>

              <p className="font-body text-sm leading-7 text-muted-foreground sm:text-base">
                Experienced in API integration, UI/UX optimization,
                and maintaining clean, efficient codebases.
                Passionate about delivering user-centric applications
                with modern technologies and development best
                practices.
              </p>
            </div>

            {/* Information */}
            <div className="space-y-3 pt-1 sm:pt-2">
              {information.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                  }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="mt-1 h-4 w-4 shrink-0 text-primary" />

                  <span className="text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:self-stretch"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={`flex min-h-[130px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center sm:min-h-[160px] sm:p-6 ${
                  index === stats.length - 1
                    ? "col-span-2"
                    : ""
                }`}
              >
                <div className="mb-1 font-display text-3xl font-bold text-primary sm:mb-2 sm:text-4xl">
                  {stat.value}
                </div>

                <div className="font-display text-xs leading-5 text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;