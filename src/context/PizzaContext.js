import React, { createContext, useState } from "react";

const Context = createContext({});

export const PizzaContext = ({ children }) => {
  const [collect, setCollect] = useState({ base: "", topping: [] });
  const [showModal, setShowModal] = useState(false);

  function chooseBase(base) {
    setCollect((pre) => {
      return {
        ...pre,
        base,
      };
    });
  }

  function chooseTopping(top) {
    // function check(item, arr) {
    //   if (arr.length < 0) return [...arr, item];

    //   if (!arr.find((el) => el === top)) return [...arr, item];

    //   return [...arr];
    // }

    setCollect((pre) => {
      return {
        ...pre,
        topping:
          pre.topping.length < 0 || !pre.topping.find((el) => el === top)
            ? [...pre.topping, top]
            : [...pre.topping],
      };
    });
  }

  return (
    <Context.Provider
      value={{ ...collect, chooseBase, chooseTopping, showModal, setShowModal }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
