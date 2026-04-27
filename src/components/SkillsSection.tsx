import { motion } from "framer-motion";

const skills = [
  { name: "Dart / Flutter", level: 95 },
  { name: "Javascript / React / Next.js / Node.js / Express.js", level: 90 },
  { name: "Python", level: 88 },
  { name: "Firebase / Supabase / MySQL ", level: 82 },
  { name: "CI/CD & Play Store / Apple App Store", level: 90 },
  { name: "Flutter Web / Responsive UI", level: 85 },       // নতুন
  { name: "Apple Developer / iOS Deployment", level: 88 },  // নতুন
  { name: "HTML / CSS / Tailwind CSS", level: 85 },         // নতুন
];

const tools = [
  "Xcode", "Android Studio", "VS Code", "Figma", "Git",
  "Fastlane", "Firebase", "REST APIs", "GraphQL",
  "TestFlight",      // iOS beta testing
  "App Store Connect", // Apple deployment
  "Tailwind CSS",    // JS web dev
  "Vercel",          // web hosting/deploy
  "Postman",         // API testing
  "GitHub Actions",  // CI/CD
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm mb-2 block">// tech stack</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-display text-sm">{skill.name}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="font-display text-sm text-primary"
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, hsl(160 100% 50%), hsl(35 95% 55%))",
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display text-lg mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 15 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: Math.random() > 0.5 ? 3 : -3,
                    transition: { duration: 0.2 },
                  }}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-display text-sm hover:bg-primary/10 hover:text-primary transition-colors"
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
