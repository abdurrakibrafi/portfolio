import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import primePilaties from "@/assets/prime_pilaties.webp";
import tasteUp from "@/assets/tasteUp.webp";
import nofifyApp from "@/assets/nofify.webp";
import { FaArrowRight, FaGooglePlay, FaAppStoreIos } from "react-icons/fa6";
import { X } from "lucide-react";

const projects = [
  {
    title: "Prime Pilaties",
    description: "A fitness class booking app where users can purchase credits to book classes, along with a built-in attendance management system to track and manage class participation efficiently.",
    tags: ["iOS", "Android", "Flutter"],
    image: primePilaties,
    playStore: "https://play.google.com/store/apps/details?id=com.prime.pilates.app&hl=en",
    appStore: "https://apps.apple.com/us/app/prime-pilates/id6741531586",
  },
  {
    title: "TasteUp",
    description: "Seamless QR-based food ordering, smart nearby restaurant discovery, and an engaging gamified loyalty experience.",
    tags: ["Flutter", "Node.js", "Maps API"],
    image: tasteUp,
    playStore: "https://play.google.com/store/apps/details?id=com.TasteHub.app&hl=en",
    appStore: "https://apps.apple.com/jp/app/tasteup-app/id6751109669",
  },
  {
    title: "Nofify App",
    description: "A task management app where users can assign real-time tasks, earn rewards based on completion, and access in-app purchases. ",
    tags: ["Flutter", "Dart", "MongoDB"],
    image: nofifyApp,
    playStore: "https://play.google.com/store/apps/details?id=com.app.nofify_task&hl=en",
    appStore: "https://apps.apple.com/pk/app/nofify/id6747436002",
  },
];

const CARD_HEIGHT_MOBILE = 580;
const CARD_HEIGHT_DESKTOP = 420;
const CARD_GAP = 20;
const STACK_OFFSET = 15;

// ─── Store Popup ───────────────────────────────────────────────────────────────

interface StorePopupProps {
  project: typeof projects[number];
  onClose: () => void;
}

const StorePopup = ({ project, onClose }: StorePopupProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center px-4"
    style={{ backgroundColor: "hsl(0 0% 0% / 0.6)", backdropFilter: "blur(6px)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass rounded-2xl p-8 max-w-sm w-full relative border"
      style={{ borderColor: "hsl(160 100% 50% / 0.15)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-7 h-7 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <p className="text-xs text-primary font-display mb-1">// download on</p>
      <h3 className="text-xl font-bold font-display mb-6">{project.title}</h3>

      <div className="flex flex-col gap-3">
        <motion.a
          href={project.appStore}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px hsl(160 100% 50% / 0.2)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 px-5 py-4 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors group"
        >
          <FaAppStoreIos className="w-7 h-7 text-primary shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-display">Download on the</p>
            <p className="text-sm font-bold font-display">App Store</p>
          </div>
          <span className="ml-auto text-primary/40 group-hover:text-primary transition-colors text-sm">→</span>
        </motion.a>

        <motion.a
          href={project.playStore}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px hsl(160 100% 50% / 0.2)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 px-5 py-4 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors group"
        >
          <FaGooglePlay className="w-6 h-6 text-primary shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-display">Get it on</p>
            <p className="text-sm font-bold font-display">Google Play</p>
          </div>
          <span className="ml-auto text-primary/40 group-hover:text-primary transition-colors text-sm">→</span>
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
);

// ─── Sticky Card ───────────────────────────────────────────────────────────────

interface StickyCardProps {
  project: typeof projects[number];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const StickyCard = ({ project, index, total, containerRef }: StickyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
    <>
      <AnimatePresence>
        {showPopup && (
          <StorePopup project={project} onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>

      <div
        className="sticky"
        style={{
          top: `calc(80px + ${index * STACK_OFFSET}px)`,
          height: `${CARD_HEIGHT_MOBILE}px`,
          paddingBottom: `${CARD_GAP}px`,
          zIndex: index + 1,
        }}
      >
        <motion.div
          ref={cardRef}
          style={{ scale: cardProgress, opacity: cardOpacity }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          onClick={() => setShowPopup(true)}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="glass rounded-2xl overflow-hidden group hover:glow-box transition-shadow duration-500 h-full"
          data-cursor-hover
          data-cursor-text="View"
        >
          <div className="grid md:grid-cols-2 gap-0 h-full grid-rows-[1fr_220px] md:grid-rows-1">

            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold font-display">{project.title}</h3>
                <motion.button
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(160 100% 50% / 0.2)" }}
                  className="text-xs font-display text-primary px-2 py-1 rounded-full bg-primary/10 cursor-pointer flex items-center gap-1"
                >
                  <FaGooglePlay className="w-2.5 h-2.5" />
                  <FaAppStoreIos className="w-2.5 h-2.5" />
                </motion.button>
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

            {/* Right Image */}
            <div className="relative overflow-hidden flex items-center justify-center bg-black/30 h-full">
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-[85%] h-[90%] object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/80 md:block hidden" />
            </div>

          </div>
        </motion.div>
      </div>
    </>
  );
};

// ─── Projects Section ──────────────────────────────────────────────────────────

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
            height: `${projects.length * CARD_HEIGHT_MOBILE + (projects.length - 1) * STACK_OFFSET}px`,
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

        {/* Explore More Button */}
        <div className="mt-12 flex justify-center">
          <a  
            href="http://drive.google.com/drive/folders/1pLrDX9gCw4AYvb45jEM4X3YeK_ef-Hrr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-transparent text-primary backdrop-blur-md lg:font-semibold isolation-auto border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Explore More
            <FaArrowRight className="w-8 h-8 justify-end group-hover:rotate-0 text-primary group-hover:bg-transparent ease-linear duration-300 rounded-full border border-primary group-hover:border-none p-2 -rotate-45" />
          </a>  {/* ← এখানে শেষ */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;