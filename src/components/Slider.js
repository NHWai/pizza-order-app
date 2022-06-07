import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Slider() {
  const imgs = [
    "https://images.unsplash.com/photo-1654586839444-5f72254cfd89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1654525481504-169854f1c18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1654578870260-4fdae0cc4f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  ];

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "50%" : "-50%",
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  function wrap(initial, length, curr) {
    let abscurr = Math.abs(curr);

    if (abscurr >= initial && abscurr < length) {
      return abscurr;
    }

    if (abscurr >= length) {
      return abscurr % length;
    }
  }

  const imageIndex = wrap(0, imgs.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="content">
      <div className="holder">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="slider-img"
            key={page}
            src={imgs[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className="dir prev" onClick={() => paginate(-1)}>
          ◀
        </div>
        <div className="dir next" onClick={() => paginate(1)}>
          ▶
        </div>
      </div>
    </div>
  );
}

export default Slider;
