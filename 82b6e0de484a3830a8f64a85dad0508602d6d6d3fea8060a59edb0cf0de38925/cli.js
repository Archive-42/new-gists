import React, { Component } from "react";
import { render, Box, Text } from "ink";
import NiceBox from "ink-box";
const Borders = () => (
  <Box flexDirection="column">
    <NiceBox borderStyle="single" borderColor="red">
      <Text>single</Text>
    </NiceBox>
    <NiceBox borderStyle="double" borderColor="red">
      <Text>double</Text>
    </NiceBox>
    <NiceBox borderStyle="round" borderColor="red">
      <Text>round</Text>
    </NiceBox>
    <NiceBox borderStyle="bold" borderColor="red">
      <Text>bold</Text>
    </NiceBox>
    <NiceBox borderStyle="singleDouble" borderColor="red">
      <Text>singleDouble</Text>
    </NiceBox>
 
    <NiceBox borderStyle="doubleSingle" borderColor="red">
      <Text>doubleSingle</Text>
    </NiceBox>
 
    <NiceBox borderStyle="classic" borderColor="red">
      <Text>classic</Text>
    </NiceBox>
  </Box>
);
render(<Borders />);