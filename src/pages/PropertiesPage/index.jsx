import React from "react";
import HeaderSecond from "../../components/HeaderSecond";
import Filter__PropertiesP from "./Sections/Filter__PropertiesP";
import WidthContainer from "../../components/UI/WidthContainer";
import Company from "../../components/Company";
import HelpForm from "../../components/HelpForm";
import { useEffect } from "react";

import "./propertiesPage.scss";

const index = () => {
  useEffect(() => {
    document.title = "Property";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <HeaderSecond />
      <Filter__PropertiesP />
      <WidthContainer>
        <div className="propertiesPage__company">
          <Company start={0} end={20} />
        </div>
        <HelpForm />
      </WidthContainer>
    </main>
  );
};

export default index;
