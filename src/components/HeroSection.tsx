import { motion } from "framer-motion";
import { Smartphone, ArrowDown } from "lucide-react";
import developerPhoto from "@/assets/developer-photo.png";
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { DiSwift } from "react-icons/di";
import { TbBrandKotlin } from "react-icons/tb"; 
import app_store from "@/assets/app_store.svg";
import flutter from "@/assets/flutter.svg";
import firebase from "@/assets/firebase.svg";
import dart from "@/assets/dart.svg";
import swift from "@/assets/swift.svg";
import kotlin from "@/assets/kotlin.svg";

const textReveal = {
  hidden: { opacity: 0, y: 80, skewY: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Floating tech icons around the hero
const floatingIcons = [
  { icon:  <FcAndroidOs />, label: "Android", x: "8%", y: "18%", size: 48, delay: 0, duration: 5 },
  { icon: <img src={app_store} alt="apps" />, label: "iOS", x: "85%", y: "15%", size: 44, delay: 0.5, duration: 6 },
  { icon: <img src={flutter} alt="apps" />, label: "Flutter", x: "5%", y: "70%", size: 40, delay: 1, duration: 4.5 },
  { icon: <img src={firebase} alt="apps" />, label: "Firebase", x: "15%", y: "45%", size: 36, delay: 0.8, duration: 4 },
  { icon: <img src={dart} alt="apps" />, label: "Dart", x: "88%", y: "40%", size: 34, delay: 2, duration: 5 },
  { icon: <img src={swift} alt="apps" />, label: "Swift", x: "75%", y: "80%", size: 38, delay: 0.3, duration: 6.5 },
  { icon: <img src={kotlin} alt="apps" />, label: "Kotlin", x: "20%", y: "85%", size: 36, delay: 1.2, duration: 4.8 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(hsl(160 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 100% 50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "hsl(160 100% 50% / 0.3)",
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating tech icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute hidden md:flex flex-col items-center gap-1 pointer-events-none select-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            scale: 1,
            y: [0, -15, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            opacity: { duration: item.duration, repeat: Infinity, delay: item.delay },
            scale: { duration: 0.6, delay: item.delay + 0.5 },
            y: { duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
            x: { duration: item.duration * 1.3, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
            rotate: { duration: item.duration * 1.5, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="glass rounded-2xl flex items-center justify-center"
            style={{ width: item.size, height: item.size }}
            whileHover={{ scale: 1.3 }}
          >
            <span style={{ fontSize: item.size * 0.5 }}>{item.icon}</span>
          </motion.div>
          <motion.span
            className="text-[9px] font-display text-muted-foreground/60 tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: item.delay + 1 }}
          >
            {item.label}
          </motion.span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left overflow-hidden">
          <motion.div custom={0} variants={textReveal} initial="hidden" animate="visible" className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-display text-sm">
              <Smartphone className="w-4 h-4" />
              Software Developer ( Mobile App & Web )
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
            >
              Turning ideas{" "}
              <motion.span
                className="text-gradient inline-block"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundSize: "200% 200%",
                  backgroundImage: "linear-gradient(135deg, hsl(160 100% 50%), hsl(35 95% 55%), hsl(160 100% 50%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
            className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mb-10"
          >
            Building pixel-perfect, performant iOS & Android applications
            with Swift, Kotlin, React Native & Flutter.
          </motion.p>

          <motion.div
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(160 100% 50% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm glow-box"
              data-cursor-text="Go"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: "hsl(160 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass font-display font-semibold text-sm text-foreground transition-colors"
              data-cursor-text="Hi!"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Image with rotating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20"
            />
            
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/50 to-accent opacity-60 blur-sm" />
            <motion.img
              src={developerPhoto}
              alt="Developer portrait"
              width={512}
              height={512}
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full object-cover shadow-2xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
