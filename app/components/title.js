import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  return <h1>{props.title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
