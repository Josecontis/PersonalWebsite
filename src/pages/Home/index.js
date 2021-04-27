import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";
import HomePageDate from "../../components/Date";

export default function Home() {
  document.title = "Giuseppe Conticchio";

  return (
    <React.Fragment>
      <LogoArea />
      <HomePageDate/>
      <TagsArea indent="850" h1Position="47" pPosition="49" _pPosition="54" home={true} />
      <TextArea
        home={true}
        pre={"Ciao,~Sono Giuseppe,~Web Developer!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea>
    </React.Fragment>
  );
}
