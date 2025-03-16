import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => Object => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

console.log(heading);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement - JS Object => HTMLElement

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);