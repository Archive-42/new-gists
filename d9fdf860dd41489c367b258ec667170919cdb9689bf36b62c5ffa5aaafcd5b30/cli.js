import React from "react";
import { render, Box, Color } from "ink";
import SelectInput from "ink-select-input";
 
const Demo = () => {
  const handleSelect = (item) => {};
 
  const items = [
    {
      label: "First",
      value: "value",
    },
    {
      label: "Second",
      value: "second",
    },
    {
      label: "Third",
      value: "third",
    },
  ];
  return (
    <>
      <Box width={4} height={2}>
        <Color greenBright>npm run command selector!</Color>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </>
  );
};
 
render(<Demo />);