import React, { Component } from "react";
import emailjs from 'emailjs-com';

import LogoArea from "../../components/LogoArea/logo.component";
import TextArea from "../../components/TextArea/text_area.component";


import CustomButton from '../../components/Button/button.component';
import { Container, Input, Text } from "./contacts.styles";
import CustomAlert from '../../components/Alert/alert.component';

document.title = "Contatti | Giuseppe Conticchio";

class Contacts extends Component {
  constructor() { //costruttore di App
    super(); //costruttore di component

    //identifica lo stato del vettore che cambia a causa di aggiornamenti
    this.state =
    {
      emailFlag: false, // modifico contenuto variabile di istanza state
      nameFlag: false,
      txtFlag: false,
      testFlag: 0,
    };
  }


  sendEmail(e) {
    e.preventDefault();

    let templateParams = {
      from_name: document.getElementById("name").value,
      subject: document.getElementById("subject").value,
      to_name: 'peppeco98@gmail.com',
      message_html: document.getElementById("message").value,
      from_email: document.getElementById("email").value,
      reply_to: "filipmonta@libero.it",
    }

    console.log('tmpl', this.state.testFlag);
    emailjs.send('service_dx9tuej', 'template_03o7ni1', templateParams, 'user_a25h2t1IePEbQPptKN2TZ')
    templateParams ? this.setState({ testFlag: 1 }) : this.setState({ testFlag: -1 });
  };


  render() {

    const emailConstraints = content => {
      if (content.target.value === '')
        this.setState({ emailFlag: false }) //setta dinamicamente l'attivazione del bottone
      else
        this.setState({ emailFlag: true })
    }
    const nameConstraints = content => {
      if (content.target.value === '')
        this.setState({ nameFlag: false }) //setta dinamicamente l'attivazione del bottone
      else
        this.setState({ nameFlag: true })
    }
    const txtConstraints = content => {
      if (content.target.value === '')
        this.setState({ txtFlag: false }) //setta dinamicamente l'attivazione del bottone
      else
        this.setState({ txtFlag: true })
    }

    const checkTest = content => {
      if (content.target.value === 1)
        this.render(<CustomAlert Success={true} />)
      else {
        if (content.target.value === -1)
          this.render(<CustomAlert Success={false} />)
      }
    }

    return (
      <React.Fragment>
        <LogoArea />
        <TextArea title="Contatti">
          <Container onSubmit={this.sendEmail}>
            <Input placeholder="Nome" type="text" name="name" id="name" onChange={nameConstraints} />
            <Input placeholder="Email" type="text" name="email" id="email" onChange={emailConstraints} />
            <Input
              placeholder="Oggetto"
              width="29vw"
              type="text"
              name="subject"
              id="subject"
            />
            <Text
              placeholder="Messaggio"
              name="message"
              id="message"
              width="29vw"
              rows="15"
              onChange={txtConstraints}
            ></Text>
            <CustomButton className={this.state.txtFlag && this.state.nameFlag && this.state.emailFlag && "active"}
              isContact onClick={checkTest}>INVIA E-MAIL</CustomButton>
          </Container>
        </TextArea>
      </React.Fragment>
    );
  }
}
export default Contacts;