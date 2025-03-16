import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Namaste React 🚀");
const parahraph = React.createElement("h2", {}, "parahraph");

const root = ReactDOM.createRoot(document.getElementById("root"));
const para = ReactDOM.createRoot(document.getElementById("para"));

root.render(heading);
para.render(parahraph);