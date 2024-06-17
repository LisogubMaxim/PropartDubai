import React from "react";
import "./blocksInfo.scss";
import BlockContainer from "../UI/BlockContainer";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="blocksCompPage">
      <div className="blocksCompPage__blocks">
        <BlockContainer className="blockContainer--orange">
          <img
            src="/assets/components/BlocksInfo/idCard.svg"
            alt="Image id card"
            width={36}
            height={36}
          />
          <h3 className="blocksCompPage__blocks-title">
            {t("CompanyRegistrationPage__BlocksInfo__Title1")}
          </h3>
        </BlockContainer>
        <BlockContainer className="blockContainer">
          <img
            src="/assets/components/BlocksInfo/building.svg"
            alt="Image building"
            width={24}
            height={24}
          />
          <div className="blocksCompPage__blocks-texts">
            <h4 className="blocksCompPage__blocks-subtitle">
              {t("CompanyRegistrationPage__BlocksInfo__Title2")}
            </h4>
            <p className="blocksCompPage__blocks-descr">
              {t("CompanyRegistrationPage__BlocksInfo__Descr2")}
            </p>
          </div>
        </BlockContainer>
        <BlockContainer className="blockContainer">
          <img
            src="/assets/components/BlocksInfo/sheriff.svg"
            alt="Image sheriff"
            width={24}
            height={24}
          />
          <div className="blocksCompPage__blocks-texts">
            <h4 className="blocksCompPage__blocks-subtitle">
              {t("CompanyRegistrationPage__BlocksInfo__Title3")}
            </h4>
            <p className="blocksCompPage__blocks-descr">
              {t("CompanyRegistrationPage__BlocksInfo__Descr3")}
            </p>
          </div>
        </BlockContainer>
        <BlockContainer className="blockContainer">
          <img
            src="/assets/components/BlocksInfo/headphones.svg"
            alt="Image headphones"
            width={24}
            height={24}
          />
          <div className="blocksCompPage__blocks-texts">
            <h4 className="blocksCompPage__blocks-subtitle">
              {t("CompanyRegistrationPage__BlocksInfo__Title4")}
            </h4>
            <p className="blocksCompPage__blocks-descr">
              {t("CompanyRegistrationPage__BlocksInfo__Descr4")}
            </p>
          </div>
        </BlockContainer>
      </div>
    </section>
  );
};

export default index;
