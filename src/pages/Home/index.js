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
      <TagsArea indent="1" top="0" tag="<html>"/>
      <TagsArea indent="3" top="8" tag="<body>"/>
      <TagsArea indent="5" top="25" tag="<h1>" home={true}/>
      <TagsArea indent="43" top="47" tag="</h1>" home={true}/>
      <TextArea
        home={true}
        pre={"Ciao,~Sono Giuseppe,~Web Developer!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea>
    </React.Fragment>
  );
}
