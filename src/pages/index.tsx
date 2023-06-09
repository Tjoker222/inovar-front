import React from "react";
import ReactDOM from "react-dom/client";
import App from "./_app";
import "../styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
