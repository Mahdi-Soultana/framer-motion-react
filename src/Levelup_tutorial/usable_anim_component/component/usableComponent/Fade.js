import React from "react";

import { AnimatePresence } from "framer-motion";
import { Card } from "./StyledCard";
function Fade({ isActive, children }) {
  const variants = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1 },
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

export default Fade;
