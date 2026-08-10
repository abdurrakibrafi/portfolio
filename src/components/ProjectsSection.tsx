import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import primePilaties from "@/assets/prime_pilaties.webp";
import tasteUp from "@/assets/tasteUp.webp";
import nofifyApp from "@/assets/bookatable.webp";

import {
  FaAppStoreIos,
  FaArrowRight,
  FaGooglePlay,
} from "react-icons/fa6";

import { ExternalLink, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  playStore: string;
  appStore: string;
  number: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Prime Pilaties",
    description:
      "A fitness class booking app where users can purchase credits to book classes, along with a built-in attendance management system to track and manage class participation efficiently.",
    tags: ["iOS", "Android", "Flutter"],
    image: primePilaties,
    playStore:
      "https://play.google.com/store/apps/details?id=com.prime.pilates.app&hl=en",
    appStore:
      "https://apps.apple.com/us/app/prime-pilates/id6741531586",
  },
  {
    number: "02",
    title: "TasteUp",
    description:
      "Seamless QR-based food ordering, smart nearby restaurant discovery, and an engaging gamified loyalty experience.",
    tags: ["Flutter", "Node.js", "Maps API"],
    image: tasteUp,
    playStore:
      "https://play.google.com/store/apps/details?id=com.TasteHub.app&hl=en",
    appStore:
      "https://apps.apple.com/jp/app/tasteup-app/id6751109669",
  },
  {
    number: "03",
    title: "Bookatable.mu App",
    description:
      "A restaurant booking app that allows users to browse the menu and make reservations.",
    tags: ["Flutter", "Dart", "MongoDB"],
    image: nofifyApp,
    playStore:
      "https://apps.apple.com/us/app/bookatable-mu/id6769258531",
    appStore:
      "https://apps.apple.com/pk/app/nofify/id6747436002",
  },
];

const DESKTOP_CARD_HEIGHT = 470;
const DESKTOP_STACK_OFFSET = 18;

const useDesktopScreen = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateScreenSize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return isDesktop;
};

/* -------------------------------------------------------------------------- */
/*                                Store Popup                                 */
/* -------------------------------------------------------------------------- */

interface StorePopupProps {
  project: Project;
  onClose: () => void;
}

const StorePopup = ({ project, onClose }: StorePopupProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ scale: 1.04 }}
      animate={{ scale: 1 }}
      exit={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-4 py-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 24,
        }}
        className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-[#245c49] bg-[#0b1512] shadow-[0_24px_80px_#000000]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-[#1d3e34] bg-[#10231d] px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close store popup"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#2e5c4d] bg-[#09110f] text-white transition-transform duration-300 hover:rotate-90 hover:border-primary hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>

          <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Available on
          </p>

          <h3 className="max-w-[280px] font-display text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <motion.a
            href={project.appStore}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[82px] items-center gap-4 rounded-2xl border border-[#315f50] bg-[#132b23] px-5 py-4 transition-colors duration-300 hover:border-primary hover:bg-[#17382e]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-black">
              <FaAppStoreIos className="h-7 w-7" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[11px] uppercase tracking-wider text-[#9badA6]">
                Download on the
              </p>

              <p className="font-display text-base font-bold text-white">
                App Store
              </p>
            </div>

            <ExternalLink className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-[82px] items-center gap-4 rounded-2xl border border-[#315f50] bg-[#132b23] px-5 py-4 transition-colors duration-300 hover:border-primary hover:bg-[#17382e]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-black">
              <FaGooglePlay className="h-6 w-6" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[11px] uppercase tracking-wider text-[#9badA6]">
                Get it on
              </p>

              <p className="font-display text-base font-bold text-white">
                Google Play
              </p>
            </div>

            <ExternalLink className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Project Content                               */
/* -------------------------------------------------------------------------- */

interface ProjectContentProps {
  project: Project;
  onOpen: () => void;
}

const ProjectContent = ({ project, onOpen }: ProjectContentProps) => {
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
      <div className="order-2 flex flex-col justify-center p-3 sm:p-4 md:order-1 md:p-2 lg:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-primary">
            PROJECT {project.number}
          </span>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen();
            }}
            className="flex h-10 items-center gap-2 rounded-full border border-[#315f50] bg-[#10231d] px-4 font-display text-xs font-semibold text-white transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-black"
          >
            <FaGooglePlay className="h-3.5 w-3.5" />
            <FaAppStoreIos className="h-3.5 w-3.5" />
          </button>
        </div>

        <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
          {project.title}
        </h3>

        <p className="mb-7 max-w-xl font-body text-sm leading-7 text-[#b7c4bf] sm:text-base sm:leading-8">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -3 }}
              className="rounded-full border border-[#315f50] bg-[#10231d] px-4 py-2 font-display text-xs font-semibold text-[#d7e2de] transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
          className="group flex w-fit items-center gap-3 font-display text-sm font-bold text-white"
        >
          <span className="border-b-2 border-primary pb-1 transition-colors duration-300 group-hover:text-primary">
            View application
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black transition-transform duration-300 group-hover:translate-x-2">
            <FaArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </span>
        </button>
      </div>

      <div className="order-1 flex min-h-[280px] items-center justify-center overflow-hidden border-b border-[#1f4036] bg-[#0a100e] p-5 sm:min-h-[360px] sm:p-8 md:order-2 md:min-h-0 md:border-b-0 md:border-l">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-[#1e493c] bg-[#101d19]">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-[#315f50] bg-[#07100d] px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.15em] text-primary sm:left-7 sm:top-7">
            Mobile application
          </div>

          <motion.img
            src={project.image}
            alt={`${project.title} application preview`}
            loading="lazy"
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-[88%] w-[90%] object-contain object-center sm:h-[90%] sm:w-[88%]"
          />
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Desktop Card                                  */
/* -------------------------------------------------------------------------- */

interface DesktopStickyCardProps {
  project: Project;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const DesktopStickyCard = ({
  project,
  index,
  total,
  containerRef,
}: DesktopStickyCardProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [1, index === total - 1 ? 1 : 0.96],
  );

  const translateY = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0, index === total - 1 ? 0 : -12],
  );

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <StorePopup
            project={project}
            onClose={() => setShowPopup(false)}
          />
        )}
      </AnimatePresence>

      <div
        className="sticky"
        style={{
          top: `calc(92px + ${index * DESKTOP_STACK_OFFSET}px)`,
          height: `${DESKTOP_CARD_HEIGHT}px`,
          zIndex: index + 1,
        }}
      >
        <motion.article
          style={{
            scale,
            y: translateY,
          }}
          initial={{ y: 70, scale: 0.96 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => setShowPopup(true)}
          className="h-full cursor-pointer overflow-hidden rounded-[30px] border border-[#255344] bg-[#0c1713] shadow-[0_28px_80px_#000000] transition-colors duration-500 hover:border-primary"
          data-cursor-hover
          data-cursor-text="View"
        >
          <ProjectContent
            project={project}
            onOpen={() => setShowPopup(true)}
          />
        </motion.article>
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                               Mobile Card                                  */
/* -------------------------------------------------------------------------- */

interface MobileProjectCardProps {
  project: Project;
  index: number;
}

const MobileProjectCard = ({
  project,
  index,
}: MobileProjectCardProps) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <StorePopup
            project={project}
            onClose={() => setShowPopup(false)}
          />
        )}
      </AnimatePresence>

      <motion.article
        initial={{ y: 50, scale: 0.97 }}
        whileInView={{ y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          delay: index * 0.08,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={() => setShowPopup(true)}
        className="overflow-hidden rounded-[24px] border border-[#255344] bg-[#0c1713] shadow-[0_20px_55px_#000000] transition-colors duration-300 hover:border-primary"
      >
        <ProjectContent
          project={project}
          onOpen={() => setShowPopup(true)}
        />
      </motion.article>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Projects Section                              */
/* -------------------------------------------------------------------------- */

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useDesktopScreen();

  const desktopContainerHeight =
    projects.length * DESKTOP_CARD_HEIGHT +
    (projects.length - 1) * DESKTOP_STACK_OFFSET;

  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#050807] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-primary sm:w-14" />

            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Featured work
            </span>
          </div>

          <div className="flex flex-col justify-between md:flex-row md:items-end">

          </div>
        </motion.div>

        {isDesktop ? (
          <div
            ref={containerRef}
            style={{
              height: `${desktopContainerHeight}px`,
            }}
          >
            {projects.map((project, index) => (
              <DesktopStickyCard
                key={project.title}
                project={project}
                index={index}
                total={projects.length}
                containerRef={containerRef}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-7">
            {projects.map((project, index) => (
              <MobileProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <a
            href="https://drive.google.com/drive/folders/1pLrDX9gCw4AYvb45jEM4X3YeK_ef-Hrr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-primary bg-[#08100d] px-6 py-3 font-display text-sm font-bold text-primary transition-colors duration-300 hover:bg-primary hover:text-black sm:w-auto sm:min-w-[210px] sm:text-base"
          >
            Explore More

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-[#050807] text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:border-black group-hover:bg-black">
              <FaArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;