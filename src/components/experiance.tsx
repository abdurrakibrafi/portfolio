import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Sparktech Agency",
    position: "Software Developer",
    location: "Aqua Tower 43, Mohakhali C/A, Dhaka, Bangladesh",
    duration: "Jun 2024 — Present",
    employmentType: "Full-time",
    description:
      "Building responsive, scalable and production-ready mobile applications for Android and iOS using Flutter.",
    responsibilities: [
      "Develop and maintain cross-platform Flutter applications.",
      "Integrate REST APIs, Firebase, Google Maps, real-time systems and payment gateways.",
      "Publish and manage applications on App Store and Google Play.",
      "Collaborate with designers, backend developers and project managers.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "GraphQL",
      "WebSocket",
      "GetX",
      "Bloc",
      "Payment Gateway",
      "Google Maps",
    ],
  },
  {
    id: 2,
    company: "QuickTech IT Limited",
    position: "Mobile Application Developer",
    location: "Dhaka, Bangladesh",
    duration: "Sept 2023 — Jun 2024",
    employmentType: "On-Site",
    description:
      "Worked with international clients to transform business ideas and Figma designs into complete mobile applications.",
    responsibilities: [
      "Converted Figma designs into responsive Flutter interfaces.",
      "Integrated authentication, real-time chat and notifications.",
      "Implemented location tracking, booking and payment features.",
      "Provided deployment, maintenance and post-launch support.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Socket.io",
      "Stripe",
      "Figma",
    ],
  },
  {
    id: 3,
    company: "MarsCodez",
    position: "Intern App Developer",
    location: "Remote",
    duration: "Mar 2023 — Aug 2023",
    employmentType: "Internship",
    description:
      "Built custom mobile applications for different business needs, focusing on clean UI, smooth performance and reliable backend integration.",
    responsibilities: [
      "Developed Flutter applications from design to deployment.",
      "Integrated APIs, authentication and Firebase services.",
      "Implemented responsive UI for multiple screen sizes.",
      "Handled bug fixing, testing and application maintenance.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Provider",
      "Git",
    ],
  },
];

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

interface ExperienceContentProps {
  experience: Experience;
  align: "left" | "right";
}

const ExperienceContent = ({
  experience,
  align,
}: ExperienceContentProps) => {
  const isRightAligned = align === "right";

  return (
    <div
      className={`w-full min-w-0 max-w-xl ${isRightAligned ? "md:ml-auto md:text-right" : ""
        }`}
    >
      <div
        className={`mb-3 flex flex-wrap items-center gap-3 ${isRightAligned ? "md:justify-end" : ""
          }`}
      >
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
          {experience.employmentType}
        </span>
      </div>

      <h3 className="break-words font-display text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
        {experience.position}
      </h3>

      <p className="mt-2 break-words font-display text-base font-semibold text-primary sm:text-lg">
        {experience.company}
      </p>

      <div
        className={`mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 ${isRightAligned ? "md:justify-end" : ""
          }`}
      >
        <div className="flex min-w-0 items-start gap-2 text-[#9bada6]">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

          <span className="min-w-0 break-words font-body text-sm leading-5">
            {experience.duration}
          </span>
        </div>

        <div className="flex min-w-0 items-start gap-2 text-[#9bada6]">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

          <span className="min-w-0 break-words font-body text-sm leading-5">
            {experience.location}
          </span>
        </div>
      </div>



      <div className="mt-6">
        <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
          Key responsibilities
        </h4>

        <div className="mt-4 space-y-3">
          {experience.responsibilities.map((responsibility) => (
            <div
              key={responsibility}
              className={`flex min-w-0 items-start gap-3 ${isRightAligned ? "md:flex-row-reverse" : ""
                }`}
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

              <p className="min-w-0 break-words font-body text-sm leading-6 text-[#9bada6]">
                {responsibility}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-6 flex flex-wrap gap-x-4 gap-y-2 ${isRightAligned ? "md:justify-end" : ""
          }`}
      >
        {experience.technologies.map((technology) => (
          <motion.span
            key={technology}
            whileHover={{ y: -2 }}
            className="break-words font-display text-xs font-semibold text-[#c4d0cb] transition-colors duration-300 hover:text-primary"
          >
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: ExperienceCardProps) => {
  const isLeft = index % 2 === 0;
  const isLast = index === experiences.length - 1;

  return (
    <div className="relative">
      {/* Mobile */}
      <div className="relative flex gap-4 md:hidden">
        <div className="relative flex w-9 shrink-0 justify-center">
          <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black">
            <BriefcaseBusiness className="h-4 w-4" />
          </span>

          {!isLast && (
            <span className="absolute left-1/2 top-9 h-[calc(100%+24px)] w-px -translate-x-1/2 bg-primary/25" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0 flex-1 pb-12"
        >
          <ExperienceContent
            experience={experience}
            align="left"
          />
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_70px_minmax(0,1fr)]">
        <div className="min-w-0 pr-6 lg:pr-8">
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pb-16"
            >
              <ExperienceContent
                experience={experience}
                align="right"
              />
            </motion.div>
          )}
        </div>

        <div className="relative flex justify-center">
          <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-black">
            <BriefcaseBusiness className="h-5 w-5" />
          </span>

          {!isLast && (
            <span className="absolute top-11 h-[calc(100%+24px)] w-px bg-primary/25" />
          )}
        </div>

        <div className="min-w-0 pl-6 lg:pl-8">
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pb-16"
            >
              <ExperienceContent
                experience={experience}
                align="left"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#050807] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 shrink-0 bg-primary sm:w-12" />

            <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
              Professional Journey
            </span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <h2 className="max-w-3xl break-words font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                 Work
                <span className="text-primary"> experience</span>
              </h2>

          
            </div>

            <div className="shrink-0">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                3+
              </p>

              <p className="mt-1 font-body text-[10px] uppercase tracking-[0.14em] text-[#7f938b] sm:text-xs">
                Years of experience
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;