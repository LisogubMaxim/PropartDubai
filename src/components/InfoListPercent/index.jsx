import React from "react";
import "./infoListPercent.scss";
import BlockContainer from "../UI/BlockContainer";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="infoListPercent">
      <div className="infoListPercent__blocks">
        <BlockContainer className="infoListPercent__blocks-block">
          <h3 className="infoListPercent__blocks-title">
            {t("CompanyRegistrationPage__InfoList__Title1")}
          </h3>
          <p className="infoListPercent__blocks-descr">
            {t("CompanyRegistrationPage__InfoList__Descr1")}
          </p>
          <div className="infoListPercent__blocks-blockInfo">
            <img
              src="/assets/components/InfoListPercent/lock.svg"
              alt="Image lock"
              width={24}
              height={24}
            />
            <p className="infoListPercent__blocks-descr">
              {t("CompanyRegistrationPage__InfoList__SubTitle1")}
            </p>
          </div>
          <div className="infoListPercent__blocks-blockInfo">
            <img
              src="/assets/components/InfoListPercent/heart.svg"
              alt="Image lock"
              width={24}
              height={24}
            />
            <p className="infoListPercent__blocks-descr">
              {t("CompanyRegistrationPage__InfoList__SubTitle2")}
            </p>
          </div>
          <div className="infoListPercent__blocks-blockInfo">
            <img
              src="/assets/components/InfoListPercent/course.svg"
              alt="Image lock"
              width={24}
              height={24}
            />
            <p className="infoListPercent__blocks-descr">
              {t("CompanyRegistrationPage__InfoList__SubTitle3")}
            </p>
          </div>
        </BlockContainer>
        <BlockContainer className="infoListPercent__blocks-block">
          <ul className="infoListPercent__blocks-list">
            <li className="infoListPercent__blocks-item">
              <p className="infoListPercent__blocks-subtitle">
                {t("CompanyRegistrationPage__InfoList__ListTitle1")}
              </p>
              <span className="infoListPercent__blocks-percent">0%</span>
            </li>
            <li className="infoListPercent__blocks-item">
              <p className="infoListPercent__blocks-subtitle">
                {t("CompanyRegistrationPage__InfoList__ListTitle2")}
              </p>
              <span className="infoListPercent__blocks-percent">9%</span>
            </li>
            <li className="infoListPercent__blocks-item">
              <p className="infoListPercent__blocks-subtitle">
                {t("CompanyRegistrationPage__InfoList__ListTitle3")}
              </p>
              <span className="infoListPercent__blocks-percent">0%</span>
            </li>
            <li className="infoListPercent__blocks-item">
              <p className="infoListPercent__blocks-subtitle">
                {t("CompanyRegistrationPage__InfoList__ListTitle4")}
              </p>
              <span className="infoListPercent__blocks-percent">0%</span>
            </li>
            <li className="infoListPercent__blocks-item">
              <p className="infoListPercent__blocks-subtitle">
                {t("CompanyRegistrationPage__InfoList__ListTitle5")}
              </p>
              <span className="infoListPercent__blocks-percent">0%</span>
            </li>
          </ul>
        </BlockContainer>
      </div>
    </section>
  );
};

export default index;
