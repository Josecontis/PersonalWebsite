import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {bubbleCursor} from './bubble';

new bubbleCursor({ element: document.querySelector("#bubbles") })
ReactDOM.render(<App />, document.getElementById("Portfolio App"));
