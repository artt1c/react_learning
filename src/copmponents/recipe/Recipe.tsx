import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe";
import styles from './Recipe.module.css'

type RecipeProps = {
  recipe: IRecipe;
}

const Recipe:FC<RecipeProps> = ({recipe}) => {
  return (
    <div className={styles.recipe}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  );
};

export default Recipe;