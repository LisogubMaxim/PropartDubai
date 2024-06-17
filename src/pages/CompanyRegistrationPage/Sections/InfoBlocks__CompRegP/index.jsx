import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./infoBlocks__CompRegP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="infoBlocksCompP">
      <BlockContainer className="infoBlocksCompP__block">
        <img
          src="/assets/CompanyRegistrationPage/24.7.svg"
          alt="Image 24/7"
          width={105.89}
          height={43.04}
        />
        <div className="infoBlocksCompP__block-texts">
          <h4 className="infoBlocksCompP__block-title">
            {t("CompanyRegistrationPage__InfoBlocks__CompRegP__Title1")}
          </h4>
          <p className="infoBlocksCompP__block-descr">
            {t("CompanyRegistrationPage__InfoBlocks__CompRegP__Descr1")}
          </p>
        </div>
        <div className="infoBlocksCompP__block-bg">
          <img
            src="/assets/CompanyRegistrationPage/bg1.svg"
            alt="Image background"
            width={115}
            height={115}
          />
        </div>
      </BlockContainer>
      <BlockContainer className="infoBlocksCompP__block">
        <img
          src="/assets/CompanyRegistrationPage/100.svg"
          alt="Image 100%"
          width={139.14}
          height={42.46}
        />
        <div className="infoBlocksCompP__block-texts">
          <h4 className="infoBlocksCompP__block-title another">
            {t("CompanyRegistrationPage__InfoBlocks__CompRegP__Title2")}
          </h4>
          <p className="infoBlocksCompP__block-descr another">
            {t("CompanyRegistrationPage__InfoBlocks__CompRegP__Descr2")}
          </p>
        </div>
        <div className="infoBlocksCompP__block-bg">
          <img
            src="/assets/CompanyRegistrationPage/bg2.svg"
            alt="Image background"
            width={110}
            height={110}
          />
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
