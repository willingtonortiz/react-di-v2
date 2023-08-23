import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// If we setup the dependencies at root, then all application dependencies will be imported
// import { setupDependencies } from "./core/infrastructure/di/dependencies.ts";
// setupDependencies();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
