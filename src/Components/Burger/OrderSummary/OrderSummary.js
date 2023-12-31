import React from "react";
import Auxi from "../../../hoc/_Aux/Auxi";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxi>
      <h3>Your Order</h3>
      <p>A delicious with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout ?</p>
    </Auxi>
  );
};

export default orderSummary;
