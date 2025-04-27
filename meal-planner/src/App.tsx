import styles from './App.module.css';
import RecipeCard from "./components/RecipeCard";
import { sampleRecipes } from "./utils/sampleRecipes";
import { daysOfWeek } from "./utils/daysOfWeek";
import { useState } from "react";

type MealPlan = {
  [day: string]: string;
};

export default function App() {
  const [search, setSearch] = useState("");
  const [mealPlan, setMealPlan] = useState<MealPlan>({});

  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  const getRecipeById = (id: string | undefined) =>
    sampleRecipes.find(r => r.id === id);

  const handleAssignRecipe = (day: string, recipeId: string) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: recipeId
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1>🍽️ Meal Planner</h1>
        <h2>Recipes</h2>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search recipes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
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
        <div className={styles.mealPlanBox}>
          {daysOfWeek.map((day) => (
            <div className={styles.mealPlannerRow} key={day}>
              <span className={styles.day}>{day}:</span>
              <select
                className={styles.recipeSelect}
                value={mealPlan[day] || ""}
                onChange={(e) => handleAssignRecipe(day, e.target.value)}
              >
                <option value="">-- Select a recipe --</option>
                {sampleRecipes.map((recipe) => (
                  <option value={recipe.id} key={recipe.id}>
                    {recipe.name}
                  </option>
                ))}
              </select>
              {mealPlan[day] && (
                <span className={styles.assignedRecipe}>
                  ({getRecipeById(mealPlan[day])?.name})
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
