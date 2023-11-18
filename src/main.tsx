import "./index.css";
import "normalize.css";
import App from "./App.tsx";
import PresentationProvider from "./contexts/presentation.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PresentationProvider>
      <App />
    </PresentationProvider>
  </React.StrictMode>,
);
