import React from "react";
import { useAnimation, motion, transform } from "framer-motion";
function Index() {
  //Creates AnimationControls, which can be used to manually start,
  //stop and sequence animations on one or more components.
  //The returned AnimationControls should be passed to the animate property
  //of the components you want to animate.
  //These components can then be animated with the start method.
  const animated = useAnimation();
  return (
    <>
      <motion.h1 animate={animated}>Helooooo</motion.h1>
      <motion.div
        style={{
          width: 250,
          height: 15,
          borderRadius: "5em",
          backgroundColor: "#333",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "#23f",
            cursor: "grab",
          }}
          onDrag={function HandelDrag(event, info) {
            //Transforms numbers into other values
            //by mapping them from an input range
            //to an output range.
            //Returns the type of the input provided.
            const value = transform(info.point.x, [416, 811], [0, 1]);
            animated.start({
              opacity: value,
              y: -value * 160,
              scale: value * 1.5,
              rotate: value * 720,
              transition: {
                velocity: 0,
                type: "spring",
              },
            });
          }}
          //Enable dragging for this element. Set to false by default.
          //Set true to drag in both directions.
          //Set "x" or "y" to only drag in a specific direction.
          drag="x"
          //Limit darg
          dragConstraints={{ left: 0, right: 240 }}
          //The degree of movement allowed outside constraints.
          dragElastic={false}
          //Apply momentum from the pan gesture to the component
          //when dragging finishes.
          dragMomentum={false}
        />
      </motion.div>
    </>
  );
}

export default Index;
