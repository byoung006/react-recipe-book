import { useParams } from "react-router-dom";
import { Recipes } from "./recipes";
import { Grid } from "@material-ui/core";
import RecipeReviewCard from "./RecipeCards";
import React from "react";
import { TimeLengthIconIndicator } from "./TimeLengthIconIndicator";
import { CategoryList } from "./CategoryList";

//hola senior bryce!
//I've extracted the home component to it's own file! this helps avoid clutter in a file.

export const Home = () => {
  let { id } = useParams();

  return (
    <>
      {id && (
        <>
          <Grid item lg={12}>
            <RecipeReviewCard
              id={id}
              title={Recipes[id].dishName}
              subheader={Recipes[id].recipe.prepTime + " MINUTES"}
              icon={
                <TimeLengthIconIndicator time={Recipes[id].recipe.prepTime} />
              }
              ingredientsArray={Recipes[id].recipe.ingredients}
              instructionArray={Recipes[id].recipe.instructions}
              tipsAndTricksArray={Recipes[id].recipe.tipsAndTricks}
            />
          </Grid>
        </>
      )}
      {!id && (
        <>
          <CategoryList category={"dinner"} />
          <CategoryList category={"lunch"} />
          <CategoryList category={"breakfast"} />
          <CategoryList category={"snacks"} />
        </>
      )}
    </>
  );
};
