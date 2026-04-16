import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import projectFitness from "@/assets/project-fitness.jpg";
import projectFood from "@/assets/project-food.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import { HiChevronDown } from "react-icons/hi";
import { Arrow } from "@radix-ui/react-tooltip";
import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    title: "FitPulse",
    description: "A fitness tracking app with real-time health metrics, workout plans, and social challenges. Built with SwiftUI and HealthKit.",
    tags: ["iOS", "SwiftUI", "HealthKit"],
    image: projectFitness,
    downloads: "120K+",
  },
  {
    title: "BiteRush",
    description: "On-demand food delivery platform with live order tracking, restaurant discovery, and AI-powered recommendations.",
    tags: ["React Native", "Node.js", "Maps API"],
    image: projectFood,
    downloads: "85K+",
  },
  {
    title: "VaultPay",
    description: "Secure digital banking app with biometric auth, instant transfers, expense analytics, and investment tracking.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: projectFintech,
    downloads: "200K+",
  },
];

const CARD_HEIGHT = 420;
const CARD_GAP = 20;
const STACK_OFFSET = 15;

interface StickyCardProps {
  project: typeof projects[number];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const StickyCard = ({ project, index, total, containerRef }: StickyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each card scales down slightly as user scrolls past it
  const cardProgress = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [1, 0.95]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [index / total, (index + 0.8) / total, (index + 1) / total],
    [1, 1, index === total - 1 ? 1 : 0.6]
  );

  return (
    <div
      className="sticky"
      style={{
        top: `calc(80px + ${index * STACK_OFFSET}px)`,
        height: `${CARD_HEIGHT}px`,
        paddingBottom: `${CARD_GAP}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          scale: cardProgress,
          opacity: cardOpacity,
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="glass rounded-2xl overflow-hidden group hover:glow-box transition-shadow duration-500 h-full"
        data-cursor-hover
        data-cursor-text="View"
      >
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold font-display">{project.title}</h3>
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                className="text-xs font-display text-primary px-2 py-1 rounded-full bg-primary/10"
              >
                {project.downloads} downloads
              </motion.span>
            </div>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, ti) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + ti * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(160 100% 50% / 0.15)" }}
                  className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground font-display text-xs transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-auto overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/80 md:block hidden" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display text-sm mb-2 block"
          >
            // featured work
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">Projects</h2>
        </motion.div>

        <div
          ref={containerRef}
          style={{
            height: `${projects.length * CARD_HEIGHT + (projects.length - 1) * STACK_OFFSET}px`,
          }}
        >
          {projects.map((project, i) => (
            <StickyCard
              key={project.title}
              project={project}
              index={i}
              total={projects.length}
              containerRef={containerRef}
            />
          ))}
        </div>
         <div className="">
          <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-transparent text-primary backdrop-blur-md lg:font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary 0hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Explore More 
              <FaArrowRight className="w-8 h-8 justify-end group-hover:rotate-0 text-primary group-hover:bg-transparent  ease-linear duration-300 rounded-full border border-primary group-hover:border-none p-2 -rotate-45" />
</button>
         </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
