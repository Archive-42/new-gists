import React, { Component } from "react";
import { render, Box, Color } from "ink";
import SelectInput from "ink-select-input";
import packageJson from "./package.json";
 
class Demo extends Component {
  render() {
    const items = Object.keys(packageJson.devDependencies).map(
      (commandName) => {
        return {
          label: commandName,
          value: commandName,
        };
      }
    );
    return (
      <>
        <Box width={4} height={2}>
          <Color greenBright>Welcome to npm run command selector!</Color>
        </Box>
        <SelectInput items={items} />
      </>
    );
  }
}
 
render(<Demo />);