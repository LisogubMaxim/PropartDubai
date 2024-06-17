import React from "react";
import "./approach__AboutP.scss";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();
  return (
    <section className="approach">
      <h2>{t("AboutUsPage__Approach__AboutP__Title")}</h2>
      <p>
        {t("AboutUsPage__Approach__AboutP__Text1")} <br />
      </p>
      <p>
        {t("AboutUsPage__Approach__AboutP__Text2")} <br />
      </p>
      <p>
        {t("AboutUsPage__Approach__AboutP__Text3")} <br />
      </p>
      <p>
        {t("AboutUsPage__Approach__AboutP__Text4")} <br />
      </p>
      <p>{t("AboutUsPage__Approach__AboutP__Text5")}</p>
    </section>
  );
};

export default index;
