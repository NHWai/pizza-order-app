import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const btnVariant = {
  hover: {
    scale: 1.16,
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      delay: 0.6,
      yoyo: Infinity,
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

function Home() {
  const center = {
    display: "grid",
    placeItems: "center",
    gap: "2rem",
  };

  return (
    <motion.div
      className="content"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={center}>
        <h1 className="main-heading text-center">Welcome To Pizza Joint</h1>
        <Link to="/base">
          <motion.button variants={btnVariant} whileHover="hover">
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </div>
    </motion.div>
  );
}

export default Home;
