import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { PizzaContext } from "./context/PizzaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <PizzaContext>
        <App />
      </PizzaContext>
    </Router>
  </React.StrictMode>
);
