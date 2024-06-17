import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WithRedirectToPWA = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    const isPhoneRoute = location.pathname.startsWith("/phone");

    if (isMobile && !isPhoneRoute) {
      navigate("/phone", { replace: true });
    } else if (!isMobile && isPhoneRoute) {
      navigate("/", { replace: true });
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return children;
};

export default WithRedirectToPWA;
