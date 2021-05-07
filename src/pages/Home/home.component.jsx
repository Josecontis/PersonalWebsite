import React from "react";

import LogoArea from "../../components/LogoArea/logo.component";
import TextArea from "../../components/TextArea/text_area.component";
import Copyrightbar from '../../components/CopyrightBar/copyright.component';

export default function Home() {
  document.title = "Home | Giuseppe Conticchio";

  return (
    <React.Fragment>
      <LogoArea/>
      <TextArea
        home={true}
        pre={"Ciao,~Sono Giuseppe,~Web Developer!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea>
      <Copyrightbar/>
    </React.Fragment>
  );
}
