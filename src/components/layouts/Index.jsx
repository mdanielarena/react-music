import React, { Component, Fragment } from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Tracks />
      </Fragment>
    );
  }
}

export default Index;
