import React from "react";
import { addToDb } from "../../Utilities/fakeDb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  //adding localStorage
  const addToCart = (id) => {
    addToDb(id);
  };
  //remove cart
  const removeFormCart = (id) => {
    console.log("removing", id);
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
      <button
        onClick={() => {
          removeFormCart(id);
        }}
      >
        Remove cart
      </button>
    </div>
  );
};

export default Cosmetic;
