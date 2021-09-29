import * as React from "react";
import { motion, useCycle } from "framer-motion";
import "./styles.css";
const MyComponent = () => {
  const [mode, setToggle] = useCycle("on", "off");

  return (
    <motion.div
      className="item"
      onTap={() => {
        setToggle();
        console.log("swtich ", mode);
      }}
      animate={mode}
      variants={{
        off: {
          backgroundColor: "#eee",
        },
        on: {
          backgroundColor: "rgb(255, 167, 5)",
          transition: {
            duration: 1.3,
          },
        },
      }}
    >
      <motion.div
        className="swicher"
        animate={mode}
        variants={{
          off: {
            x: 0,
            backgroundColor: "rgb(255, 167, 5)",
          },
          on: {
            x: 50,
            backgroundColor: "#333",
            scale: 1.3,
            transition: {
              duration: 0.3,
            },
          },
        }}
      ></motion.div>
    </motion.div>
  );
};

export default MyComponent;
