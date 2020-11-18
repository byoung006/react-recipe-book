import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export const NicelyFormattedList = ({ title, mappableData }) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <List dense={true} disablePadding={true}>
        {mappableData.map((value) => {
          return (
            <ListItem>
              <ListItemText inset={true} primary={value} />
            </ListItem>
          );
        })}{" "}
      </List>
    </>
  );
};
