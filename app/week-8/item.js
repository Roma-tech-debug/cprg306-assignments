"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div 
      className="bg-blue-300 m-2 p-4 text-black hover:bg-blue-500 cursor-pointer"
      onClick={() => onSelect(name)} // Trigger the onSelect callback
    >
      <h2 className="text-2xl font-bold text-left">{name}</h2>
      <ul className="w-full">
        <li className="bg-white">Buy {quantity} in {category}</li>
      </ul>
    </div>
  );
}

