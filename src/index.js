import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./store/Context";
import { FireBaseContext } from "./store/Context";
import reportWebVitals from "./reportWebVitals";
import {auth,firestore} from "./FireBase/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={{ auth,firestore }}>
      <Context>
        <App />
      </Context>
    </FireBaseContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
