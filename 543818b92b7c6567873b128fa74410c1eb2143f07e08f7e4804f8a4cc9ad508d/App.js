import React from "react";
import "./styles.css";
const Hello = React.lazy(() => import("./Hello"));
 
 
export default function App() {
  return (
    <div className="App">
      <Hello val="hello globe" />
    </div>
  );
}
