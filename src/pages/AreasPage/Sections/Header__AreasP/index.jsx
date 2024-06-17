import React from "react";
import { useTranslation } from "react-i18next";
import WidthContainer from "../../../../components/UI/WidthContainer";
import "./header__AreasP.scss";

const index = () => {
  const { t } = useTranslation();

  return (
    <section className="areasPage">
      <WidthContainer>
        <h1>{t("AreasPage__Header__AreasP__Title")}</h1>
        <div className="areasPage__texts">
          <p>{t("AreasPage__Header__AreasP__Descr1")}</p>
          <p>{t("AreasPage__Header__AreasP__Descr2")}</p>
          <p>{t("AreasPage__Header__AreasP__Descr3")}</p>
        </div>
      </WidthContainer>
    </section>
  );
};

export default index;
