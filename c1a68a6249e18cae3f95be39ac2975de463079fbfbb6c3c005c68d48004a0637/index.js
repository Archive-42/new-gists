import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
 // Create a <Title> react component
const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: palevioletred;
`;
const container = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
	<container>
  	<Title>Title using style component</Title>
	</container>
  </React.StrictMode>,
  rootElement
);
