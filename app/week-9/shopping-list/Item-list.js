"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items instead of mutating the original array
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="max-w-md mx-auto">
        <label>Sort By: </label>
        <button
          className={`bg-orange-500 p-2 m-3 w-58 ${sortBy === "name" ? "bg-orange-700" : ""}`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`bg-orange-500 p-2 m-3 w-58 ${sortBy === "category" ? "bg-orange-700" : ""}`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div className="max-w-md mx-auto">
        {sortedItems.map((item, index) => (
          <Item 
            key={index} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
            onSelect={onItemSelect} // Pass the onItemSelect handler to each Item component
          />
        ))}
      </div>
    </div>
  );
}