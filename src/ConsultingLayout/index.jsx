import { useEffect } from "react";
import HeaderFirst from "../components/HeaderFirst";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname.toLocaleLowerCase() === "/consulting" ||
      location.pathname.toLocaleLowerCase() === "/consulting/"
    )
      navigate("/");
  }, []);
  return (
    <>
      <HeaderFirst />
      <Outlet />
    </>
  );
}
