import React from "react";
import { createRoot } from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { App } from "./App";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// const element = <div>Hello World</div>;

const root = createRoot(document.getElementById("root"));

root.render(<App />);
