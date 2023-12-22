import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/index.css";

// Render your React component instead
const root = createRoot(document.getElementById("root"));
root.render(<App />);
