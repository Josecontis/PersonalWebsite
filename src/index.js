import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./App";
import { bubbleCursor } from './bubble';
import { init } from 'emailjs-com';
import reducers from './redux/reducers/root.reducer';

init("user_a25h2t1IePEbQPptKN2TZ");
new bubbleCursor();
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.getElementById("Portfolio App"));
