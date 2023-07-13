"use client";

import { SessionProvider } from "next-auth/react";
import Store from "@/redux/store";

import { Provider as Redux } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Provider = ({ children }) => {
  return (
    <Redux store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <SessionProvider>{children}</SessionProvider>
      </PersistGate>
    </Redux>
  );
};

export default Provider;
