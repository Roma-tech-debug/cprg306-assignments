"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    setQuantity(quantity - 1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let item = { name, category, quantity };

    console.log(JSON.stringify(item));

    alert(JSON.stringify(item));

    setName("");
    setCategory("produce");
    setQuantity(1);
  }

  return (
    <div className="flex justify-center pt-12"> 
      <form
        onSubmit={handleSubmit}
        className="bg-white p-2 shadow-lg w-96 space-y-4"
      >
        <div className="flex flex-col">
          <input
            className="w-full p-2 border rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Enter Item name"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-black text-sm font-bold">Quantity:</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrease}
              className="bg-cyan-500 text-black border rounded px-3 py-1 hover:bg-blue-500 disabled:bg-gray-500"
              disabled={quantity === 1}
            >
              {" "}
              -{" "}
            </button>
            <span className="mx-3 text-black">{quantity}</span>
            <button
              type="button"
              onClick={increase}
              className="bg-blue-600 text-black border rounded px-3 py-1 hover:bg-blue-500 disabled:bg-gray-500"
              disabled={quantity === 20}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-black text-sm font-bold mb-1">Category:</label>
          <select
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            className="w-full p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen_foods">Frozen Foods</option>
            <option value="canned_goods">Canned Goods</option>
            <option value="dry_goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-500 transition"
          >
            +{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
