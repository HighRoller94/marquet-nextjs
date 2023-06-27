"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      containerClassName="toast"
      position="top-right"
      containerStyle={{
        position: "fixed",
      }}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#fafafa",
        },
      }}
    />
  );
};

export default ToasterProvider;
