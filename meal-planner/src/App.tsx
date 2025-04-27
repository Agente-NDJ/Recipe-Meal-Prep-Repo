import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import { sampleRecipes } from "./utils/sampleRecipes";
import { daysOfWeek } from "./utils/daysOfWeek";
import { Recipe } from "./types/Recipe";
import React from "react";
import styles from './App.module.css';
import { GiKnifeFork } from "react-icons/gi";


interface MealPlan {
  [day: string]: string; // maps day to recipe id
}

function App() {
  const [search, setSearch] = useState("");
  const [mealPlan, setMealPlan] = useState<MealPlan>({});

  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  // Helper: get Recipe object by id
  const getRecipeById = (id: string | undefined) =>
    sampleRecipes.find(r => r.id === id);

  // Handle recipe assignment
  const handleAssignRecipe = (day: string, recipeId: string) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: recipeId
    }));
  };

  return (
  <div className={styles.container}>
    <h1> <GiKnifeFork size={40} style={{ marginBottom: 8 }} /> Meal Planner</h1>

      <h2>Recipes</h2>
      <input className={styles.searchBar}/>
      <div className={styles.recipes}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>

      <h2>Your Meal Plan</h2>
      <div className="mealPlanBox">
        {daysOfWeek.map(day => (
          <div className={styles.mealPlannerRow} key={day}>
            <span className={styles.day}>{day}:</span>
            <select className={styles.recipeSelect}
              value={mealPlan[day] || ""}
              onChange={e => handleAssignRecipe(day, e.target.value)}
            >
              <option value="">-- Select a recipe --</option>
              {sampleRecipes.map(recipe => (
                <option value={recipe.id} key={recipe.id}>
                  {recipe.name}
                </option>
              ))}
            </select>
            {mealPlan[day] ? (
              <span style={{ color: "#888" }}>({getRecipeById(mealPlan[day])?.name})</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
