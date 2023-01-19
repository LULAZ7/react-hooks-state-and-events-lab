import React from "react";
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  let filteredItems = items;
  if (selectedCategory !== "All") {
    filteredItems = items.filter((item) => item.category === selectedCategory);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        </select>
      </div>
      <ul className="Items">
        items.map((item) => (
         {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
  ))}
      </ul>
    </div>
  );
}
export default ShoppingList