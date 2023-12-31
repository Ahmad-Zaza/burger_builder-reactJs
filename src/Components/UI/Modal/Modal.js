import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxi from "../../../hoc/_Aux/Auxi";
const modal = (props) => {
  return (
    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : 0,
        }}
      >
        {props.children}
      </div>
    </Auxi>
  );
};

export default modal;
