import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/PizzaContext";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const nextVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
};

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

function Base() {
  const [click, setClick] = useState(false);
  const { chooseBase } = useContext(Context);

  let bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  function choose(e) {
    setClick(() => true);
    chooseBase(e.target.innerText);

    document.querySelectorAll("li").forEach((el) => {
      el.style.listStyleImage = "none";
      el.style.color = "inherit";
    });
    e.target.style.color = "#f8e112";
    e.target.style.listStyleImage = "url('./angle-right-solid.svg')";
  }

  return (
    <motion.div
      className="content"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center ">
        <div className="heading">Step 1: Choose Your Base</div>
        <ul className="base-opt ">
          {bases.map((el, idx) => {
            return (
              <motion.li
                key={idx}
                onClick={choose}
                whileHover={{
                  scale: 1.3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {el}
              </motion.li>
            );
          })}
        </ul>
        <div className="btn-container">
          {click && (
            <motion.div variants={nextVariant}>
              <Link to="/topping">
                <motion.button variants={btnVariant} whileHover="hover">
                  Next
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Base;
