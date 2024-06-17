import React from "react";
import { CurrencyProvider } from "../components/CurrencyProvider";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <CurrencyProvider>
      <Outlet />
      <Footer />
    </CurrencyProvider>
  );
}
