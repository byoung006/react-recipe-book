import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

export const NicelyFormattedList = ({ title, mappableData }) => {
  return (
    <>
      <List dense={true} disablePadding={true} style={{ padding: 16 }}>
        <ListItem>
          <Typography variant="h2">{title}</Typography>
        </ListItem>
        {mappableData.map((value) => {
          return (
            <ListItem>
              <ListItemText primary={value} />
            </ListItem>
          );
        })}{" "}
      </List>
    </>
  );
};
