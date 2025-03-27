import React, {useEffect, useState} from 'react';
import Recipes from "../../copmponents/recipes/Recipes";
import {IRecipe} from "../../models/IRecipe";
import {apiService} from "../../services/api.service";
import {useSearchParams} from "react-router-dom";
import PaginationMUI from "../../copmponents/pagination_mui/PaginationMUI";

const RecipesPage = () => {

  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [query] = useSearchParams({page: '1'});
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    const page = query.get('page');

    if (page) {
      apiService.recipes.getAll(+page).then(value => {
        setRecipes(value.recipes);
        setPageCount(value.total / value.limit)
      });
    }
  }, [query]);

  return (
    <div>
      <Recipes recipes={recipes}/>
      <hr/>
      <PaginationMUI pageCount={pageCount}/>
      {/*<SimplePagination/>*/}
    </div>
  );
};

export default RecipesPage;