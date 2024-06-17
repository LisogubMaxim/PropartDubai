import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import i18n from "./i18n.js";
import App from "./App.jsx";
import { store } from "./store/store.js";
import "./styles/default.scss";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
