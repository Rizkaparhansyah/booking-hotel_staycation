import React, { Component } from "react";
import Header from "parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header {...this.props}></Header>
      </React.Fragment>
    );
  }
}
