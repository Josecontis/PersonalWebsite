import React from "react";

import { Container as Tags } from "./styles";

export default function TagsArea({ indent, h1Position, pPosition, _pPosition, home }) {
  return (
    <React.Fragment>
      <Tags indent="0" top="auto" >
        {"<html>"}
      </Tags>
      <Tags indent="15" top="6" >
        {"<body>"}
      </Tags>
      <Tags indent="30" top="25">
        {"<h1>"}
      </Tags>
      <Tags indent={indent || "30"} top={h1Position || "32"} bottom="auto" home={home}>
        {"</h1>"}
      </Tags>
      <Tags indent="30" top={pPosition || "34"} bottom="auto" home={home}>
        {"<p>"}
      </Tags>
      <Tags indent="30" top={_pPosition || "82"} bottom="auto" home={home}>
        {"</p>"}
      </Tags>
      <Tags indent="15" top="auto" bottom="6">
        {"</body>"}
      </Tags>
      <Tags indent="0" top="auto" bottom="0">
        {"</html>"}
      </Tags>
    </React.Fragment>
  );
}