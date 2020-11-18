import React from "react";
import "./App.css";
import { Grid, Icon } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";

function BasicLayoutRoute({ Component, path }) {
  return (
    <Route
      path={path}
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
          <Link to="/">Home</Link>
          {/*The child component to display within the basic layout.*/}
          {Component}
        </Grid>
      }
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <BasicLayoutRoute path={"/:id"} Component={<Home />} />
        <BasicLayoutRoute path={"/"} Component={<Home />} />
      </Switch>
    </Router>
  );
}
export default App;
