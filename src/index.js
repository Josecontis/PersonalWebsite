import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {bubbleCursor} from './bubble';
import{ init } from 'emailjs-com';

init("user_a25h2t1IePEbQPptKN2TZ");
new bubbleCursor();
ReactDOM.render(<App />, document.getElementById("Portfolio App"));
