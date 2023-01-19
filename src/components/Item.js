import React from "react";
import React, { useState } from 'react';

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className="">
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={() => setInCart(!inCart)}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
    </li>
  );
}
export default Item;