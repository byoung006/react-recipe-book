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
      <Grid
        container
        spacing={8}
        style={{
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card style={{ alignContent: "center", alignItems: "center" }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {icon}
              </Avatar>
            }
            title={title}
            subheader={subheader}
          />

          {image && <CardMedia className={classes.media} />}

          <Grid
            container
            item
            sm={12}
            justify={"center"}
            // style={{
            //   alignContent: "center",
            //   alignItems: "center",
            //   textJustify: "auto",
            //   textAlign: "center",
            // }}
          >
            {/*<Card>*/}
            <Grid
              sm={12}
              item
              // style={{
              //   alignItems: "center",
              //   alignContent: "center",
              // }}
            >
              <Typography
                variant="h2"
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                {" "}
                ingredients:
              </Typography>
              <List
                dense={true}
                disablePadding={true}
                style={{
                  // alignContent: "center",
                  alignItems: "center",
                }}
              >
                {ingredientsArray.map((ingredient) => {
                  return (
                    <ListItem
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        // alignContent: "center",
                      }}
                    >
                      <ListItemText
                        inset={true}
                        primary={ingredient}
                        style={{
                          textAlign: "center",
                          alignContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </ListItem>
                  );
                })}{" "}
              </List>
            </Grid>
            <Grid
              sm={12}
              item
              spacing={12}
              style={{
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {/*</Card>*/}
              <Typography
                variant="h2"
                style={{
                  textTransform: "capitalize",
                  alignContent: "space-between",
                }}
              >
                instructions:
              </Typography>
              {/*<Card>*/}
              <List
                dense={true}
                disablePadding={false}
                style={{
                  alignItems: "center",
                }}
              >
                {instructionArray.map((instruction) => {
                  return (
                    <ListItem
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <ListItemText
                        primary={instruction}
                        style={{
                          textAlign: "center",
                          alignItems: "center",
                          // borderStyle: "solid",
                        }}
                      />
                    </ListItem>
                  );
                })}{" "}
              </List>
            </Grid>
            {/*</Card>*/}
          </Grid>
        </Card>
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
