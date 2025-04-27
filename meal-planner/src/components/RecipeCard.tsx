import { Recipe } from "../types/Recipe";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={recipe.image}
        alt={recipe.name}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{recipe.name}</h3>
        <p className={styles.description}>{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
