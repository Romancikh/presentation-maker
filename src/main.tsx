import "./index.css";
import "normalize.css";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import presentation from "./types/examples/minimal.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App presentation={presentation} />
  </React.StrictMode>,
);
