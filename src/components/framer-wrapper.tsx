"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

export const FramerWrapper: FC<
  PropsWithChildren & { delay?: number; duration?: number; className?: string }
> = ({ children, className, delay = 0, duration = 0.8 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay: delay * 0.15,
          ease: "easeOut",
        },
      });
    }
  }, [controls, inView, delay, duration]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 90 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
