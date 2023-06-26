"use client";

import { SessionProvider } from "next-auth/react";
import store from "@/redux/store";
import { Provider as Redux } from "react-redux";

const Provider = ({ children }) => {
  return (
    <Redux store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Redux>
  );
};

export default Provider;
