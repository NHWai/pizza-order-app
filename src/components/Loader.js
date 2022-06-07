import React from "react";
import { motion, useCycle } from "framer-motion";

function Loader() {
  const loaderVariant = {
    animateEnd: {
      x: 0,
      y: 0,
    },
    animateOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
    animateTwo: {
      x: 0,
      y: [0, -40],
      transition: {
        y: {
          yoyo: Infinity,
          duration: 0.25,
        },
      },
    },
  };

  const [animate, cycleAnimate] = useCycle(
    "animateEnd",
    "animateOne",
    "animateTwo"
  );

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate={animate}
      ></motion.div>
      <div onClick={cycleAnimate}>Cycle Loader</div>
    </>
  );
}

export default Loader;
