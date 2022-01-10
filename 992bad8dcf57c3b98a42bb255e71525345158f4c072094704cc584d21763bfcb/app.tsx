import React, { Component } from 'react';  
 import logo from './logo.svg';  
 import './App.css';  
 import SmartButton, {IButton} from './react/smart.button'  
 class App extends Component {  
  render() {  
   return (  
    <div className="App">  
           <SmartButton>Click Me</SmartButton>  
    </div>  
   );  
  }  
 }  
 export default App;  