import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Head from "./components/Head";
import "./index.css";
import Home from "./components/Home";
import Base from "./components/Base";
import Order from "./components/Order";
import Topping from "./components/Topping";
import Context from "./context/PizzaContext";
import Slider from "./components/Slider";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const { showModal } = useContext(Context);

  return (
    <div className="app">
      <Head />
      {showModal && <Modal />}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/base" element={<Base />}></Route>
          <Route path="/topping" element={<Topping />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
