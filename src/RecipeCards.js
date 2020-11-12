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
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
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
  instrunctionArray,
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
      <Grid container spacing={4}>
        <Grid item sm={12}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {icon}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={subheader}
            />

            {image && (
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
            )}
          </Card>
        </Grid>

        <Grid item sm={4}>
          <Typography variant="h2" style={{ textTransform: "capitalize" }}>
            ingredients
          </Typography>
          <Card>
            <List dense={true} disablePadding={true}>
              {ingredientsArray.map((ingredient) => {
                return (
                  <ListItem>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                );
              })}{" "}
            </List>
          </Card>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="h2" style={{ textTransform: "capitalize" }}>
            instructions
          </Typography>
          <Card>
            <List dense={true} disablePadding={true}>
              {instrunctionArray.map((instruction) => {
                return (
                  <ListItem>
                    <ListItemText primary={instruction} />
                  </ListItem>
                );
              })}{" "}
            </List>
          </Card>
        </Grid>
      </Grid>

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
