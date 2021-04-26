import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

import { Container, Label, Input, Text } from "./styles";

export default function About() {
  document.title = "Conttati | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea />
      <TextArea title="Contatti">
        <Container>
          <Label htmlFor="name" hidden>
            Nome
          </Label>
          <Input placeholder="Nome" type="text" name="name" id="name" />

          <Label htmlFor="email" hidden>
            Email
          </Label>
          <Input placeholder="Email" type="text" name="email" id="email" />

          <Label htmlFor="subject" hidden>
            Oggetto
          </Label>
          <Input
            placeholder="Oggetto"
            width="96%"
            type="text"
            name="subject"
            id="subject"
          />

          <Label htmlFor="message" hidden>
            Messaggio
          </Label>
          <Text
            placeholder="Messaggio"
            name="message"
            id="message"
            cols="30"
            rows="15"
          ></Text>
        </Container>
      </TextArea>
    </React.Fragment>
  );
}
