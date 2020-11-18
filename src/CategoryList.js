import { Recipes } from "./recipes";
import { Card, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { TimeLengthIconIndicator } from "./TimeLengthIconIndicator";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 100,
    height: 100,
  },
  cardMargin: { margin: 20, padding: 20 },
}));
function CategoryTitle(props) {
  return (
    <Typography
      variant="h2"
      style={{
        textTransform: "capitalize",
        alignContent: "space-around",
      }}
    >
      {props.category}
    </Typography>
  );
}

export function CategoryList({ category }) {
  const myClasses = useStyles();

  function applyCategoryFilter() {
    return Object.values(Recipes).filter((recipe) => {
      return recipe.category.includes(category);
    });
  }

  return (
    <>
      <Grid item lg={3}>
        <CategoryTitle category={category} />
        {applyCategoryFilter().map((recipe) => {
          return (
            <Card className={myClasses.cardMargin}>
              <Button to={recipe.id} component={Link} fullWidth>
                <Avatar
                  aria-label="recipe"
                  src={`${recipe.id}.jpeg`}
                  className={myClasses.avatar}
                />
                <Typography color={"primary"} component={"h1"}>
                  {recipe.dishName}
                </Typography>
              </Button>

              <Typography component={"summary"}>
                {recipe.recipe.prepTime + " MINUTES to Prep"}
              </Typography>
              <Typography component={"summary"}>
                {recipe.recipe.cookTime + " MINUTES to Cook"}
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <TimeLengthIconIndicator time={recipe.recipe.prepTime} />
              </div>
            </Card>
          );
        })}{" "}
      </Grid>
    </>
  );
}
