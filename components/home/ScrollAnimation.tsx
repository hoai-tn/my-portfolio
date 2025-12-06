"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Initial {
  x: number;
  y: number;
}
const ScrollAnimation = ({
  initial,
  duration = 0.5,
  children,
}: {
  initial: Initial;
  duration?: Number;
  children: React.ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="parallax-container" ref={ref}>
      <motion.div className="parallax-image" />
      <motion.div
        className="parallax-content"
        initial={{ y: initial.y, x: initial.x }}
        animate={{ y: inView ? 0 : initial.y, x: inView ? 0 : initial.x }}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
