import React from "react";
class CardStyles extends React.Component {
  constructor() {
    super(0);
    this.state = {
      color: "lightblue",
    };
    return <h1>apples are {this.state.color}</h1>;
  }
}
export default CardStyles;
