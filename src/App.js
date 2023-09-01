import React, { Component } from "react";
import Radium from "radium";
import Auxi from "../src/hoc/_Aux/Auxi";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return <Auxi>
      <BurgerBuilder/>
    </Auxi>;
  }
}

export default Radium(App);
