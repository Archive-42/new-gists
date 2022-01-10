import React from "react";
import "./styles.css";
import TokenView from "./views/TokenView";
import { Container } from "semantic-ui-react";
 
export default function App() {
  return (
	<div>
  	<Container>
    	<TokenView />
  	</Container>
	</div>
  );
}