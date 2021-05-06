import React from "react";
import { buyCakes } from "./cakeindex";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h2> No of Cakes - {props.noOfCakes} </h2>
      <button onClick={props.buyCakes}> Buy Cake </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCakes: () => dispatch(buyCakes())
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
