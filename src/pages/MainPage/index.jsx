import React, { useEffect, useState } from "react";
import HeaderFirst from "../../components/HeaderFirst";
import WidthContainer from "../../components/UI/WidthContainer";
import Building__MainP from "./Sections/Building__MainP";
import Collection from "../../components/Collection";
import Company from "../../components/Company";
import Questions__MainP from "./Sections/Questions__MainP";
import Calculate__MainP from "./Sections/Calculate__MainP";
import HelpForm from "../../components/HelpForm";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import { CurrencyProvider } from "../../components/CurrencyProvider";
import "./mainPage.scss";

const index = () => {
  useEffect(() => {
    document.title =
      "ProPart: Your Space, Your Sanctuary | Real Estate in Dubai";

    window.scrollTo(0, 0);
  }, []);

  return (
    <CurrencyProvider>
      <main className="main-footer">
        <HeaderFirst />
        <Building__MainP />
        <WidthContainer>
          <div className="mainPage__collection">
            <Collection />
          </div>
          <Company start={0} end={20} />
          <Questions__MainP />
          {/* <Calculate__MainP /> */}
          <div className="mainPage__team">
            <Team />
          </div>
          <HelpForm />
        </WidthContainer>
        <Footer />
      </main>
    </CurrencyProvider>
  );
};

export default index;
