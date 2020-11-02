import React from "react";
import "./App.css";
import { recipes } from "./recipes";
import { AccessTime, Forward, AccountTree } from "@material-ui/icons";

import { Button, Grid, Card, Typography, CardContent } from "@material-ui/core";

const DisplayIconFromTimeC = ({ time, overideIcon=null }) => {

  if(overideIcon)
    return overideIcon;


  if (time >= 45) {
    return <AccessTime />;
  }
  if (time >= 20) {
    return <Forward />;
  }
  return "";
};

function App(Buttons) {
  const elephant = "wow";

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
                        <CardContent>
                          {listItem.prepTime + " MINUTES"}
                        </CardContent>

                        <CardContent>
                          <DisplayIconFromTimeC
                            time={listItem.prepTime}
                            // overideIcon={<AccountTree/>}
                            a={"a"}
                            c={"asdasd"}
                            b={"asdasd"}
                            d={"asdas"}
                          />
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
