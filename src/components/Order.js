import React, { useContext, useEffect } from "react";
import Context from "../context/PizzaContext";
import { motion } from "framer-motion";

function Order() {
  const { base, topping, setShowModal } = useContext(Context);

  useEffect(() => {
    setTimeout(() => setShowModal(() => true), 5000);
  }, [0]);

  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        dumping: 8,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="content"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center">
        <h3 className="heading noBorder">Thank you for your order :-)</h3>

        <motion.p className="mx-1" variants={childVariant}>
          You ordered a {base} pizza with:{" "}
        </motion.p>
        <motion.div variants={childVariant}>
          {topping.map((el, idx) => {
            return <div key={idx}>{el}</div>;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Order;
