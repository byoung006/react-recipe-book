import React from "react";
import "./App.css";
import { Categories, Recipes } from "./recipes";
import { AccessTime, Forward, Whatshot } from "@material-ui/icons";
import { Grid, Card, Typography, CardContent, List } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";

const DisplayIconFromTimeC = ({ time, overrideIcon = null }) => {
  if (overrideIcon) return overrideIcon;

  if (time >= 45) {
    return <AccessTime />;
  }
  if (time >= 20) {
    return <Forward />;
  }
  return "";
};
const DisplayIconFromTimeA = ({ cookTime, overrideIcon = null }) => {
  if (overrideIcon) return overrideIcon;

  if (cookTime >= 0) {
    return <Whatshot />;
  }

  return "";
};
const cardStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
    color: "red",
  },
});

function App() {
  const classes = cardStyles();
  const Home = () => {
    let { id } = useParams();
    return (
      <>
        {id}
        {id && (
          <>
            <Card className={classes.root}>
              <Link to={Recipes[id].id} replace={true}>
                <CardContent>
                  <List>{Recipes[id].dishName}</List>
                  <List>
                    {Recipes[id].recipe.ingredients.map((ingredient) => {
                      return <ListItem>{ingredient}</ListItem>;
                    })}{" "}
                  </List>
                  <Typography variant={"body1"}>
                    {Recipes[id].recipe.instructions.map((instruction) => {
                      return <ListItem>{instruction}</ListItem>;
                    })}{" "}
                  </Typography>
                </CardContent>
                <CardContent>
                  {Recipes[id].recipe.prepTime + " MINUTES"}
                  <DisplayIconFromTimeC time={Recipes[id].recipe.prepTime} />
                </CardContent>
              </Link>
            </Card>
          </>
        )}
        {!id && (
          <Grid
            spacing={4}
            container
            alignContent={"space-around"}
            alignItems={"space-around"}
            justify={"space-around"}
          >
            {Object.values(Recipes).map((recipe) => {
              return (
                <Grid item>
                  <Typography variant="h2">{recipe?.category[0]}</Typography>

                  <Link to={recipe.id}>
                    <Card>
                      <CardContent>{recipe.dishName}</CardContent>
                      <CardContent>
                        {recipe.recipe.prepTime + " MINUTES to Prep"}
                        <DisplayIconFromTimeC time={recipe.recipe.prepTime} />
                      </CardContent>
                      <CardContent>
                        {recipe.recipe.cookTime + " MINUTES to Cook"}
                        <DisplayIconFromTimeA
                          cookTime={recipe.recipe.cookTime}
                        />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        )}
      </>
    );
  };

  return (
    <Router>
      <Link to="/">Home</Link>

      <Switch>
        <Route
          path="/:id"
          children={
            <Grid
              spacing={5}
              alignContent={"center"}
              justify={"center"}
              container
              direction={"column"}
              alignItems={"center"}
            >
              {" "}
              <Home />
            </Grid>
          }
        />{" "}
        <Route
          path="/"
          children={
            <Grid
              spacing={5}
              alignContent={"center"}
              justify={"center"}
              container
              direction={"column"}
              alignItems={"center"}
            >
              {" "}
              <Home />
            </Grid>
          }
        />{" "}
      </Switch>
    </Router>
  );
}
export default App;
