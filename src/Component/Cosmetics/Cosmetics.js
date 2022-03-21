import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      <h1>Welcome to my Cosmetics Store</h1>
      <div className="all-cosmetics">
        {cosmetics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
