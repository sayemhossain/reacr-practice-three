import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  console.log(props);
  const { name, price, id } = props.cosmetic;
  return (
    <div className="single-cosmetic">
      <h2>Name: {name} </h2>
      <p>Only for: ${price} </p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Cosmetic;
