import React from "react";
import "./digrams__CompRegP.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="digramsCompPage">
      <div className="digramsCompPage__blocks">
        <BlockContainer className="digramsCompPage__blocks-block">
          <h4 className="digramsCompPage__blocks-title">
            {t("CompanyRegistrationPage__Digrams__CompRegP__Title1")}
          </h4>
          <img
            src="/assets/CompanyRegistrationPage/diagram1.svg"
            alt="Image digramg"
            width={599}
            height={285}
          />
        </BlockContainer>
        <BlockContainer className="digramsCompPage__blocks-block">
          <h4 className="digramsCompPage__blocks-title">
            {t("CompanyRegistrationPage__Digrams__CompRegP__Title2")}
          </h4>
          <img
            src="/assets/CompanyRegistrationPage/chronology.svg"
            alt="Image digramg"
            width={596}
            height={145}
          />
          <img
            src="/assets/CompanyRegistrationPage/diagram2.svg"
            alt="Image digramg"
            width={596}
            height={152}
          />
        </BlockContainer>
      </div>
    </section>
  );
};

export default index;
