import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import "../Css/GameContainer.css";

class loteriaCardPanel extends Component {
  render() {
    return (
      <Col
        className={`cell ` + `${this.props.cardImageName}`}
        cardName={`${this.props.cardName}`}
        xs={3}
      ></Col>
    );
  }
}

loteriaCardPanel.propTypes = {};

export default loteriaCardPanel;
