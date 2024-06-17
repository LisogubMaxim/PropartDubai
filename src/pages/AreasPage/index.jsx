import WidthContainer from "../../components/UI/WidthContainer";
import Header__AreasP from "./Sections/Header__AreasP";
import Features__AreasP from "./Sections/Features__AreasP";
import Benefits_AreasP from "./Sections/Benefits__AreasP";
import Services__AreasP from "./Sections/Services__AreasP";
import HelpForm from "../../components/HelpForm";
import HeaderFirst from "../../components/HeaderFirst";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    document.title = "Concierge";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="areas">
      <HeaderFirst />
      <Header__AreasP />
      <WidthContainer>
        <Benefits_AreasP />
        <Services__AreasP />
        <Features__AreasP />
        <HelpForm />
      </WidthContainer>
    </div>
  );
};

export default index;
