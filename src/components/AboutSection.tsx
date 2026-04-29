import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import developerPhoto from "@/assets/developer-photo.png";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Project Done (App+Web)" },
  { value: "4.8", label: "Avg Store Rating" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm mb-2 block">// about me</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.div
              className="flex items-center gap-4 mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={developerPhoto}
                alt="Developer"
                loading="lazy"
                width={512}
                height={512}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <div>
                <h3 className="font-display font-bold text-lg">Abdur Rakib Rafi</h3>
                <p className="text-sm text-muted-foreground">Software Developer - Since 2023</p>
              </div>
            </motion.div>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Mobile Application Developer with 3+ years of experience in building scalable and high-performance applications.
              Skilled in both mobile and web application development, with a strong current focus on cross-platform mobile solutions.

            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Experienced in API integration, UI/UX optimization, and maintaining clean, efficient codebases.
              Passionate about delivering user-centric applications with modern technologies and best development practices.
            </p>
            <div className="space-y-3 pt-4">
              {[
                { icon: MapPin, text: "Banasree C-Block,Road -04,Dhaka-1219,Bangladesh" },
                { icon: Briefcase, text: "Open to new opportunities and freelance/contract work." },
                { icon: GraduationCap, text: "B.S. Computer Science" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px hsl(160 100% 50% / 0.2)",
                  transition: { duration: 0.3 },
                }}
                className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-shadow duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-display">
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
