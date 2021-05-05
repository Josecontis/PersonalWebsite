import React from "react";

import TextArea from "../../components/TextArea/text_area.component";
import {BarList, BarContent, BarComponent} from "./skills.styles";

export default function Skills() {
  document.title = "Competenze | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <BarList>
        <BarComponent perc="100">
          <BarContent skill="JAVASCRIPT"  perc="100%"/>
        </BarComponent>
        <BarComponent perc="80">
          <BarContent skill="CSS" perc="80%" />
        </BarComponent>
        <BarComponent perc="100">
          <BarContent skill="PYTHON"  perc="100%"/>
        </BarComponent>
        <BarComponent perc="100">
          <BarContent skill="JAVA"  perc="100%"/>
        </BarComponent>
        <BarComponent perc="100">
          <BarContent skill="C"  perc="100%"/>
        </BarComponent>
        <BarComponent perc="80">
          <BarContent skill="C++"  perc="80%"/>
        </BarComponent>
        <BarComponent perc="50">
          <BarContent skill="XML"  perc="50%"/>
        </BarComponent>
      </BarList>
      <TextArea title="Competenze" />
    </React.Fragment>
  );
}
