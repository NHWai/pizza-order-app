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

function Topping() {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const [click, setClick] = useState(false);
  const { chooseTopping } = useContext(Context);

  function choose(e) {
    setClick(() => true);
    chooseTopping(e.target.innerText);
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
      <div className="text-center">
        <div className="heading">Step 2: Choose Your Topping</div>
        <ul className="topping-opt">
          {toppings.map((top, idx) => {
            return (
              <motion.li
                key={idx}
                onClick={choose}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {top}
              </motion.li>
            );
          })}
        </ul>
        <div className="btn-container">
          {click && (
            <motion.div variants={nextVariant}>
              <Link to="/order">
                <motion.button variants={btnVariant} whileHover="hover">
                  Add Topping
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Topping;
