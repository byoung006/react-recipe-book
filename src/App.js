import React from "react";
import "./App.css";
import {Categories, Recipes} from "./recipes";
import { AccessTime, Forward, AccountTree } from "@material-ui/icons";

import { Button, Grid, Card, Typography, CardContent } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";
import {recipes} from "./Categories";

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


  const Home=()=>
  {
    let { id } = useParams();
    return (
      <>
        {id && (
          <>
            <Link to={Recipes[id].id}>
              <Card>
                <CardContent>{Recipes[id].dishName}</CardContent>
                <CardContent>
                  {Recipes[id].recipe.prepTime + " MINUTES"}
                </CardContent>

                <CardContent>
                  <DisplayIconFromTimeC
                    time={Recipes[id].recipe.prepTime}
                    // overideIcon={<AccountTree/>}
                    a={"a"}
                    c={"asdasd"}
                    b={"asdasd"}
                    d={"asdas"}
                  />
                </CardContent>
              </Card>
            </Link>
          </>
        )}
        {!id &&
          Categories.map((recipe) => {
            return (
              <Grid item>
                <Typography variant="contained" colour="primary">
                  {recipe.category}
                </Typography>

                {recipe.recipes.map((listItem) => {
                  return (
                    <Link to={listItem.id}>
                      <Card>
                        <CardContent>{listItem.dishName}</CardContent>
                        <CardContent>
                          {listItem.recipe.prepTime + " MINUTES"}
                        </CardContent>

                        <CardContent>
                          <DisplayIconFromTimeC
                            time={listItem.recipe.prepTime}
                            // overideIcon={<AccountTree/>}
                            a={"a"}
                            c={"asdasd"}
                            b={"asdasd"}
                            d={"asdas"}
                          />
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </Grid>
            );
          })}
      </>
    );
  }

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>


      <header>
        <Grid
            spacing={10}
            alignContent={"center"}
            justify={"center"}
            container
            direction={"column"}
            alignItems={"center"}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id" children={<Home/>}>
              {/*<About />*/}
            </Route>
            <Route path="/dashboard">
              {/*<Dashboard />*/}
            </Route>
          </Switch>
        </Grid>
      </header>
    </Router>
  );
}

export default App;
