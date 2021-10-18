import React, {Component} from "react";
import PriceTag from './components/price-tag/price-tag.js';
import ListSection from './components/list-section/list-section.js';
import BgPattern from './images/by-pattern.js';
import PatternCircles from './images/patter-circles.js';

import './App.scss';

class App extends Component() {
  render() {
    return (
      <div className="mainbox">
      <BgPattern/>
      <PatternCircles/>
      <h1>Simple, traffic-based pricing </h1>
      <span>Sign-up for our 30-day trial</span>
      <div className="insidebox">
      <PriceTag/>
      <ListSection/>
      </div>
    </div>
  );
  }
}
export default App;
