import React from "react";

import { Root, Value } from "@radix-ui/react-select";

import { SelectContent, SelectItem, SelectTrigger } from "./base-select";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
  options,
  onValueChange,
  value,
  name,
  placeholder = "Please select",
  disabled = false,
}) => {
  return (
    <>
      <Root
        onValueChange={onValueChange}
        value={value}
        name={name}
        disabled={disabled}
      >
        <SelectTrigger className="" id={name}>
          <Value placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent id={name}>
          {options?.map(({ text, value }, i) => (
            <SelectItem value={value} key={i}>
              {text}
            </SelectItem>
          ))}
        </SelectContent>
      </Root>
    </>
  );
};
export default Select;
