import React, { useContext } from "react";
import { Statistic } from "semantic-ui-react";
import { TokenContext } from "../context/TokenContext";
 
export default function TokenDisplay() {
  const [token] = useContext(TokenContext);
 
  return (
	<Statistic>
  	<Statistic.Value>{token}</Statistic.Value>
	</Statistic>
  );
}