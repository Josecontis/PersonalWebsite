import React from "react";


import HomePageDate from "../Date/date.component";
import { Container } from "./logo.styles";
import { ReactComponent as Logo } from "../../assets/pages-logo.svg";

export default function LogoArea() {
  return (
    <Container>
      <HomePageDate/>
      <Logo/>
    </Container>
  );
}
