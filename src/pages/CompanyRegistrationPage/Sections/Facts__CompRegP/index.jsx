import React from "react";
import "./facts__CompRegP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="factsCompPage">
      <h3 className="factsCompPage__title">
        {t("CompanyRegistrationPage__Facts__CompRegP__Title")}
      </h3>
      <ul className="factsCompPage__list">
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">1</span>
          <p className="factsCompPage__item-descr">
            {t("CompanyRegistrationPage__Facts__CompRegP__Item1")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">2</span>
          <p className="factsCompPage__item-descr">
            {t("CompanyRegistrationPage__Facts__CompRegP__Item2")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">3</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item3")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">4</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item4")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">5</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item5")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">6</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item6")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">7</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item7")}
          </p>
        </li>
        <li className="factsCompPage__item">
          <span className="factsCompPage__item-number">8</span>
          <p className="factsCompPage__item-descr">
            {" "}
            {t("CompanyRegistrationPage__Facts__CompRegP__Item8")}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default index;
