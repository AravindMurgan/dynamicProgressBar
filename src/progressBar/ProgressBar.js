import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
   progress[value] {
    width: ${(props) => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background-color: #eee;
  }  

  progress[value]::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
  }

`;

function ProgressBar({ color, width, value, max }) {
  return (
    <Container color={color} width={width}>
      <h1>React ProgressBar</h1>
      <progress value={value} max={max} />
      <br />
      <br />
      <span></span>
    </Container>
  );
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.number.isRequired,
  max: PropTypes.number
};

export default ProgressBar;
