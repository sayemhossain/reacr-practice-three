import React from "react";

const Cosmetic = (props) => {
  console.log(props);
  const { name, price, id } = props.cosmetic;
  return (
    <div>
      <h2>Poduct Name: {name} </h2>
      <p>Only for: {price} </p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Cosmetic;
