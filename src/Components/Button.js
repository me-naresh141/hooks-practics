import React, { useState } from "react";

const Button = () => {
  let [toggle, setToggle] = useState(true);
  const handleName = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>{toggle ? "true" : "false"}</h1>
      <button onClick={handleName}>click</button>
    </div>
  );
};

export default Button;
