import React from "react";
import {Container, Checkbox, Slider} from './themebutton.styles';
import { ReactComponent as SunIcon } from "../../assets/switchImg/sun.svg";

import { ReactComponent as MoonIcon } from "../../assets/switchImg/moon.svg";

export default function SwitchButton() {
  return (
    <Container>
      <Checkbox />
        <Slider>
          <SunIcon/>
          <MoonIcon/>
        </Slider>
    </Container>
  );
}