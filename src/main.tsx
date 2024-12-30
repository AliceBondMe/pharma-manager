import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "modern-normalize";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.ts';
import { Loader } from './components/common/index.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/pharma-manager">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
