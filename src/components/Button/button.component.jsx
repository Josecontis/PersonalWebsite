import React from "react";
import { Button } from './button.styles';

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default CustomButton;