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
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

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
    </Router>
  );
}
export default App;
