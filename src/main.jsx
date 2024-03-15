import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PlansProvider } from "./context/PlansContext";
import { AddonsProvider } from "./context/AddonsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlansProvider>
      <AddonsProvider>
        <App />
      </AddonsProvider>
    </PlansProvider>
  </React.StrictMode>
);
