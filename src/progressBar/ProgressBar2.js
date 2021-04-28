import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
    progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
   appearance: none;

  width: 500px;
  height: 20px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  marging:25px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;

}

progress[value]::-webkit-progress-value {
    border-radius: 20px;
    background-color: #1DA1F2;
  }
`;

function ProgressBar2({ value, max }) {
  return (
    <Container>
      <progress value={value} max={max} />
      <span style={{ fontSize: "24px", fontWeight: "bold" }}> {value} % </span>
    </Container>
  );
}

ProgressBar2.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string
};

export default ProgressBar2;
