import React, {Component} from "react";
import './list.scss';
import IconCheck from './icon-check.js';

class ListSection extends Component {
  render() {
    return (
      <div className="list-box">
    <IconCheck/> <span> Unlimited websites</span>
    <IconCheck/> <span> 100% data ownership</span>
    <IconCheck/> <span> Email reports</span>
      <div>
        <button>Start my trial</button>
      </div>
    </div>
  );
  }
}

export default ListSection;
