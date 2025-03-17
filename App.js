import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createElement => Object => HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

console.log(heading);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement - JS Object => HTMLElement


// React Component
// Class Based Component - OLD
// Functional Component - NEW

// Functional Component
// A normal js function which returns jsx.

const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>
}


const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
