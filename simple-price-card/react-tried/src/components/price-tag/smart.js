//components
import React, { Component } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import "./smartbox.scss";
//style


const Track = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
`;

const Thump = styled.div`
  width: ${(props) => props.percentage}%;
  height: 16px;
  padding-top: 15px;
  background-color: #d59c08;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

class ProgressBar extends Component {
  clamp = (min, value, max) => {
    //console.log(Math.min(Math.max(min, value), max));
    return Math.min(Math.max(min, value), max);
  };

  render() {
    return (
      <div className="mainbox">
        <Track>
          <Thump percentage={this.clamp(0, this.props.percentage, 100)} />
        </Track>
      </div>
    );
  }
}
export default ProgressBar;

ProgressBar.propTypes = {
  percentage: propTypes.number
};
