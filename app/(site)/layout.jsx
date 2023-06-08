"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider as Redux } from "react-redux";
import Provider from "../../components/Provider";
import store from "@/redux/store";
import "@/styles/globals.scss";
import LayoutStyles from "../../styles/layout/Layout.module.scss";
export default function RootLayout({ children }) {
  return (
    <Redux store={store}>
      <Provider>
        <html lang="en">
          <body>
            <Navbar />
            <div className={LayoutStyles.page}>{children}</div>
            <Footer />
          </body>
        </html>
      </Provider>
    </Redux>
  );
}
