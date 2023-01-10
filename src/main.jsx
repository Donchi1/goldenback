import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./new-project/State/myStore";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import store from "./New-Project/State/appStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      currency: "USD",
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </PayPalScriptProvider>
);
