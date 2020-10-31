import React from "react";
import "./App.css";
import { recipes } from "./recipes";
import {AccessTime, Forward } from "@material-ui/icons";

import {
  Button,
  Grid,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
function App(Buttons) {
  return (
    <div>
      <header>
        <Grid
          spacing={10}
          alignContent={"center"}
          justify={"center"}
          container
          direction={"column"}
          alignItems={"center"}
        >
          {recipes.map((recipe) => {
            return (
              <Grid item>
                <Typography variant="contained" colour="primary">
                  {recipe.category}
                </Typography>

                {recipe.list.map((listItem) => {
                  return (
                    <Button>
                      <Card>
                        <CardContent>{listItem.dishName}</CardContent>
                        <CardContent>{listItem.prepTime}</CardContent>

                        <CardContent>
                          {listItem.onTheGo && <Forward></Forward>}
                          {listItem.takesMoreThan45 && (
                            <AccessTime/>
                          )}
                        </CardContent>
                      </Card>
                    </Button>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
      </header>
    </div>
  );
}

export default App;
