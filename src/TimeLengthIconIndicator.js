import { Icon } from "@material-ui/core";
import { AccessTime, Whatshot } from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";

export const TimeLengthIconIndicator = ({ time, overrideIcon = null }) => {
  if (overrideIcon) return overrideIcon;

  let title = "";
  let visibility = "hidden";
  let color = "black";

  let CustomIconComponent = Icon;
  if (time <= 20) {
    title = "This recipe takes no time at all! Wow - what a rush.";
    CustomIconComponent = Whatshot;
    visibility = "visible";
    color = "red";
  }
  if (time >= 45) {
    title =
      "This recipe takes may take some time to complete. Consider planning ahead.";
    CustomIconComponent = AccessTime;
    visibility = "visible";
    color = "blue";
  }
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "gray",
      color: "black",
      padding: 20,
      border: "1px solid black",
      boxShadow: theme.shadows[1],
      fontSize: 16,
    },
  }))(Tooltip);
  return (
    <LightTooltip
      title={title}
      placement={"top-end"}
      aria-label="add"
      children={
        <CustomIconComponent
          style={{ visibility: visibility, fontSize: 50, color: color }}
        />
      }
    />
  );
};
