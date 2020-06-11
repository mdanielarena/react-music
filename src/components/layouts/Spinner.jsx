import React, { Component } from "react";
//import spinner from "../spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src="" alt="Loading" style={imgStyle} />
      </div>
    );
  }
}

const imgStyle = {
  width: "200px",
  margin: "40px auto",
  display: "block",
};

export default Spinner;
