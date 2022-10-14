import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GoldenProvider from "./New-Project/context/GoldenProvider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminProvider from "./New-Project/context/AdminContext";
import AuthContextProvider from "./New-Project/context/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PayPalScriptProvider
    options={{
      "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      currency: "USD",
    }}
  >
    <AuthContextProvider>
      <GoldenProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </GoldenProvider>
    </AuthContextProvider>
  </PayPalScriptProvider>
);
