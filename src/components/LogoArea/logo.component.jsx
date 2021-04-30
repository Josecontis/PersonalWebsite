import React from "react";

import { Container } from "./logo.styles";
import { ReactComponent as Logo } from "../../assets/pages-logo.svg";

export default function LogoArea() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}