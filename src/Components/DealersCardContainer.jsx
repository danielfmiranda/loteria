import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Css/DealersCardContainer.css";
import "../Css/GameContainer.css";

class DealersCardContainer extends Component {
  render() {
    return (
      <div className={"dealersCardContainer"}>
        <div className="non-semantic-protector">
          <div
            className={
              `imageContainer ` + ` ${this.props.currentCalledCard.className}`
            }
          >
            {" "}
          </div>

          <h1 className="ribbon">
            <strong className="ribbon-content">
              {this.props.currentCalledCard.name}
            </strong>
          </h1>
        </div>
      </div>
    );
  }
}

DealersCardContainer.propTypes = {};

export default DealersCardContainer;
