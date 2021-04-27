import React, { useState } from "react";
import Typing from "react-typing-animation";
import { Link } from "react-router-dom";

import { Container, Span, Sub, Button, Title, Paragraph } from "./styles";

export default function TextArea({ home, pre, title, subtitle, children }) {
  const [actived, setActived] = useState(false);

  return (
    <Container>
      <Typing
        cursorClassName="custom"
        cursor={<span>_</span>}
        speed={150}
        onFinishedTyping={() => setActived(true)}>
        {!home ? (
          <Title>{title}</Title> //in questo caso se non è la homepage stampa il titolo
        ) : (
          <React.Fragment>
            <Typing.Speed ms={70} />
            {pre.split("").map(char => {
              
              switch (char) {
                case "~":
                  return <br key={Math.random()} />;
                
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
        <Link to="contact">
          <Button className={actived && "active"}>CONTATTAMI</Button>
        </Link>
      )}
      <Paragraph>{children}</Paragraph>
    </Container>
  );
}
