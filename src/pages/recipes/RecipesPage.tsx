import React, {useEffect, useState} from 'react';
import Recipes from "../../copmponents/recipes/Recipes";
import SimplePagination from "../../copmponents/pagination/SimplePagination";
import {IRecipe} from "../../models/IRecipe";
import {apiService} from "../../services/api.service";
import {useSearchParams} from "react-router-dom";

const RecipesPage = () => {

  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [query] = useSearchParams({page: '1'});
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    const page = query.get('page');

    if (page) {
      apiService.recipes.getAll(+page).then(value => {
        setRecipes(value.recipes);
        const lastId = value.recipes[value.recipes.length -1].id
        if (lastId >= value.total) {
          setFlag(true);
        } else {
          setFlag(false);
        }
      });
    }
  }, [query]);

  return (
    <div>
      <Recipes recipes={recipes}/>
      <hr/>
      <SimplePagination flag={flag}/>
    </div>
  );
};

export default RecipesPage;