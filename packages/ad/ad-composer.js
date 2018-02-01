import React, { Component } from "react";
import PropTypes from "prop-types";
import { Broadcast } from "react-broadcast";

class AdComposer extends Component {

  render() {
    return (
      <Broadcast channel="adConfig" value={this.props.adConfig}>
        {this.props.children}
      </Broadcast>
    );
  }
}

AdComposer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  adConfig: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    commercialtags: PropTypes.string,
    contentType: PropTypes.string,
    section: PropTypes.string,
    networkId: PropTypes.string,
    adUnit: PropTypes.string,
    section: PropTypes.string.isRequired,
  })
};

AdComposer.defaultProps = {
  adConfig: {
    id: "null",
    title: "null",
    label: "null",
    networkId: "25436805",
    adUnit: "d.thetimes.co.uk",
    commercialtags: "null",
    contentType: "null",
    section: "null"
  }
};

export default AdComposer;
