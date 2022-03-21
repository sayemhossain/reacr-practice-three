import React from "react";
import {
  addToDb,
  deleteShoppingCart,
  removeFormDb,
} from "../../Utilities/fakeDb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  //adding localStorage
  const addToCart = (id) => {
    addToDb(id);
  };
  //remove cart
  const removeFormCart = (id) => {
    removeFormDb(id);
  };
  //delete cart
  const deleteCart = () => {
    deleteShoppingCart();
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
      <button onClick={deleteCart}>Delete total cart form database</button>
    </div>
  );
};

export default Cosmetic;
