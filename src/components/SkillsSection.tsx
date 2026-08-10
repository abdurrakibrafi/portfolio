import { motion } from "framer-motion";

const skills = [
  {
    name: "Dart / Flutter",
    level: 95,
  },
  {
    name: "Javascript / React / Next.js / Node.js / Express.js",
    level: 90,
  },
  {
    name: "Python",
    level: 88,
  },
  {
    name: "Firebase / Supabase / MySQL",
    level: 82,
  },
  {
    name: "CI/CD & Play Store / Apple App Store",
    level: 90,
  },
  {
    name: "Flutter Web / Responsive UI",
    level: 85,
  },
  {
    name: "Apple Developer / iOS Deployment",
    level: 88,
  },
  {
    name: "HTML / CSS / Tailwind CSS",
    level: 85,
  },
];

const tools = [
  "Xcode",
  "Android Studio",
  "VS Code",
  "Figma",
  "Git",
  "Fastlane",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "TestFlight",
  "App Store Connect",
  "Tailwind CSS",
  "Vercel",
  "Postman",
  "GitHub Actions",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="
        bg-[#050807]
        px-4
        py-10
        min-[375px]:px-5
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-7 sm:mb-9 md:mb-12 lg:mb-14"
        >
          <span className="mb-1.5 block font-display text-xs text-primary sm:text-sm">
            // tech stack
          </span>

          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Skills
          </h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 md:gap-9 lg:gap-12">
          {/* Skill progress list */}
          <div className="space-y-3.5 sm:space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-1.5 flex items-start justify-between gap-3">
                  <span className="max-w-[82%] font-display text-xs leading-5 sm:text-sm">
                    {skill.name}
                  </span>

                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.07,
                    }}
                    className="shrink-0 font-display text-xs text-primary sm:text-sm"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="h-[6px] overflow-hidden rounded-full bg-secondary sm:h-[7px]">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(160 100% 50%), hsl(35 95% 55%))",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="self-start rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7"
          >
            <h3 className="mb-4 font-display text-base font-semibold sm:text-lg">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.05 + index * 0.035,
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="rounded-lg bg-secondary px-3 py-1.5 font-display text-[11px] leading-5 text-secondary-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:text-xs md:text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
