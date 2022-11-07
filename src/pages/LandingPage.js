import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked"
import Categories from "parts/Categories"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landingPage from "json/landingPage.json"
import Testimony from "parts/Testimony";
export default class LandingPage extends Component {

  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <div>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />

      <Testimony data={landingPage.testimonial}/>

      </div>
      );
  }
}
