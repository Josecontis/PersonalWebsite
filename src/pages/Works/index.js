import React from "react";

import TagsArea from "../../components/TagsArea";
import LogoArea from "../../components/LogoArea";
import TextArea from "../../components/TextArea";

export default function About() {
  document.title = "Progetti | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <LogoArea />
      <TagsArea />
      <TextArea title="Progetti" />
    </React.Fragment>
  );
}
