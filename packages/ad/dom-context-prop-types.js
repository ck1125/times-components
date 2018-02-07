import PropTypes from "prop-types";

const script = PropTypes.shape({
  uri: PropTypes.string,
  timeout: PropTypes.number,
  canRequestFail: PropTypes.bool
});

export const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  scriptUris: PropTypes.arrayOf(PropTypes.string),
  preScriptUris: PropTypes.arrayOf(PropTypes.string),
  globalNames: PropTypes.arrayOf(PropTypes.string),
  init: PropTypes.func.isRequired,
  onRenderComplete: PropTypes.func,
  data: PropTypes.shape({})
};

export const defaultProps = {
  scriptUris: [],
  preScriptUris: [],
  globalNames: [],
  data: {},
  onRenderComplete: () => {}
};
