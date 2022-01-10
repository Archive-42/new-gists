import React, { Component } from "react";
import "./styles.css";
import { Fade, Bounce } from "react-awesome-reveal";
 
class ChainEffect extends Component {
  render() {
    return (
      <Fade>
        <p>Hello I will just Fade</p>
        <Bounce>
          <p> I will Fade and Bounce</p>
        </Bounce>
      </Fade>
    );
  }
}
export default ChainEffect;
