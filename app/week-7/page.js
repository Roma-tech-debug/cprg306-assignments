"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // Function to handle adding a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); // Ensure immutability
  };

  return (
    <main>
      <h1 className="text-4xl text-center py-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
