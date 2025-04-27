import styles from './RecipeCard.module.css';
import { Recipe } from "../types/Recipe";
import React from 'react';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => (
  <div className={styles.card}>
    <img className={styles.img} src={recipe.image} alt={recipe.name} />
    <div className={styles.name}>{recipe.name}</div>
    <div className={styles.desc}>{recipe.description}</div>
  </div>
);

export default RecipeCard;
