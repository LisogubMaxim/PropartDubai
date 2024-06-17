import { Outlet } from "react-router-dom";
import { CurrencyProvider } from "../components/CurrencyProvider";

export default function LayoutPWA() {
  return (
    <CurrencyProvider>
      <Outlet />
    </CurrencyProvider>
  );
}
