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
    networkId: PropTypes.string.isRequired,
    adUnit: PropTypes.string.isRequired,
    pageTargeting: PropTypes.shape({})
  })
};

AdComposer.defaultProps = {
  adConfig: {
    networkId: "25436805",
    adUnit: "d.thetimes.co.uk",
    pageTargeting: {},
  }
};
export default AdComposer;
