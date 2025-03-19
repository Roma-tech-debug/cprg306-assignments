"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";  
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");  

  // Function to handle adding a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  // Function to handle item selection (sets selected item name)
  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/[^a-zA-Z\s]/g, "").trim();  
    setSelectedItemName(cleanedItemName); 
  };

  return (
    <main>
      <h1 className="text-4xl text-left py-4">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ItemList items={items} onItemSelect={handleItemSelect} /> 
        </div>
        <div className="flex justify-center items-center w-full"> 
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />} 
        </div>
      </div>
    </main>
  );
}
