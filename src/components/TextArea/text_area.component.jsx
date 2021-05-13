import React, { useState } from "react";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

import CustomButton from '../../components/Button/button.component';
import { Container, Span, Sub, Title, Paragraph } from "./text_area.styles";

export default function TextArea({ home, pre, title, subtitle, children }) {
  const [actived, setActived] = useState(false); //assegna false a activated tramite il metodo setactived

  return (
    <Container>
      <Typing
        cursor={<span>_</span>}
        speed={25}
        onFinishedTyping={() => setActived(true)}>
        {!home ? (
          <Title>{title}</Title> //in questo caso se non è la homepage stampa il titolo
        ) : (
          <React.Fragment>
            <Typing.Speed ms={70} />
            {pre.split("").map(char => {
              
              switch (char) {
                case "~":
                  return <br key={Math.random()}/>;
                case "":
                  return " ";
                case " ":
                  return " ";
                default:
                  return (
                    <Span key={Math.random()} >
                      {char}
                    </Span>
                  );
              }
            })}
            </React.Fragment>
            )}
      </Typing>
      {home && <Sub className={actived && "active"}>{subtitle}</Sub>}
      
      {home && (
        <Link to="contacts">
          <CustomButton className={actived && "active"} >CONTATTAMI</CustomButton>
        </Link>
      )}
      <Paragraph>{children}</Paragraph>
    </Container>
  );
}
