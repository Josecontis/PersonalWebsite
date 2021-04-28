import React from "react";

import TagsArea from "../../components/TagsArea";
import TextArea from "../../components/TextArea";
import {Text, Bar, BarList} from "./styles";

export default function About() {
  document.title = "Competenze | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <TagsArea />
      <BarList>
      <Bar skill="CSS" perc="20%" />
      </BarList>
      <TextArea title="Competenze" />
    </React.Fragment>
  );
}
