import React from "react";
import { AnimatePresence } from "framer-motion";
import { Card } from "./StyledCard";
function Slide({ isActive, children, direction = 1, distance = 300 }) {
  const variants = {
    initial: { opacity: 0, x: direction * distance },
    exit: { opacity: 0, x: distance * -direction },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <AnimatePresence>
      {isActive && (
        <Card
          variants={variants}
          exit="exit"
          initial="initial"
          animate="animate"
        >
          {children}
        </Card>
      )}
    </AnimatePresence>
  );
}

export default Slide;
