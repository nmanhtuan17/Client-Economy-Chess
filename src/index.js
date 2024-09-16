import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "intersection-observer";

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ChatHistoryProvider } from "./context/ChatHistoryContext";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./components/provider/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
        <CartProvider>
          <ChatHistoryProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChatHistoryProvider>
        </CartProvider>
    </Provider>
  </PersistGate>
);
