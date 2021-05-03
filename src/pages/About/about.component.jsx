import React from "react";

import TextArea from "../../components/TextArea/text_area.component";
import {Text} from "./about.styles";

export default function About() {
  document.title = "Bio | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <TextArea title="Biografia"><br/>
        <Text>
          some txt    <br/><br/>
       
          s.<br/><br/>
          </Text>
      </TextArea>
    </React.Fragment>
  );
}
