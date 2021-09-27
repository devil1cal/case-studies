import React, { Component } from "react";
import styled from "styled-components";
//components
import ProgressBar from "./smart.js";

//style



//JS style
const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ProgressBarContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

class SmartBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 20
    };
  }

  render() {
    return (
      <div className="red">
        <AppWrapper className="wrapper-box">
          <span> Smart Progress </span>
          <ProgressBarContainer>
            <ProgressBar
              className="progress-bar"
              percentage={this.state.percentage}
            />
            <span>{this.state.percentage}%</span>
            <div className="button-styles">
              <button
                className="achieved"
                onClick={() =>
                  this.setState({ percentage: this.state.percentage - 20 })
                }
              >
                Achieved
              </button>
              <button
                className="active"
                onClick={() =>
                  this.setState({ percentage: this.state.percentage + 20 })
                }
              >
                Active
              </button>
            </div>
          </ProgressBarContainer>
        </AppWrapper>
        <div className="progressbar"></div>
        <div>

        </div>
      </div>
    );
  }
}
export default SmartBox;
