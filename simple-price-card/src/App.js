import React, {Component} from "react";
import PriceTag from './components/price-tag/price-tag.js';
import ListSection from './components/list-section/list-section.js';
import './App.scss';

class App extends Component() {
  render() {
    return (
      <div>
      <PriceTag/>
      <ListSection/>
    </div>
  );
  }
}
export default App;
