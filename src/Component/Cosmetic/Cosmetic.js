import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    console.log("Item added", id);
  };
  return (
    <div className="single-cosmetic">
      <h2>Name: {name} </h2>
      <p>Only for: ${price} </p>
      <p>ID: {id}</p>
      <button
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to cart
      </button>
      <button>Remove cart</button>
    </div>
  );
};

export default Cosmetic;
