import React, {Component} from "react";

import SmartBox from './inter.js';
import './price-tag.scss';

class PriceTag extends Component {
  render() {
    return (
      <div className="price-box">
      <span className="pageview">100k pageviewws</span>
      <div>
        <SmartBox/>
      </div>
      <span className="price-tag"></span>
      <div className="toggle">
        <span>Monthly Billing</span>
        <button></button>
        <span>Yearly Billing 25%</span>
        </div>
      </div>
      );
}
}

export default PriceTag;
