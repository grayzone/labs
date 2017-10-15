import React from "react";

const StatelessDemo = props => {
  const handleClick = e => {
    console.log("click :", e.target);
  };
  return <div onClick={handleClick}>Stateless</div>;
};

export default StatelessDemo;
