import React,{useState} from "react";
import "./App.css";
import { Box, Button, List } from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";




function App(Buttons) {
const [breakfast,setBreakfast]=useState("eggs'n'things");
const [lunch,setLunch]=useState("Soup sandwiches and poor decisions");
const [dinner,setDinner]=useState("wine me and dine me");
const toggleVisible = () => {
  setVisible(!visible)
};

const [visible, setVisible]=useState(false)
  return (
    <div>
      <header>
        <List>
          <Button
            variant="contained"
            color="primary"
            href="https://osonegrocoffee.com/"
          >
            Snacks
          </Button>
        </List>
        <List>
          <Button
            variant="contained"
            color="primary"
            onMouseOver={()=>setBreakfast('eggies')}
            onMouseLeave={()=>setBreakfast("eggs'n'things")}
            
          >
            {breakfast}
          </Button>{" "}
        </List>
        <List>
          <Button
            variant="contained"
            colour="secondary"
            onClick={toggleVisible}
            
            title="soup, sandwiches, and poor company"

            
          >
            Toggle Dinner
          </Button>
        </List>




        {visible&&<List>
          <Button
            variant="contained"
            colour="secondary"
            href="https://www.sagetapasandwinebar.com/"




          >
            Dinner
          </Button>
        </List>}
        
      </header>
    </div>
  );
}

export default App;
