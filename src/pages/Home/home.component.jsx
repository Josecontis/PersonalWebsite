import React from "react";

import LogoArea from "../../components/LogoArea/logo.component";
import TextArea from "../../components/TextArea/text_area.component";
import HomePageDate from "../../components/Date/date.component";

export default function Home() {
  document.title = "Home | Giuseppe Conticchio";

  return (
    <React.Fragment>
      <LogoArea />
      <HomePageDate/>
      <TextArea
        home={true}
        pre={"Ciao,~Sono Giuseppe,~Web Developer!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea>
    </React.Fragment>
  );
}
