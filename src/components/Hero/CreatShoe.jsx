import React, { useState } from "react";

export default function CreatShoe() {
  const [Price, setPrice] = useState(0);
  const [Taxe, setTaxe] = useState(0);
  return (
    <div className="price-container">
      <input
        type="search"
        placeholder="Price"
        value={Price}
        onChange={function (event) {
          setPrice(event.target.value);
        }}
      ></input>
      <input
        type="search"
        placeholder="Taxe"
        value={Taxe}
        onChange={function (event) {
          setTaxe(event.target.value);
        }}
      ></input>
      <h3>Price Final is : {Price * (1 + Taxe / 100)}</h3>
      <button>Add Shoe DB</button>
    </div>
  );
}
