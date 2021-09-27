import React, {Component} from "react";

import './list.scss';

class ListSection extends Component {
  render() {
    return (
      <div className="list-box">
    <span><img/>Unlimited websites</span>
    <span><img/>100% data ownership</span>
    <span><img/>Email reports</span>
      <div>
        <button>Start my trial</button>
      </div>
    </div>
  );
  }
}

export default ListSection;
