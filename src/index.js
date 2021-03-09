import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import App from "./app";

import "./index.css";
import { Provider } from "./context/context";
ReactDOM.render(
  <SpeechProvider appId="5d0ecaad-2707-46bf-979d-978fa8a6885d" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
