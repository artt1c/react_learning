import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe";
import Recipe from "../recipe/Recipe";
import styles from './Recipes.module.css'

type RecipesPageProps = {
  recipes: IRecipe[];
}

const Recipes:FC<RecipesPageProps> = ({recipes}) => {

  return (
    <div className={styles.recipesList}>
      {
        recipes.map((recipe: IRecipe) => (<Recipe key={recipe.id} recipe={recipe}/>))
      }
    </div>
  );
};

export default Recipes;