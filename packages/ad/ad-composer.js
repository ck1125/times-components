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
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    label: PropTypes.string,
    commercialtags: PropTypes.string,
    contentType: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    networkId: PropTypes.string.isRequired,
    adUnit: PropTypes.string.isRequired
  }).isRequired
};

export default AdComposer;
