import React, {Component} from "react";
import './list.scss';
import IconCheck from './icon-check.js';

class ListSection extends Component {
  render() {
    return (
      <div className="list-box">
      <div className="iconpack firstp"> <IconCheck/> <span> Unlimited websites</span></div>
      <div className="iconpack secp"> <IconCheck/> <span> 100% data ownership</span></div>
      <div className="iconpack thirtp"> <IconCheck/> <span> Email reports</span></div>
      <div>
        <button>Start my trial</button>
      </div>
    </div>
  );
  }
}

export default ListSection;
