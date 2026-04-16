import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailConfig = { damping: 35, stiffness: 200, mass: 0.8 };
  const trailXSpring = useSpring(cursorX, trailConfig);
  const trailYSpring = useSpring(cursorY, trailConfig);

  // Trail particles - fixed hooks (not in loops)
  const t1x = useSpring(cursorX, { damping: 50, stiffness: 120, mass: 0.8 });
  const t1y = useSpring(cursorY, { damping: 50, stiffness: 120, mass: 0.8 });
  const t2x = useSpring(cursorX, { damping: 60, stiffness: 90, mass: 1.1 });
  const t2y = useSpring(cursorY, { damping: 60, stiffness: 90, mass: 1.1 });
  const t3x = useSpring(cursorX, { damping: 70, stiffness: 60, mass: 1.4 });
  const t3y = useSpring(cursorY, { damping: 70, stiffness: 60, mass: 1.4 });

  const trails = [
    { x: t1x, y: t1y, opacity: 0.15, size: 3 },
    { x: t2x, y: t2y, opacity: 0.11, size: 2 },
    { x: t3x, y: t3y, opacity: 0.07, size: 1 },
  ];

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const handleHoverElements = () => {
      const interactiveEls = document.querySelectorAll("a, button, [data-cursor-hover], input, textarea");
      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          const text = (el as HTMLElement).dataset.cursorText || "";
          setHoverText(text);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setHoverText("");
        });
      });
    };

    handleHoverElements();
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [handleMouseMove]);

  // Hide on touch devices
  const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: "hsl(160 100% 50%)" }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 40,
            height: isHovering ? 64 : 40,
            opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
            borderColor: isHovering
              ? "hsl(160 100% 50% / 0.6)"
              : "hsl(160 100% 50% / 0.3)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full border-2 flex items-center justify-center"
          style={{ backgroundColor: isHovering ? "hsl(160 100% 50% / 0.05)" : "transparent" }}
        >
          <AnimatePresence>
            {hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[8px] font-display font-bold uppercase tracking-wider"
                style={{ color: "hsl(160 100% 50%)" }}
              >
                {hoverText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Particle trail dots */}
      {trails.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 z-[9997] pointer-events-none"
          style={{
            x: trail.x,
            y: trail.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            animate={{ opacity: isVisible ? trail.opacity : 0 }}
            className="rounded-full"
            style={{
              width: trail.size,
              height: trail.size,
              backgroundColor: "hsl(160 100% 50%)",
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;
