import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function Home() {
  document.title = "Giuseppe Conticchio";

  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea indent="15" top="0" tag="<html>"/>
      <TagsArea indent="30" top="8" tag="<body>"/>
      <TagsArea indent="45" top="25" tag="<h1>" home={true}/>
      <TextArea
        home={true}
        pre={"Ciao,~Sono Giuseppe,~Web Developer!"}
        title={"Hi,~I'm Giuseppe,~Web Developer!"}
        subtitle={"Back-End(NodeJS) / Front-End(ReactJS) / Mobile(ReactNative)"}
      ></TextArea><TagsArea indent="45" top="50" tag="</h1>" home={true}/>
    </React.Fragment>
  );
}
