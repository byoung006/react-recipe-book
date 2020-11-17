import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Recipes } from "./recipes";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { colors, Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: 400, maxHeight: null },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({
  title,
  subheader,
  icon,
  instructionArray,
  ingredientsArray,
  image = null,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {" "}
      <Card>
        <Grid
          container
          spacing={8}
          alignItems={"flex-start"}
          alignContent={"flex-start"}
          justify={"flex-start"}
        >
          {/* the title is wrapped in a grid item with sm 12 to enforce it's the only thing on it's row*/}
          <Grid sm={12} item>
            <Avatar aria-label="recipe" className={classes.avatar}>
              Bryce
            </Avatar>
            <h1>{title}</h1>
            <h3> {subheader}</h3>
            {image && <CardMedia className={classes.media} />}
          </Grid>

          <Grid sm={12} md={6} lg={4} item>
            <Typography variant="h2">ingredients:</Typography>
            <List dense={true} disablePadding={true}>
              {ingredientsArray.map((ingredient) => {
                return (
                  <ListItem>
                    <ListItemText inset={true} primary={ingredient} />
                  </ListItem>
                );
              })}{" "}
            </List>
          </Grid>
          <Grid sm={12} md={6} lg={4} item>
            {/*</Card>*/}
            <Typography variant="h2">instructions:</Typography>
            {/*<Card>*/}
            <List dense={true} disablePadding={false}>
              {instructionArray.map((instruction) => {
                return (
                  <ListItem>
                    <ListItemText primary={instruction} />
                  </ListItem>
                );
              })}{" "}
            </List>
          </Grid>
          {/*</Card>*/}
        </Grid>
      </Card>
      {/*<CardActions disableSpacing>*/}
      {/*  <IconButton aria-label="add to favorites">*/}
      {/*    <FavoriteIcon />*/}
      {/*  </IconButton>*/}
      {/*  <IconButton aria-label="share">*/}
      {/*    <ShareIcon />*/}
      {/*  </IconButton>*/}
      {/*  <IconButton*/}
      {/*    className={clsx(classes.expand, {*/}
      {/*      [classes.expandOpen]: expanded,*/}
      {/*    })}*/}
      {/*    onClick={handleExpandClick}*/}
      {/*    aria-expanded={expanded}*/}
      {/*    aria-label="show more"*/}
      {/*  >*/}
      {/*    <ExpandMoreIcon />*/}
      {/*  </IconButton>*/}
      {/*</CardActions>*/}
    </>
  );
}
