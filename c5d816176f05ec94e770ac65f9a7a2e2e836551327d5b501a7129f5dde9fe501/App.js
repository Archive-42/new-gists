import React from "react"
 
const App = () => {
  return (
    <div className="App">
      <ComponentOne content="Which component is using the content?" />
    </div>
  );
}
 
const ComponentOne = ({ content }) => {
  return (
    <div>
      <h5>This is the component one</h5>;
      <ComponentTwo content={content} />|
    </div>
  );
}
 
const ComponentTwo = ({ content }) => {
  return (
    <div>
      <h5>This is the component two</h5>;
      <ComponentThree content={content} />
    </div>
  );
}
 
const ComponentThree = ({ content }) => {
  return (
    <div>
      <h5>This is the component three</h5>;
      <ComponentUsingProps content={content} />
    </div>
  );
}
 
const ComponentUsingProps = ({ content }) => {
  return <h5>{content}</h5>;
}
 
export default App
