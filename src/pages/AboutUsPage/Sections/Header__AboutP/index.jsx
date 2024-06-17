import React from "react";
import "./header__AboutP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();
  return (
    <section className="aboutPage">
      <h1>{t("AboutUsPage__Header__AboutP__Title")}</h1>
      <span>
        <p>{t("AboutUsPage__Header__AboutP__Text1")}</p>
        <p> {t("AboutUsPage__Header__AboutP__Text2")}</p>
        <p>{t("AboutUsPage__Header__AboutP__Text3")}</p>
      </span>
    </section>
  );
};

export default index;
