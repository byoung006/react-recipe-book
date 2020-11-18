import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import { NicelyFormattedList } from "./NicelyFormattedList";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 150,
    height: 150,
  },
}));

export default function RecipeReviewCard({
  id,
  title,
  subheader,
  instructionArray,
  ingredientsArray,
}) {
  const classes = useStyles();

  return (
    <>
      {" "}
      <Card>
        <Grid
          container
          spacing={1}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          justify={"flex-start"}
        >
          <Grid sm={12} item>
            <Avatar
              aria-label="recipe"
              src={`${id}.jpeg`}
              className={classes.avatar}
            />
            <h1>{title}</h1>
            <h3> {subheader}</h3>
          </Grid>

          <Grid sm={12} md={6} lg={4} item>
            <NicelyFormattedList
              title={"Ingredients"}
              mappableData={ingredientsArray}
            />
          </Grid>
          <Grid sm={12} md={6} lg={4} item>
            <NicelyFormattedList
              title={"Instructions"}
              mappableData={instructionArray}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
