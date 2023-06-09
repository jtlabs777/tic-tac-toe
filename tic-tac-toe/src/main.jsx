import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game.jsx";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
