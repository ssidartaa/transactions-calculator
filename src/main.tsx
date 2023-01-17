import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "./styles/global";

import ValueProvider from "./contexts/TransactionValueContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ValueProvider>
      <Global />
      <App />
    </ValueProvider>
  </React.StrictMode>
);
