import React from "react"
 
const ComponentOne = ({ children }) => {
  return (
    <div>
      <h5>This is the component one</h5>;
     { children }
    </div>
  );
}
 
const ComponentTwo = ({ children }) => {
  return (
    <div>
      <h5>This is the component two</h5>;
     {children}
    </div>
  );
}
 
const ComponentThree = ({ children }) => {
  return (
    <div>
      <h5>This is the component three</h5>
        {children}
    </div>
  );
}
 
const ComponentUsingProps = ({ content }) => {
  return <h5>{content}</h5>
}
 
const App = () => {
  const content = "Which component is using the content?";
 return (
    <div className="App">
      <ComponentOne>
        <ComponentTwo>
          <ComponentThree>
            <ComponentUsingProps content={content}  />
          </ComponentThree>
        </ComponentTwo>
      </ComponentOne>
    </div>
  );
}
 
export default App