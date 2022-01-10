import React from "react";
import "./styles.css";
import { UIThemeStore } from "./UIStore";

export default function App() {
  const isRedTheme = UIThemeStore.useState(s => s.isRedTheme);

  return (
    <div
      style={{
        background: isRedTheme ? "red" : "yellow",
        color: isRedTheme ? "yellow" : "red"
      }}
    >
      <h1>Toggle Modes using Pull State</h1>
      <button
        onClick={() =>
          UIThemeStore.update(s => {
            s.isRedTheme = !isRedTheme;
          })
        }
      >
        Toggle Red theme
      </button>
    </div>
  );
}