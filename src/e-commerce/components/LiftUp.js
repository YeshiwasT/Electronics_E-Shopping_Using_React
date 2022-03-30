import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
class LiftUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      data: [1, 2, 3],
      opacity: 1,
      text: "",
      recoginaize: false,
      isClicked: false,
    };

    this.mouseoverHandler = this.mouseoverHandler.bind(this);
    this.mousegoneHandler = this.mousegoneHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  mouseoverHandler() {
    this.setState({ opacity: 0.3, text: "click to add to cart" });
  }
  mousegoneHandler() {
    this.setState({ opacity: 1, text: "" });
  }
  handleClose = () => {
    this.setState({ recoginaize: false });
  };
  clickHandler = () => {
    const element = this.props.products;

    this.props.countHandler(1);
    this.props.value(1);
    this.props.product(element);
    const data = this.state.data;
    const size = data.length + 1;
    data.push(size);

    this.setState({ data });

    this.setState({
      isClicked: true,
    });
    console.log(this.state.row);

    element.isSelected = true;
  };
  render() {
    const element = this.props.products;
    const selected = element.isSelected ? element : null;
    return (
      <>
        <Link
          to={{
            pathname: "/itemDetails",
            state: { element: element },
          }}
        >
          <Card
            recoginaize={this.state.recoginaize}
            products={element}
            text={this.state.text}
            opacity={this.state.opacity}
            clickHandler={this.clickHandler}
            mousegoneHandler={this.mousegoneHandler}
            mouseoverHandler={this.mouseoverHandler}
          />
        </Link>

        {/* <Dialog
        open={this.state.recoginaize}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">"Use Google's location service?"n</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={this.handleClose} color="primary">
            Disagree
          </button>
          <button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </button>
        </DialogActions>
      </Dialog> */}
      </>
    );
  }
}

export default LiftUp;
