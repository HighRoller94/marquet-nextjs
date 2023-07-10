"use client";

import { SessionProvider } from "next-auth/react";
import store from "@/redux/store";
import { Provider as Redux } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

const Provider = ({ children }) => {
  return (
    <Redux store={store}>
      <SessionProvider>
        <PersistGate persistor={persister}>{children}</PersistGate>
      </SessionProvider>
    </Redux>
  );
};

export default Provider;
