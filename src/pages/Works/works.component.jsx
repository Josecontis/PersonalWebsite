import React from "react";

import LogoArea from "../../components/LogoArea/logo.component";
import TextArea from "../../components/TextArea/text_area.component";

export default function Works() {
  document.title = "Progetti | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <LogoArea />
      <TextArea title="Progetti" />
    </React.Fragment>
  );
}
