import React from "react";

import { Tags } from "./styles";

export default function TagsArea({ indent, tag, top, home }) {
  return (
    <React.Fragment>
      <Tags indent={indent} top={top} bottom ="auto" home={home}>
        {tag}
      </Tags>
    </React.Fragment>
  );
}
