import React, { Component } from "react";
import "./styles.css";
import { Slide } from "react-awesome-reveal";
class ReactAwesomeReveal extends Component {
  render() {
    return (
      <Slide triggerOnce>
        <ul className={`box box-${status}`}>
          <li> Slide </li>
          <li> Cascade </li>
          <li> Damping </li>
          <li> Direction </li>
          <li> Delay </li>
        </ul>
      </Slide>
    );
  }
}
 
export default ReactAwesomeReveal;
