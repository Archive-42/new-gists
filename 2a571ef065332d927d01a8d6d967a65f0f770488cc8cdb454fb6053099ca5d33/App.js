import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

class LogTime {
  @observable timekeeper = 0;

  constructor() {
    setInterval(() => {
      this.timekeeper += 1;
    }, 1000);
  }

  @action.bound
  reset() {
    this.timekeeper = 0;
  }
}

const TimerViewer = observer(({ appState }) => (
  <label onClick={appState.reset}>Seconds passed: {appState.timekeeper}</label>
));

render(
  <div>
    <TimerViewer appState={new LogTime()} />
  </div>,
  document.getElementById("root")
);