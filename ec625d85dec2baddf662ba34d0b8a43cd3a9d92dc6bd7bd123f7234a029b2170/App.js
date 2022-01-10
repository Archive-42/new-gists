import React from "react";
import "./styles.css";
import { fetchData } from "./Api";
 
const resource = fetchData();
 
function About() {
  const about = resource.about.read();
  return <h2>{about}</h2>;
}
 
function Address() {
  const address = resource.address.read();
  return <h2> {address} </h2>;
}
 
export default function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <About />
      <Address />
    </div>
  );
}
