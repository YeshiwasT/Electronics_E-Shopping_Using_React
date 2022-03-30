import React, { Component } from "react";
import "../styles/card.css";
import BackImage from "./BackImage";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const product = this.props.products;

    return (
      <div>
        <div
          style={{ opacity: this.props.opacity }}
          onClick={this.props.clickHandler}
          onMouseLeave={this.props.mousegoneHandler}
          onMouseOver={this.props.mouseoverHandler}
        >
          <BackImage onhover={this.props.text} products={product} />
        </div>
      </div>
    );
  }
}

export default Card;
