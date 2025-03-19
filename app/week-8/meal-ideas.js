"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    let cleanedIngredient = ingredient
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "") 
      .split(",")[0] 
      .trimEnd() 
      .replace(/s$/, "") 
      .trim() // 
      .toLowerCase();

    console.log("Cleaned Ingredient:", cleanedIngredient);

    fetchMealIdeas(cleanedIngredient).then((response) => {
      if (Array.isArray(response)) {
        setMeals(response);
      } else {
        alert(JSON.stringify(response));
      }
    });
  }, [ingredient]);

  return (
    <div className="flex justify-center p-4 w-full">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-blue-100 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-800">
          Meal Ideas for {ingredient}
        </h1>
        <div className="space-y-4">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <div key={meal.idMeal} className="flex items-center space-x-4 p-2 border-b">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <span className="text-lg text-blue-400">{meal.strMeal}</span>
              </div>
            ))
          ) : (
            <div className="text-center text-blue-500">No meals found</div>
          )}
        </div>
      </div>
    </div>
  );
}

function fetchMealIdeas(ingredient) {
  const link = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
    ingredient
  )}`;

  return fetch(link)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then((data) => data.meals || []) // Ensure an array is returned
    .catch((error) => {
      console.error("Fetch error:", error);
      return [];
    });
}
