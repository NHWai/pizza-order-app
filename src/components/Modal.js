import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/PizzaContext";
import { motion } from "framer-motion";

function Modal() {
  const { setShowModal } = useContext(Context);

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

  function removeModal() {
    setShowModal(() => false);
  }

  return (
    <div className="modal">
      <motion.div
        className="modal-inner"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div>Want to make another pizza?</div>
        <Link to="/">
          <motion.button
            onClick={removeModal}
            variants={btnVariant}
            whileHover="hover"
          >
            Start Again
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Modal;
