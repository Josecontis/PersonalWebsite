import React, { useState } from "react";
import emailjs from 'emailjs-com';

import LogoArea from "../../components/LogoArea/logo.component";
import TextArea from "../../components/TextArea/text_area.component";


import CustomButton from '../../components/Button/button.component';
import { Container, Label, Input, Text } from "./contacts.styles";

export default function Contacts() {
  document.title = "Conttati | Giuseppe Conticchio";
  const [actived, setActived] = useState(false); //assegna false a activated tramite il metodo setactived

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_dx9tuej', 'template_03o7ni1', e.target, 'user_a25h2t1IePEbQPptKN2TZ')
      .then(e.target ? alert('Email inviata correttamente') : alert('Errore nell\'invio della mail'));
  }
  const displayButton = () => {
    setActived(true) //setta dinamicamente qualsiasi sia il name il valore inserito dall'utente corrispondente
}

  return (
    <React.Fragment>
      <LogoArea />
      <TextArea title="Contatti">
        <Container onSubmit={sendEmail}>
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
            onChange={displayButton}
          ></Text>
          <CustomButton className={actived && "active"} isContact>INVIA E-MAIL</CustomButton>
        </Container>
      </TextArea>
    </React.Fragment>
  );
}
