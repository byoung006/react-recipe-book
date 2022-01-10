import { Menu, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as React from "react";
import MenuIcon from "@material-ui/icons/Menu";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleRouter = React.useState({ route: "" });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem href={"/"} onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem href={"/dinner"} onClick={handleClose}>
          Dinner
        </MenuItem>
        <MenuItem href={"/lunch"} onClick={handleClose}>
          Lunch
        </MenuItem>
        <MenuItem href={"/breakfast"} onClick={handleClose}>
          Breakfast
        </MenuItem>
      </Menu>
    </div>
  );
}
