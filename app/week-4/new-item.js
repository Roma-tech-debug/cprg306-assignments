"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

   function increment() {
        setQuantity(quantity + 1);

    }

    function decrement() {
        setQuantity(quantity - 1);

    }
  return (
    <div className="p-2 bg-white rounded p-2 m-4 text-center">
      <p className="text-xl text-black font-bold mb-4"> {quantity}</p>
      <div className="flex justify-center gap-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-pink-500 text-white rounded disabled:opacity-50"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}