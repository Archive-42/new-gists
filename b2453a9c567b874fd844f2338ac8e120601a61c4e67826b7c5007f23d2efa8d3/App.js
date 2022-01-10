import React, { Suspense } from "react";
import "./styles.css";
import Wait from "./wait";
const Hello = React.lazy(() => import("./Hello"));
 
export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Wait />}>
        <Hello val="Load using Suspense" />
      </Suspense>
    </div>
  );
}
