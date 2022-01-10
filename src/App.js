import React from "react";
import "./App.css";
import { colors, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dropdown from "./Dropdown";
import DinnerMenu from "./DinnerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function BasicLayoutRoute({ Component, path }) {
  const classes = useStyles();
  // or remove the className={yadayada}
  // important classes just like they did in material example,//thanks mang
  return (
    <Route
      path={path}
      children={
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <IconButton component={Link} to={"/"}>
                      <HomeIcon style={{ fontSize: 50 }} />
                    </IconButton>
                  </IconButton>

                  <Typography variant="h6" className={classes.title}>
                    Snacking
                  </Typography>
                  <IconButton edge="end" color="inherit" aria-label="menu">
                    <Dropdown />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Grid>
            {Component}
          </Grid>
        </Container>
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
      <Switch>
        <BasicLayoutRoute path={"/dinner"} Component={<DinnerMenu />} />
      </Switch>
    </Router>
  );
}
export default App;
