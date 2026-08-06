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
    company: "Code Crafters International",
    position: "Flutter Developer",
    location: "Dhaka, Bangladesh",
    duration: "January 2024 — Present",
    employmentType: "Full-time",
    description:
      "Building responsive, scalable and production-ready mobile applications for Android and iOS using Flutter.",
    responsibilities: [
      "Develop and maintain cross-platform Flutter applications.",
      "Integrate REST APIs, Firebase, Google Maps and payment gateways.",
      "Publish and manage applications on App Store and Google Play.",
      "Collaborate with designers, backend developers and project managers.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "GetX",
      "Google Maps",
    ],
  },
  {
    id: 2,
    company: "Freelance & Remote Projects",
    position: "Mobile Application Developer",
    location: "Remote",
    duration: "2022 — 2024",
    employmentType: "Freelance",
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
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Stripe",
      "Figma",
    ],
  },
];

interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const ExperienceItem = ({
  experience,
  index,
  isLast,
}: ExperienceItemProps) => {
  return (
    <motion.article
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid grid-cols-[36px_1fr] gap-4 sm:grid-cols-[48px_1fr] sm:gap-6"
    >
      {/* Timeline */}
      <div className="relative flex justify-center">
        <span className="relative z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black sm:h-11 sm:w-11">
          <BriefcaseBusiness className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>

        {!isLast && (
          <span className="absolute bottom-0 top-11 w-px bg-primary/25 sm:top-14" />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? "" : "pb-14 sm:pb-20"}>
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {experience.employmentType}
          </span>

          <span className="font-body text-xs text-[#7f938b]">
            Experience {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          {experience.position}
        </h3>

        <p className="mt-2 font-display text-lg font-semibold text-primary sm:text-xl">
          {experience.company}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex items-center gap-2 text-[#9bada6]">
            <CalendarDays className="h-4 w-4 text-primary" />

            <span className="font-body text-sm">
              {experience.duration}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#9bada6]">
            <MapPin className="h-4 w-4 text-primary" />

            <span className="font-body text-sm">
              {experience.location}
            </span>
          </div>
        </div>

        <p className="mt-6 max-w-3xl font-body text-sm leading-7 text-[#aebbb6] sm:text-base sm:leading-8">
          {experience.description}
        </p>

        <div className="mt-7">
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
            Key responsibilities
          </h4>

          <div className="mt-4 space-y-3">
            {experience.responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="flex max-w-3xl items-start gap-3"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                <p className="font-body text-sm leading-6 text-[#9bada6]">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
          {experience.technologies.map((technology) => (
            <motion.span
              key={technology}
              whileHover={{ y: -2 }}
              className="font-display text-xs font-semibold text-[#c4d0cb] transition-colors duration-300 hover:text-primary"
            >
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-[#050807] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-primary sm:w-14" />

            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary sm:text-sm">
              Professional journey
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                My work
                <span className="text-primary"> experience.</span>
              </h2>

              <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-[#9bada6] sm:text-base sm:leading-8">
                A summary of my professional experience, responsibilities and
                the technologies I have worked with.
              </p>
            </div>

            <div>
              <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
                3+
              </p>

              <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-[#7f938b]">
                Years of experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;