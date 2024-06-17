import React from "react";
import "./aboutPage.scss";
import WidthContainer from "../../components/UI/WidthContainer";
import Header__AboutP from "./Sections/Header__AboutP";
import PromoPhoto__AboutP from "./Sections/PromoPhoto__AboutP";
import Approach__AboutP from "./Sections/Approach__AboutP";
import Features__AboutP from "./Sections/Features__AboutP";
import Team from "../../components/Team";
import HelpForm from "../../components/HelpForm";
import HeaderFirst from "../../components/HeaderFirst";
import { useEffect } from "react";
import "./aboutPage.scss";

const index = () => {
  useEffect(() => {
    document.title = "About";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <HeaderFirst />
      <Header__AboutP />
      <PromoPhoto__AboutP />
      <Approach__AboutP />
      <Features__AboutP />
      <WidthContainer>
        <div className="aboutPage__team">
          <Team />
        </div>
        <HelpForm />
      </WidthContainer>
    </div>
  );
};

export default index;
