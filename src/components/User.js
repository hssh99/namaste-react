import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Returned");
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Mumbai</h3>
      <h4>Contact: @hs19</h4>
    </div>
  );
};

export default User;
