import { motion } from "framer-motion";
import { Smartphone, ArrowDown } from "lucide-react";
import { FcAndroidOs } from "react-icons/fc";

import developerPhoto from "@/assets/rafi.jpeg";
import appStore from "@/assets/app_store.svg";
import flutter from "@/assets/flutter.svg";
import firebase from "@/assets/firebase.svg";
import dart from "@/assets/dart.svg";
import swift from "@/assets/swift.svg";
import kotlin from "@/assets/kotlin.svg";

const textReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    skewY: 3,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,

    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const floatingIcons = [
  {
    icon: <FcAndroidOs />,
    label: "Android",
    x: "8%",
    y: "18%",
    size: 48,
    delay: 0,
    duration: 5,
  },
  {
    icon: (
      <img
        src={appStore}
        alt="iOS"
        className="h-full w-full object-contain"
      />
    ),
    label: "iOS",
    x: "85%",
    y: "15%",
    size: 44,
    delay: 0.5,
    duration: 6,
  },
  {
    icon: (
      <img
        src={flutter}
        alt="Flutter"
        className="h-full w-full object-contain"
      />
    ),
    label: "Flutter",
    x: "5%",
    y: "70%",
    size: 40,
    delay: 1,
    duration: 4.5,
  },
  {
    icon: (
      <img
        src={firebase}
        alt="Firebase"
        className="h-full w-full object-contain"
      />
    ),
    label: "Firebase",
    x: "15%",
    y: "45%",
    size: 36,
    delay: 0.8,
    duration: 4,
  },
  {
    icon: (
      <img
        src={dart}
        alt="Dart"
        className="h-full w-full object-contain"
      />
    ),
    label: "Dart",
    x: "88%",
    y: "40%",
    size: 34,
    delay: 2,
    duration: 5,
  },
  {
    icon: (
      <img
        src={swift}
        alt="Swift"
        className="h-full w-full object-contain"
      />
    ),
    label: "Swift",
    x: "75%",
    y: "80%",
    size: 38,
    delay: 0.3,
    duration: 6.5,
  },
  {
    icon: (
      <img
        src={kotlin}
        alt="Kotlin"
        className="h-full w-full object-contain"
      />
    ),
    label: "Kotlin",
    x: "20%",
    y: "85%",
    size: 36,
    delay: 1.2,
    duration: 4.8,
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-x-hidden
        bg-background
        px-4
        pb-16
        pt-24
        // sm:px-6
        // sm:pb-20
        // sm:pt-28
        md:px-0
        md:py-0
        lg:py-1
      "
    >
      {/* Background grid — mobile and desktop */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[length:36px_36px]
          sm:bg-[length:46px_46px]
          md:bg-[length:60px_60px]
        "
        style={{
          backgroundImage:
            "linear-gradient(#103d30 1px, #050807 1px), linear-gradient(90deg, #103d30 1px, #050807 1px)",
        }}
      />

      {/* Floating particles — mobile and desktop */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="
            pointer-events-none
            absolute
            h-1
            w-1
            rounded-full
            bg-primary
          "
          style={{
            left: `${10 + index * 16}%`,
            top: `${14 + (index % 3) * 28}%`,
          }}
          animate={{
            y: [0, -22, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating technology icons — desktop only */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`${item.label}-${index}`}
          className="
            pointer-events-none
            absolute
            hidden
            select-none
            flex-col
            items-center
            gap-1
            md:flex
          "
          style={{
            left: item.x,
            top: item.y,
          }}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            y: [0, -15, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            scale: {
              duration: 0.6,
              delay: item.delay + 0.5,
            },

            y: {
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            },

            x: {
              duration: item.duration * 1.3,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            },

            rotate: {
              duration: item.duration * 1.5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="
              flex
              items-center
              justify-center
              rounded-2xl
              border
              border-[#275746]
              bg-[#0d1b16]
              p-2
            "
            style={{
              width: item.size,
              height: item.size,
            }}
          >
            <span
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
              "
              style={{
                fontSize: item.size * 0.55,
              }}
            >
              {item.icon}
            </span>
          </div>

          <span
            className="
              font-display
              text-[9px]
              uppercase
              tracking-wider
              text-muted-foreground
            "
          >
            {item.label}
          </span>
        </motion.div>
      ))}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          items-center
          gap-10
          md:grid-cols-2
          md:gap-12
          lg:gap-16
        "
      >
        {/* Left content */}
        <div className="order-1 overflow-visible text-left">
          <motion.div
            custom={0}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="mb-5 sm:mb-6"
          >
            <span
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-[#2d6651]
                bg-[#0d1b16]
                px-3
                py-2
                font-display
                text-xs
                text-primary
                sm:px-4
                sm:text-sm
              "
            >
              <Smartphone className="h-4 w-4 shrink-0" />

              <span className="leading-5">
                Software Developer

                <span className="hidden sm:inline">
                  {" "}
                  — Mobile App & Web
                </span>
              </span>
            </span>
          </motion.div>

          <div className="overflow-visible">
            <motion.h1
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="
                mb-5
                font-display
                text-[42px]
                font-bold
                leading-[1.08]
                sm:text-5xl
                md:mb-6
                md:text-6xl
                lg:text-7xl
              "
            >
              Turning ideas{" "}

              <motion.span
                className="inline-block text-primary"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                into
              </motion.span>

              <br />

              software
            </motion.h1>
          </div>

          <motion.p
            custom={2}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="
              mb-7
              max-w-xl
              font-body
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
              md:mb-9
              md:text-xl
              md:leading-8
            "
          >
        Building Mobile and Web applications alongside intelligent AI-powered full-stack systems.
          </motion.p>

          <motion.div
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:gap-4
            "
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1cX3DzUC-gVV1RMPD0LzIBgcx2wAoBlv7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-xl
                bg-primary
                px-6
                py-3
                font-display
                text-sm
                font-semibold
                text-primary-foreground
                sm:w-auto
                sm:px-8
                sm:py-4
              "
              data-cursor-text="Go"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-[#315f50]
                bg-[#0d1b16]
                px-6
                py-3
                font-display
                text-sm
                font-semibold
                text-foreground
                transition-colors
                duration-300
                hover:border-primary
                hover:text-primary
                sm:w-auto
                sm:px-8
                sm:py-4
              "
              data-cursor-text="Hi!"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Developer image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            order-2
            flex
            w-full
            justify-center
            pb-2
            md:justify-end
            md:pb-0
          "
        >
          <div
            className="
              relative
              flex
              w-full
              items-center
              justify-center
            "
          >
            {/* Solid border only — no animated ring */}
            <div
              className="
                absolute
                aspect-square
                w-[min(300px,88vw)]
                rounded-full
                bg-primary
                min-[400px]:w-[325px]
                sm:w-[350px]
                md:w-[360px]
                lg:w-[410px]
              "
            />

            <motion.img
              src={developerPhoto}
              alt="Abdur Rakib Rafi"
              width={512}
              height={512}
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                aspect-square
                w-[min(290px,85vw)]
                rounded-full
                border-[5px]
                border-background
                object-cover
                object-top
                shadow-2xl
                min-[400px]:w-[315px]
                sm:w-[340px]
                md:w-[350px]
                lg:w-[400px]
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.a>
    </section>
  );
};

export default HeroSection;

